const mongoose = require('mongoose');

const RPSchema = new mongoose.Schema({
    Place: Number,
    TournamentRankingPoints: Number,
    });
    
const Ranking = mongoose.model("Ranking", RPSchema);
    