import { SportsTennis, Leaderboard } from "@mui/icons-material";
import TBS2 from "../../pages/tbs2";
import TAW11 from "../../pages/taw11";
import TAE21 from "../../pages/tae21";
import TAC1 from "../../pages/tac1";
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
            route: "/pages/tac1",
            component: <TAC1 />,
          },
          {
            name: "TAE 21",
            route: "/pages/tae21",
            component: <TAE21 />,
          },
          {
            name: "TAW 11",
            route: "/pages/taw11",
            component: <TAW11 />,
          },
          {
            name: "TBS 2",
            route: "/pages/tbs2",
            component: <TBS2 />,
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