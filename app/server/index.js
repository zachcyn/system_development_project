require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const conn = require('./dbConn');
const maleplayerController = require('./controllers/malePlayersController')
const femaleplayerController = require('./controllers/femalePlayersController')
const rankingPointController = require('./controllers/rankingpointController')
const prizeMoneyController = require('./controllers/prizeMoneyController')
const ladiesGamesController = require('./controllers/ladiesGamesController')
const maleGamesController = require('./controllers/maleGamesController')
const positionScoreHandler = require('./controllers/positionScoreHandler')
const cors = require('cors');


//mongoose.connect("mongodb+srv://dev:dev123@tennisdata.fxv0bhm.mongodb.net/?retryWrites=true&w=majority")

const Player = conn.MaleDB.models['Player'];
console.log(Player)
const app = express();

app.use(cors());

app.use(require("./routes/tournamentRoute"));
app.use(require("./routes/leaderboardRoute"));

app.listen(3001, () => {
    console.log("Server is servering...");
})

app.get("/getPlayers", (req, res)  => {
    console.log("sewy2");
    const testplayer = new Player({
        ID: "test",
        Name: "alex3",
        Points: 50,
        Money: 100
    });
    
    // testplayer.save().then(() => console.log("Saved"));
    // X stored the exec promise
    // we should use the other method where we saved the data in person using the
    // callback
    Player.findById("64143762b5ef6a84d6008856").then(player => {
        // res.render("player", {
        //     Name: player.Name,
        //     Points: player.Points 
        // })
        console.log(player)
    })
})


app.get("/saveFemalePlayer", (req, res)  => {
   console.log("lolworks");
   femaleplayerController.savefemalePlayers("../../Upload/FEMALE PLAYERS.csv",true);
    
})

app.get("/saveMalePlayer",(req,res)=>{
    console.log("lololworks");
    maleplayerController.saveMalePlayers("../../Upload/MALE PLAYERS.csv",true);
})

app.get("/uploadRankingPoints",(req,res)=>{
    console.log("lololworks");
    rankingPointController.saveAllRanking("../../Upload/Ranking Points.csv");
})

app.get("/saveAllTournaments",(req,res)=>{
    console.log("lololworks");
    prizeMoneyController.saveAllTournaments("../../Upload/PRIZE MONEY.csv","../../Upload/DEGREE OF DIFFICULTY.csv");
})

app.get("/UpdateRoundsLadies",(req,res)=>{
    console.log("lololworks");
    const csvFiles = [
        "../../Upload/TAC1 ROUND 1 LADIES.csv",
        "../../Upload/TAC1 ROUND 2 LADIES.csv",
        "../../Upload/TAC1 ROUND 3 LADIES.csv",
        "../../Upload/TAC1 ROUND 4 LADIES.csv",
        "../../Upload/TAC1 ROUND 5 LADIES.csv",
        "../../Upload/TAE21 ROUND 1 LADIES.csv",
        "../../Upload/TAE21 ROUND 2 LADIES.csv",
        "../../Upload/TAE21 ROUND 3 LADIES.csv",
        "../../Upload/TAE21 ROUND 4 LADIES.csv",
        "../../Upload/TAE21 ROUND 5 LADIES.csv",
        "../../Upload/TAW11 ROUND 1 LADIES.csv",
        "../../Upload/TAW11 ROUND 2 LADIES.csv",
        "../../Upload/TAW11 ROUND 3 LADIES.csv",
        "../../Upload/TAW11 ROUND 4 LADIES.csv",
        "../../Upload/TAW11 ROUND 5 LADIES.csv",
        "../../Upload/TBS2 ROUND 1 LADIES.csv",
        "../../Upload/TBS2 ROUND 2 LADIES.csv",
        "../../Upload/TBS2 ROUND 3 LADIES.csv",
        "../../Upload/TBS2 ROUND 4 LADIES.csv",
        "../../Upload/TBS2 ROUND 5 LADIES.csv",
];
    csvFiles.forEach((csvFile) => {
        ladiesGamesController.saveAllLadies(csvFile);
    });
});

app.get("/updateRoundsMale",(req,res)=>{
    console.log("lololworks");
    const csvFiles = [
        "../../Upload/TAC1 ROUND 1 MEN.csv",
        "../../Upload/TAC1 ROUND 2 MEN.csv",
        "../../Upload/TAC1 ROUND 3 MEN.csv",
        "../../Upload/TAC1 ROUND 4 MEN.csv",
        "../../Upload/TAC1 ROUND 5 MEN.csv",
        "../../Upload/TAE21 ROUND 1 MEN.csv",
        "../../Upload/TAE21 ROUND 2 MEN.csv",
        "../../Upload/TAE21 ROUND 3 MEN.csv",
        "../../Upload/TAE21 ROUND 4 MEN.csv",
        "../../Upload/TAE21 ROUND 5 MEN.csv",
        "../../Upload/TAW11 ROUND 1 MEN.csv",
        "../../Upload/TAW11 ROUND 2 MEN.csv",
        "../../Upload/TAW11 ROUND 3 MEN.csv",
        "../../Upload/TAW11 ROUND 4 MEN.csv",
        "../../Upload/TAW11 ROUND 5 MEN.csv",
        "../../Upload/TBS2 ROUND 1 MEN.csv",
        "../../Upload/TBS2 ROUND 2 MEN.csv",
        "../../Upload/TBS2 ROUND 3 MEN.csv",
        "../../Upload/TBS2 ROUND 4 MEN.csv",
        "../../Upload/TBS2 ROUND 5 MEN.csv",
];
    csvFiles.forEach((csvFile) => {
        maleGamesController.saveAllMales(csvFile);
    });
});

app.get("/getMalePayers",(req,res)=>{
    res.json({
         playersList: playerController.getMalePlayers()
})})

// app.get("/api/GetTournamentData", (req, res)=>{
//     res.json({
//          tournamentList: tournamentController.getTournamentData()
// })})


app.get("/printMaleData",(req,res)=>{
    console.log("lololworks");
    positionScoreHandler.printMalePlayerDataByMoney();
})


app.get("/updateMalePoints", async (req, res) => {
    console.log("lololworks");
    try {
        await maleplayerController.updateMalePlayerPoints("../../Upload/MALE PLAYERS.csv");
        res.status(200).json({ message: "Player points updated successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update player points." });
    }
});

app.get("/updateFemalePoints", async (req, res) => {
    console.log("lololworks");
    try {
        await femaleplayerController.updateFemalePlayerPoints("../../Upload/FEMALE PLAYERS.csv");
        res.status(200).json({ message: "Player points updated successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update player points." });
    }
});

