// const mongoose = require('mongoose');
// const Player = require('../models/Player');
const conn = require('../dbConn');
const Player = conn.MaleDB.models['Player']
const csvhandler = require('./csvhandler')
const FEMALEPLAYER = conn.FmaleDB.models['Player']

const saveMalePlayer = function saveThePlayer(ID='',Name='',Points=0,Money=0)
{
    const testplayer = new Player({
    ID: ID,
    Name: Name,
    Points: Points,
    Money: Money
});

    testplayer.save().then(() => console.log("Saved"));
}

const saveAllPlayers = function saveAllThePlayers(fileName)
{
    ID = csvhandler.processData(fileName);


    for(let i in ID)
    {
        saveFemalePlayer(ID[i][0]);
        console.log(ID[i][0]);
        }
}

const saveFemalePlayer = function saveTheFeplayer(ID='',Name='',Points=0,Money=0)
{
    const femalePlayer = new FEMALEPLAYER({
    ID: ID,
    Name: Name,
    Points: Points,
    Money: Money
});

    femalePlayer.save().then(() => console.log("Saved"));
}


module.exports = {
    saveThePlayer: saveMalePlayer,
    saveAllThePlayers : saveAllPlayers,
    saveTheFeplayer : saveFemalePlayer
};