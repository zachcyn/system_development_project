const express = require("express");
const leadRoutes = express.Router();
// const positionScoreHandler = require('../controllers/positionScoreHandler')

const conn = require('../dbConn');
const FEMALEPLAYER = conn.FMaleDB.models['Player'];
const MALEPLAYER = conn.MaleDB.models['Player'];

function printMalePlayerDataByMoney() {
    return MALEPLAYER.find({}, 'ID Points Money').sort({ Money: -1 }).exec();
  };

  const printMalePlayerDataByPoints = function() {
    return MALEPLAYER.find({}, 'ID Points Money').sort({ Points: -1 }).exec();
  };
  
  const printFemalePlayerDataByMoney = function() {
    return FEMALEPLAYER.find({}, 'ID Points Money').sort({ Money: -1 }).exec();
  };
    
  const printFemalePlayerDataByPoints = function() {
    return FEMALEPLAYER.find({}, 'ID Points Money').sort({ Points: -1 }).exec();
  };

async function FetchMP0List() {
    // let list = await positionScoreHandler.printMalePlayerDataByMoney();
    let list = await printMalePlayerDataByPoints()
    return list;
    //console.log("LIST:", list);
}

async function FetchMP1List() {
    // let list = await positionScoreHandler.printMalePlayerDataByMoney();
    let list = await printMalePlayerDataByMoney()
    return list;
    //console.log("LIST:", list);
}

async function FetchFP0List() {
    // let list = await positionScoreHandler.printMalePlayerDataByMoney();
    let list = await printFemalePlayerDataByPoints()
    return list;
    //console.log("LIST:", list);
}

async function FetchFP1List() {
    // let list = await positionScoreHandler.printMalePlayerDataByMoney();
    let list = await printFemalePlayerDataByMoney()
    return list;
    //console.log("LIST:", list);
}

leadRoutes.route("/api/MP0").get(function (req, res) {
    console.log("LeaderBoards!");
    FetchMP0List().then( data => {
        console.log("MP! ", data);
        res.json(data);
    });
});

leadRoutes.route("/api/MP1").get(function (req, res) {
    console.log("LeaderBoards!");
    FetchMP1List().then( data => {
        console.log("MP! ", data);
        res.json(data);
    });
});


leadRoutes.route("/api/FP0").get(function (req, res) {
    console.log("LeaderBoards FEMALE FP0!");
    FetchFP0List().then( data => {
        console.log("MP! ", data);
        res.json(data);
    });
});

leadRoutes.route("/api/FP1").get(function (req, res) {
    console.log("LeaderBoards FEMALE FP1!");
    FetchFP1List().then( data => {
        console.log("MP! ", data);
        res.json(data);
    });
});

module.exports = leadRoutes;