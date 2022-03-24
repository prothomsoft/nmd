import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImage from "./parallaxImage";
import ParallaxImageFooter from "./parallaxImageFooter";
import AppBarWithResponsiveMenu from "./appBarWithResponsiveMenu";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Meta from "./meta";

const LayoutBlogPage = ({ children, url, title, description, keywords, leadNames, leadTitle, leadUrl, leadImage, menuNames, menuTitle, slide}) => {
  const scrollToText = React.useRef(null);
  const executeScroll = () =>
    scrollToText.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Meta title={title} description={description} keywords={keywords} url={url} />

      <ParallaxProvider>
        <AppBarWithResponsiveMenu />
        <ParallaxImage imgsrc={slide} height="100vh" menuNames={menuNames} menuTitle={menuTitle} action={executeScroll}>
          <h1>hello1</h1>
        </ParallaxImage>
        <Box ref={scrollToText}></Box>
        <Container fixed>
          <main>{children}</main>
        </Container>
        <ParallaxImageFooter leadImage={leadImage} leadNames={leadNames} leadTitle={leadTitle} leadUrl={leadUrl} height="100vh">
          <h1>hello3</h1>
        </ParallaxImageFooter>
      </ParallaxProvider>
    </>
  );
};

export default LayoutBlogPage;
