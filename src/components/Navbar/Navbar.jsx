import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
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
    <div className="container-fluid">
      <div className="navbar-header">
        <div className="logo" onClick={handleLogoClick}>
          <h2>
            <span>E</span>xchang
            <span>
              <RocketLaunchIcon
                className="m-auto"
                style={{ fontSize: "30px" }}
            
                
              />
            </span>
          </h2>{" "}
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <NavLink
                exact
                className="linkStyle"
                activeClassName="active"
                to={"/frontpage"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="linkStyle"
                activeClassName="active"
                to={"/about"}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="linkStyle"
                activeClassName="active"
                to={"/contact"}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="linkStyle"
                activeClassName="active"
                to={"/login"}
              >
                Login/SignUp
              </NavLink>
            </li>
            <li className="dropdown">
              <select className="linkStyle" onChange={handleCategoryChange}>
                <option value="">Select Category</option>
                <option value="education">Education</option>
                <option value="food">Foods</option>
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
