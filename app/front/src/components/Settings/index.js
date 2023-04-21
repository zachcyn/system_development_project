import {useContext, useState} from "react";
import * as Components from "./settings_components"
import { Box, Divider, List, ListItemIcon, ListItemText, ListSubheader, Switch, Icon, ListItem } from "@mui/material";
import { Brightness4, Settings} from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";

function SettingsPage(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(inputs);
        props.setTrigger(false);
        props.setLogged(true);
    };

     return(props.trigger) ? (
        <>
        <Box
        width={"100%"}
        height="100vh"
        sx={{
          align: "center",
          overflow: "auto",
          position: "fixed",
          backgroundColor: "#00000033",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: 0,
        }}
      >
        <Components.Container>
          <Components.ItemContainer>
            <Box
              justifyContent="flex-start"
              alignItems="flex-start"
              display={"flex"}
              sx={{ ml: 2, mt: 1, mb: -5 }}
            >
              <Icon onClick={() => props.setTrigger(false)} sx={{ cursor: "pointer" }}>
                close
              </Icon>
            </Box>
            <List
                sx={{ mt:5, ml:10, width: '70%', bgcolor: 'background.paper' }}
                subheader={<ListSubheader>Settings</ListSubheader>}
                >
                <ListItem>
                    <ListItemIcon>
                    <Brightness4 />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Dark Mode" />
                    <Switch
                    edge="end"
                    />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                    <Settings />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-bluetooth" primary="Coming Soon..." />
                </ListItem>
                </List>
          </Components.ItemContainer>
        </Components.Container>
      </Box>
        </>
     ) : "";
}

export default SettingsPage;