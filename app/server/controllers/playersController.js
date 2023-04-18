// // const mongoose = require('mongoose');
// // const Player = require('../models/Player');
// const conn = require('../dbConn');
// const Player = conn.MaleDB.models['Player'];
// const csvhandler = require('./csvhandler');
// const FEMALEPLAYER = conn.FmaleDB.models['Player'];

// const saveMalePlayer = function saveThePlayer(ID='', Name='', Points=0, Money=0) {
//     Player.findOne({ Name: Name }), (async function(err, foundPlayer) {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         if (foundPlayer) {
//             console.error(`Error: Name '${Name}' is already used.`);
//             return;
//         }
//         const testplayer = new Player({
//             ID: ID,
//             Name: Name,
//             Points: Points,
//             Money: Money
//         });

//         await testplayer.save();
//         console.log("Saved");
//     });
// }

// const saveAllPlayers = function saveAllThePlayers(fileName) {
//     ID = csvhandler.processData(fileName);

//     for (let i in ID) {
//         saveFemalePlayer(ID[i][0]);
//         console.log(ID[i][0]);
//     }
// }

// const saveFemalePlayer = function saveTheFeplayer(ID='', Name='', Points=0, Money=0) {
//     FEMALEPLAYER.findOne({ Name: Name }), (async function(err, foundPlayer) {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         if (foundPlayer) {
//             console.error(`Error: Name '${Name}' is already used.`);
//             return;
//         }
//         const femalePlayer = new FEMALEPLAYER({
//             ID: ID,
//             Name: Name,
//             Points: Points,
//             Money: Money
//         });

//         await femalePlayer.save();
//         console.log("Saved");
//     });
// }

// module.exports = {
//     saveThePlayer: saveMalePlayer,
//     saveAllThePlayers: saveAllPlayers,
//     saveTheFeplayer: saveFemalePlayer
// };

const mongoose = require('mongoose');
const Player = require('../models/Player');
const conn = require('../dbConn');
const csvhandler = require('./csvhandler');
const FEMALEPLAYER = conn.FMaleDB.models['Player'];

const saveMalePlayer = function saveThePlayer(ID='', Name='', Points=0, Money=0) {
    Player.findOne({ Name: Name }).then(existingPlayer => {
        if (existingPlayer) {
            console.error(`Error: Player already exists in the database.`);
        } else {
            const testplayer = new Player({
                ID: ID,
                Name: Name,
                Points: Points,
                Money: Money
            });
            testplayer.save().then(() => console.log("Saved"));
        }
    }).catch(error => {
        console.error(error);
    });
};

const saveAllPlayers = function saveAllThePlayers(fileName) {
    ID = csvhandler.processData(fileName);

    for (let i in ID) {
        saveFemalePlayer(ID[i][0]);
        console.log(ID[i][0]);
    }
};

const saveFemalePlayer = function saveTheFeplayer(ID='', Name='', Points=0, Money=0) {
    FEMALEPLAYER.findOne({ Name: Name }).then(existingPlayer => {
        if (existingPlayer) {
            console.error(`Error: Player already exists in the database.`);
        } else {
            const femalePlayer = new FEMALEPLAYER({
                ID: ID,
                Name: Name,
                Points: Points,
                Money: Money
            });
            femalePlayer.save().then(() => console.log("Saved"));
        }
    }).catch(error => {
        console.error(error);
    });
};

module.exports = {
    saveThePlayer: saveMalePlayer,
    saveAllThePlayers: saveAllPlayers,
    saveTheFeplayer: saveFemalePlayer
};
