import React from 'react'
import PropTypes from 'prop-types';
import Comment from './Comment';

export default class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      commentText: "",
    }
  }  

  static propTypest = {
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequried,
      id: PropTypes.number.isRequied,
    })).isRequired,
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
          {this.state.comments.map(comment => 
            <Comment key={comment.id} {...comment} />)
          }
        </ul>
        <h5 className="text-xs text-gray-600 my-2">{this.props.timestamp}</h5>
        <div className="border-b border-gray-300 w-full mx-auto" />
        
        <form className="flex justify-between h-10 mt-4 items-center">
          <input
            placeholder="Add a comment..."
            className="text-gray-700 text-sm"
          />
          <button 
            disabled={this.state.commentText === ""}
            className={`${this.state.commentText !== "" ? "text-blue-400" : "text-blue-300 opacity-75 cursor-not-allowed"}`}
          >Post</button>
        </form>

      </>
    );
  }
}

