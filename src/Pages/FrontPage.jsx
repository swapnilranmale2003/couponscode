import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Coupons from "../components/Coupons/Coupons";
import Footer from "../components/Footer/Footer";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Upload } from "../components/Uploadcoupon/Upload";
function FrontPage() {
  const navigate = useNavigate();
  const handleUpload = ()=>{
    navigate("/Upload");
  }
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-end uploadicons container-fluid">
        <FaPlus size={"3rem"} color="#F0A500" onClick={handleUpload}/>
      </div>
      <Coupons />
      <Footer />
    </div>
  );
}

export default FrontPage;
