const mongoose = require('mongoose');

const RPSchema = new mongoose.Schema({
    TournamentRankingPoints: Number,
    Place: Number,
    });

module.exports = RPSchema