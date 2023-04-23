const conn = require('../dbConn');
const FEMALEPLAYER = conn.FMaleDB.models['Player'];
const MALEPLAYER = conn.MaleDB.models['Player'];

// const printMalePlayerDataByMoney = function() {
//   MALEPLAYER.find({}, 'ID Points Money').sort({ Money: -1 }).then(players => {
//     console.log("Rank\tID\tPoints\tMoney");
//     // let rank = 1;
//     // players.forEach(player => {
//     //   console.log(`${rank}\t${player.ID}\t${player.Points}\t${player.Money}`);
//     //   rank++;
//     // });
//     return players;
//   }).catch(error => {
//     console.error('Error fetching data from MALEPLAYER database:', error);
//   });
// };

function printMalePlayerDataByMoney() {
  return MALEPLAYER.find({}, 'ID Points Money').sort({ Money: -1 }).exec();
};


const printMalePlayerDataByPoints = function() {
  MALEPLAYER.find({}, 'ID Points Money').sort({ Points: -1 }).then(players => {
    console.log("Rank\tID\tPoints\tMoney");
    let rank = 1;
    players.forEach(player => {
      console.log(`${rank}\t${player.ID}\t${player.Points}\t${player.Money}`);
      rank++;
    });
  }).catch(error => {
    console.error('Error fetching data from MALEPLAYER database:', error);
  });
};


const printFemalePlayerDataByMoney = function() {
  FEMALEPLAYER.find({}, 'ID Points Money').sort({ Money: -1 }).then(players => {
    console.log("Rank\tID\tPoints\tMoney");
    let rank = 1;
    players.forEach(player => {
      console.log(`${rank}\t${player.ID}\t${player.Points}\t${player.Money}`);
      rank++;
    });
  }).catch(error => {
    console.error('Error fetching data from FEMALEPLAYER database:', error);
  });
};


const printFemalePlayerDataByPoints = function() {
  FEMALEPLAYER.find({}, 'ID Points Money').sort({ Points: -1 }).then(players => {
    console.log("Rank\tID\tPoints\tMoney");
    let rank = 1;
    players.forEach(player => {
      console.log(`${rank}\t${player.ID}\t${player.Points}\t${player.Money}`);
      rank++;
    });
  }).catch(error => {
    console.error('Error fetching data from FEMALEPLAYER database:', error);
  });
};



module.exports = {
printMalePlayerDataByMoney:printMalePlayerDataByMoney,
printMalePlayerDataByMoney:printMalePlayerDataByPoints,
printFemalePlayerDataByMoney:printFemalePlayerDataByMoney,
printFemalePlayerDataByPoints:printFemalePlayerDataByPoints
};