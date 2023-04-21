import { Man, Woman } from "@mui/icons-material"
import { TAC_data } from "./tac_data";
import { TAW_data } from "./taw_data";
import { TBS_data } from "./tbs_data";
import { TAE_data } from "./tae_data";

export const Tournament = [
    {
        name: "TAC1",
        //subtitle: "Difficulty Degree 2.7",
        subtitle: "Difficulty Degree xxxxxx",
        icon: <Man />,
        file: TAC_data
    },
    { 
        name: "TAE21",
        subtitle: "Difficulty Degree 2.3",
        icon: <Man />,
        file: TAE_data
    },
    { 
        name: "TAW11",
        subtitle: "Difficulty Degree 3.1",
        icon: <Woman />,
        file: TAW_data
    },
    { 
        name: "TBS2",
        subtitle: "Difficulty Degree 3.25",
        icon: <Woman />,
        file: TBS_data
    }
]