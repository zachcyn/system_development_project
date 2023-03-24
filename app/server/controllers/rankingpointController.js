const conn = require('../dbConn');
const RankingPoints = conn.TournDB.models['RankingPoints']
const csvhandler = require('./csvhandler')

const saveRankingPoints = function rankingPoints(point=0,place=0)
{
    const rank = new RankingPoints({
    point:point,
    place:place
});

    rank.save().then(() => console.log("Saved"));
}

const save = function saveAllRanking(fileName)
{
    ID = csvhandler.processData(fileName);


    for(let i in ID)
    {
        saveRankingPoints(ID[i][0],ID[i][1]);
        console.log(ID[i][0]);
        }
}

module.exports = {
    saveAllRanking:save,
    rankingPoints:saveRankingPoints
}
