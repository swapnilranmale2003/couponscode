import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Coupons from "../components/Coupons/Coupons";
import Footer from "../components/Footer/Footer";
import { FaPlus } from "react-icons/fa6";
function FrontPage() {
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-end uploadicons container-fluid">
        <FaPlus size={"3rem"} color="#F0A500" />
      </div>
      <Coupons />
      <Footer />
    </div>
  );
}

export default FrontPage;
