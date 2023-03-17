import * as React from 'react';
import { Avatar, AppBar, Typography, Button, Box, CssBaseline, Link, Grid, Container, Checkbox, FormControlLabel, TextField, Tab, Tabs, Toolbar } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import './siuStyles.css';
import SignUp from './SignUp'
import SignIn from './SignIn';
import { withRouter } from 'react-router-dom'
import Icon from '@mui/material/Icon';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Tennis Tournament
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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


export default function PopUp(props) {
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
            <div className='popup'>
                <div className='popup-inner'> 
                {props.children}
                <Box sx={{ bgcolor: 'background.paper', maxwidth: '100vh', minwidth: 200, align: 'center', overflow: 'auto' }}>
                    {/* <AppBar position="static">
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
                        >
                            <Tab label="Sign-in" {...a11yProps(0)} />
                            <Tab label="Sign-Up" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar> */}
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <Box>
                            <SignIn pages={props}/>
                        </Box>
                        <Box 
                            display={'none'}
                        >
                            <SignUp pages={props} />
                        </Box>
                        {/* </TabPanel> */}
                    </SwipeableViews>
                </Box>
            </div>
        </div >
    ) : "";
};