import React from "react";
import PostsPage from './components/PostContainer/PostsPage'
import LoginForm from './components/Login/Login'
import withAuthenticate from './authentication/withAuthenticate'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginForm);

function App() {
  return <ComponentFromWithAuthenticate />
}

export default App;
