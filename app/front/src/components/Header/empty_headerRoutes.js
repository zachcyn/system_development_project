import { SportsTennis, Leaderboard } from "@mui/icons-material";
import { TAE_data } from "../../data/tae_data";
import { TAC_data } from "../../data/tac_data";
import { TBS_data } from "../../data/tbs_data";
import { TAW_data } from "../../data/taw_data";
import Tournaments_page from "../../pages/tournament_page";
import FemaleLeaderboard from "../../pages/femaleLeaderboard";
import MaleLeaderboard from "../../pages/maleLeaderboard";
import { empty_data } from "../../data/empty_data";

const empty_routes = [
  {
    name: "Tournament",
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Loading Tournaments...",
        collapse: [
          {
            route: "",
            tournament_name: "Loading...",
            // file: empty_data,
          },
        ],
      },
    ],
  },
  {
    name: "Leaderboards",
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Loading...",
        collapse: [
          {
            name: "Loading...",
            gender: "Male",
            route: "/pages/maleLeaderboard",
          },
          {
            name: "Loading...",
            gender: "Female",
            route: "/pages/femaleLeaderboard",
          },
        ],
      },
    ],
  },
];

export default empty_routes;