import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import FetchData from "../components/FetchData";

function FrontPage() {
  const navigate = useNavigate();

  const handleUpload = () => {
    navigate("/upload");
  };

  return (
    <div>
      <Navbar />
      {/* Your other content */}
      {/* <div className="d-flex justify-content-center uploadicons container-fluid">
        <FaPlus size={"5rem"} color="#05386b" onClick={handleUpload} />
        <span className="align-self-center ml-2">Upload Coupon</span>
      </div>
      <FetchData /> */}
      <Footer />
    </div>
  );
}

export default FrontPage;
