require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const authRoutes  = require('./routes/auth');
const filesRoutes = require('./routes/files');

const app  = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ───────────────────────────────────────────────
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || 'https://crowscallpress.com',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// ── Routes ───────────────────────────────────────────────────
app.use('/api/auth',  authRoutes);
app.use('/api/files', filesRoutes);

// ── Health check ─────────────────────────────────────────────
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// ── 404 fallback ─────────────────────────────────────────────
app.use((req, res) => res.status(404).json({ message: 'Not found' }));

// ── Error handler ────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`CCP Teaching Library API running on port ${PORT}`);
});
