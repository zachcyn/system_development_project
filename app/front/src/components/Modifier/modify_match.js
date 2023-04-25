import { React, useState, useEffect, useRef } from "react";
import axios from 'axios'
import { Grid, Stack, Paper, TextField, IconButton, Box, Button, Icon, Skeleton } from "@mui/material";
import { ExpandMore, Clear, Check } from "@mui/icons-material";
import styled from "@emotion/styled";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import EditedTypo from "../../material/EditedTypo/EditedTypo";
import colors from '../../assets/theme/base/colors';
import AddRound from "./add_round";
import { men, women } from "../../assets/logo/logo";
import { empty_data } from "../../data/empty_data";
import PropTypes from "prop-types";
const { white, success } = colors;


const Accordion = styled((props) => (
  <MuiAccordion diasbleGutters elecatoin={0} {...props} />
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
  const [addPopup, setAddPopup] = useState(false);
  const [tournament, setTournament] = useState(empty_data);
  const [values, setValues] = useState({});
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [sA, setSA] = useState();
  const [sB, setSB] = useState();

  const TOUR_data = function useData() {
    useEffect(() => {
      if (props.data !== tournament[0].title) {
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

  function genderChecker(gender) {
    if (gender === "men") {
      return (<Icon>{men}</Icon>)
    }
    if (gender === 'women' || gender === "ladies") {
      return (<Icon>{women}</Icon>)
    }
  }

  // const handleChange = useCallback(
  //     (event) => {
  //       setValues((prevState) => ({
  //         ...prevState,
  //         [event.target.name]: event.target.value
  //       }));
  //     },
  //     []
  //   );

  // let tempValues;
  // console.log(tempValues[0][1]);

  useEffect(() => {
    let tempValues = new Object();
    // setValues(tempValues)
  }, []);

  // console.log(values);

  const handleChange = (index) => {
      let tempValues = values;
      for (let i = 0; i < tournament[0].details[0].game.length; i++) {
        console.log(a.current)
        tempValues[index] = [a.current.value, sA.current.value, b.current.value, sB.current.value];
      };
      setValues(tempValues);
  }

  const handleSubmit = (event, index) => {
    event.preventDefault();
    console.log(index);
    console.log(values);
  };

  function handleDelete(info) {
    console.log(info);
  }

  const loading = loadingChecker(tournament[0].title);

  function loadingChecker(data) {
    if (data !== empty_data[0].title) {
      return true;
    } else {
      return false;
    }
  }
  // if(tournament[0].title === empty_data[0].title){
  //   return (<EditedTypo variant="h1" sx={{mt:5}} align='center'>Loading</EditedTypo>)
  // }

  return (
    <>
      {(loading ? (
        <>
          <EditedTypo variant="h1" sx={{ mt: 5 }} align='center'>{tournament[0].title}</EditedTypo>
          <EditedTypo variant="subtitle1" textTransform="capitalize" align='center'>Difficulty Degree {tournament[0].difficulty}</EditedTypo>
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
                      <EditedTypo textTransform="capitalize" sx={{ textAlign: "center", mt: 2 }}>{genderChecker(index.gender)}{index.gender}</EditedTypo>
                      {index.game.map((item) => (
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel-content"
                            id="panel-header"
                          >
                            <IconButton aria-label="delete" display="inline" sx={{ fontSize: "1.2rem" }} onClick={() => { handleDelete(item.round_no) }}>
                              <Clear />
                            </IconButton>
                            <EditedTypo display="inline" sx={{ fontSize: "inherit" }}>Round {item.round_no}</EditedTypo>
                          </AccordionSummary>
                          <AccordionDetails>
                            {item.round_detail.filter(details => details.PlayerA !== empty_data[0].details[0].game[0].round_detail[0].PlayerA).map((details) => (
                              <Stack>
                                <Data>
                                  <form
                                    autoComplete="off"
                                    noValidate
                                    onSubmit={(event) => handleSubmit(event, details._id)}
                                    onChange={() => handleChange(details._id)}
                                  >
                                    <Grid container>
                                      <Grid container md={10}>
                                        <Grid item marginRight={2}>
                                          <TextField
                                            key={item.round_detail.indexOf(details)}
                                            fullWidth
                                            label="Player A"
                                            id="a"
                                            onChange={(event) => setA(event.target.value)}
                                            required
                                            defaultValue={details.PlayerA}
                                            value={values.playerA}
                                            sx={{ width: "120px" }}
                                          />
                                        </Grid>
                                        <Grid item md={1} marginRight={2}>
                                          <TextField
                                            fullWidth
                                            label="A Score"
                                            id="sA"
                                            onChange={(event) => setSA(event.target.value)}
                                            required
                                            defaultValue={details.ScorePlayerA}
                                            value={values.scoreA}
                                            sx={{ width: "75px" }}
                                          />
                                        </Grid>
                                        <Grid item md={2} marginRight={2} marginLeft={2}>
                                          <TextField
                                            fullWidth
                                            label="Player B"
                                            id="b"
                                            onChange={(event) => setB(event.target.value)}
                                            required
                                            defaultValue={details.PlayerB}
                                            value={values.playerB}
                                            sx={{ width: "120px" }}
                                          />
                                        </Grid>
                                        <Grid item md={1} marginRight={2}>
                                          <TextField
                                            fullWidth
                                            label="B Score"
                                            id="sB"
                                            onChange={(event) => setSB(event.target.value)}
                                            required
                                            defaultValue={details.ScorePlayerB}
                                            value={values.scoreB}
                                            sx={{ width: "75px" }}
                                          />
                                        </Grid>
                                      </Grid>
                                      <Grid container md={2}>
                                        <Grid item>
                                          <IconButton aria-label="submit" type="submit">
                                            <Check />
                                          </IconButton>
                                        </Grid>
                                        <Grid item>
                                          <IconButton aria-label="delete" onClick={() => { handleDelete(details._id) }}>
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
              display={"flex"}
              alignItems="center"
              justifyItems="center"
              justifyContent={"center"}
              sx={{ width: "70%", padding: 2 }}
            >
              <Button
                onClick={() => setAddPopup(true)}
                variant="contained"
                sx={{
                  bgcolor: success.main,
                  color: white.main,

                  "&:hover": {
                    backgroundColor: success.focus,
                    color: white.focus,
                  }
                }}
              >
                Add Round
              </Button>
            </Box>
            <AddRound trigger={addPopup} setTrigger={setAddPopup} />
          </Grid>
        </>
      ) : (
        <>
          <Grid
            container
            spacing={2}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <EditedTypo variant="h1" sx={{ mt: 5 }} align='center' width="20%"><Skeleton variant="text" animation="wave" /></EditedTypo>
            <EditedTypo variant="subtitle1" textTransform="capitalize" align='center' width="10%"><Skeleton variant="text" animation="wave" /></EditedTypo>
            {tournament?.map((elem) => (
              <Grid item key={tournament.indexOf(elem)} width="70%" md={2}>
                {elem.details.map((index) => (
                  <>
                    <Box display="flex" alignItems={"center"} justifyContent={"center"}>
                      <EditedTypo width="15%" textTransform="capitalize" sx={{ textAlign: "center", mt: 2 }}><Skeleton variant="text" animation="wave" /></EditedTypo>
                    </Box>
                    {index.game.map((item) => (
                      <Box>
                        <Skeleton height={60} key={index.game.indexOf(item)} variant="rectangular" animation="wave" sx={{ mb: 2 }} />
                        <Skeleton height={60} key={index.game.indexOf(item)} variant="rectangular" animation="wave" />
                        <Skeleton height={60} key={index.game.indexOf(item)} variant="rectangular" animation="wave" sx={{ mt: 2 }} />
                      </Box>
                    ))}

                  </>
                ))}
              </Grid>
            ))}
          </Grid>
        </>
      )
      )}
    </>
  );
}

ModifyMatch.propTypes = {
  loading: PropTypes.bool

};



export default ModifyMatch;
