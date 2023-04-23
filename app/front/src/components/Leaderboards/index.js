import React from 'react';
import EditedBox from '../../material/EditedBox/EditedBox';
import { Box, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper, Grid, Typography, Button } from '@mui/material';
import colors from "../../assets/theme/base/colors";
import gold from "../../assets/img/gold1.png";
import sliver from "../../assets/img/silver.png";
import bronze from "../../assets/img/bronze.png";
import EditedButton from "../../material/EditedButton/EditedButton";

const { white } = colors;


const Leaderboards = (props) => {

    const handleSubmitPT = (genderPT) => {
        console.log(genderPT)
    }

    const handleSubmitPM = (genderPM) => {
        console.log(genderPM)
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
                            <Typography>{props.data[0].PlayerName}</Typography>
                            <Typography>{props.data[0].Points}&nbsp;&nbsp; ${props.data[0].PrizeMoney}</Typography>
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
                            <Typography>{props.data[1].PlayerName}</Typography>
                            <Typography>{props.data[1].Points}&nbsp;&nbsp;${props.data[1].PrizeMoney}</Typography>
                        </Box>
                    </Grid>

                    <Grid item align='center' md={4} bgcolor='grey'>
                        <Box>
                            <Typography>{props.data[2].PlayerName}</Typography>
                            <Typography>{props.data[2].Points}&nbsp;&nbsp;{props.data[2].PrizeMoney}</Typography>
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
                            {props.data.slice(3).map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='center'>{row.Rank}</TableCell>
                                    <TableCell align='center'>{row.PlayerName}</TableCell>
                                    <TableCell align='center'>{row.Points}</TableCell>
                                    <TableCell align='center'>{row.PrizeMoney}</TableCell>
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
