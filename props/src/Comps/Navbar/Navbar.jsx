import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>vamsiMart</h1>
        <div className='nav_links'>
          <Link to="/products">  <span>Products</span></Link>
        </div>
    </div>
  )
}

export default Navbar