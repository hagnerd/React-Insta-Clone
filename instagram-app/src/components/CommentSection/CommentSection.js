import React from 'react'
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md'
import Comment from './Comment';

export default class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    }
  }  

  static propTypest = {
    comments: PropTypes.arrayOf(PropTypes.shape(Comment.propTypes)).isRequired,
    timestamp: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
    });
  }

  render() {
    return (
      <>
      <ul>
        {this.state.comments.map(comment => <Comment key={comment.id} {...comment} />)}
      </ul>
      <h5 className="text-xs text-gray-600 my-2">{this.props.timestamp}</h5>
      <div className="border-b border-gray-300 w-full mx-auto" />
      <div className="flex justify-between h-10 mt-4 items-center">
        <input
          placeholder="Add a comment..."
          className="text-gray-700 text-sm"
        />
        <MdMoreHoriz size="1.5rem" />
      </div>
  </>
  )
  }
}

CommentSection.propTypes = {
}
