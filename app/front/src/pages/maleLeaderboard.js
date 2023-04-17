import Footer from "../components/Footer/footer";
import Navbar from "../components/Header";
import Leaderboards from "../components/Leaderboards/index";
import routes from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import colors from "../assets/theme/base/colors";
import maleLeaderboard_data from "../data/maleLeaderboard_data";

function MaleLeaderboard() {
  return (
    <>
      <Navbar
        routes={routes}
        sticky
      />
      <Typography variant='h1' align='center'>Male Leaderboard</Typography>
      <Leaderboards gender={maleLeaderboard_data} />

      <EditedBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </EditedBox>
    </>
  );
}
export default MaleLeaderboard;
