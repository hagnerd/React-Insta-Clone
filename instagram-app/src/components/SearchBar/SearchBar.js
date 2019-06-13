import React from "react";
import { FaInstagram, FaRegCompass, FaRegHeart, FaRegUser } from "react-icons/fa";

export default function Searchbar() {
  return (
    <header>
      <FaInstagram size="3rem" />
      <div>Vertical break</div>
      <h1>Instagram</h1>

      <input placeholder="Search" />

      <nav>
        <ul>
          <li>
            <FaRegCompass />
          </li>
          <li><FaRegHeart /></li>
          <li><FaRegUser /></li>
        </ul>
      </nav>
    </header>
  );
}
