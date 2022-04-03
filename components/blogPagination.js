import React from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

const BlogPagination = (props) => {
  const router = useRouter();

  const handleChange = (event, value) => {
    event.preventDefault();
    router.push(`/blog-${value}`);
  };

  const total = Math.ceil(props.totalItems / props.itemsPerPage);

  return (
    <Box sx={{ pt: 2 }}>
      <Box sx={{ display: "flex" }} justifyContent="center" alignItems="center" className="quote-title">
        <Pagination count={total} page={props.page} onChange={handleChange} size="large" hidePrevButton hideNextButton />
      </Box>
    </Box>
  );
};

export default BlogPagination;
