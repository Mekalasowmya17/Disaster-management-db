const express = require('express');
const router = express.Router();
const Disaster = require('../models/Disaster');

// POST
router.post('/report', async (req, res) => {
  try {
    const data = new Disaster(req.body);
    await data.save();
    res.json({ message: "Saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET
router.get('/all', async (req, res) => {
  const data = await Disaster.find().sort({ date: -1 });
  res.json(data);
});

module.exports = router;