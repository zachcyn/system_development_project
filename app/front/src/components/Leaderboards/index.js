import React from 'react';
import EditedBox from '../../material/EditedBox/EditedBox';
import { Box, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper, Grid, Typography } from '@mui/material';
import colors from "../../assets/theme/base/colors";
import gold from "../../assets/img/gold1.png";
import sliver from "../../assets/img/silver.png";
import bronze from "../../assets/img/bronze.png";

const { white } = colors;

const Leaderboards = (props) => {

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
                            <Typography>Chu Yie Nian</Typography>
                            <Typography>25&nbsp;&nbsp; $25,000</Typography>
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
                            <Typography>Eddy Levinskas</Typography>
                            <Typography>15&nbsp;&nbsp;$10,000</Typography>
                        </Box>
                    </Grid>

                    <Grid item align='center' md={4} bgcolor='grey'>
                        <Box>
                            <Typography>Hatim Bossman</Typography>
                            <Typography>23&nbsp;&nbsp;$6,500</Typography>
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
                            {props.gender.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='center'>{row.Rank}</TableCell>
                                    <TableCell align='center'>{row["Player Name"]}</TableCell>
                                    <TableCell align='center'>{row.Points}</TableCell>
                                    <TableCell align='center'>{row["Prize Money"]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </EditedBox>
        </>
    );
}
export default Leaderboards;
