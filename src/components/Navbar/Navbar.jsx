import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
          <img src="logo.png" alt="" />
        </div>
        <div className="nav-menu">
          <ul>
            <Link className="linkStyle" to={"/frontpage"}>
              Home
            </Link>
            <Link className="linkStyle" to={"/about"}>
              About Us
            </Link>
            <Link className="linkStyle" to={"/contact"}>
              Contact Us
            </Link>

            <Link className="linkStyle" to={"/"}>
              Login/SignUp
            </Link>
            <li className="dropdown" style={{ marginRight: "10px" }}>
              <select onChange={handleCategoryChange}>
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
