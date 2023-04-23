import Footer from "../components/Footer/footer";
import Navbar from "../components/Header";
import Leaderboards from "../components/Leaderboards/index";
import routes from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import { Typography } from '@mui/material';
import maleLeaderboard_data from "../data/maleLeaderboard_data";
// import Leaderboard_data_empty from "../data/Leaderboard_data_empty";



function MaleLeaderboard() {
  const malePT = ["male", 0]
  const malePM = ["male", 1]
  return (
    <>
      <Navbar
        routes={routes}
        sticky
      />
      <Typography variant='h1' align='center'>Male Leaderboard</Typography>
      <Leaderboards data={""} genderPT={malePT} genderPM={malePM} />

      <EditedBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </EditedBox>
    </>
  );
}
export default MaleLeaderboard;