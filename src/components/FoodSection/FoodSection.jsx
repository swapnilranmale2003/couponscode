import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import FoodFetch from "./FoodFetch";
import "./FoodSection.css";

function FoodSection() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = () => {
    navigate("/categories/food/foodupload");
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="food-hero pt-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/frontpage" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item
            active
            linkAs={Link}
            linkProps={{ to: "/categories/food" }}
          >
            Foods
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="search-bar mr-3">
          <input
            className="form-control"
            style={{ height: "50px", borderRadius: "5px", border: "none" }}
            type="text"
            placeholder="Search by title"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="food-btn">
        <FaPlus size={"5rem"} color="#F0A500" onClick={handleClick} />
        <span>Upload Food Coupons!</span>
      </div>
      <div className="ml-5">
        <h1>Available Food Coupons</h1>
        <FoodFetch searchQuery={searchQuery} />
      </div>
    </>
  );
}

export default FoodSection;
