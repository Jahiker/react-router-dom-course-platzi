import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "./blogdata";

export const BlogPage = () => {
  return (
    <>
      <h1>BlogPage</h1>
      <ul>
        {blogdata.map((post) => (
          <BlogLink post={post} key={post.slug} />
          ))}
      </ul>
      <Outlet />
    </>
  );
};

const BlogLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
};
