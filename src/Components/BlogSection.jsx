import React from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <div>
      <div>
        <div className="flex">
          <span>Our blogs</span>
          <Link>View all posts</Link>
        </div>
        <div>
          <h1 className="text-xl font-medium">Latest blog posts</h1>
          <h1>
            Tool and strategies modern teams need to help their companies grow.
          </h1>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default BlogSection;
