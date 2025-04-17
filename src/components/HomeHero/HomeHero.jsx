import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlineRedeem } from "react-icons/md";
import CountUp from "react-countup";
import "./HomeHero.css";

function HomeHero() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1 className="main-title">
          Trade Trove <FaRegHandshake color="#F0A500" />
        </h1>
        <p className="tagline">
          Uncover hidden deals! Share Care: Amplify your savings flair! <br />
          <MdOutlineRedeem color="#F0A500" /> Redeem Dream & your Budget beams!
        </p>

        <div className="cta-buttons">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/contact")}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={() => navigate("/about")}
          >
            Learn More
          </Button>
        </div>

        <div className="stats">
          <div className="stat-box">
            <h2>
              <CountUp end={10} duration={3} />
            </h2>
            <p>Users</p>
          </div>
          <div className="stat-box">
            <h2>
              <CountUp end={50} duration={3} />
            </h2>
            <p>Coupons</p>
          </div>
        </div>
      </div>

      <div className="homepage-image-wrapper">
        <img
          className="homepage-image"
          src="https://images.pexels.com/photos/4342493/pexels-photo-4342493.jpeg"
          alt="hero-banner"
        />
      </div>
    </div>
  );
}

export default HomeHero;
