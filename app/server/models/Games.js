const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  PlayerA: String,
  ScorePlayerA: Number,
  PlayerB: String,
  ScorePlayerB: Number,
  Round: String 
});



  
  module.exports = {
     GameSchema: GameSchema
    // ladiesGameSchema:ladiesGameSchema,
    // LadiesGame: LadiesGame
};

