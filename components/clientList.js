import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";

const ClientList = (props) => {
  return (
    <>
      {props.posts.map((post, key) => (
        <ClientLink key={key} post={post} height={762} />
      ))}
    </>
  );
};

const ClientLink = ({ post }) => (
  <>
    <Typography variant="h1">{post.name}</Typography>
    <Link as={`/${post.slug}`} href={`/${post.slug}`}>
      <a href={`https://sk.99foto.pl/login/${post.welcomeURL}`} target="_blank" rel="nofollow">
        <Image alt={`${post.name}`} src={`/static/client/${post.welcomeURL}.jpg`} width={1140} height={951} />
      </a>
    </Link>
  </>
);

export default ClientList;
