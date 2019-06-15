import React from "react";
import PropTypes from "prop-types";

export default function Comment({ username, text }) {
  return (
    <li className="text-sm">
      <span className="font-semibold">{username}</span> {text}
    </li>
  );
}

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
