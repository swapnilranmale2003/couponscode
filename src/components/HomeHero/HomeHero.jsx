import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlineRedeem } from "react-icons/md";
import CountUp from "react-countup";

import "./HomeHero.css";
function HomeHero() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };
  const handleAboutClick = () => {
    navigate("/about");
  };
  return (
    <div className="homepage">
      <div className="col-md-6 homepage-content">
        <div className="homepage-title">
          <h1 style={{ textAlign: "center" }}>
            Trade Trove{" "}
            <FaRegHandshake
              size={"5rem"}
              color="#F0A500"
              style={{ verticalAlign: "middle" }}
            />{" "}
            Uncover hidden deals! <br />
            <span style={{ display: "inline-block", verticalAlign: "middle" }}>
              Share Care: Amplify your savings flair!
            </span>{" "}
            <ShowChartIcon
              fontSize="inherit"
              style={{ color: "green", verticalAlign: "middle" }}
            />{" "}
            <br />
            Redeem Dream & your Budget beams!
          </h1>
        </div>
        
        <div className="homepage-btn">
        <h3 className="reached">We Are Reached</h3>
          <div className="appointments">
            <div className="Users">
              <h1 className="your-heading">
                <CountUp end={10} duration={200} />
              </h1>
              <p className="title-post">Users</p>
            </div>
            <div className="vertical-line"></div> {/* Vertical line */}
            <div className="Coupons">
              <h1 className="your-heading">
                <CountUp end={50} duration={200} />
              </h1>
              <p className="title-post">Coupons</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 ">
        <img
          className="homepage-image"
          src="https://images.pexels.com/photos/4342493/pexels-photo-4342493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default HomeHero;
