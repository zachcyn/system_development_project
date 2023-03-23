import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import * as React from 'react';
import SignInMV from "./mvLogin";
import SignUpMV from "./mvSignUp";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


export default function PopUpMV(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (props.trigger) ? (
                <Box 
                    width={"100%"}
                    height="100vh"
                    sx={{
                            align: 'center', 
                            overflow: 'auto',
                            position:'fixed',
                            backgroundColor: '#00000033',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            top: 0,
                            left: 0
                        }}
                >
                    <Box
                      width={window.innerWidth - 40}
                      sx={{
                              overflow: 'auto',
                              position:'relative',
                              backgroundColor: '#fff',
                              borderRadius: "10px",
                          }}
                    >
                        <Tabs
                            centered
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="Sign-In/Sign-Out"
                            scrollButtons={false}
                            overflow='auto'
                            sx={{mb:-4.1, borderRadius:0}}
                        >
                            <Tab label="Sign-in" {...a11yProps(0)} />
                            <Tab label="Sign-Up" {...a11yProps(1)} />
                        </Tabs>
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            {value === 0 && <SignInMV pages={props}/> }
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            {value === 1 && <SignUpMV pages={props}/>}
                        </TabPanel>
                </Box>
            </Box>
    ) : "";
};