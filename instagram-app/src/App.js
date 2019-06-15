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
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
    });
  }

  filterByUsername = username => {
    this.setState({
      filter: username,
    });
  }

  render() {
    const filteredPosts = this.state.filter !== ""
      ? this.state.posts.filter(post => post.username.toLowerCase() === this.state.filter.toLowerCase())
      : null;

    return (
      <>
        <SearchBar handleSubmit={this.filterByUsername} currentFilter={this.state.filter} />
        <main className="w-7/12 mx-auto">
          <PostContainer posts={filteredPosts === null ? this.state.posts : filteredPosts} />
        </main>
      </>
    );
  }
}

export default App;
