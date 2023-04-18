const conn = require('../dbConn');
const csvhandler = require('./csvhandler')
const femalePlayersController = require('./femalePlayersController')
const ladiesGamesController = require('./ladiesGamesController')
const maleGamesController = require('./maleGamesController')
const malePlayersController = require('./malePlayersController')
const prizeMoneyController = require('./prizeMoneyController')
const rankingPointsController = require('./rankingPointsController')
const FEMALEPLAYER = conn.FMaleDB.models['Player'];
const FMaleGame = conn.FMaleDB.models['Game'];
const MALEGame = conn.MaleDB.models['Game'];
const MALEPLAYER = conn.MaleDB.models['Player'];
const TournModel = conn.TournDB.models['Tournament'];
const RankingPoints = conn.TournDB.models['RankingPoints']



const addMalePlayerPoints = function(/ADD VARIABLES HERE/){

    // for list of players from malePlayersController based on id
    // go through the database and find all the matches they have played and their scores
    // add all the scores and get the players total point sfor each player
    // print this as console.log


}

const calcPlayerPosition = function(){

}