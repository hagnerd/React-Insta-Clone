import React from "react";
import FuzzySearch from "fuzzy-search";
import dummyData from "dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";

export default class PostsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      filter: "",
      currentlyLoggedInUser: ""
    };
  }

  componentDidMount() {
    let localState = window.localStorage.getItem("posts");
    let username = window.localStorage.getItem("username");

    if (localState !== null) {
      this.setState({
        posts: JSON.parse(localState)
      });
    } else {
      this.setState({
        posts: dummyData.map(post => ({ ...post, doesCurrentUserLike: false }))
      });
    }

    if (username !== null) {
      this.setState({
        currentlyLoggedInUser: JSON.parse(username)
      });
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.posts !== prevState.posts && prevState.posts.length !== 0) {
      this.syncToLocalStorage();
    }
  }

  syncToLocalStorage = () => {
    let posts = JSON.stringify(this.state.posts);
    window.localStorage.setItem("posts", posts);
  };

  filterByUsername = username => {
    this.setState({
      filter: username
    });
  };

  toggleUserLike = id => {
    this.setState(prevState => {
      const updatedPosts = prevState.posts.map(post => {
        if (post.id === id) {
          return {
            ...post,
            doesCurrentUserLike: !post.doesCurrentUserLike,
            likes: !post.doesCurrentUserLike ? post.likes + 1 : post.likes - 1
          };
        } else {
          return post;
        }
      });

      return {
        posts: updatedPosts
      };
    });
  };

  render() {
    const searcher = new FuzzySearch(this.state.posts, ["username"]);

    const filteredPosts =
      this.state.filter !== ""
        ? searcher.search(this.state.filter)
        : this.state.posts;

    return (
      <>
        <SearchBar
          handleSubmit={this.filterByUsername}
          currentFilter={this.state.filter}
        />

        <main className="w-7/12 mx-auto">
          <PostContainer
            currentlyLoggedInUser={this.state.currentlyLoggedInUser}
            posts={filteredPosts}
            toggleUserLike={this.toggleUserLike}
          />
        </main>
      </>
    );
  }
}
