const mongoose = require('mongoose');
const Player = require('../models/Player');

mongoose.connect(process.env.DATABASE_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});



const testplayer = new Player({
    ID: "test",
    Name: "alex",
    Points: 50,
    Money: 100
});

testplayer.save().then(() => console.log("Saved"));