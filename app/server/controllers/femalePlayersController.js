const conn = require('../dbConn');
const csvhandler = require('./csvhandler');
const FEMALEPLAYER = conn.FMaleDB.models['Player'];
const FEMALEGame = conn.FMaleDB.models['Game'];
const maleGamesController = require('./maleGamesController');
const rankingPoints = conn.TournDB.models['RankingPoints'];
const TournModel = conn.TournDB.models['Tournament'];


const updateTournamentRankingPoints = function(rankingBoard) {
  // Create a map to store playerIDs and their updated ranking points
  const updatedRankingPointsMap = new Map();

  // Loop through the rankingBoard array
  for (const rankingData of rankingBoard) {
    const playerId = rankingData.playerId;
    const tournamentId = rankingData.tournamentId;
    const rankingPoint = rankingData.rankingPoint;

    // Find the tournament in the TournModel database based on the tournamentId (assuming 'name' is the field name for the tournament name)
    TournModel.findOne({ name: tournamentId })
      .then(tournament => {
        if (tournament) {
          // Multiply rankingPoint with the tournament's difficulty
          const updatedRankingPoint = rankingPoint * tournament.difficulty;

          // Check if playerId already exists in the updatedRankingPointsMap
          if (updatedRankingPointsMap.has(playerId)) {
            // If playerId exists, add the updatedRankingPoint to the existing value
            const existingRankingPoint = updatedRankingPointsMap.get(playerId);
            updatedRankingPointsMap.set(playerId, existingRankingPoint + updatedRankingPoint);
          } else {
            // If playerId doesn't exist, set the updatedRankingPoint as the value
            updatedRankingPointsMap.set(playerId, updatedRankingPoint);
          }

          // Check if this is the last data in the rankingBoard array
          if (rankingData === rankingBoard[rankingBoard.length - 1]) {
            // If this is the last data, update the ranking points in the MALEPLAYER database for each playerID
            for (const [playerId, updatedRankingPoint] of updatedRankingPointsMap) {
              // Find the male player in the MALEPLAYER database based on the playerID
              FEMALEPLAYER.findOne({ ID: playerId })
                .then(player => {
                  if (player) {
                    // Update the player's Points with the updatedRankingPoint
                    player.Points += updatedRankingPoint;
                    player.save().then(() => console.log(`Updated Points for Player ID: ${playerId}`));
                  } else {
                    // Handle error if player not found in MALEPLAYER database
                    console.error(`Player not found for playerID: ${playerId}`);
                  }
                })
                .catch(error => {
                  // Handle error if any error occurs during database query
                  console.error(error);
                });
            }
          }
        } else {
          // Handle error if tournament not found in TournModel database
          console.error(`Tournament not found for tournamentId: ${tournamentId}`);
        }
      })
      .catch(error => {
        // Handle error if any error occurs during database query
        console.error(error);
      });
  }

  return rankingBoard;
};



  
  
    

const assignTournamentRankingPoints = async (leaderboard) => {  
    const rankingboard = [];
  
    for(const player of leaderboard) {
      const playerId = player[0];
      const playerPosition = player[2];
      const tournamentId = player[3];
  
      const playerRankingPoint = await rankingPoints.findOne({ Place: playerPosition });
      let rankingPoint = null;
  
      if (playerRankingPoint) {
        rankingPoint = playerRankingPoint.TournamentRankingPoints;
      }
  
      // Push player object with additional ranking points to rankingboard array
      rankingboard.push({
        playerId: playerId,
        position: playerPosition,
        tournamentId: tournamentId,
        rankingPoint: rankingPoint
      });
    }
  
    const newrankingboard = await updateTournamentRankingPoints(rankingboard);
    console.log(newrankingboard)
};

const calculatePrizeMoney = async function(leaderboard) {
  try {
    const tournamentPrizeMoney = await TournModel.find({}, 'name prizeMoney');

    const playerPrizeMoney = [];
    for (let i = 0; i < leaderboard.length; i++) {
      const playerID = leaderboard[i][0];
      const position = leaderboard[i][2];
      const tournamentID = leaderboard[i][3];

      const tournament = tournamentPrizeMoney.find(tournament => tournament.name === tournamentID);
      if (tournament) {
        const prizeMoney = tournament.prizeMoney[position - 1] || 0;
        const existingPlayer = playerPrizeMoney.find(player => player[0] === playerID);
        if (existingPlayer) {
          existingPlayer[1] += prizeMoney; // Sum the prize money if playerID already exists in playerPrizeMoney array
        } else {
          playerPrizeMoney.push([playerID, prizeMoney]);
        }
        // Update prize money in MALEPLAYER database
        await FEMALEPLAYER.findOneAndUpdate({ ID: playerID }, { $inc: { Money: prizeMoney } });
      } else {
        playerPrizeMoney.push([playerID, 0]);
      }
    }

    const rankingboard = await sortLeaderboardByPrizeMoney(playerPrizeMoney);
    console.log(rankingboard);
  } catch (error) {
    console.error('Error calculating prize money:', error);
  }
};

