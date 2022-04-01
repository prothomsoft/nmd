import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const ParallaxImageFooter = (props) => {
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

  const background = {
    image: props.leadImage,
    speed: -20,
    opacity: [1, 1],
  };

  let componentLink = "";

  if (props.leadUrl != "") {
    componentLink = (
      <Box sx={{ pt: 4 }}>
        <Link href={props.leadUrl} passHref>
          <Button variant="siteButton">GALERIA ZDJĘĆ</Button>
        </Link>
      </Box>
    );
  }

  return (
    <ParallaxBanner layers={[background]} style={{ height: props.height }}>
      <Box sx={boxStyle}>
        <Typography variant="h3" align="center">
          {props.leadNames}
        </Typography>
        <Typography variant="h4" align="center">
          {props.leadTitle}
        </Typography>
        {componentLink}
      </Box>
    </ParallaxBanner>
  );
};

export default ParallaxImageFooter;
