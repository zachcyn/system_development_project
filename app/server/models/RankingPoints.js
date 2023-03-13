const mongoose = require('mongoose');

const RPSchema = new Schema({
    Place: Number,
    TournamentRankingPoints: Number,
    });
    
const Ranking = mongoose.model("Ranking", RPSchema);
    