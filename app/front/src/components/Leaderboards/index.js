import React from 'react';
import EditedBox from '../../material/EditedBox/EditedBox';
import { Box, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper, Grid, Typography, Button } from '@mui/material';
import colors from "../../assets/theme/base/colors";
import gold from "../../assets/img/gold1.png";
import sliver from "../../assets/img/silver.png";
import bronze from "../../assets/img/bronze.png";
import EditedButton from "../../material/EditedButton/EditedButton";
import axios from 'axios'
import { useState, useEffect } from "react";
import { Leaderboard_data_empty } from "../../data/Leaderboard_data_empty";
const { white } = colors;


const Leaderboards = (props) => {


    const [Lead, setLead] = useState(Leaderboard_data_empty);
    const [Sorting, setSorting] = useState(props.genderPT);
    const [Data, setData] = useState(Leaderboard_data_empty); 
  // if(filename.data !== tournament[0].title) {
  //   tournament = empty_data;
  // }
  const LEAD_data = function useData() {
    useEffect(() => {
      if(Lead === Leaderboard_data_empty || Sorting[1] !== Data) {
        if(Sorting[0] == "male") {
            console.log("API DATA FETCHED MALES:");    
            axios
            .get('http://localhost:3001/api/MP' + Sorting[1])
            .then((res) => {
                // console.log("Setting tournament");
                setLead(res.data);
                setData(Sorting[1])
                // console.log("API GET INSIDE TACDATA! :", filename.data);
                
            })
            .catch((err) => {
                console.log('Error from useData');
            }
            );
        }
        else
        {
            console.log("API DATA FETCHED FEMALES:");
            axios
            .get('http://localhost:3001/api/FP' + Sorting[1])
            .then((res) => {
                // console.log("Setting tournament");
                setLead(res.data);
                setData(Sorting[1])
                console.log("WOMAN! :", res.data);
                
            })
            .catch((err) => {
                console.log('Error from useData');
            });
        }
      }
  });
  }
  LEAD_data();


    const handleSubmitPT = (genderPT) => {
        console.log(genderPT);
        setSorting(genderPT);
    }

    const handleSubmitPM = (genderPM) => {
        console.log(genderPM)
        setSorting(genderPM);
    }
    return (
        <>
            <EditedBox sx={{ minWidth: '200px', maxWidth: '900px', margin: 'auto', display: "flex", mb: '20px', mt: '50px' }}>
                <Grid container sx={{ fontSize: 15, fontWeight: 'bold', align: 'center', color: white.main }}>

                    <Grid item align='center' md={4}>
                    </Grid>
                    <Grid item align='center' md={4}>
                        <img src={gold} width='20%' height='100%' alt="gold medal" />
                    </Grid>
                    <Grid item align='center' md={4}>
                    </Grid>

                    <Grid item align='center' md={4}>
                    </Grid>
                    <Grid item align='center' md={4} bgcolor='grey'>
                        <Box>
                            <Typography>{Lead[0].ID}</Typography>
                            <Typography>{Lead[0].Points}&nbsp;&nbsp; ${Lead[0].Money}</Typography>
                        </Box>
                    </Grid>
                    <Grid item align='center' md={4}>
                        <img src={sliver} width='20%' height='100%' alt="silver medal" />
                    </Grid>

                    <Grid item align='center' md={4}>
                        <img src={bronze} width='20%' height='100%' alt="bronze medal" />
                    </Grid>
                    <Grid item align='center' md={4} bgcolor='grey'>

                    </Grid>
                    <Grid item align='center' md={4} bgcolor='grey'>
                        <Box>
                            <Typography>{Lead[1].ID}</Typography>
                            <Typography>{Lead[1].Points}&nbsp;&nbsp;${Lead[1].Money}</Typography>
                        </Box>
                    </Grid>

                    <Grid item align='center' md={4} bgcolor='grey'>
                        <Box>
                            <Typography>{Lead[2].ID}</Typography>
                            <Typography>{Lead[2].Points}&nbsp;&nbsp;${Lead[2].Money}</Typography>
                        </Box>
                    </Grid>
                    <Grid item align='center' md={4} bgcolor='grey'>

                    </Grid>
                    <Grid item align='center' md={4} bgcolor='grey'>

                    </Grid>

                    <Grid item align='center' justifyContent='center' md={4} bgcolor='grey'>

                    </Grid>
                    <Grid item align='center' justifyContent='center' md={4} bgcolor='grey'>
                    </Grid>
                    <Grid item align='center' justifyContent='center' md={4} bgcolor='grey'>
                    </Grid>
                </Grid>
            </EditedBox >

            <EditedBox minWidth='200px' maxWidth='900px' margin='auto' display="flex">
                <TableContainer component={Paper}>
                    <EditedBox align='center'>
                        <EditedButton margin='auto' onClick={() => handleSubmitPT(props.genderPT)}>sort by Points</EditedButton>
                        <EditedButton margin='auto' onClick={() => handleSubmitPM(props.genderPM)}>sort by Prize Money</EditedButton>
                    </EditedBox>
                    <Table sx={{ minWidth: 650 }} aria-label="Male Leaderboard">
                        <TableHead sx={{ display: "table-header-group" }}>
                            <TableRow>
                                <TableCell align='center'>Rank</TableCell>
                                <TableCell align='center'>Player Name</TableCell>
                                <TableCell align='center'>Points</TableCell>
                                <TableCell align='center'>Prize Money</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Lead.slice(3).map((row, index) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='center'>{index + 4}</TableCell>
                                    <TableCell align='center'>{row.ID}</TableCell>
                                    <TableCell align='center'>{row.Points}</TableCell>
                                    <TableCell align='center'>${row.Money}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </EditedBox >
        </>
    );
}
export default Leaderboards;
