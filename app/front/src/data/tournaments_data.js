import { Man, Woman } from "@mui/icons-material"
import { TAC_data } from "../data/tac_data";
import { TAW_data } from "./taw_data";
import { TBS_data } from "./tbs_data";
import { TAE_data } from "./tae_data";

export const Tournament = [
    {
        name: "TAC1",
        subtitle: "Difficulty Degree 2.7",
        icon: <Man />,
        path: "/tac_manage",
        file: TAC_data
    },
    { 
        name: "TAE21",
        subtitle: "Difficulty Degree 2.3",
        icon: <Man />,
        path: "/tae_manage",
        file: TAE_data
    },
    { 
        name: "TAW11",
        subtitle: "Difficulty Degree 3.1",
        icon: <Woman />,
        path: "/taw_manage",
        file: TAW_data
    },
    { 
        name: "TBS2",
        subtitle: "Difficulty Degree 3.25",
        icon: <Woman />,
        path: "/tbs_manage",
        file: TBS_data
    }
]