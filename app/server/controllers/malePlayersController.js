const conn = require('../dbConn');
const csvhandler = require('./csvhandler');
const MALEPLAYER = conn.MaleDB.models['Player'];
const MALEGame = conn.MaleDB.models['Game'];
const maleGamesController = require('./maleGamesController');

// Function to get tournament name from round string
const getTournamentName = function(roundString) {
  const regex = /S(\d+)(\w+)R(\d+)/;
  const match = roundString.match(regex);
  if (match) {
    return match[2];
  }
  return '';
};


const generateTournamentLeaderboard = (tournamentArray) => {
  tournamentArray.sort((a, b) => b[1] - a[1]);

  const leaderboard = [];
  let previousScore = null;
  let position = 0;
  let rank = 1;

  for (let i = 0; i < tournamentArray.length; i++) {
    const currentPlayer = tournamentArray[i];
    const currentScore = currentPlayer[1];

    if (currentScore === previousScore) {
      position = rank - 1;
    }

    if (currentScore !== previousScore) {

      position = rank++;
    }

    leaderboard.push([currentPlayer[0],currentScore, position, currentPlayer[2]]); 
    previousScore = currentScore; 
  }

  return leaderboard
};
  
  

let tournamentScores = {}; 
const updateMalePlayerPoints = async function() {
    try {
      const players = await MALEPLAYER.find();
      for (let player of players) {
        const games = await MALEGame.find({ $or: [{ PlayerA: player.ID }, { PlayerB: player.ID }] });
        for (let game of games) {
          const tournamentName = getTournamentName(game.Round);
          if (tournamentName !== '') {
            if (!tournamentScores.hasOwnProperty(tournamentName)) {
              tournamentScores[tournamentName] = {}; 
            }
            const playerScore = player.ID === game.PlayerA ? game.ScorePlayerA : game.ScorePlayerB;
            if (tournamentScores[tournamentName].hasOwnProperty(player.ID)) {
              tournamentScores[tournamentName][player.ID] += playerScore; 
            } else {
              tournamentScores[tournamentName][player.ID] = playerScore;
            }
          }
        }
      }
  
      setTimeout(() => {
        console.log('Tournament Leaderboards:');
        for (let tournamentName in tournamentScores) {
          console.log(`Tournament: ${tournamentName}`);
          const playerScores = tournamentScores[tournamentName];
          const players = Object.keys(playerScores);
          const scores = Object.values(playerScores);
          const tournamentArray = [];
          for (let i = 0; i < players.length; i++) {
            const playerID = players[i];
            const totalScore = scores[i];
            tournamentArray.push([playerID, totalScore,tournamentName]);
          }

          const leaderboard = generateTournamentLeaderboard(tournamentArray); 
          console.log(leaderboard)
        }
      }, 5000); 
  
    } catch (error) {
      console.error('Error finding players:', error);
    }
  };
  
  
  

// Function to save a single male player
const saveMalePlayer = function(ID = '', Name = '', Points = 0, Money = 0) {
  MALEPLAYER.findOne({ ID: ID }).then(existingPlayer => {
    if (existingPlayer) {
      console.error(`Error: Player already exists in the database.`);
    } else {
      const testplayer = new MALEPLAYER({
        ID: ID,
        Name: Name,
        Points: Points,
        Money: Money,
        TournamentPlayed: [] // Initialize empty array for tournaments played
      });
      testplayer.save().then(() => console.log("Saved"));
    }
  }).catch(error => {
    console.error(error);
  });
};

// Function to save multiple male players from a CSV file
const saveMalePlayers = function(fileName) {
  const ID = csvhandler.processData(fileName);

  for (let i in ID) {
    saveMalePlayer(ID[i][0]);
    console.log(ID[i][0]);
  }
};

module.exports = {
    saveThePlayer: saveMalePlayer,
    saveMalePlayers: saveMalePlayers,
    updateMalePlayerPoints: updateMalePlayerPoints,
    getTournamentName: getTournamentName,
generateTournamentLeaderboard:generateTournamentLeaderboard}