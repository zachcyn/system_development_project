const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  ID: String,
  Name: String,
  Points: Number,
  Money: Number
});

module.exports = mongoose.model("Player", playerSchema);
//const FPlayer = mongoose.model("FPlayer", PlayerSchema);

 