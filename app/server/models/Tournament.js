const mongoose = require('mongoose');
const TSchema = new mongoose.Schema({
name: String,
difficulty: Number,
prizeMoney: Object
});

const Tournament = mongoose.model("Tournament", TSchema);
