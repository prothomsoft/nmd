import React from "react";
import LayoutSitePage from "../components/layoutSitePage";
import BlogList from "../components/blogList";
import ContactForm from "../components/contactForm";
import Container from "@mui/material/Container";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import BlogPagination from "../components/blogPagination";
import { posts } from "../components/posts";

const Blog = () => {  

  const pageImage = process.env.staticImagesPath + "dom_weselny_euforia_myslenice_1.jpg";
  const currentPage = 9;
  const itemsPerPage = 20;
  const offset = (currentPage - 1) * itemsPerPage;

  return (
    <LayoutSitePage
      title="Zdjęcia ślubne Kraków"
      description="Zdjęcia ślubne Kraków. Piękne zdjęcia, pełne emocji reportaże ślubne. Sprawdź moją ofertę i portfolio. Serdecznie zapraszam !"
      keywords="zdjęcia ślubne Kraków, fotograf ślubny, sesja zdjęciowa"
      url="https://99foto.pl/blog/"
      leadNames="IZABELA i ARKADIUSZ"
      leadTitle="DOM WESELNY EUFORIA MYŚLENICE i SŁONECZNE LOVE"
      leadUrl="/dom-weselny-euforia-myslenice-i-sloneczne-love"
      leadImage={pageImage}>
      <Container sx={{ pt: 21, pb: 5 }}>
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
