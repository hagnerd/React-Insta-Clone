import React from "react";
import {
  FaInstagram,
  FaRegCompass,
  FaRegHeart,
  FaRegUser
} from "react-icons/fa";

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    }
  }

  render() {

    return (
      <header className="flex justify-around h-20 items-center border-b border-gray-300 w-5/6 mx-auto">
        <div className="flex h-full items-center">
          <FaInstagram size="2.5rem" color="#2d3748" />
          <div className="border-l border-gray-600 h-10 mx-4" />
          <h1>Instagram</h1>
        </div>

        <form className="w-1/3 self-center">
          <input
            className="w-full border border-gray-400 rounded py-1 text-center bg-gray-100"
            placeholder="Search"
            value={this.state.searchValue}
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
