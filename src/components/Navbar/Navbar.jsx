import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='container-fluid'>
      <div className="navbar-header">
        <div className="logo">
           <h4>Logo</h4>
        </div>
        <div className="nav-menu">
            <ul>
                <Link className='linkStyle' to={"/"}>Home</Link>
                <Link className='linkStyle' to={"/about"}>About Us</Link>
                <Link className='linkStyle' to={"/contact"}>Contact Us</Link>
                <Link className='linkStyle' to={"/"}>Login/SignUp</Link>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
