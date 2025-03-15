const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  board: {
    type: [[String]],
    default: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  },
  currentTurn: {
    type: String,
    default: 'X'
  },
  winner: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model('Game', GameSchema);