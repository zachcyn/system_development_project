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
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP15",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP16",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        }
                    ]
                },{
                    round_no: 2,
                    round_detail:[
                        {
                             PlayerA: "Hello",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP15",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        }
                    ]
                },{
                    round_no: 3,
                    round_detail:[
                        {
                             PlayerA: "World",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP15",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        }
                    ]
                },{
                    round_no: 4,
                    round_detail:[
                        {
                             PlayerA: "React",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP15",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        }
                    ]
                },{
                    round_no: 5,
                    round_detail:[
                        {
                             PlayerA: "Is",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP15",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
                        },{
                             PlayerA: "FP14",
                            ScorePlayerA: 2,
                             PlayerB: "FP20",
                            ScorePlayerB: 0
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
                         PlayerA: "A",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP15",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP16",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP14",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP14",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    }
                ]
            },{
                round_no: 2,
                round_detail:[
                    {
                         PlayerA: "Pain",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP15",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP14",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP14",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP14",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    }
                ]
            },{
                round_no: 3,
                round_detail:[
                    {
                         PlayerA: "N",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP15",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP14",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP14",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP14",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    }
                ]
            },{
                round_no: 4,
                round_detail:[
                    {
                         PlayerA: "G",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP15",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP14",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP14",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP14",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    }
                ]
            },{
                round_no: 5,
                round_detail:[
                    {
                         PlayerA: "L",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP15",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP14",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP14",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    },{
                         PlayerA: "FP14",
                        ScorePlayerA: 2,
                         PlayerB: "FP20",
                        ScorePlayerB: 0
                    }
                ]
            }
        ]
        }
    ]
}
]