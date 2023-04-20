import { useState } from "react";
import * as Components from "./rounds_components";
import { Box } from "@mui/material";
import Icon from "@mui/material/Icon";

export default function AddRound(props) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return props.trigger ? (
    <>
      <Box
        width={"100%"}
        height="100vh"
        sx={{
          align: "center",
          overflow: "auto",
          position: "fixed",
          backgroundColor: "#00000033",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: 0,
        }}
      >
        <Components.Container>
          <Components.SignInContainer>
            <Box
              justifyContent="flex-start"
              alignItems="flex-start"
              display={"flex"}
              sx={{ ml: 2, mt: 1, mb: -5 }}
            >
              <Icon onClick={() => props.setTrigger(false)} sx={{ cursor: "pointer" }}>
                close
              </Icon>
            </Box>
            <Components.Form onSubmit={handleSubmit}>
              <Components.Title>Add Round</Components.Title>
              <Components.Input
                name="playerA"
                type="text"
                placeholder="Player A"
                onChange={handleChange}
                value={inputs.playerA || ""}
              />
              <Components.Input
                name="scoreA"
                type="number"
                placeholder="Score A"
                onChange={handleChange}
                value={inputs.scoreA || ""}
              />
              <br />
              <Components.Input
                name="playerB"
                type="text"
                placeholder="Player B"
                onChange={handleChange}
                value={inputs.playerB || ""}
              />
              <Components.Input
                name="scoreB"
                type="number"
                placeholder="Score B"
                onChange={handleChange}
                value={inputs.scoreB || ""}
              />
              <br />
              <Components.Input
                name="winner"
                type="text"
                placeholder="Winner"
                onChange={handleChange}
                value={inputs.winner || ""}
              />
              <Components.Button type="submit" onClick={() => props.setTrigger(false)}>Add Round</Components.Button>
            </Components.Form>
          </Components.SignInContainer>
        </Components.Container>
      </Box>
    </>
  ) : null;
}
// import {useState} from "react";
// import * as Components from "./rounds_components";
// import { Box } from "@mui/material";
// import Icon from "@mui/material/Icon";

// export default function AddRound(props) {
//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {
//         const playerA = event.target.name;
//         const scoreA = event.target.value;
//         const playerB = event.target.name;
//         const scoreA = event.target.value;
//         const winner = event.target.name;
//         setInputs(values => ({...values, [playerA]: pass}))
//       }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(inputs)
//     };

//      return(props.trigger) ? (
//         <>
//         <Box 
//             width={"100%"}
//             height="100vh"
//             sx={{
//                     align: 'center', 
//                     overflow: 'auto',
//                     position:'fixed',
//                     backgroundColor: '#00000033',
//                     display:'flex',
//                     justifyContent:'center',
//                     alignItems:'center',
//                     top: 0,
//                     left: 0
//                 }}
//         >
//          <Components.Container>
//              <Components.SignInContainer>
//                 <Box
//                     justifyContent="flex-start"
//                     alignItems="flex-start"
//                     display={'flex'}
//                     sx={{ml:2, mt:1, mb:-5}}
//                 >
//                      <Icon onClick={() => props.setTrigger(false)} sx={{cursor:'pointer'}}>close</Icon>
//                 </Box>
//                   <Components.Form
//                     onSubmit={handleSubmit}
//                   >
//                       <Components.Title>Add Round</Components.Title>
//                       <Components.Input name='player_a' type='playerA' placeholder='Player A' onChange={handleChange} value={inputs.playerA} />
//                       <Components.Input name='score_a' type='scoreA' placeholder='Score A' onChange={handleChange} value={inputs.scoreA} />
//                       <br/>
//                       <Components.Input name='player_b' type='playerB' placeholder='Player B' onChange={handleChange} value={inputs.playerB />
//                       <Components.Input name='score_b' type='scoreA' placeholder='Score B' onChange={handleChange} value={inputs.scoreB} />
//                       <br/>
//                       <Components.Input name='winner' type='winner' placeholder='Winner' onChange={handleChange} value={inputs.winner} />
//                       <Components.Button type="add">Add Round</Components.Button>
//                   </Components.Form>
//              </Components.SignInContainer>
//             </Components.Container>
//          </Box>
//         </>
//      ) : "";
// };
