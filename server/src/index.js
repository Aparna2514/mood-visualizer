const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');
const authRoutes = require('./routes/auth');
const moodRoutes = require('./routes/mood');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/mood', moodRoutes);

db.query('SELECT NOW()')
  .then(() => console.log('PostgreSQL connected'))
  .catch(err => console.error('DB connection error:', err));

app.get('/', (req, res) => {
  res.json({ message: 'Mood Visualizer API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

