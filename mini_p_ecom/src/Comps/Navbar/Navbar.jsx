import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>vamsiMart</h1>
      <div className="nav_links">
        <Link to="/products">
          <span>Products</span>
        </Link>
        <Link to="/recipes">
          <span>Recipes</span>
        </Link>
        <Link to="/cartItems">
          <IoCartOutline size={30} style={{ color: "red" }} />
        </Link>
        <Link to="/favItems">
        <FaHeart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
