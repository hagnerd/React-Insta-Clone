import React from "react";
import PropTypes from 'prop-types';
import Post from "./Post";

export default function PostContainer({ posts, toggleUserLike, currentlyLoggedInUser }) {
  
  return (
    <ul className="w-full">
      {posts.map(post => (
        <Post 
          key={post.id} 
          toggleLike={() => toggleUserLike(post.id)}
          currentlyLoggedInUser={currentlyLoggedInUser}
          {...post} />
      ))}
    </ul>
  );
}

PostContainer.propTypes = {
  toggleUserLike: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired, 
    thumbnailUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    doesCurrentUserLike: PropTypes.bool.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
}
