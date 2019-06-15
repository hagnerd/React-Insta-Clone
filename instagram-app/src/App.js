import React from "react";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      filter: "",
      currentlyLoggedInUser: "currentlyLoggedInUser",
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData.map(post => ({ ...post, doesCurrentUserLike: false })),
    });
  }

  filterByUsername = username => {
    this.setState({
      filter: username,
    });
  }

  toggleUserLike = id => {
    this.setState(prevState => ({
      posts: prevState.posts.map(post => post.id === id ? { ...post, doesCurrentUserLike: !post.doesCurrentUserLike, likes: !post.doesCurrentUserLike ? post.likes + 1 : post.likes - 1 } : post),
    }));
  }

  render() {
    const filteredPosts = this.state.filter !== ""
      ? this.state.posts.filter(post => post.username.toLowerCase() === this.state.filter.toLowerCase())
      : this.state.posts;

    return (
      <>
      <SearchBar handleSubmit={this.filterByUsername} currentFilter={this.state.filter} />
      <main className="w-7/12 mx-auto">
        <PostContainer currentlyLoggedInUser={this.state.currentlyLoggedInUser} posts={filteredPosts} toggleUserLike={this.toggleUserLike} />
      </main>
  </>
  );
  }
}

export default App;
