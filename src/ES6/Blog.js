import React from "react";

const Blog = ({ posts }) => {
  return (
    <div>
      <h1>Blogs</h1>
      {posts.map((item) => (
        <div>
          <h3 key={item.id}>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
