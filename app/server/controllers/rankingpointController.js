const conn = require('../dbConn');
const RankingPoints = conn.TournDB.models['RankingPoints']
const csvhandler = require('./csvhandler')


const saveRankingPoints = function rankingPoints(TournamentRankingPoints,Place)
{
    console.log(TournamentRankingPoints,Place);
    const rank = new RankingPoints({
        TournamentRankingPoints:TournamentRankingPoints,
        Place:Place
});

    rank.save().then(() => console.log("Saved"));
}

const save = function saveAllRanking(fileName)
{
    ID = csvhandler.processData(fileName);


    for(let i in ID)
    {
        saveRankingPoints(ID[i][0],ID[i][1]);
        console.log(ID[i][0],ID[i][1]);
        }
}

module.exports = {
    saveAllRanking:save,
    rankingPoints:saveRankingPoints}
