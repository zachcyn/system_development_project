import { Grid, Stack, Paper, Box, Icon } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import EditedTypo from "../../material/EditedTypo/EditedTypo";
import * as Components from './tour_component';
import {men, women, one, two, three, four, five, six} from "../../assets/logo/logo";

const Tournaments = (filename) => {
  
  function genderChecker(gender){
    if (gender === "men"){
      return (<Icon>{men}</Icon>)
    } 
    if (gender === 'women'){
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

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center">
        {filename.data?.map((elem) => (
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
                                <EditedTypo>{details.player_a} vs {details.player_b}</EditedTypo>
                                <EditedTypo>{details.score_a} : {details.score_b}</EditedTypo>
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