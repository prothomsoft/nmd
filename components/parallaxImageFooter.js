import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ParallaxImageFooter = (props) => {

    const boxStyle = {
        display: 'flex', 
        flexDirection: 'column',
        position: 'absolute', 
        justifyContent: 'center',
        alignItems: 'center', 
        color: '#FFF', 
        top: '0', 
        bottom: '0', 
        left: '0', 
        right: '0',
        width: '100%'};

    const background = {
        image: props.leadImage, 
        speed: -20,
        opacity:[1, 1]
    };

    return (
        <ParallaxBanner layers={[background]} style={{ height: props.height }}>
            <Box sx={boxStyle}>
                <Typography variant='h2' sx={{fontFamily: 'Oswald', py:1}} align="center">{props.leadNames}</Typography>
                <Typography variant='h4' sx={{fontFamily: 'Oswald', py:1}} align="center">{props.leadTitle}</Typography>
                <Button>{props.leadUrl}</Button>
            </Box>
        </ParallaxBanner>
    );
};

export default ParallaxImageFooter;