const sortLeaderboardByPrizeMoney = async function(playerPrizeMoney) {
  try {
    // Sort the leaderboard by prize money in descending order
    const sortedLeaderboard = playerPrizeMoney.sort((a, b) => b[1] - a[1]);

    // Handle cases where players have the same prize money
    const rankingboard = [];
    let rank = 1;
    for (let i = 0; i < sortedLeaderboard.length; i++) {
      const playerID = sortedLeaderboard[i][0];
      const prizeMoney = sortedLeaderboard[i][1];
      rankingboard.push([playerID, rank, prizeMoney]);
      if (i < sortedLeaderboard.length - 1 && prizeMoney !== sortedLeaderboard[i + 1][1]) {
        rank = i + 2;
      }
    }

    return rankingboard;
  } catch (error) {
    console.error('Error sorting leaderboard by prize money:', error);
  }
};





// Function to get tournament name from round string
const getTournamentName = function(roundString) {
  const regex = /S(\d+)(\w+)R(\d+)/;
  const match = roundString.match(regex);
  if (match) {
    return match[2];
  }
  return '';
};

const generateTournamentLeaderboard = async (tournamentArray) => {
  tournamentArray.sort((a, b) => {
    // Sort by tournament name (currentPlayer[2]) first
    if (a[2] < b[2]) {
      return -1;
    } else if (a[2] > b[2]) {
      return 1;
    } else {
      // If tournament names are equal, sort by score (currentPlayer[1])
      return b[1] - a[1];
    }
  });

  const leaderboard = [];
  let previoustournament = null;
  let previousScore = null;
  let position = 0;
  let rank = 1;

  for (let i = 0; i < tournamentArray.length; i++) {
    const currentPlayer = tournamentArray[i];
    const currentScore = currentPlayer[1];
    const currentTournament = currentPlayer[2];

    if (currentTournament !== previoustournament) {
      position = 0;
      rank = 1;
    }

    if (currentScore === previousScore) {
      position = rank - 1;
    } else {
      position = rank++;
    }

    leaderboard.push([currentPlayer[0], currentScore, position, currentTournament]);
    previousScore = currentScore;
    previoustournament = currentTournament;
  }

  console.log(leaderboard);
  const rankingboard = await assignTournamentRankingPoints(leaderboard);
  const prizeMoney = await calculatePrizeMoney(leaderboard);
  console.log(rankingboard);
  console.log(prizeMoney);
};


  let tournamentScores = {}; 
  const updateFemalePlayerPoints = async function() {
    try {
      const players = await FEMALEPLAYER.find();
      for (let player of players) {
        const games = await FEMALEGame.find({ $or: [{ PlayerA: player.ID }, { PlayerB: player.ID }] });
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
        const leaderboardArray = []; // Create an array to store leaderboards for all tournaments
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
          leaderboardArray.push(...tournamentArray);} // Push the tournamentArray into the leaderboardArray
          leaderboardArray.sort((a, b) => b[1] - a[1]);
          console.log(leaderboardArray)
        const leaderboard = generateTournamentLeaderboard(leaderboardArray); 
        console.log(leaderboard);
        
        // console.log('All Tournaments Leaderboard:', leaderboardArray); // Print the combined leaderboard array
      }, 5000); 
  
    } catch (error) {
      console.error('Error finding players:', error);
    }
  };

const saveFemalePlayer = function saveTheFeplayer(ID='', Name='', Points=0, Money=0) {
    FEMALEPLAYER.findOne({ ID: ID }).then(existingPlayer => {
        if (existingPlayer) {
            console.log(existingPlayer)
            console.error(`Error: Player already exists in the database.`);
        } 
        else {
            const femalePlayer = new FEMALEPLAYER({
                ID: ID,
                Name: Name,
                Points: Points,
                Money: Money
            });
            femalePlayer.save().then(() => console.log("Saved"+ Name));
        }
    }).catch(error => {
        console.error(error);
    });
};

const saveFemalePlayers = function saveFemalePlayers(fileName) {
    ID = csvhandler.processData(fileName);

    for (let i in ID) {
        saveFemalePlayer(ID[i][0]);
        console.log(ID[i][0]);
    }
};

module.exports = {
    saveThePlayer: saveFemalePlayer,
    savefemalePlayers: saveFemalePlayers,
    updateFemalePlayerPoints: updateFemalePlayerPoints,
    getTournamentName: getTournamentName,
generateTournamentLeaderboard:generateTournamentLeaderboard,
assignTournamentRankingPoints:assignTournamentRankingPoints
};
