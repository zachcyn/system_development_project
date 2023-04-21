import Footer from "../components/Footer/footer";
import Navbar from "../components/Header";

// Routes
import routes

from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import Tournaments from '../components/Tournament/tournaments';
import { filename, names } from "../components/Header/index";
import TournamentHeader from "../components/Tournament/tournament_header";
import { TAC_data } from "../data/tac_data";

import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Tournament_page() {
  return (
    <>
      <Navbar
        routes={routes}
        sticky
      />

      {/* <TournamentHeader /> */}
      <Tournaments data={names} />

      <EditedBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </EditedBox>

    </>
  );
}

export default Tournament_page;
