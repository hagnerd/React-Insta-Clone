import React from "react";
import FuzzySearch from 'fuzzy-search';
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
    let localState = window.localStorage.getItem('posts');

    if (localState !== null) {
      this.setState({
        posts: JSON.parse(localState),
      });
    } else {
      this.setState({
        posts: dummyData.map(post => ({ ...post, doesCurrentUserLike: false })),
      })
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.posts !== prevState.posts && prevState.posts.length !== 0) {
      this.syncToLocalStorage();
    }
  }

  syncToLocalStorage = () => {
    console.log("I was synced to local storage")
    let posts = JSON.stringify(this.state.posts);

    window.localStorage.setItem('posts', posts);
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
    const searcher = new FuzzySearch(this.state.posts, ['username']);

    const filteredPosts = this.state.filter !== ""
      ? searcher.search(this.state.filter) 
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
