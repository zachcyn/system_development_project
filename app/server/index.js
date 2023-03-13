require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require('./dbConn');
//const playerController = require('./controllers/playersController')
//mongoose.connect("mongodb+srv://dev:dev123@tennisdata.fxv0bhm.mongodb.net/?retryWrites=true&w=majority")

const Player = require('./models/Player');

//connectDB();

const app = express();

app.get("/getPlayers", (req, res)  => {
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
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(3001, () => {
        console.log("Server is servering...");
    })
})



