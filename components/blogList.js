import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";

const BlogList = (props) => {
  return (
    <>
      {props.posts.map((post, key) => (
        <PostLink key={key} post={post} height={762} />
      ))}
    </>
  );
};

const PostLink = ({ post }) => (
  <>
    <Typography variant="h6">
      <Link as={`/${post.slug}`} href={`/${post.slug}`}>
        <a className="postTitle" dangerouslySetInnerHTML={{ __html: getPostTitleWithNames(post) }} />
      </Link>
    </Typography>
    <Typography variant="h6">
      {getPostDate(post.date)}, TAGI: <span className="spanColor">{getPostTags(post.tags)}</span>
    </Typography>

    <Link as={`/${post.slug}`} href={`/${post.slug}`}>
      <a href={`/${post.slug}`}>
        <Image alt={`${getPostTitleWithNames(post)}`} src={post.image} width={1140} height={762} />
      </a>
    </Link>
    <div className="entryContent" dangerouslySetInnerHTML={{ __html: getPostContent(post.content) }} />
    <Link as={`/${post.slug}`} href={`/${post.slug}`}>
      <a className="btn">CZYTAJ DALEJ</a>
    </Link>
  </>
);

function getPostDate(content) {
  let postDate = new Date(Date.parse(content));
  let MonthName = new Array(12);
  MonthName[0] = "stycznia ";
  MonthName[1] = "lutego ";
  MonthName[2] = "marca ";
  MonthName[3] = "kwietnia ";
  MonthName[4] = "maja ";
  MonthName[5] = "czerwca ";
  MonthName[6] = "lipca ";
  MonthName[7] = "sierpnia ";
  MonthName[8] = "września ";
  MonthName[9] = "października ";
  MonthName[10] = "listopada ";
  MonthName[11] = "grudnia ";
  let month = postDate.getMonth();
  let day = postDate.getDate();
  let year = postDate.getFullYear();
  return day + " " + MonthName[month] + " " + year;
}

function getPostContent(content) {
  let fields = content.split("<!--more-->");
  return fields[0].concat("</p>");
}

function getPostTitleWithNames(post) {
  if (typeof post.names === "undefined") {
    return post.title;
  } else {
    return post.title.concat(" - ").concat(post.names);
  }
}

function getPostTags(content) {
  let returnContent = "";
  for (let i = 0; i < 5; i++) {
    if (content[i]) {
      returnContent = returnContent.concat(content[i]);
      returnContent = returnContent.concat(", ");
    }
  }
  return (returnContent = returnContent.substring(0, returnContent.length - 2));
}

export default BlogList;
