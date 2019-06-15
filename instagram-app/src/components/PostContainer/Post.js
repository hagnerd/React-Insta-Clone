import React from "react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import Comment from "../CommentSection/Comment";

export default function Post({
  username,
  thumbnailUrl,
  imageUrl,
  likes,
  timestamp,
  comments
}) {

  return (
    <li className="border border-gray-400 rounded-sm my-4">
      <div className="flex p-4 h-full items-center">
        <img src={thumbnailUrl} className="rounded-full mr-4 h-8 w-8" alt="" />
        <h3>{username}</h3>
      </div>
      <img className="w-full" src={imageUrl} alt="" />
      <div className="p-4">
        <div>
          <div className="flex">
            <FaRegHeart size="1.7rem" className="text-gray-800 mr-4" />
            <FaRegComment
              size="1.7rem"
              className="text-gray-800"
              style={{ transform: "rotateY(180deg)" }}
            />
          </div>
          <h4 className="font-semibold text-sm my-1">{likes} likes</h4>
        </div>
        <CommentSection comments={comments} timestamp={timestamp} />
      </div>
    </li>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(Comment.propTypes))
};
