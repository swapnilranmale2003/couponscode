import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FaPlus } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";
import FetchData from "../components/FetchData";
import GetCoupons from "../components/Getcoupons/GetCoupons";
import "./FrontPage.css";

function FrontPage() {
  const navigate = useNavigate();

  const handleBox1 = () => {
    navigate("/categories/education");
  };

  const handleBox2 = () => {
    navigate("/categories/food");
  };

  const handleBox3 = () => {
    navigate("/categories/clothings");
  };

  return (
    <div>
      <Navbar />
      <div className="homepage-section">
        <div className="hs-left">
          <h1>Welcome</h1>
          <img src="/c3.webp" alt="" />
        </div>
        <div className="hs-right">
          <div className="cardFP">
            <div className="row">
              <div className="box1" onClick={handleBox1}>
                <Link to={'/education'}>Educations</Link>
              </div>
              <div className="box1" onClick={handleBox2}>
                <Link to={'/foods'}>Foods</Link>
              </div>
            </div>
            <div className="row">
              <div className="box1" onClick={handleBox3}>
                <Link to={'/clothings'}>Clothings</Link>
              </div>
              <div className="box1">Others</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FrontPage;