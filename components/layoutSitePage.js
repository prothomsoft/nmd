import React from 'react';
import AppBarWithResponsiveMenu from './appBarWithResponsiveMenu';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxImageFooter from './parallaxImageFooter';
import Meta from './meta';

const LayoutSitePage = ({children, title, description, keywords, url, leadImage, leadNames, leadTitle, leadUrl}) => {
    return (
      <>
        <Meta title={title} description={description} keywords={keywords} url={url}/>
        <ParallaxProvider>
          <AppBarWithResponsiveMenu />
          {children}
          <ParallaxImageFooter leadImage={leadImage} leadNames={leadNames} leadTitle={leadTitle} leadUrl={leadUrl} height="100vh" />
        </ParallaxProvider>
        </>
    );
};

export default LayoutSitePage;