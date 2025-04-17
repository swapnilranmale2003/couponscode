import React from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/frontpage");
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory) {
      navigate(`/categories/${selectedCategory}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo" onClick={handleLogoClick}>
          <h2>
            <span>E</span>xchango
            <span>
              <RocketLaunchIcon
                style={{ fontSize: "30px", marginLeft: "5px" }}
              />
            </span>
          </h2>
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <NavLink exact="true" className="linkStyle" to="/frontpage">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="linkStyle" to="/about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="linkStyle" to="/contact">
                Contact Us
              </NavLink>
            </li>
            <li>
              <select
                className="dropdown-select"
                onChange={handleCategoryChange}
              >
                <option value="">Category</option>
                <option value="education">Education</option>
                <option value="food">Foods</option>
                <option value="clothings">Clothings</option>
                <option value="others">Others</option>
              </select>
            </li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
