import { SportsTennis, Leaderboard } from "@mui/icons-material";
import Leaderboards from "../../pages/leaderboards";
import TBS2 from "../../pages/tbs2";
import TAW11 from "../../pages/taw11";
import TAE21 from "../../pages/tae21";
import TAC1 from "../../pages/tac1";

const routes = [
  {
    name: "Tournament",
    icon: <SportsTennis />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Difficulties",
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
            route: "/MaleLeaderboard",
            component: <Leaderboards />,
          },
          {
            name: "Female",
            route: "",
            component: "",
          },
        ],
      },
    ],
  },
];

export default routes;