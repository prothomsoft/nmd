import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImage from "./parallaxImage";
import ParallaxImageFooter from "./parallaxImageFooter";
import AppBarWithResponsiveMenu from "./appBarWithResponsiveMenu";
import Box from "@mui/material/Box";
import Meta from "./meta";

const LayoutStartPage = ({ children, title, description, keywords, url, leadNames, leadTitle, leadUrl, leadImage, slide, menuNames, menuTitle }) => {
  const scrollToText = React.useRef(null);
  const executeScroll = () => scrollToText.current.scrollIntoView({ behavior: "smooth" });
  return (
    <>
      <Meta title={title} description={description} keywords={keywords} url={url} />
      <ParallaxProvider>
        <AppBarWithResponsiveMenu />
        <ParallaxImage imgsrc={slide} height="100vh" action={executeScroll} menuNames={menuNames} menuTitle={menuTitle} />
        <Box ref={scrollToText}></Box>        
        {children}
        <ParallaxImageFooter leadImage={leadImage} leadNames={leadNames} leadTitle={leadTitle} leadUrl={leadUrl} height="100vh" />
      </ParallaxProvider>
    </>
  );
};

export default LayoutStartPage;