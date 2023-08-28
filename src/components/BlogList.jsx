import React, { useState } from "react";
import { Link } from "react-router-dom";

function BlogList({ blogs }) {
  return (
    <div>
      {blogs.map((blog) => (
        <div
          className="pt-[10px] pb-[10px]  pr-4 pl-4 mx-0 mt-5 mb-5 border hover:border-slate-400  shadow-lg hover:font-bold"
          key={blog.id}
        >
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="text-xl text-[#f1356d] mb-2 ">{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
