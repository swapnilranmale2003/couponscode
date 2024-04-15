import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FaPlus } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";
import FetchData from "../components/FetchData";
import GetCoupons from "../components/Getcoupons/GetCoupons";
import { Button } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { FaRegHandshake } from "react-icons/fa6";
import "./FrontPage.css";
import Invite from "../components/Invite/Invite";
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components
import HomeHero from "../components/HomeHero/HomeHero";

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
      <HomeHero />
      <Container>
        <Row>
          <Col md={6} className="hs-left">
            <h1>Welcome</h1>
            <img src="/c3.webp" alt="" />
          </Col>
          <Col md={6} className="hs-right">
            <div className="cardFP">
              <Row>
                <Col
                  className="box1 d-flex justify-content-center align-items-center"
                  onClick={handleBox1}
                >
                  <Link to={"/education"}>Educations</Link>
                </Col>
                <Col
                  className="box1 d-flex justify-content-center align-items-center"
                  onClick={handleBox2}
                >
                  <Link to={"/foods"}>Foods</Link>
                </Col>
              </Row>
              <Row>
                <Col
                  className="box1 d-flex justify-content-center align-items-center"
                  onClick={handleBox3}
                >
                  <Link to={"/clothings"}>Clothings</Link>
                </Col>
                <Col className="box1 d-flex justify-content-center align-items-center">
                  Others
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Invite />
      <Footer />
    </div>
  );
}

export default FrontPage;
