import { SportsTennis, Leaderboard } from "@mui/icons-material";
import { TAE_data } from "../../data/tae_data";
import { TAC_data } from "../../data/tac_data";
import { TBS_data } from "../../data/tbs_data";
import { TAW_data } from "../../data/taw_data";
import Tournaments_page from "../../pages/tournament_page";
import MaleLeaderboard from "../../pages/maleLeaderboard";
import FemaleLeaderboard from "../../pages/femaleLeaderboard";

const routes = [
  {
    name: "Tournament",
    icon: <SportsTennis />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Tournaments",
        collapse: [
          {
            name: "TAC 1",
            route: "/pages/Tournaments_page",
            component: <Tournaments_page />,
            file: TAC_data,
            level: 2.1,
          },
          {
            name: "TAE 21",
            route: "/pages/tournament_page",
            component: <Tournaments_page />,
            file: TAE_data,
            level: 2.3,
          },
          {
            name: "TAW 11",
            route: "/pages/tournament_page",
            component: <Tournaments_page />,
            file: TAW_data,
            level: 3.1,
          },
          {
            name: "TBS 2",
            route: "/pages/tournament_page",
            component: <Tournaments_page />,
            file: TBS_data,
            level: 3.25,
          },
        ],
      },
    ],
  },
  {
    name: "Leaderboards",
    icon: <Leaderboard />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Gender",
        collapse: [
          {
            name: "Male",
            route: "/pages/maleLeaderboard",
            component: <MaleLeaderboard />,
          },
          {
            name: "Female",
            route: "/pages/femaleLeaderboard",
            component: <FemaleLeaderboard />,
          },
        ],
      },
    ],
  },
];

export default routes;