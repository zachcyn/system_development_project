import React from "react";
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Button, MobileStepper, Paper } from "@mui/material";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Roger Federer',
        imgPath:
            '/Roger_Federer.jpg',
    },
    {
        label: 'Visit Thermos!',
        imgPath:
            '/Thermos.svg',
    },
    {
        label: 'Want to learn Tennis? Apply Now!',
        imgPath:
            './Marzorati_Indian.png',
    },
    {
        label: 'this is image 4 this is image 4',
        imgPath:
            'https://source.unsplash.com/random/200x200?sig=4',
    },
];

export default function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const stylePaper = {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        pl: 2,
        bgcolor: 'white',
    }

    const sxCarouselBox = {
        borderRadius: 3,
        height: 450,
        display: 'outlined',
        overflow: 'hidden',
        width: '100%',
    }

    const sxBox = {
        flexGrow: 1,
        width: '80%',
        margin: '50px 0',
    }

    const sxMobileStepper = {
        maxWidth: '100%',
        flexGrow: 1,
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <>
            <div align='center'>
                <container>
                    <Box sx={sxBox}>
                        <Paper outlined elevation={0} sx={stylePaper}>
                            <Typography color='black' variant='h4' align='center'>{images[activeStep].label}</Typography>
                        </Paper>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {images.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={sxCarouselBox}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            variant="progress"
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            sx={sxMobileStepper}
                            nextButton={
                                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                    </Box>
                </container>
            </div>
        </>
    );
}