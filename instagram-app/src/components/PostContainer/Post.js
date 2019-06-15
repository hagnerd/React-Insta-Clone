import React from "react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import moment from "moment";
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
  let n = new moment();
  let t = new Date(timestamp);
  console.log(n);
  console.log(t);

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
        <CommentSection comments={comments} />
        <h5 className="text-xs text-gray-600 my-2">{timestamp}</h5>
        <div className="border-b border-gray-300 w-full mx-auto" />
        <div className="flex justify-between h-10 mt-4 items-center">
          <input
            placeholder="Add a comment..."
            className="text-gray-700 text-sm"
          />
          <MdMoreHoriz size="1.5rem" />
        </div>
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
