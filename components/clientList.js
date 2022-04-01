import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

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
    <Box sx={{ py: 2 }}>
      <Typography variant="h1" className="quote-title">
        {post.name}
      </Typography>
    </Box>
    <Link as={`/${post.slug}`} href={`/${post.slug}`}>
      <a href={`https://sk.99foto.pl/login/${post.welcomeURL}`} target="_blank" rel="nofollow">
        <Image alt={`${post.name}`} src={`/static/client/${post.welcomeURL}.jpg`} width={1140} height={951} />
      </a>
    </Link>
  </>
);

export default ClientList;
