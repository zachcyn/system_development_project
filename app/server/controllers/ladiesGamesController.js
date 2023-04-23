const conn = require('../dbConn');
const Game = conn.FMaleDB.models['Game']
const csvhandler = require('./csvhandler')

const getLadiesWinner = function(ScorePlayerA, ScorePlayerB, PlayerA, PlayerB) {
  let winner = '';

  if (ScorePlayerA > ScorePlayerB) {
    winner = PlayerA;
  } else if (ScorePlayerA < ScorePlayerB) {
    winner = PlayerB;
  }

  if (ScorePlayerA === 2 && ScorePlayerB === 2) {
    console.error(`Error: Both ${PlayerA} and ${PlayerB} cannot win two points each in the same match.`);
    return '';
  } else if (winner === '') {
    console.error(`Error: No winner found for match between ${PlayerA} and ${PlayerB}.`);
    return '';
  }

  return winner;
};

const saveLadiesGames = function(PlayerA='', ScorePlayerA=0, PlayerB='', ScorePlayerB=0, Round='') {
  const winner = getLadiesWinner(ScorePlayerA, ScorePlayerB, PlayerA, PlayerB);

  if (winner === '') {
    return;
  }

  if (ScorePlayerA !== 3 && ScorePlayerB !== 3) {
    console.log(`Error: At least one player's score must be 3 to save the game to the database. Game not saved to database.`);
    return;
  }

  const ladiesGames = new Game({
    PlayerA: PlayerA,
    ScorePlayerA: ScorePlayerA,
    PlayerB: PlayerB,
    ScorePlayerB: ScorePlayerB,
    Round: Round,
    Winner: winner 
  });

  if (ScorePlayerA === 3 || ScorePlayerB === 3) {
    ladiesGames.save().then(() => {
      console.log(PlayerA, ScorePlayerA, PlayerB, ScorePlayerB, Round);
    }).catch(err => {
      console.error("Error saving game:", err);
    });
  } else {
    console.log(`Error: At least one player's score must be 3 to save the game to the database. Game not saved to database.`);
  }
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
  saveAllLadies: saveAllLadies,
  getLadiesWinner: getLadiesWinner
};
