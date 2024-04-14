import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import "./ClothSection.css";
import ClothFetch from "./ClothFetch";

function ClothSection() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = () => {
    navigate("/categories/clothings/clothupload");
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="clothes-hero pt-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/frontpage" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item
            active
            linkAs={Link}
            linkProps={{ to: "/categories/clothings" }}
          >
            Clothes
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="search-bar mr-3">
          <input
            className="form-control"
            style={{ height: "50px", borderRadius: "5px", border:"none"}}
            type="text"
            placeholder="Search by title"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="cloth-btn">
        <FaPlus size={"5rem"} color="#f0a500" onClick={handleClick} />
        <span>Upload Clothings Coupons!</span>
      </div>
      <div className="ml-5">
        <h1>Clothings</h1>
        <ClothFetch searchQuery={searchQuery} />
      </div>
    </>
  );
}

export default ClothSection;
