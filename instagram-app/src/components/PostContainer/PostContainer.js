import React from "react";
import Post from "./Post";

export default function PostContainer({ posts }) {
  return (
    <ul className="w-full">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </ul>
  );
}
