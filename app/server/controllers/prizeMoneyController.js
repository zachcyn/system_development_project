const conn = require('../dbConn');
const TournModel = conn.TournDB.models['Tournament'];
const csvhandler = require('./csvhandler');

const saveTournament = function Tournament(name, position, prizeMoney, difficulty) {
    const prizeMoneyDict = {
        position: position,
        prizeMoney: prizeMoney
    };

    const tournament = new TournModel({
        name: name,
        difficulty: difficulty,
        prizeMoney: prizeMoneyDict
    });

    tournament.save().then(() => console.log("Saved"));
};

const saveAllTournaments = function(fileName, difficultyFileName) {
    const data = csvhandler.processData(fileName);
    const difficultyData = csvhandler.processData(difficultyFileName);

    const difficultyMap = new Map();
    for (const row of difficultyData) {
        const name = row[0];
        const difficulty = parseFloat(row[1]);
        difficultyMap.set(name, difficulty);
    }

    for (const row of data) {
        const name = row[0];
        const position = row[1];
        const prizeMoney = row[2];
        const difficulty = difficultyMap.get(name) || 0;

        saveTournament(name, position, prizeMoney, difficulty);
        console.log(name, position,difficulty);
    }
};

module.exports = {
    saveAllTournaments: saveAllTournaments,
    saveTournament: saveTournament
};
