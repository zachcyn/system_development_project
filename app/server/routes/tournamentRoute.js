const express = require("express");
const recordRoutes = express.Router();

const dbo = require("../dbConn");
const maleGames = dbo.MaleDB.models['Game'];
const femaleGames = dbo.FMaleDB.models['Game'];
const tournaments = dbo.TournDB.models['Tournament']

function FetchAllTournaments() {
    return tournaments.find({ }).exec()
}

async function FetchTournamentList() {
    let Tournaments = await FetchAllTournaments();
    let allTournaments = []
    for (let i = 0; i < Tournaments.length; i++) {
        // console.log("Tournament:", Tournaments[i]);
        
        allTournaments.push({
            name: Tournaments[i].name,
            subtitle: "Difficulty Degree " + Tournaments[i].difficulty,
        })
    }
    // console.log("All tours:", allTournaments);

    return allTournaments;
}

async function FetchAllTournamentsData() {
    let Tournaments = await FetchAllTournaments();
    let allTournaments = []
    for (let i = 0; i < Tournaments.length; i++) {
        // console.log("Tournament:", Tournaments[i]);
        
        allTournaments.push({
            route: "/Tournament/" + Tournaments[i].name,
            tournament_name: Tournaments[i].name,
        })
    }
    // console.log("All tours:", allTournaments);

    let tournaments = {
        name: "Tournaments",
        collapse: allTournaments,
    }

    const routes = [
    {
        name: "Tournament",
        columns: 1,
        rowsPerColumn: 2,
        collapse: [
            tournaments,
        ],
    },
    {
        name: "Leaderboards",
        columns: 1,
        rowsPerColumn: 2,
        collapse: [
        {
            name: "Gender",
            collapse: [
            {
                name: "Male",
                gender: "Male",
                route: "/pages/maleLeaderboard"
            },
            {
                name: "Female",
                gender: "Female",
                route: "/pages/femaleLeaderboard"
            },
            ],
        },
        ],
    },];

    return routes;
}

function FetchTournament(TournamentName) {
    return tournaments.findOne({ name: TournamentName }).exec()
}

function FetchMaleRound(TournamentName, Round) {
    return maleGames.find({ Round: "S1" + TournamentName +"R" + Round}).exec()
}

function FetchFMaleRound(TournamentName, Round) {
    return femaleGames.find({ Round: "S1" + TournamentName +"R" + Round}).exec()
}

async function FetchTournamentData(TournamentName) {
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
    Tournament = await FetchTournament(TournamentName);

    // console.log("Difficulty found:", Tournament.difficulty);
    details = [{
        gender: "men",
        game: MaleRounds    
    },{
        gender: "ladies",
        game: FemaleRounds 
    }]

    if(Tournament){
        tournament_data = [
        {
            title: TournamentName,
            difficulty: Tournament.difficulty,
            details: details
        }];
    }
    else
    {
        tournament_data = [
        {
            title: TournamentName,
            difficulty: "",
            details: details
        }];
    }
    

    // console.log("Async data: ", tournament_data);
    return tournament_data;
}

recordRoutes.route("/api/T/:tour").get(function (req, res) {
    tournamentName = req.params.tour;
    console.log("Tournament name: ", tournamentName);

    FetchTournamentData(tournamentName).then( data => {
        res.json(data);
    });
});

recordRoutes.route("/api/Tournaments").get(function (req, res) {
    console.log("All Tournaments");

    FetchAllTournamentsData().then( data => {
        console.log(data);
        res.json(data);
    });
});

recordRoutes.route("/api/TournamentList").get(function (req, res) {
    console.log("All Tournaments List");

    FetchTournamentList().then( data => {
        console.log(data);
        res.json(data);
    });
});

recordRoutes.route("/api/AddRound").post(function (req, res) {
    console.log("Add Round IN BACKEND!", req.body);

    // FetchTournamentList().then( data => {
    //     console.log(data);
    //     res.json(data);
    // });
});

module.exports = recordRoutes;

