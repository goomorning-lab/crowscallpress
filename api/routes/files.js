const express   = require('express');
const jwt       = require('jsonwebtoken');
const { createClient } = require('@supabase/supabase-js');

const router = express.Router();

// Service-role client — needed to generate signed URLs from private storage
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const BUCKET          = 'teaching-library';
const SIGNED_URL_TTL  = 60; // seconds — short-lived so URLs can't be shared

/**
 * Middleware: verify JWT from Authorization header
 */
function requireAuth(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorised.' });
  }
  const token = authHeader.split(' ')[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Session expired. Please sign in again.' });
  }
}

/**
 * GET /api/files/download/*
 * Returns a signed Supabase Storage URL that expires in 60 seconds.
 *
 * The path after /download/ maps directly to the storage path inside
 * the `teaching-library` bucket.
 *
 * Convention: {book-slug}/{file-type}.pdf
 * Examples:
 *   breakfast-at-tiffanys/vocab.pdf
 *   breakfast-at-tiffanys/dev-a.pdf
 *   old-man-and-the-sea/vocab.pdf
 */
router.get('/download/*', requireAuth, async (req, res) => {
  const storagePath = req.params[0];

  // Allow: letters, numbers, hyphens, forward slashes, dots
  if (!storagePath || !/^[\w\-]+(\/[\w\-]+)*\.pdf$/.test(storagePath)) {
    return res.status(400).json({ message: 'Invalid file path.' });
  }

  try {
    const { data, error } = await supabaseAdmin
      .storage
      .from(BUCKET)
      .createSignedUrl(storagePath, SIGNED_URL_TTL);

    if (error || !data?.signedUrl) {
      console.error('Signed URL error:', error);
      return res.status(404).json({ message: 'File not found or not accessible.' });
    }

    return res.json({ url: data.signedUrl, expiresIn: SIGNED_URL_TTL });

  } catch (err) {
    console.error('Download error:', err);
    return res.status(500).json({ message: 'Something went wrong. Please try again.' });
  }
});

module.exports = router;
