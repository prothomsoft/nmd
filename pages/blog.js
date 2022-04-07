import React from "react";
import LayoutSitePage from "../components/layoutSitePage";
import BlogList from "../components/blogList";
import ContactForm from "../components/contactForm";
import Container from "@mui/material/Container";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import BlogPagination from "../components/blogPagination";
import Box from "@mui/material/Box";
import { posts } from "../components/posts";

const Blog = () => {
  
  const pageImage = process.env.staticImagesPath + "plener_slubny_zamek_pieskowa_skala_krakow.jpg";
  const currentPage = 1;
  const itemsPerPage = 20;
  const offset = (currentPage - 1) * itemsPerPage;

  return (
    <LayoutSitePage
      title="Zdjęcia ślubne Kraków"
      description="Zdjęcia ślubne Kraków. Piękne zdjęcia, pełne emocji reportaże ślubne. Sprawdź moją ofertę i portfolio. Serdecznie zapraszam !"
      keywords="zdjęcia ślubne Kraków, fotograf ślubny, sesja zdjęciowa"
      url="https://99foto.pl/blog/"
      leadNames="MARTYNA i MICHAŁ"
      leadTitle="PLENER ŚLUBNY ZAMEK PIESKOWA SKAŁA"
      leadUrl="/plener-slubny-zamek-pieskowa-skala"
      leadImage={pageImage}>
      <Container sx={{ pt:8, pb: 5 }}>
        <Box sx={{pt:13, display: { xs: "none", lg: "block", xl: "block" }}}></Box>
        <BlogList posts={posts.slice(offset).slice(0, itemsPerPage)} />
        <BlogPagination page={currentPage} totalItems={posts.length} itemsPerPage={itemsPerPage}/>        
      </Container>
      <ParallaxImageFooter leadImage={pageImage} leadUrl="" height="70vh" />
      <Container>
        <ContactForm />
      </Container>
    </LayoutSitePage>
  );
};

export default Blog;
