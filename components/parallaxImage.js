import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Box from "@mui/material/Box";
import IntroArrow from "./introArrow";
import { Typography } from "@mui/material";

const ParallaxImage = (props) => {
  const background = {
    image: props.imgsrc,
    speed: -20,
    opacity: [1, 1],
  };

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    width: "100%",
  };

  const boxStyleArrow = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    top: "80vh",
    bottom: "0",
    left: "0",
    right: "0",
    width: "100%",
  };

  return (
    <ParallaxBanner layers={[background]} style={{ height: props.height }}>
      <Box sx={boxStyle}>
        <Typography
          variant="h2"
          sx={{ fontFamily: "Oswald", py: 1 }}
          align="center"
        >
          {props.menuNames}
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontFamily: "Oswald", py: 1 }}
          align="center"
        >
          {props.menuTitle}
        </Typography>
      </Box>
      <Box sx={boxStyleArrow}>
        <IntroArrow action={props.action} />
      </Box>
    </ParallaxBanner>
  );
};

export default ParallaxImage;