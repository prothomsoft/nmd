import React from 'react';
import AppBarWithResponsiveMenu from './appBarWithResponsiveMenu';
import Container from '@mui/material/Container';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxImageFooter from './parallaxImageFooter';
import Meta from './meta';

const Layout = ({children, title, description, keywords}) => {
    return (
      <>
        <Meta title={title} description={description} keywords={keywords} />
        <ParallaxProvider>
          <AppBarWithResponsiveMenu />
          <Container fixed>
            <main>{children}</main>
          </Container>
          <ParallaxImageFooter imgsrc="./m8.jpg" height="100vh">
            <h1>hello3</h1>
          </ParallaxImageFooter>                   
        </ParallaxProvider>
        </>
    );
};

export default Layout;