import Footer from "../components/Footer/footer";
import React from "react";
import LoggedNavbar from "../components/LoggedHeader/loggedHeader";
import {useNavigate} from 'react-router-dom';

// Routes
import routes

from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import { Grid, List, ListItem, ListItemButton, IconButton, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { Delete } from "@mui/icons-material";
import EditedTypo from "../material/EditedTypo/EditedTypo";
import { Tournament } from "../data/tournaments";
import ModifyMatch from '../components/Modifier/modify_match';


function InfoManage() {
  const navigation = useNavigate();
  // const handleOnClick = () => {navigation("/tac_manage")};
  return (
    <>
      <LoggedNavbar
        routes={routes}
        sticky
      />

      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <EditedTypo variant="h1" sx={{mt:5}}>Information Management</EditedTypo>
        <EditedTypo variant="subtitle1" textTransform="capitalize">Tournaments</EditedTypo>
        <List sx={{ width: '70%', bgcolor: 'background.paper', mt:"30px"}}>
              {Tournament.map((elem) => (
                <ListItem
                  secondaryAction={
                    <IconButton aria-label="delete">
                      <Delete />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton 
                  onClick={() => {navigation(elem.path)}}>
                  <ListItemAvatar>
                    <Avatar>
                      {elem.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={elem.name}
                    secondary={elem.subtitle}
                  />
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
