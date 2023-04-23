import Footer from "../components/Footer/footer";
import Navbar from "../components/Header";
import Leaderboards from "../components/Leaderboards/index";
import routes from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import { Typography } from '@mui/material';
import femaleLeaderboard_data from "../data/femaleLeaderboard_data";
import { Leaderboard_data_empty } from "../data/Leaderboard_data_empty";
function FemaleLeaderboard() {
    const femalePT = ["female", 0]
    const femalePM = ["female", 1]
    return (
        <>
            <Navbar
                routes={routes}
                sticky
            />
            <Typography variant='h1' align='center'>Female Leaderboard</Typography>
            <Leaderboards data={Leaderboard_data_empty} genderPT={femalePT} genderPM={femalePM} />

            <EditedBox pt={6} px={1} mt={6}>
                <Footer content={footerRoutes} />
            </EditedBox>
        </>
    );
}
export default FemaleLeaderboard;