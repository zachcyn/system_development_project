const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
PLayerA: String,
PlayerAScore: Number,
PLayerB: String,
PLayerBScore: Number,
Round: Object 
});

module.exports = GameSchema
//const FPlayer = mongoose.model("FPlayer", PlayerSchema);

 