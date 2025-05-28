import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>vamsiSolutions</h1>
      <div className="nav_links">
       <Link to="/about"> <span>About</span></Link>
       <Link to="/contact"> <span>Contact</span></Link>
       <Link to="/services"> <span>Services</span></Link>
      </div>
    </div>
  );
};

export default Navbar;
