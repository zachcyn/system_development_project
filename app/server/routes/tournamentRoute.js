const express = require("express");
const recordRoutes = express.Router();

const dbo = require("../dbConn");
const maleGames = dbo.MaleDB.models['Game'];
const femaleGames = dbo.FMaleDB.models['Game'];

const tournaments = ["TAC1", "TAE21", "TAW11", "TBS2"]

recordRoutes.route("/api/GetTournamentData").get(function (req, res) {
    console.log(tournaments[0])
    maleGames.find({ Round: "S1" + tournaments[0] +"R1" }).then( Games => {
        console.log(Games);
        res.json(Games);
    });
});

function FetchMaleRound(TournamentName, Round) {
    return maleGames.find({ Round: "S1" + TournamentName +"R" + Round}).exec()
}

function FetchFMaleRound(TournamentName, Round) {
    return femaleGames.find({ Round: "S1" + TournamentName +"R" + Round}).exec()
}

async function FetchTournamentData(TournamentName) {
    // round1 = await FetchRound1();
    // round2 = await FetchRound2();
    MaleRounds = []
    for (let i = 1; i < 60; i++) {
        round = await FetchMaleRound(TournamentName, i);
        round_num = i;
        // console.log("Round:", round);
        if(round.length > 0) {
            MaleRounds.push({round_no: round_num, round_detail: round });
        }
        else break;
    }
    FemaleRounds = []
    for (let i = 1; i < 60; i++) {
        round = await FetchFMaleRound(TournamentName, i);
        round_num = i;
        // console.log("Round:", round);
        if(round.length > 0) {
            FemaleRounds.push({round_no: round_num, round_detail: round });
        }
        else break;
    }

    details = [{
        gender: "men",
        game: MaleRounds    
    },{
        gender: "ladies",
        game: FemaleRounds 
    }]

    tournament_data = [
    {
        title: TournamentName,
        difficulty: 2.3,
        details: details
    }];

    // console.log("Async data: ", tournament_data);
    return tournament_data;
}

// const TAC_data = [
//     { title: "TAC1",
//       difficulty: 2.3,
//       details:
//         [
//         { gender: "men",
//         game: 
//             [
//                 {
//                     round_no: 1,
//                     round_detail:[
//                         {
//                             player_a: "Backend",
//                             score_a: 2,
//                             player_b: "FP20",
//                             score_b: 0
//                         },{
//                             player_a: "FP15",
//                             score_a: 2,
//                             player_b: "FP20",
//                             score_b: 0
//                         },{
//                             player_a: "FP14",
//                             score_a: 2,
//                             player_b: "FP20",
//                             score_b: 0
//                         },{
//                             player_a: "FP14",
//                             score_a: 2,
//                             player_b: "FP20",
//                             score_b: 0
//                         },{
//                             player_a: "FP14",
//                             score_a: 2,
//                             player_b: "FP20",
//                             score_b: 0
//                         }
//                     ]
//                 }
//             ]
//         },
//         { 
//         gender: "women",
//         game: 
//             [
//                 {
//                 round_no: 1,
//                 round_detail:[
//                     {
//                         player_a: "A",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP15",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP16",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP14",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP14",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     }
//                 ]
//             },{
//                 round_no: 2,
//                 round_detail:[
//                     {
//                         player_a: "Pain",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP15",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP14",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP14",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP14",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     }
//                 ]
//             },{
//                 round_no: 3,
//                 round_detail:[
//                     {
//                         player_a: "N",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP15",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP14",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP14",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP14",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     }
//                 ]
//             },{
//                 round_no: 4,
//                 round_detail:[
//                     {
//                         player_a: "G",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP15",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP14",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP14",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP14",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     }
//                 ]
//             },{
//                 round_no: 5,
//                 round_detail:[
//                     {
//                         player_a: "L",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP15",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP14",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP14",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     },{
//                         player_a: "FP14",
//                         score_a: 2,
//                         player_b: "FP20",
//                         score_b: 0
//                     }
//                 ]
//             }
//         ]
//         }
//     ]
// }
// ]


// recordRoutes.route("/api/TAC1").get(function (req, res) {
//     console.log(tournaments);
//     FetchTournamentData("TAC1").then( data => {
//         res.json(data);
//     });
//     //console.log(TAC_data)
//     //res.json(TAC_data);
// });

recordRoutes.route("/api/T/:tour").get(function (req, res) {
    tournamentName = req.params.tour;
    console.log("Tournament name: ", tournamentName);
    FetchTournamentData(tournamentName).then( data => {
        res.json(data);
    });
});

module.exports = recordRoutes;

