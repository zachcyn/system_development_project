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

const GetMalePlayers = function getMalePlayers() {
    // return Player.find().then()
return  [{
    "id": 1,
    "Rank": 18,
    "Player Name": "Farlee O'Fairy",
    "Points": 53,
    "Prize Money": 361341
}, {
    "id": 2,
    "Rank": 8,
    "Player Name": "Adham Milby",
    "Points": 6,
    "Prize Money": 953308
}, {
    "id": 3,
    "Rank": 10,
    "Player Name": "Josephina Reeday",
    "Points": 71,
    "Prize Money": 842709
}, {
    "id": 4,
    "Rank": 11,
    "Player Name": "Rosette Branche",
    "Points": 16,
    "Prize Money": 8390
}, {
    "id": 5,
    "Rank": 16,
    "Player Name": "Rhett Heinz",
    "Points": 72,
    "Prize Money": 450815
}, {
    "id": 6,
    "Rank": 14,
    "Player Name": "Roxane Wennam",
    "Points": 6,
    "Prize Money": 400443
}, {
    "id": 7,
    "Rank": 15,
    "Player Name": "Basile Keary",
    "Points": 80,
    "Prize Money": 863637
}, {
    "id": 8,
    "Rank": 1,
    "Player Name": "Courtnay Kielt",
    "Points": 92,
    "Prize Money": 33005
}, {
    "id": 9,
    "Rank": 11,
    "Player Name": "Jerad Essame",
    "Points": 52,
    "Prize Money": 993973
}, {
    "id": 10,
    "Rank": 16,
    "Player Name": "Nicky Todaro",
    "Points": 96,
    "Prize Money": 487186
}, {
    "id": 11,
    "Rank": 13,
    "Player Name": "Ardelis Spataro",
    "Points": 51,
    "Prize Money": 452440
}, {
    "id": 12,
    "Rank": 9,
    "Player Name": "Dosi Rafe",
    "Points": 78,
    "Prize Money": 436743
}, {
    "id": 13,
    "Rank": 12,
    "Player Name": "Aurelea Kenion",
    "Points": 55,
    "Prize Money": 445086
}, {
    "id": 14,
    "Rank": 12,
    "Player Name": "Cassi Maes",
    "Points": 87,
    "Prize Money": 475815
}, {
    "id": 15,
    "Rank": 1,
    "Player Name": "Maximilianus Conant",
    "Points": 68,
    "Prize Money": 709829
}, {
    "id": 16,
    "Rank": 8,
    "Player Name": "Christean McAlinion",
    "Points": 30,
    "Prize Money": 779371
}, {
    "id": 17,
    "Rank": 7,
    "Player Name": "Garreth Delwater",
    "Points": 85,
    "Prize Money": 773156
}, {
    "id": 18,
    "Rank": 11,
    "Player Name": "Tonie Clingoe",
    "Points": 88,
    "Prize Money": 884670
}, {
    "id": 19,
    "Rank": 4,
    "Player Name": "Blake Deer",
    "Points": 79,
    "Prize Money": 398353
}, {
    "id": 20,
    "Rank": 16,
    "Player Name": "Sara Tizard",
    "Points": 1,
    "Prize Money": 107739
}]
};


module.exports = {
    saveThePlayer: saveMalePlayer,
    saveAllThePlayers : saveAllPlayers,
    saveTheFeplayer : saveFemalePlayer,
    getMalePlayers: GetMalePlayers
};