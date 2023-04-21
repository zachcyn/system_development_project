const conn = require('../dbConn');
const Game = conn.FMaleDB.models['Game']
const csvhandler = require('./csvhandler')



// Function to calculate and validate the winner
const getLadiesWinner = function(ScorePlayerA, ScorePlayerB, PlayerA, PlayerB) {
  let winner = '';

  if (ScorePlayerA > ScorePlayerB) {
    winner = PlayerA;
  } else if (ScorePlayerA < ScorePlayerB) {
    winner = PlayerB;
  }

  // Validate winner
  if (ScorePlayerA === 2 && ScorePlayerB === 2) {
    console.error(`Error: Both ${PlayerA} and ${PlayerB} cannot win two points each in the same match.`);
    return '';
  } else if (winner === '') {
    console.error(`Error: No winner found for match between ${PlayerA} and ${PlayerB}.`);
    return '';
  }

  return winner;
};

// Function to save ladies games
const saveLadiesGames = function(PlayerA='', ScorePlayerA=0, PlayerB='', ScorePlayerB=0, Round='') {
  // Call getWinner function to calculate and validate the winner
  const winner = getLadiesWinner(ScorePlayerA, ScorePlayerB, PlayerA, PlayerB);

  // If winner is not valid, return
  if (winner === '') {
    return;
  }

  const ladiesGames = new Game({
    PlayerA: PlayerA,
    ScorePlayerA: ScorePlayerA,
    PlayerB: PlayerB,
    ScorePlayerB: ScorePlayerB,
    Round: Round,
    Winner: winner // Add winner to the Game schema
  });

  ladiesGames.save().then(() => {
    console.log(PlayerA, ScorePlayerA, PlayerB, ScorePlayerB, Round);
  }).catch(err => {
    console.error("Error saving game:", err);
  });
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