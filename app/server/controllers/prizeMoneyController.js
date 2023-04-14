const conn = require('../dbConn');
const PrizeMoney1 = conn.TournDB.models['Tournament']
const csvhandler = require('./csvhandler')

const saveTournament = function Tournament(name,difficulty,prizeMoney)
{
    console.log(name,difficulty);
    const rank = new PrizeMoney1({
        name:name,
        difficulty:difficulty,
        prizeMoney:prizeMoney
});

    rank.update().then(() => console.log("Saved"));
}

const SaveTour = function saveAllTournaments(fileName)
{
    ID = csvhandler.processData(fileName);


    for(let i in ID)
    {
        if ID[i][0]= 
        saveTournament(ID[i][0],ID[i][1]);
        console.log(ID[i][0],ID[i][1]);
        }
}

module.exports = {
    saveAllTournaments:SaveTour,
    rankingPoints:saveTournament
}
