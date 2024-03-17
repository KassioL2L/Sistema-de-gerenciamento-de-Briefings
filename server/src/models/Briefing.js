const mongoose = require('mongoose');

const briefingSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  clientName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dateTime: {
    type: Date,
    default: Date.now
  }
});

const Briefing = mongoose.model('Briefing', briefingSchema);

module.exports = Briefing;
