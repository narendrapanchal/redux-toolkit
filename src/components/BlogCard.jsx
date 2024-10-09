import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ id, title }) {
  return (
    <div className="shadow-lg text-left m-1 p-2 ">
      <h2 className="mt-1 overflow-hidden truncate whitespace-nowrap">
        {title}
      </h2>
      <Link to={"/blogs/article/" + id} className="text-blue-400 text-sm ">
        Read More...
      </Link>
    </div>
  );
}

export default BlogCard;
