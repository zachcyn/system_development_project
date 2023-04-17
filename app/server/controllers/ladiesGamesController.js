const conn = require('../dbConn');
const Game = conn.MaleDB.models['Game']
const csvhandler = require('./csvhandler')

const saveLadiesGames = function LadiesGames(PlayerA='', ScorePlayerA=0, PlayerB='', ScorePlayerB=0, Round='') {
  const ladiesGames = new Game({
    PlayerA: PlayerA,
    ScorePlayerA: ScorePlayerA,
    PlayerB: PlayerB,
    ScorePlayerB: ScorePlayerB,
    Round: Round
  });

  ladiesGames.save().then(() => console.log("saving" + PlayerA + " " + ScorePlayerA ));
};

const saveAllLadies = function(fileName) {
  const data = csvhandler.processData(fileName);
  const seasonNumber = parseInt(fileName.match(/SEASON (\d+)/)?.[1] || '1');
  const tournamentName = fileName.match(/(\w+) ROUND \d+ LADIES.csv/)?.[1];
  const roundNumber = parseInt(fileName.match(/ROUND (\d+)/)?.[1]);
  const Round = "S" + seasonNumber + tournamentName + "R" + roundNumber;

  for (const row of data) {
    const PlayerA = row[0];
    const ScorePlayerA = parseInt(row[1]);
    const PlayerB = row[2];
    const ScorePlayerB = parseInt(row[3]);

    saveLadiesGames(PlayerA, ScorePlayerA, PlayerB, ScorePlayerB, Round);
    console.log(PlayerA, ScorePlayerA, PlayerB, ScorePlayerB, Round);
  }
};



module.exports = {
  saveLadiesGames: saveLadiesGames,
  saveAllLadies: saveAllLadies
};
