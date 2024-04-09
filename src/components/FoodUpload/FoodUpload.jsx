import React, { useState } from "react";
import "./FoodUpload.css";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FoodUpload() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    title: "",
    link: "",
    couponcode: "",
    description: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const data = (e) => {
    const { name, value } = e.target;

    if (name === "title" && value.length > 12) {
      setUser({ ...user, [name]: value.slice(0, 12) });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleGetECoupons = () => {
    setTimeout(() => {
      navigate("/categories/food");
    }, 1000);
  };

  const getData = async (e) => {
    e.preventDefault();

    const { title, link, couponcode, description } = user;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        link,
        couponcode,
        description,
      }),
    };

    try {
      const res = await fetch(
        "https://uploadfoodcoupons-default-rtdb.firebaseio.com/uploadfoodcoupons.json",
        options
      );

      if (res.ok) {
        toast.success("Your coupon is uploaded"); // Show success notification
      } else {
        throw new Error("Failed to upload coupon");
      }
    } catch (error) {
      setErrorMessage("Error occurred while uploading coupon");
    }
  };

  return (
    <div className="upload-section">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/frontpage" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item
          linkAs={Link}
          linkProps={{ to: "/categories/food" }}
        >
          Food
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Upload Coupons</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="text-center color">Upload Coupons</h1>

      <div className="container my-5 upload-coupons">
        <form>
          <div className="inputs">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Enter the Title"
              required
              autoComplete="off"
              value={user.title}
              onChange={data}
            />
            <input
              type="text"
              className="form-control"
              name="link"
              placeholder="Enter the link (optional)"
              autoComplete="off"
              value={user.link}
              onChange={data}
            />
            <input
              type="text"
              className="form-control"
              name="couponcode"
              placeholder="Enter the coupon code"
              required
              autoComplete="off"
              value={user.couponcode}
              onChange={data}
            />
            <textarea
              name="description"
              placeholder="Enter your description"
              cols="30"
              rows="5"
              autoComplete="off"
              value={user.description}
              onChange={data}
            ></textarea>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
          <div className="upload-btn">
            <button type="submit" onClick={getData}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="getcoupons">
        <button onClick={handleGetECoupons}>Get Food Coupons</button>
      </div>
      <ToastContainer /> {/* React Toastify container */}
    </div>
  );
}

export default FoodUpload;
