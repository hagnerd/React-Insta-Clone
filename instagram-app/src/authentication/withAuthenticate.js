import React from 'react'

const withAuthenticate = LoggedInComponent => LoginForm =>  
  class extends React.Component {
    constructor() {
      super();

      this.state = {
        isLoggedIn: false,
      }
    }

    componentDidMount() {
      let localState = window.localStorage.getItem('username');
      if (localState !== null) {
        this.setState({
          isLoggedIn: !!JSON.parse(localState),
        });
      }
    }

    render() {
      return this.state.isLoggedIn ? <LoggedInComponent /> : <LoginForm />
    }
  }

export default withAuthenticate;
