require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const conn = require('./dbConn');
//const playerController = require('./controllers/playersController')
//mongoose.connect("mongodb+srv://dev:dev123@tennisdata.fxv0bhm.mongodb.net/?retryWrites=true&w=majority")

const Player = conn.MaleDB.models['Player'];
console.log(Player)
const app = express();

app.listen(3001, () => {
    console.log("Server is servering...");
})

app.get("/getPlayers", (req, res)  => {
    console.log("sewy2");
    const testplayer = new Player({
        ID: "test",
        Name: "alex3",
        Points: 50,
        Money: 100
    });
    
    // testplayer.save().then(() => console.log("Saved"));
    // X stored the exec promise
    // we should use the other method where we saved the data in person using the
    // callback
    Player.findById("64143762b5ef6a84d6008856").then(player => {
        // res.render("player", {
        //     Name: player.Name,
        //     Points: player.Points 
        // })
        console.log(player)
    })
})



