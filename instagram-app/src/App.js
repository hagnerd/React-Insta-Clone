import React from "react";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
  return (
    <>
      <SearchBar />
      <main className="w-7/12 mx-auto">
        <PostContainer posts={dummyData} />
      </main>
    </>
  );
}

export default App;
