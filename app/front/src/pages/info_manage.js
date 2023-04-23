import Footer from "../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import { SportsTennis } from "@mui/icons-material"
// Routes
import routes from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import { useState, useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import EditedTypo from "../material/EditedTypo/EditedTypo";
import { Tournament } from "../data/tournaments_data";
import { empty_Tournament } from "../data/tournaments_data_empty";
import Navbar from "../components/Header";
import axios from 'axios'

export var filetitle;
export var tournaments;
export var levels;

function InfoManage() {
  const navigation = useNavigate();
  
  const [alltournaments, setTournaments] = useState(empty_Tournament);

  const TOURNAMENT_data = function useRoutes() {
    useEffect(() => {
      if(alltournaments === empty_Tournament) {
        axios
        .get('http://localhost:3001/api/TournamentList')
        .then((res) => {
            console.log("Setting tournament");
            setTournaments(res.data);
            //console.log("API GET INSIDE TACDATA! :", filename.data);
            console.log("API DATA FETCHED:", res.data)
        })
        .catch((err) => {
            console.log('Error from useRoutes');
        }
        );
      }
  });
  }
  TOURNAMENT_data();

  const handleListItemClick = (tournament) => {
    tournaments = tournament;
    // levels = level;
    // filetitle = file;
    navigation("/tournament_manage")
  };

  return (
    <>
      <Navbar routes={routes} sticky />

      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <EditedTypo variant="h1" sx={{ mt: 5 }}>
          Information Management
        </EditedTypo>
        <EditedTypo variant="subtitle1" textTransform="capitalize">
          Tournaments
        </EditedTypo>
        <List
          sx={{ width: "70%", bgcolor: "background.paper", mt: "30px" }}
        >
          {alltournaments.map((elem) => (
            <ListItem secondaryAction={<IconButton aria-label="delete"><Delete /></IconButton>} disablePadding>
              <ListItemButton onClick={() => handleListItemClick(elem.name)}>
                <ListItemAvatar>
                  <Avatar>{<SportsTennis />}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={elem.name} secondary={elem.subtitle} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>

      <EditedBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </EditedBox>
    </>
  );
}

export default InfoManage;
