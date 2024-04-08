import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css"; 
function Homepage(props) {
  return (
    <div className="homepage-container">
      <div className="box-container">
        <div className="box">
          <h1><Link to="/login" className="link-style">Login</Link></h1>
        </div>
        <div className="box">
          <h1><Link to="/signup" className="link-style">SignUp</Link></h1>
        </div>
      </div>
      <h2 className="welcome-message"> {props.name ? `Welcome - ${props.name}` : "Login Please"} </h2>
    </div>
  );
}

export default Homepage;
