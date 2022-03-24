import React from "react";
import BlogPage from "../components/blogPage";
import LayoutBlogPage from "../components/layoutBlogPage";
import ContactForm from "../components/contactForm";

const BlogPageComponentNew = (props) => {
  return (
    <>
      <LayoutBlogPage
        url={props.headUrl}
        title={props.headTitle}
        description={props.headDescription}
        keywords={props.headKeywords}
        menuNames={props.menuNames}
        menuTitle={props.menuTitle}
        slide={props.slide}
        leadNames={props.leadNames}
        leadTitle={props.leadTitle}
        leadUrl={props.leadUrl}
        leadImage={props.leadImage}
      >
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
        <ContactForm />
      </LayoutBlogPage>
    </>
  );
};

export default BlogPageComponentNew;
