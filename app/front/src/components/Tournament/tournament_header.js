import EditedTypo from "../../material/EditedTypo/EditedTypo";
import { names,levels } from "../Header";
import { Grid } from "@mui/material";

export default function TournamentHeader() {
    return(
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
        </Grid>
        </>
    )
}
    