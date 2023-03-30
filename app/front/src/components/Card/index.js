import React from "react";
import { Typography, Button, Card, CardContent, Grid, Container, Paper } from "@mui/material";

const sxCard = {
    minWidth: 150,
    minHeight: 150,
    maxWidth: 200,
}

const sxGridCont = {
    maxWidth: 200,
    maxHeight: 200,
    margin: 'auto',
}

const sxButton = {
    bgcolor: "white",
    ":hover": {
        bgcolor: "blue",
        color: 'black',
    }
};

const cards = [1, 2, 3, 4]

const Cards = () => {
    return (
        <>
            <Container minWith='md'>
                <Grid container>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={3} align='center' margin='30px 0'>
                            <Card sx={sxCard}>
                                <Button variant="contained" sx={sxButton}>
                                    <CardContent>
                                        <Grid container sx={sxGridCont}>
                                            <Grid xs={12} sm={12} md={12}>
                                                <Typography variant="h6">TAC1 Women</Typography>
                                            </Grid>
                                            <Grid xs={12} sm={12} md={12}>
                                                <Typography variant="body1">Round 1</Typography>
                                            </Grid>
                                            <Grid xs={12} sm={12} md={12}>
                                                <Typography variant="h6" fontSize={13}>Player 1 v Player 2</Typography>
                                            </Grid>
                                            <Grid xs={6} sm={6} md={6}>
                                                <Typography color="red" variant="h5">2</Typography>
                                            </Grid>
                                            <Grid xs={6} sm={6} md={6}>
                                                <Typography color="lightgreen" variant="h5">3</Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
};

export default Cards;