const { buildMoodResponse } = require('../services/moodService');
const db = require('../db');

exports.getMoodConfig = async (req, res) => {
  const { mood } = req.body;

  if (!mood) {
    return res.status(400).json({ error: 'Mood is required' });
  }

  const normalizedMood = mood.toLowerCase().trim();

  try {
    const config = buildMoodResponse(normalizedMood);
    if (!config) {
      return res.status(400).json({ error: 'Unknown mood' });
    }

    // Save session to DB if user is logged in
    if (req.user) {
      await db.query(
        'INSERT INTO mood_sessions (user_id, mood, config) VALUES ($1, $2, $3)',
        [req.user.userId, normalizedMood, JSON.stringify(config)]
      );
    }

    res.json(config);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
