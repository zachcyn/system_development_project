const conn = require('../dbConn');
const csvhandler = require('./csvhandler');
const FEMALEPLAYER = conn.FMaleDB.models['Player'];
const FEMALEGame = conn.FMaleDB.models['Game'];
const maleGamesController = require('./maleGamesController');
const rankingPoints = conn.TournDB.models['RankingPoints'];
const TournModel = conn.TournDB.models['Tournament'];


const updateTournamentRankingPoints = function(rankingBoard) {
  const updatedRankingPointsMap = new Map();

  for (const rankingData of rankingBoard) {
    const playerId = rankingData.playerId;
    const tournamentId = rankingData.tournamentId;
    const rankingPoint = rankingData.rankingPoint;

    TournModel.findOne({ name: tournamentId })
      .then(tournament => {
        if (tournament) {
          const updatedRankingPoint = rankingPoint * tournament.difficulty;

          if (updatedRankingPointsMap.has(playerId)) {
            const existingRankingPoint = updatedRankingPointsMap.get(playerId);
            updatedRankingPointsMap.set(playerId, existingRankingPoint + updatedRankingPoint);
          } else {
            updatedRankingPointsMap.set(playerId, updatedRankingPoint);
          }

          if (rankingData === rankingBoard[rankingBoard.length - 1]) {
            for (const [playerId, updatedRankingPoint] of updatedRankingPointsMap) {
              FEMALEPLAYER.findOne({ ID: playerId })
                .then(player => {
                  if (player) {
                    player.Points += updatedRankingPoint;
                    player.save().then(() => console.log(`Updated Points for Player ID: ${playerId}`));
                  } else {
                    console.error(`Player not found for playerID: ${playerId}`);
                  }
                })
                .catch(error => {
                  console.error(error);
                });
            }
          }
        } else {
          console.error(`Tournament not found for tournamentId: ${tournamentId}`);
        }
      })
      .catch(error => {
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
      const position = leaderboard[i][2]; // Update to use third column as position
      const tournamentID = leaderboard[i][3];

      const tournament = tournamentPrizeMoney.find(tournament => tournament.name === tournamentID);
      if (tournament) {
        const prizeMoney = tournament.prizeMoney[position ] || 0;
        const existingPlayer = playerPrizeMoney.find(player => player[0] === playerID);
        if (existingPlayer) {
          existingPlayer[1] += prizeMoney; 
        } else {
          playerPrizeMoney.push([playerID, prizeMoney]);
        }
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
    const sortedLeaderboard = playerPrizeMoney.sort((a, b) => b[1] - a[1]);

    const rankingboard = [];
    let rank = 1;
    for (let i = 0; i < sortedLeaderboard.length; i++) {
      const playerID = sortedLeaderboard[i][0];
      const prizeMoney = sortedLeaderboard[i][1];
      const originalIndex = playerPrizeMoney.findIndex(player => player[0] === playerID);
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
    if (a[2] < b[2]) {
      return -1;
    } else if (a[2] > b[2]) {
      return 1;
    } else {
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
        const leaderboardArray = [];
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
          leaderboardArray.push(...tournamentArray);} 
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
  
  
  
  

const savefemalePlayer = function(ID = '', Name = '', Points = 0, Money = 0) {
  FEMALEPLAYER.findOne({ ID: ID }).then(existingPlayer => {
    if (existingPlayer) {
      console.error(`Error: Player already exists in the database.`);
    } else {
      const testplayer = new FEMALEPLAYER({
        ID: ID,
        Name: Name,
        Points: Points,
        Money: Money,
        TournamentPlayed: [] 
      });
      testplayer.save().then(() => console.log("Saved"));
    }
  }).catch(error => {
    console.error(error);
  });
};

const savefemalePlayers = function(fileName) {
  const ID = csvhandler.processData(fileName);

  for (let i in ID) {
    savefemalePlayer(ID[i][0]);
    console.log(ID[i][0]);
  }
};

module.exports = {
    saveThePlayer: savefemalePlayer,
    savefemalePlayers: savefemalePlayers,
    updateFemalePlayerPoints: updateFemalePlayerPoints,
    getTournamentName: getTournamentName,
generateTournamentLeaderboard:generateTournamentLeaderboard,
assignTournamentRankingPoints:assignTournamentRankingPoints}