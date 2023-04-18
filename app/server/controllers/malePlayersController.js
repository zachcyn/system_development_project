const conn = require('../dbConn');
const csvhandler = require('./csvhandler');
const MALEPLAYER = conn.MaleDB.models['Player'];


const saveMalePlayer = function saveThePlayer(ID='', Name='', Points=0, Money=0) {
    MALEPLAYER.findOne({ ID: ID }).then(existingPlayer => {
        if (existingPlayer) {
            console.error(`Error: Player already exists in the database.`);
        } else {
            const testplayer = new MALEPLAYER({
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

const saveMalePlayers = function saveMalePlayers(fileName) {
    ID = csvhandler.processData(fileName);

    for (let i in ID) {
        saveMalePlayer(ID[i][0]);
        console.log(ID[i][0]);
    }
};


module.exports = {
    saveThePlayer: saveMalePlayer,
    saveMalePlayers: saveMalePlayers,
};
