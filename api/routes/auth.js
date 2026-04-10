const express   = require('express');
const jwt       = require('jsonwebtoken');
const { createClient } = require('@supabase/supabase-js');

const router = express.Router();

// Supabase client (uses anon key — auth is handled by Supabase Auth)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

/**
 * POST /api/auth/login
 * Body: { email, password }
 * Returns: { token, name }
 */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // Validate credentials against Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error || !data.user) {
      return res.status(401).json({ message: 'Incorrect email or password. Please try again.' });
    }

    const user = data.user;

    // Fetch educator profile from a `profiles` table (optional — falls back gracefully)
    let name = user.user_metadata?.full_name || user.email;
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name')
        .eq('id', user.id)
        .single();
      if (profile?.full_name) name = profile.full_name;
    } catch (_) { /* profiles table may not exist yet */ }

    // Sign our own short-lived JWT for the frontend
    const token = jwt.sign(
      { sub: user.id, email: user.email, name },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    return res.json({ token, name });

  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Something went wrong. Please try again.' });
  }
});

module.exports = router;
