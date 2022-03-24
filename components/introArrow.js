import React from 'react';
import Box from '@mui/material/Box';
import { keyframes } from '@mui/system';
import ArrowCircleDownRounded from '@mui/icons-material/ArrowCircleDownRounded';
import Button from '@mui/material/Button';

const spin = keyframes`
  0%
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const IntroArrow = (props) => {
    return (
        <Box sx={{animation: `${spin} 1s infinite ease`}}>
            <Button variant="menuButton" key={1} onClick={props.action}>
                <ArrowCircleDownRounded sx={{color:'white', fontSize: 50}}/>
            </Button>
        </Box>            
    );
};

export default IntroArrow;