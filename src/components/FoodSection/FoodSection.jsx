import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

import { FaPlus } from "react-icons/fa"; // Import FaPlus icon
import './FoodSection.css'

function FoodSection() {
  const navigate = useNavigate(); // Use the useNavigate hook to get the navigate function

  const handleClick = () => {
    navigate("/categories/food/foodupload");
  };

  return (
    <>
      <div className="food-hero pt-3">
      <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/frontpage" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active
            linkAs={Link}
            linkProps={{ to: "/categories/food" }}
          >
            Foods
          </Breadcrumb.Item>
          </Breadcrumb>
        <div className="fd-btn">
          <FaPlus size={"5rem"} color="#05386b" onClick={handleClick} />
          <span>Upload Foods Coupons!</span>
        </div>
        <div className="fd-h1">
          <h1>Foods</h1>
          <img src="/edu.png" alt="" />
        </div>
      </div>
      <div className="ml-5">
        <h1>Foods</h1>
        
      </div>
    </>
  );
}

export default FoodSection;
