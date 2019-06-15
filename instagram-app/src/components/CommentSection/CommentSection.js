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

  handleChange = event => {
    this.setState({
      commentText: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const newComment = {
      id: this.state.comments.length + 1,
      username: 'currentlyLoggedInUser',
      text: this.state.commentText,
    }

    this.setState(prevState => ({
      comments: prevState.comments.concat([newComment]),
      commentText: "",
    }), () => {
      // TODO: Remove this before submitting 
      console.log(`Sending new comment to the server`)
      console.log(newComment);
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
        
        <form onSubmit={this.handleSubmit} className="flex justify-between h-10 mt-4 items-center">
          <input
            value={this.state.commentText}
            name="commentText"
            onChange={this.handleChange}
            placeholder="Add a comment..."
            className="text-gray-700 text-sm h-full w-3/4"
          />
          <button 
            disabled={this.state.commentText === ""}
            className={`${this.state.commentText !== "" ? "text-blue-600 font-bold" : "text-blue-300 opacity-75 cursor-not-allowed"}`}
          >Post</button>
        </form>

      </>
    );
  }
}

