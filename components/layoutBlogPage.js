import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImage from "./parallaxImage";
import ParallaxImageFooter from "./parallaxImageFooter";
import AppBarWithResponsiveMenu from "./appBarWithResponsiveMenu";
import Box from "@mui/material/Box";
import Meta from "./meta";
import { initGA, logPageView } from "./analytics.js";

const LayoutBlogPage = ({ children, title, description, keywords, url, leadImage, leadNames, leadTitle, leadUrl, slide, menuNames, menuTitle }) => {
  const scrollToText = React.useRef(null);
  const executeScroll = () => scrollToText.current.scrollIntoView({ behavior: "smooth" });

  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <>
      <Meta title={title} description={description} keywords={keywords} url={url} />
      <ParallaxProvider>
        <AppBarWithResponsiveMenu />
        <ParallaxImage imgsrc={slide} height="100vh" menuNames={menuNames} menuTitle={menuTitle} action={executeScroll} />
        <Box ref={scrollToText}></Box>
        {children}
        <ParallaxImageFooter leadImage={leadImage} leadNames={leadNames} leadTitle={leadTitle} leadUrl={leadUrl} height="100vh" />
      </ParallaxProvider>
    </>
  );
};

export default LayoutBlogPage;
