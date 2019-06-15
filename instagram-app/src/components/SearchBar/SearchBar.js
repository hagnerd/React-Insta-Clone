import React from "react";
import PropTypes from 'prop-types';
import {
  FaInstagram,
  FaRegCompass,
  FaRegHeart,
  FaRegUser
} from "react-icons/fa";

const initialState = {
  searchValue: '',
}

export default class Searchbar extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,    
  }

  constructor(props) {
    super(props);

    this.state = initialState  
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.searchValue);

    this.setState(initialState);
  }

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({
      searchValue: value,
    })
  }

  render() {

    return (
      <header className="flex justify-around h-20 items-center border-b border-gray-300 w-5/6 mx-auto">
        <div className="flex h-full items-center">
          <FaInstagram size="2.5rem" color="#2d3748" />
          <div className="border-l border-gray-600 h-10 mx-4" />
          <h1>Instagram</h1>
        </div>

        <form className="w-1/3 self-center" onSubmit={this.handleSubmit}>
          <input
            className="w-full border border-gray-400 rounded py-1 text-center bg-gray-100"
            placeholder="Search"
            value={this.state.searchValue}
            aria-label="Filter by username"
            name="searchValue"
            onChange={this.handleChange}
          />
        </form>

        <nav className="w-1/6">
          <ul className="flex justify-around w-full">
            <li>
              <FaRegCompass size="1.5rem" color="#4a5568" />
            </li>
            <li>
              <FaRegHeart size="1.5rem" color="#4a5568" />
            </li>
            <li>
              <FaRegUser size="1.5rem" color="#4a5568" />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

