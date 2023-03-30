import { SportsTennis, Leaderboard } from "@mui/icons-material";
import Leaderboards from "../../pages/leaderboards";

const routes = [
  {
    name: "Tournament",
    icon: <SportsTennis />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Difficulty Level",
        collapse: [
          {
            name: "Level 2.3",
            route: "",
            component: "",
          },
          {
            name: "Level 3.0",
            route: "",
            component: "",
          },
          {
            name: "Level 3.3",
            route: "",
            component: "",
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