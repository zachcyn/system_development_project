import { Grid, Stack, Paper, Box, Icon } from "@mui/material";
import { ExpandMore, Refresh } from "@mui/icons-material";
import EditedTypo from "../../material/EditedTypo/EditedTypo";
import * as Components from './tour_component';
import {men, women, one, two, three, four, five, six} from "../../assets/logo/logo";
import { Fragment, useState, useEffect, useRef, useCallback } from "react";
import axios from 'axios'
import { useAsync } from "react-async"
import Async from "react-async";
import { empty_data } from "../../data/empty_data";
import names from "../Header/index";

const Tournaments = (filename) => {
  const [tournament, setTournament] = useState(empty_data);
  // const TAC_data = function useData() {
  //   useEffect(() => {
  //       axios
  //       .get('http://localhost:3001/api/T/' + filename.data)
  //       .then((res) => {
  //           setTournament(res.data);
  //           console.log("API GET INSIDE TACDATA! :", filename.data);
  //           console.log("API DATA FETCHED:", res.data)
  //       })
  //       .catch((err) => {
  //           console.log('Error from useData');
  //       });
  //   }, []);
  // }
  const TAC_data = function useData() {
    useEffect(() => {
      if(filename.data !== tournament[0].title) {
        axios
        .get('http://localhost:3001/api/T/' + filename.data)
        .then((res) => {
            console.log("Setting tournament");
            setTournament(res.data);
            console.log("API GET INSIDE TACDATA! :", filename.data);
            console.log("API DATA FETCHED:", res.data)
        })
        .catch((err) => {
            console.log('Error from useData');
        }
        );
      }
  });
  }
  TAC_data();
  console.log(filename.data, ":Data tour:", tournament[0].title)
  if(filename.data !== tournament[0].title){
    console.log("False");
  }
  
  function genderChecker(gender){
    if (gender === "men"){
      return (<Icon>{men}</Icon>)
    } 
    if (gender === 'women' || gender === "ladies"){
      return (<Icon>{women}</Icon>)
    }
  }

  function numberChecker(number){
    if (number === 1){
      return (<Icon>{one}</Icon>)
    }
    if (number === 2){
      return (<Icon>{two}</Icon>)
    }
    if (number === 3){
      return (<Icon>{three}</Icon>)
    }
    if (number === 4){
      return (<Icon>{four}</Icon>)
    }
    if (number === 5){
      return (<Icon>{five}</Icon>)
    }
    if (number === 6){
      return (<Icon>{six}</Icon>)
    }
  }
  console.log(empty_data);
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center">
        <EditedTypo variant="h1" sx={{mt:5}}>{tournament[0].title}</EditedTypo>
        <EditedTypo variant="subtitle1" textTransform="capitalize">Degree of Difficulty {tournament[0].difficulty}</EditedTypo>

        {tournament.map((elem) => (
          <Grid item key={tournament.indexOf(elem)} width="70%" md={2}>
              <EditedTypo 
              textTransform="capitalize" 
              sx={{textAlign: "center", 
              fontSize:"1.2rem", 
              "@media (min-width:600px)" : {fontSize: '1.5rem'}}}
              >
                <EditedTypo 
                display="inline" 
                sx={{fontSize:"inherit"}}
                >
                  </EditedTypo>
                  </EditedTypo>
                  {elem.details.map((information) => (
                    <Box>
                    <EditedTypo textTransform="capitalize" sx={{textAlign:"center", mt:2}}>{genderChecker(information.gender)}{information.gender}</EditedTypo>
                {information.game.map((item) => (
                  <Components.Accordion>
                    <Components.AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel-content"
                      id="panel-header"
                    >
                      <EditedTypo display="inline" sx={{textAlign:"right", fontSize:"1.2rem", mr:2}}>{numberChecker(item.round_no)}</EditedTypo>
                      <EditedTypo display="inline" sx={{fontSize:"inherit"}}>Round {item.round_no}</EditedTypo>
                    </Components.AccordionSummary>
                    <Components.AccordionDetails>
                      {item.round_detail.map((details) => (
                            <Stack>
                              <Components.Data>
                                <EditedTypo>{details.PlayerA} vs {details.PlayerB}</EditedTypo>
                                <EditedTypo>{details.ScorePlayerA} : {details.ScorePlayerB}</EditedTypo>
                                </Components.Data>
                            </Stack>
                      ))}
                    </Components.AccordionDetails>
                  </Components.Accordion>
                ))}
                </Box>
              ))}
          </Grid>
        ))}
      </Grid>  
    </>
  );   
}

export default Tournaments;