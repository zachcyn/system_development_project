import Footer from "../Footer/footer";
import Navbar from "../Header";
import {React, useCallback, useState, useEffect} from "react";
import axios from 'axios'
import { Grid, Stack, Paper, TextField, IconButton, Container, Box, Button, Icon } from "@mui/material";
import { ExpandMore, Clear, Delete, Check } from "@mui/icons-material";
import styled from "@emotion/styled";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import EditedTypo from "../../material/EditedTypo/EditedTypo";
import EditedButton from "../../material/EditedButton/EditedButton";
import EditedBox from "../../material/EditedButton/EditedButton";
import colors from '../../assets/theme/base/colors';
import AddRound from "./add_round";
import DeleteRound from "./delete_round";
import {men, women, one, two, three, four, five, six} from "../../assets/logo/logo";
import { empty_data } from "../../data/empty_data";
const { white, text, error, primary, success, dark, secondary, transparent } = colors;


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
    const [, setValues] = useState("");
    const [addPopup, setAddPopup] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false);

    const [tournament, setTournament] = useState(empty_data);
    const TOUR_data = function useData() {
    useEffect(() => {
      if(props.data !== tournament[0].title) {
        axios
        .get('http://localhost:3001/api/T/' + props.data)
        .then((res) => {
            console.log("Setting tournament");
            setTournament(res.data);
            console.log("API GET INSIDE TACDATA! :", props.data);
            console.log("API DATA FETCHED:", res.data)
        })
        .catch((err) => {
            console.log('Error from useData');
        }
        );
      }
    });
    }
    TOUR_data();
    console.log("INSIDE MATCH: ", props.data);

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
          {tournament?.map((elem) => (
            <Grid item key={tournament.indexOf(elem)} width="70%" md={2}>
              {elem.details.map((index) => (
                <>
                  <Box>
                  <EditedTypo textTransform="capitalize" sx={{textAlign:"center", mt:2}}>{genderChecker(index.gender)}{index.gender}</EditedTypo>
                  {index.game.map((item) => (
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel-content"
                        id="panel-header"
                      >
                        <EditedTypo display="inline" sx={{textAlign:"right", fontSize:"1.2rem", mr:2}}>{numberChecker(item.round_no)}</EditedTypo>
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
                                            <Grid container md={10}>
                                                <Grid item marginRight={2}>
                                                <TextField
                                                    fullWidth
                                                    label="Player A"
                                                    name="firstName"
                                                    onChange={handleChange}
                                                    required
                                                    defaultValue={details.player_a}
                                                    sx={{width:"120px"}}
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
                                                <Grid item md={2} marginRight={2} marginLeft={2}>
                                                <TextField
                                                    fullWidth
                                                    label="Player B"
                                                    name="firstName"
                                                    onChange={handleChange}
                                                    required
                                                    defaultValue={details.player_b}
                                                    sx={{width:"120px"}}
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
                                                <Grid item md={2} marginRight={2} marginLeft={2}>
                                                <TextField
                                                    fullWidth
                                                    label="Winner"
                                                    name="firstName"
                                                    onChange={handleChange}
                                                    required
                                                    defaultValue={details.score_b}
                                                    sx={{width:"120px"}}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container md={2}>
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
                  </Box>
                  </>
                  ))}
            </Grid>
          ))}

          <Box
            sx={{display:"flex", justifyContent:"space-between", width:"70%",padding:"16px", ml:2}}
          >
            <Button 
              onClick={() => setAddPopup(true)} 
              variant="contained" 
              sx= {{
                bgcolor: success.main, 
                display:'flex',
                alignSelf:"flex-start", 
                justifyContent:"flex-start", 
                color: white.main,

                "&:hover": {
                  backgroundColor: success.focus,
                  color: white.focus,
                }
                }}
            >
              Add Round
            </Button>
            <AddRound trigger={addPopup} setTrigger={setAddPopup} />
            <Button 
              onClick={() => setDeletePopup(true)}
             variant="contained" 
             sx= {{
              bgcolor: error.main, 
              display:'flex',
              alignSelf:"flex-end", 
              justifyContent:"flex-end", 
              color: white.main,

              "&:hover": {
                backgroundColor: error.focus,
                color: white.focus,
              }
              }}
            >
              Delete Round
            </Button>
            <DeleteRound trigger={deletePopup} setTrigger={setDeletePopup} />
          </Box>
</Grid>

  
      </>
    );
  }
  
  export default ModifyMatch;
  