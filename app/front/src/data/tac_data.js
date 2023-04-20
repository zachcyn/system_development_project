import { Man, Woman, LooksOne, LooksTwo, Looks3, Looks4, Looks5 } from "@mui/icons-material"
import axios from 'axios'
import React, {useState, useEffect} from 'react'

// export const TAC_data = function useData() {
//     const [tournament, setTournament] = useState([]);
    
//     useEffect(() => {
//         axios
//         .get('http://localhost:3001/api/TAC1')
//         .then((res) => {
//             setTournament(res.data);
//             console.log("API GET INSIDE TACDATA! :", res.data);
//             //console.log("API AFTER! :", books[0].PlayerA);
//         })
//         .catch((err) => {
//             console.log('Error from GetTournamentData');
//         });
//     }, []);
//     return tournament;
//     //console.log("API AFTER! :", books[0]);
// }

export const TAC_data = [
    { title: "TAC1!!!!!",
      difficulty: 2.3,
      details:
        [
        { gender: "men",
        game: 
            [
                {
                    round_no: 1,
                    round_detail:[
                        {
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP15",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP16",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        }
                    ]
                },{
                    round_no: 2,
                    round_detail:[
                        {
                            player_a: "Hello",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP15",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        }
                    ]
                },{
                    round_no: 3,
                    round_detail:[
                        {
                            player_a: "World",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP15",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        }
                    ]
                },{
                    round_no: 4,
                    round_detail:[
                        {
                            player_a: "React",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP15",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        }
                    ]
                },{
                    round_no: 5,
                    round_detail:[
                        {
                            player_a: "Is",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP15",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        },{
                            player_a: "FP14",
                            score_a: 2,
                            player_b: "FP20",
                            score_b: 0
                        }
                    ]
                }
            ]
        },
        { 
        gender: "women",
        game: 
            [
                {
                round_no: 1,
                round_detail:[
                    {
                        player_a: "A",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP15",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP16",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP14",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP14",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    }
                ]
            },{
                round_no: 2,
                round_detail:[
                    {
                        player_a: "Pain",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP15",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP14",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP14",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP14",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    }
                ]
            },{
                round_no: 3,
                round_detail:[
                    {
                        player_a: "N",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP15",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP14",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP14",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP14",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    }
                ]
            },{
                round_no: 4,
                round_detail:[
                    {
                        player_a: "G",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP15",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP14",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP14",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP14",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    }
                ]
            },{
                round_no: 5,
                round_detail:[
                    {
                        player_a: "L",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP15",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP14",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP14",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    },{
                        player_a: "FP14",
                        score_a: 2,
                        player_b: "FP20",
                        score_b: 0
                    }
                ]
            }
        ]
        }
    ]
}
]