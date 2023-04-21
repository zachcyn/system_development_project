import { SportsTennis } from "@mui/icons-material"
import { TAC_data } from "./tac_data";
import { TAW_data } from "./taw_data";
import { TBS_data } from "./tbs_data";
import { TAE_data } from "./tae_data";

export const Tournament = [
    {
        name: "TAC1",
        subtitle: "Difficulty Degree 2.7",
        icon: <SportsTennis />,
        file: TAC_data
    },
    { 
        name: "TAE21",
        subtitle: "Difficulty Degree 2.3",
        icon: <SportsTennis />,
        file: TAE_data
    },
    { 
        name: "TAW11",
        subtitle: "Difficulty Degree 3.1",
        icon: <SportsTennis />, 
        file: TAW_data
    },
    { 
        name: "TBS2",
        subtitle: "Difficulty Degree 3.25",
        icon: <SportsTennis />,
        file: TBS_data
    }
]