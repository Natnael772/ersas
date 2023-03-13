import React from "react";
import "./Nav.css";
import { facebook, instagram, twitter, cart } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { RiShieldUserFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <div className="nav-main-container">
      <h2 className="nav-logo">Ersas</h2>
      <ul className="nav-menus-container">
        <li>
          <a href="#" className="nav-links">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Blogs
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            About
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Contact
          </a>
        </li>
      </ul>
      <ul className="nav-buttons-container">
        <button className="btn-login">Log In</button>
        <button className="btn-signup">Get started</button>
      </ul>
      <RxHamburgerMenu className="nav-hamburger" />
    </div>
  );
};
export default Nav;
