import React from "react";
import AppBarWithResponsiveMenu from "./appBarWithResponsiveMenu";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImageFooter from "./parallaxImageFooter";
import Meta from "./meta";
import { initGA, logPageView } from "./analytics.js";

const LayoutSitePage = ({ children, title, description, keywords, url, leadImage, leadNames, leadTitle, leadUrl }) => {
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
        {children}
        <ParallaxImageFooter leadImage={leadImage} leadNames={leadNames} leadTitle={leadTitle} leadUrl={leadUrl} height="100vh" />
      </ParallaxProvider>
    </>
  );
};

export default LayoutSitePage;
