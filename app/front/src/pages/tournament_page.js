import Footer from "../components/Footer/footer";
import Navbar from "../components/Header";

// Routes
import routes

from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import Tournaments from '../components/Tournament/tournaments';
import { filename } from "../components/Header/index";
import TournamentHeader from "../components/Tournament/tournament_header";
import { TAC_data } from "../data/tac_data";

function Tournament_page() {
  return (
    <>
      <Navbar
        routes={routes}
        file = {TAC_data}
        sticky
      />

      <TournamentHeader />
      <Tournaments data={filename} />

      <EditedBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </EditedBox>

    </>
  );
}

export default Tournament_page;
