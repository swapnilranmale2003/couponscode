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
        <div className="search-bar">
          <input
            className="form-control"
            type="text"
            placeholder="Search by title"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="ed-btn">
          <FaPlus size={"5rem"} color="#05386b" onClick={handleClick} />
          <span>Upload Education Coupons!</span>
        </div>
        <div className="ed-h1">
          <h1>Education</h1>
          <img src="/edu.png" alt="" />
        </div>
      </div>
      <div className="ml-5">
        <h1>Education</h1>

        <EducationFetch searchQuery={searchQuery} />
      </div>
    </>
  );
}

export default EducationSection;
