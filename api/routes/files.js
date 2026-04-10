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
 * GET /api/files/download/:fileId
 * Returns a signed Supabase Storage URL that expires in 60 seconds.
 *
 * fileId maps to a path in the `teaching-library` bucket.
 * Example: fileId = "file_001" → storage path "materials/file_001.pdf"
 *
 * In production, look up the storage path from a `files` table in Supabase
 * so educators only see files they're licensed for.
 */
router.get('/download/:fileId', requireAuth, async (req, res) => {
  const { fileId } = req.params;

  if (!fileId || !/^[\w-]+$/.test(fileId)) {
    return res.status(400).json({ message: 'Invalid file ID.' });
  }

  try {
    // TODO: Look up the actual storage path from a Supabase `files` table
    // and verify the requesting user has access to it.
    // For now, we derive the path directly from the fileId.
    const storagePath = `materials/${fileId}`;

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
