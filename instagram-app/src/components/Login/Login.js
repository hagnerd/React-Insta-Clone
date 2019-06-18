import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const styles = {
  input: "bg-gray-100 text-gray-700 border border-gray-400 rounded-sm py-1 px-2 text-sm mb-3", 
}

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = _event => {
    window.localStorage.setItem('username', JSON.stringify(this.state.username));
  }

  render() {

    const loginButtonDisabled = this.state.username === "" || this.state.password === "";

    return (
      <main className="h-screen w-full bg-gray-200 flex">
        <form className="flex flex-col w-1/2 m-auto bg-white p-5 border border-gray-400 rounded-sm" onSubmit={this.handleSubmit}>
          <div className="flex items-center mb-5">
            <FaInstagram color="#cd268d" size="40" />
            <h1 className="ml-10 text-2xl">Instagram</h1>
          </div>
          <label htmlFor="username">Username:</label>
          <input placeholder="Enter your username" className={styles.input} name="username" id="username" value={this.state.username} onChange={this.handleChange} />

          <label htmlFor="password">Password:</label>
          <input className={styles.input} name="password" placeholder="Enter your password" type="password" id="password" value={this.state.password} onChange={this.handleChange} />
          <button disabled={loginButtonDisabled} className={`text-white py-2 w-1/2 mx-auto rounded ${loginButtonDisabled ? " bg-blue-200" : " cursor-pointer bg-blue-500"}`}>Login</button>
        </form>
      </main>
    )
  }
}
