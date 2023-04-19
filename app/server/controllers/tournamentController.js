const conn = require('../dbConn');
const MaleDB = conn.MaleDB.models['Player'];


const GetTournamentData = function getTournamentData() {
    // return Player.find().then()

    
    console.log("Get tournament data!");
    MaleDB.find({ Round: "S1TAC1R1" }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        return result;
      });
      return 0;
//     return  [
//     { 
//         gender: "men",
//         game: 
//         [
//             {
//                 round_no: 1,
//                 round_detail:[
//                     {
//                         player_a: "FP14",
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
//                         player_a: "Hello",
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
//                         player_a: "World",
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
//                         player_a: "React",
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
//                         player_a: "Is",
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
//     },
//     { 
//     gender: "women",
//     game: 
//         [
//             {
//             round_no: 1,
//             round_detail:[
//                 {
//                     player_a: "A",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP15",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP16",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP14",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP14",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 }
//             ]
//         },{
//             round_no: 2,
//             round_detail:[
//                 {
//                     player_a: "Pain",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP15",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP14",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP14",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP14",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 }
//             ]
//         },{
//             round_no: 3,
//             round_detail:[
//                 {
//                     player_a: "N",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP15",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP14",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP14",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP14",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 }
//             ]
//         },{
//             round_no: 4,
//             round_detail:[
//                 {
//                     player_a: "G",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP15",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP14",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP14",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP14",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 }
//             ]
//         },{
//             round_no: 5,
//             round_detail:[
//                 {
//                     player_a: "L",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP15",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP14",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP14",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 },{
//                     player_a: "FP14",
//                     score_a: 2,
//                     player_b: "FP20",
//                     score_b: 0
//                 }
//             ]
//         }
//      ]
//     }
// ]
};


module.exports = {
    getTournamentData: GetTournamentData,
};