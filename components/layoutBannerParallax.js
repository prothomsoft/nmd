import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxImage from './parallaxImage';
import ParallaxImageFooter from './parallaxImageFooter';
import AppBarWithResponsiveMenu from './appBarWithResponsiveMenu';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import imagem1 from '../public/m1.jpg';
import CarouselImage from './carouselImage';
import Meta from './meta';

const LayoutBannerParallax = ({children, title, description, keywords}) => {

    const scrollToText = React.useRef(null);
    const executeScroll = () => scrollToText.current.scrollIntoView({ behavior: 'smooth' });

    return (
        <>
        <Meta title={title} description={description} keywords={keywords} />
        
        <ParallaxProvider>
            
                <AppBarWithResponsiveMenu />
                <ParallaxImage imgsrc="./m6.jpg" height="100vh" action={executeScroll}>
                    <h1>hello1</h1>
                </ParallaxImage>
                <Box ref={scrollToText}></Box>
                <Container fixed>
                <Box><Image src={imagem1} /></Box>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Box><CarouselImage /></Box>
                <p>123</p>
                <main>{children}</main>
                </Container>
                <ParallaxImage imgsrc="./m2.jpg" height="70vh">
                    <h1>hello2</h1>
                </ParallaxImage>
                <Container fixed>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Container>
                <ParallaxImageFooter imgsrc="./m3.jpg" height="100vh">
                    <h1>hello3</h1>
                </ParallaxImageFooter>
        </ParallaxProvider>
        </>  
    );
};

export default LayoutBannerParallax;