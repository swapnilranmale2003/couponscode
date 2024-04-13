import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

import { FaPlus } from "react-icons/fa";
import EducationFetch from "./EducationFetch";
import "./EducationSection.css";

function EducationSection() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = () => {
    navigate("/categories/education/educationupload");
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="education-hero pt-3">
        <div>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/frontpage" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              active
              linkAs={Link}
              linkProps={{ to: "/categories/education" }}
            >
              Education
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
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
      <div className="ed-btn">
        <FaPlus size={"5rem"} color="#F0A500" onClick={handleClick} />
        <span>Upload Education Coupons!</span>
      </div>
      <div className="ml-5">
        <h1>Available Education Coupons</h1>
        <EducationFetch searchQuery={searchQuery} />
      </div>
    </>
  );
}

export default EducationSection;
