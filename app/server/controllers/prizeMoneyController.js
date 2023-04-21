const conn = require('../dbConn');
const TournModel = conn.TournDB.models['Tournament'];
const csvhandler = require('./csvhandler');


const saveTournament = function Tournament(name, prizeMoney, difficulty) {


    const tournament = new TournModel({
        name: name,
        difficulty: difficulty,
        prizeMoney: prizeMoney
    });

    tournament.save().then(() => console.log(name,difficulty,prizeMoney));
};

const saveAllTournaments = function(fileName, difficultyFileName) {
    const data = csvhandler.processData(fileName);
    const difficultyData = csvhandler.processData(difficultyFileName);
    let previousName = null;

    const tournamentData = new Map();
    const difficultyMap = new Map();
    for (const row of difficultyData) {
        const name = row[0];
        const difficulty = parseFloat(row[1]);
        difficultyMap.set(name, difficulty);
    }

    for (const row of data) {
        const name = row[0];
        const position = row[1];
        const prizeMoney = parseInt(row[2].replace(/"/g, "")); 
        const difficulty = difficultyMap.get(name) || 0;

        if (name !== previousName) {
            if (tournamentData.has(previousName)) {
                const tournament = tournamentData.get(previousName);
                saveTournament(tournament.name, tournament.prizeMoneys, tournament.difficulty);
            }
            previousName = name;
            tournamentData.set(name, {
                name: name,
                prizeMoneys: {},
                difficulty: difficulty
            });
        }

        const tournament = tournamentData.get(name);
        tournament.prizeMoneys[position] = prizeMoney;
    }

    if (tournamentData.has(previousName)) {
        const tournament = tournamentData.get(previousName);
        saveTournament(tournament.name, tournament.prizeMoneys, tournament.difficulty);
    }
};




module.exports = {
    saveAllTournaments: saveAllTournaments,
    saveTournament: saveTournament
};
