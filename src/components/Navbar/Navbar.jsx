import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom'; // Import NavLink for active styling
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/frontpage");
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    navigate(`/categories/${selectedCategory}`);
  };

  return (
    <div className='container-fluid'>
      <div className="navbar-header">
        <div className="logo" onClick={handleLogoClick}>
          <img src="/logo.png" alt="Logo" /> {/* Update src to use correct path */}
        </div>
        <div className="nav-menu">
          <ul>
            {/* Use NavLink instead of Link for active styling */}
            <li><NavLink exact className='linkStyle' activeClassName="active" to={"/frontpage"}>Home</NavLink></li>
            <li><NavLink className='linkStyle' activeClassName="active" to={"/about"}>About Us</NavLink></li>
            <li><NavLink className='linkStyle' activeClassName="active" to={"/contact"}>Contact Us</NavLink></li>
            <li><NavLink className='linkStyle' activeClassName="active" to={"/login"}>Login/SignUp</NavLink></li>
            <li className="dropdown">
              <select className='linkStyle' onChange={handleCategoryChange}>
                <option value="">Select Category</option>
                <option value="education">Education</option>
                <option value="foods">Foods</option>
                <option value="clothings">Clothings</option>
                <option value="others">Others</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
