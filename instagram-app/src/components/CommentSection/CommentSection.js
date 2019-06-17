import React from "react";
import moment from 'moment';
import { humanReadableDiff } from 'utils';
import PropTypes from "prop-types";
import Comment from "./Comment";

export default class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      commentText: ""
    };
  }

  static propTypest = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequried,
        id: PropTypes.number.isRequied
      })
    ).isRequired,
    timestamp: PropTypes.string.isRequired
  };

  componentDidMount() {
    let localState = window.localStorage.getItem("comments");

    if (localState !== null) {
      this.setState({
        comments: JSON.parse(localState)
      });
    } else {
      this.setState({
        comments: this.props.comments
      });
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.comments !== prevState.comments) {
      this.syncToLocalStorage();
    }
  }

  syncToLocalStorage = () => {
    let comments = JSON.stringify(this.state.comments);

    window.localStorage.setItem("comments", comments);
  };

  handleChange = event => {
    this.setState({
      commentText: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newComment = {
      id: this.state.comments.length + 1,
      username: this.props.currentlyLoggedInUser,
      text: this.state.commentText
    };

    this.setState(prevState => ({
      comments: prevState.comments.concat([newComment]),
      commentText: ""
    }));
  };

  deleteComment = id => {
    this.setState(prevState => ({
      comments: prevState.comments.filter(
        comment =>
          !(
            comment.id === id &&
            comment.username === this.props.currentlyLoggedInUser
          )
      )
    }));
  };

  render() {
    return (
      <>
        <ul>
          {this.state.comments.map(comment => (
            <React.Fragment key={comment.id}>
              <Comment {...comment} />
              {this.props.currentlyLoggedInUser === comment.username && (
                <button
                  className="bg-red-400 border border-red-500 rounded-sm px-3 py-2 my-1 hover:bg-red-500 hover:border-red-600"
                  onClick={() => this.deleteComment(comment.id)}
                >
                  delete comment
                </button>
              )}
            </React.Fragment>
          ))}
        </ul>
        <h5 className="text-xs text-gray-600 my-2">{humanReadableDiff({ endingDate: moment(this.props.timestamp, "MMMM Do YYYY, hh:mm:ss a")  })}</h5>
        <div className="border-b border-gray-300 w-full mx-auto" />

        <form
          onSubmit={this.handleSubmit}
          className="flex justify-between h-10 mt-4 items-center"
        >
          <input
            value={this.state.commentText}
            name="commentText"
            onChange={this.handleChange}
            placeholder="Add a comment..."
            className="text-gray-700 text-sm h-full w-3/4"
          />
          <button
            disabled={this.state.commentText === ""}
            className={`${
              this.state.commentText !== ""
                ? "text-blue-600 font-bold"
                : "text-blue-300 opacity-75 cursor-not-allowed"
            }`}
          >
            Post
          </button>
        </form>
      </>
    );
  }
}
