const conn = require('../dbConn');
const csvhandler = require('./csvhandler')
const femalePlayersController = require('./femalePlayersController')
const ladiesGamesController = require('./ladiesGamesController')
const maleGamesController = require('./maleGamesController')
const malePlayersController = require('./malePlayersController')
const prizeMoneyController = require('./prizeMoneyController')
const rankingPointsController = require('./rankingpointController')
const FEMALEPLAYER = conn.FMaleDB.models['Player'];
const FMaleGame = conn.FMaleDB.models['Game'];
const MALEGame = conn.MaleDB.models['Game'];
const MALEPLAYER = conn.MaleDB.models['Player'];
const TournModel = conn.TournDB.models['Tournament'];
const RankingPoints = conn.TournDB.models['RankingPoints']


const addMalePlayerPoints = function(playerId) {
    // Find player in the Male Player database
    MALEPLAYER.findOne({ ID: playerId }).then(player => {
      if (!player) {
        console.error(`Error: Player with ID ${playerId} not found.`);
        return;
      }
  
      // Find all games where the player participated
      MALEGame.find({ $or: [{ PlayerA: playerId }, { PlayerB: playerId }] }).then(games => {
        const playerPoints = {}; // Create an object to store player points
  
        games.forEach(game => {
          // Calculate player's points for each game
          const playerAPoints = game.PlayerA === playerId ? game.ScorePlayerA : game.ScorePlayerB;
          const playerBPoints = game.PlayerB === playerId ? game.ScorePlayerB : game.ScorePlayerA;
  
          // Convert player IDs to numbers before using as keys in playerPoints object
          const playerANum = Number(game.PlayerA.slice(2));
          const playerBNum = Number(game.PlayerB.slice(2));
  
          // Add up points to player's total points
          if (playerAPoints > playerBPoints) {
            playerPoints[playerANum] = (playerPoints[playerANum] || 0) + 1;
          } else if (playerAPoints < playerBPoints) {
            playerPoints[playerBNum] = (playerPoints[playerBNum] || 0) + 1;
          }
        });
  
        // Print player's total points
        console.log(`Player ID: ${playerId}`);
        let totalPoints = 0;
        for (const playerId in playerPoints) {
          console.log(`Player ID: MP${playerId}, Total Points: ${playerPoints[playerId]}`);
          totalPoints += playerPoints[playerId];
        }
        console.log(`Total Points: ${totalPoints}`);
      }).catch(error => {
        console.error(`Error finding games for player with ID ${playerId}: ${error}`);
      });
    }).catch(error => {
      console.error(`Error finding player with ID ${playerId}: ${error}`);
    });
  }
  
  
  
const findListPlayers = function saveMalePlayers(fileName) {
    ID = csvhandler.processData(fileName);

    for (let i in ID) {
        addMalePlayerPoints(ID[i][0]);
        console.log(ID[i][0]);
        }
};


module.exports = {
    addMalePlayerPoints: addMalePlayerPoints,
    findListPlayers:findListPlayers
};