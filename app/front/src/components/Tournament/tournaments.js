import { Grid, Stack, Paper } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import EditedTypo from "../../material/EditedTypo/EditedTypo";
import * as Components from './tour_component';
import {names, levels } from '../Header/index';
import {useState, useEffect} from 'react';

// console.log(names, levels, filename)

const Tournaments = (filename) => {
  
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <EditedTypo variant="h1" sx={{mt:5}}>{names}</EditedTypo>
        <EditedTypo variant="subtitle1" textTransform="capitalize">Degree of Difficulty {levels}</EditedTypo>
        {filename.data.map((elem) => (
          <Grid item key={filename.data.indexOf(elem)} width="70%" md={2}>
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
                  {elem.icon}
                  </EditedTypo>
                {elem.gender}
                </EditedTypo>
                {elem.game.map((item) => (
                  <Components.Accordion>
                    <Components.AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel-content"
                      id="panel-header"
                    >
                      <EditedTypo display="inline" sx={{textAlign:"right", fontSize:"1.2rem", mr:2}}>{item.round_icon}</EditedTypo>
                      <EditedTypo display="inline" sx={{fontSize:"inherit"}}>Round {item.round_no}</EditedTypo>
                    </Components.AccordionSummary>
                    <Components.AccordionDetails>
                      {item.round_detail.map((details) => (
                            <Stack>
                              <Components.Data>
                                <EditedTypo>{details.player_a} vs {details.player_b}</EditedTypo>
                                <EditedTypo>{details.score_a} : {details.score_b}</EditedTypo>
                                </Components.Data>
                            </Stack>
                      ))}
                    </Components.AccordionDetails>
                  </Components.Accordion>
                ))}
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Tournaments;