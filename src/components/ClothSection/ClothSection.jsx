import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

import { FaPlus } from "react-icons/fa";
import "./ClothSection.css";
import ClothFetch from "./ClothFetch";
function ClothSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/categories/clothings/clothupload");
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
        <div className="cloth-btn">
          <FaPlus size={"5rem"} color="#05386b" onClick={handleClick} />
          <span>Upload Clothings Coupons!</span>
        </div>
        <div className="cloth-h1">
          <h1>Clothes</h1>
          <img src="/edu.png" alt="" />
        </div>
      </div>
      <div className="ml-5">
        <h1>Clothings</h1>
        <ClothFetch />
      </div>
    </>
  );
}

export default ClothSection;
