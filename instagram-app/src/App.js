import React from "react";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
    });
  }

  render() {
    return (
      <>
        <SearchBar />
        <main className="w-7/12 mx-auto">
          <PostContainer posts={this.state.posts} />
        </main>
      </>
    );
  }
}

export default App;
