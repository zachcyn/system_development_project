import Footer from "../Footer/footer";
import Navbar from "../Header";
import {React, useCallback, useState} from "react";
// Routes
import routes
from "../Header/headerRoutes";
import EditedBox from "../../material/EditedBox/EditedBox";
import footerRoutes from "../Footer/footerRoutes";
import { Grid, Stack, Paper, TextField, IconButton } from "@mui/material";
import { ExpandMore, Clear, Delete, Check } from "@mui/icons-material";
import styled from "@emotion/styled";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import EditedTypo from "../../material/EditedTypo/EditedTypo";
import LoggedNavbar from "../LoggedHeader/loggedHeader";
// import { TAC_data } from "../../data/tac_data";


const Accordion = styled((props) => (
    <MuiAccordion diasbleGutters elecatoin={0} {...props}/>
  ))(({ theme }) => ({
    border: `0px solid ${theme.palette.divider}`,
    margin: 10,
    backgroundColor: "transparent",
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ExpandMore sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    // borderRadius: "10px",
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'white',
    // flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(-90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: "transparent",
  }));
  
  const Data = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 4,
  }));
  
  
  const ModifyMatch = (props) => {
    const [values, setValues] = useState("");
      
    const handleChange = useCallback(
        (event) => {
          setValues((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
          }));
        },
        []
      );
    
      const handleSubmit = useCallback(
        (event) => {
          event.preventDefault();
        },
        []
      );

    return (
      <>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
        >
          {props.data.map((elem) => (
            <Grid item key={props.data.indexOf(elem)} width="70%" md={2}>
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
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel-content"
                        id="panel-header"
                      >
                        <EditedTypo display="inline" sx={{textAlign:"right", fontSize:"1.2rem", mr:2}}>{item.round_icon}</EditedTypo>
                        <EditedTypo display="inline" sx={{fontSize:"inherit"}}>Round {item.round_no}</EditedTypo>
                      </AccordionSummary>
                      <AccordionDetails>
                        {item.round_detail.map((details) => (
                              <Stack>
                                <Data>
                                    <form
                                        autoComplete="off"
                                        noValidate
                                        onSubmit={handleSubmit}
                                    >
                                        <Grid container>
                                            <Grid container md={11}>
                                                <Grid item marginRight={2}>
                                                <TextField
                                                    fullWidth
                                                    label="Player A"
                                                    name="firstName"
                                                    onChange={handleChange}
                                                    required
                                                    defaultValue={details.player_a}
                                                    sx={{width:"150px"}}
                                                    />
                                                </Grid>
                                                <Grid item md={1} marginRight={2}>
                                                <TextField
                                                    fullWidth
                                                    label="A Score"
                                                    name="firstName"
                                                    onChange={handleChange}
                                                    required
                                                    defaultValue={details.score_a}
                                                    sx={{width:"75px"}}
                                                    />
                                                </Grid>
                                                <Grid item md={2} marginRight={2}>
                                                <TextField
                                                    fullWidth
                                                    label="Player B"
                                                    name="firstName"
                                                    onChange={handleChange}
                                                    required
                                                    defaultValue={details.player_b}
                                                    sx={{width:"150px"}}
                                                    />
                                                </Grid>
                                                <Grid item md={1} marginRight={2}>
                                                <TextField
                                                    fullWidth
                                                    label="B Score"
                                                    name="firstName"
                                                    onChange={handleChange}
                                                    required
                                                    defaultValue={details.score_b}
                                                    sx={{width:"75px"}}
                                                    />
                                                </Grid>
                                                <Grid item md={2} marginRight={2}>
                                                <TextField
                                                    fullWidth
                                                    label="Winner"
                                                    name="firstName"
                                                    onChange={handleChange}
                                                    required
                                                    defaultValue={details.score_b}
                                                    sx={{width:"150px"}}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container md={1}>
                                                <Grid item>
                                                    <IconButton aria-label="submit">
                                                    <Check />
                                                    </IconButton>
                                                </Grid>
                                                <Grid item>
                                                    <IconButton aria-label="delete">
                                                    <Clear />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        </form>  
                                  </Data>
                              </Stack>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))}
            </Grid>
          ))}
        </Grid>
  
      </>
    );
  }
  
  export default ModifyMatch;
  