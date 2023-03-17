import { SportsTennis, Leaderboard } from "@mui/icons-material";

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
              name: "Difficulty 2.3",
              route: "",
              component: "",
            },
            {
              name: "Difficulty 3.0",
              route: "",
              component: "",
            },
            {
              name: "Difficulty 3.3",
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
              name: "Men",
              route: "",
              component: "",
            },
            {
              name: "Women",
              route: "",
              component: "",
            },
          ],
        },
      ],
    },
];

export default routes;