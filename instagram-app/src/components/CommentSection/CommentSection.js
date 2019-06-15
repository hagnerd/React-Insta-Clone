import React from 'react'
import PropTypes from 'prop-types';
import Comment from './Comment';

export default function CommentSection({ comments }) {
  return (
    <ul>
      {comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </ul>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(Comment.propTypes)).isRequired,
}
