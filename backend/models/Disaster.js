const mongoose = require('mongoose');

const disasterSchema = new mongoose.Schema({
  type: String,
  location: String,
  severity: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Disaster', disasterSchema);