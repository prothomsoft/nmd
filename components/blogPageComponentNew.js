import React from "react";
import BlogPage from "../components/blogPage";
import LayoutBlogPage from "../components/layoutBlogPage";
import ContactForm from "../components/contactForm";
import Container from "@mui/material/Container";

const BlogPageComponentNew = (props) => {
  return (
    <LayoutBlogPage
      title={props.headTitle}
      description={props.headDescription}
      keywords={props.headKeywords}
      url={props.headUrl}
      leadImage={props.leadImage}
      leadNames={props.leadNames}
      leadTitle={props.leadTitle}
      leadUrl={props.leadUrl}
      slide={props.slide}
      menuNames={props.menuNames}
      menuTitle={props.menuTitle}>
      <Container>
        <BlogPage
          slug={props.slug}
          images={props.images}
          entryContentP1={props.entryContentP1}
          entryContentP2={props.entryContentP2}
          title={props.title}
          tags={props.tags}
          date={props.date}
          menuNames={props.menuNames}
        />
      </Container>
      <Container>
        <ContactForm />
      </Container>
    </LayoutBlogPage>
  );
};

export default BlogPageComponentNew;
