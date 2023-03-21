const mongoose = require('mongoose');

const RPSchema = new mongoose.Schema({
    Place: Number,
    TournamentRankingPoints: Number,
    });

module.exports = RPSchema