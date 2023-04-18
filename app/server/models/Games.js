const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  PlayerA: String,
  ScorePlayerA: Number,
  PlayerB: String,
  ScorePlayerB: Number,
  Round: String,
  Winner: String
});

module.exports = GameSchema

  


