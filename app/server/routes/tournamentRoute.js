const express = require("express");
const recordRoutes = express.Router();

const dbo = require("../dbConn");

// const MALEPLAYER = dbo.MaleDB.models['Player'];

// recordRoutes.route("/api/GetTournamentData").get(function (req, res) {
//     console.log("HERE33!")
//     MALEPLAYER.find().then( players => {
//         console.log(players);
//         res.json(players);
//     });
// });

const maleGames = dbo.MaleDB.models['Game'];

recordRoutes.route("/api/GetTournamentData").get(function (req, res) {
    maleGames.find({ Round: "S1TAC1R1" }).then( Games => {
        console.log(Games);
        res.json(Games);
    });
});


module.exports = recordRoutes;
