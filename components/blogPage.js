import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import LazyLoadWrapper from "./lazyLoadWrapper";

const BlogPage = (props) => {
  let paragraph1 = null;
  let paragraph2 = null;
  let paragraph3 = null;
  let paragraph4 = null;
  let paragraph5 = null;
  let paragraph6 = null;
  let paragraph7 = null;
  let paragraph8 = null;
  let paragraph9 = null;
  if (props.entryContentP1 !== "") {
    paragraph1 = <p className="par" dangerouslySetInnerHTML={{ __html: props.entryContentP1 }} />;
  }
  if (props.entryContentP2 !== "") {
    paragraph2 = <p dangerouslySetInnerHTML={{ __html: props.entryContentP2 }} />;
  }
  if (props.entryContentP3 !== "") {
    paragraph3 = <p dangerouslySetInnerHTML={{ __html: props.entryContentP3 }} />;
  }
  if (props.entryContentP4 !== "") {
    paragraph4 = <p dangerouslySetInnerHTML={{ __html: props.entryContentP4 }} />;
  }
  if (props.entryContentP5 !== "") {
    paragraph5 = <p dangerouslySetInnerHTML={{ __html: props.entryContentP5 }} />;
  }
  if (props.entryContentP6 !== "") {
    paragraph6 = <p dangerouslySetInnerHTML={{ __html: props.entryContentP6 }} />;
  }
  if (props.entryContentP7 !== "") {
    paragraph7 = <p dangerouslySetInnerHTML={{ __html: props.entryContentP7 }} />;
  }
  if (props.entryContentP8 !== "") {
    paragraph8 = <p dangerouslySetInnerHTML={{ __html: props.entryContentP8 }} />;
  }
  if (props.entryContentP9 !== "") {
    paragraph9 = <p dangerouslySetInnerHTML={{ __html: props.entryContentP9 }} />;
  }

  let images = null;
  let imagesParagraph1 = null;
  let imagesParagraph2 = null;
  let imagesParagraph3 = null;
  let imagesParagraph4 = null;
  let imagesParagraph5 = null;
  let imagesParagraph6 = null;
  let imagesParagraph7 = null;

  if (props.images) images = <LazyLoadWrapper images={props.images} title={props.headTitle} />;
  if (props.imagesParagraph1) imagesParagraph1 = <LazyLoadWrapper images={props.imagesParagraph1} title={props.headTitle} />;
  if (props.imagesParagraph2) imagesParagraph2 = <LazyLoadWrapper images={props.imagesParagraph2} title={props.headTitle} />;
  if (props.imagesParagraph3) imagesParagraph3 = <LazyLoadWrapper images={props.imagesParagraph3} title={props.headTitle} />;
  if (props.imagesParagraph4) imagesParagraph4 = <LazyLoadWrapper images={props.imagesParagraph4} title={props.headTitle} />;
  if (props.imagesParagraph5) imagesParagraph5 = <LazyLoadWrapper images={props.imagesParagraph5} title={props.headTitle} />;
  if (props.imagesParagraph6) imagesParagraph6 = <LazyLoadWrapper images={props.imagesParagraph6} title={props.headTitle} />;
  if (props.imagesParagraph7) imagesParagraph7 = <LazyLoadWrapper images={props.imagesParagraph7} title={props.headTitle} />;

  return (
    <Box>
      <Typography variant="h6">
        <Link as={`/${props.slug}`} href={`/${props.slug}`}>
          <a>{props.title}</a>
        </Link>
      </Typography>

      <Typography variant="h6">
        {props.date}, TAGI: <span>{props.tags}</span>
      </Typography>

      <Typography>
        {paragraph1}
        {imagesParagraph1}
        {paragraph2}
        {imagesParagraph2}
        {paragraph3}
        {imagesParagraph3}
        {paragraph4}
        {imagesParagraph4}
        {paragraph5}
        {imagesParagraph5}
        {paragraph6}
        {imagesParagraph6}
        {paragraph7}
        {imagesParagraph7}
        {paragraph8}
        {paragraph9}
      </Typography>

      {images}
    </Box>
  );
};

export default BlogPage;
