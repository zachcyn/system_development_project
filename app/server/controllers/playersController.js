// const mongoose = require('mongoose');
// const Player = require('../models/Player');
const conn = require('../dbConn');
const Player = conn.MaleDB.models['Player'];

const savePlayer = function saveThePlayer(ID='',Name='',Points=0,Money=0)
{
    const testplayer = new Player({
    ID: ID,
    Name: Name,
    Points: Points,
    Money: Money
});

    testplayer.save().then(() => console.log("Saved"));

}
module.exports = {
    saveThePlayer: savePlayer
};