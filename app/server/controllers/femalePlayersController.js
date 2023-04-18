const conn = require('../dbConn');
const csvhandler = require('./csvhandler');
const FEMALEPLAYER = conn.FMaleDB.models['Player'];


const saveFemalePlayer = function saveTheFeplayer(ID='', Name='', Points=0, Money=0) {
    FEMALEPLAYER.findOne({ ID: ID }).then(existingPlayer => {
        if (existingPlayer) {
            console.log(existingPlayer)
            console.error(`Error: Player already exists in the database.`);
        } 
        else {
            const femalePlayer = new FEMALEPLAYER({
                ID: ID,
                Name: Name,
                Points: Points,
                Money: Money
            });
            femalePlayer.save().then(() => console.log("Saved"+ Name));
        }
    }).catch(error => {
        console.error(error);
    });
};

const saveFemalePlayers = function saveFemalePlayers(fileName) {
    ID = csvhandler.processData(fileName);

    for (let i in ID) {
        saveFemalePlayer(ID[i][0]);
        console.log(ID[i][0]);
    }
};

module.exports = {
    saveThePlayer: saveFemalePlayer,
    savefemalePlayers: saveFemalePlayers,
};
