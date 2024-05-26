import React, { useState } from "react";
import "./FoodUpload.css";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Function to validate link
const isValidLink = (link) => {
  // Regular expression to validate link format
  const linkRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  // Check if link matches the format
  if (!linkRegex.test(link)) {
    return false;
  }

  // Blacklist of keywords or file extensions
  const blacklist = ["mp4", "sex", "porn", "xxx", "adult"];
  // Check if the link contains any blacklisted keyword or file extension
  if (blacklist.some(keyword => link.toLowerCase().includes(keyword))) {
    return false;
  }

  // Check if the link is a YouTube video link
  const youtubeRegex = /^(https?:\/\/)?((www\.)?youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)/;
  if (youtubeRegex.test(link)) {
    return false;
  }

  return true;
};


function FoodUpload() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    title: "",
    link: "",
    couponcode: "",
    description: "",
    date: null, // Initialize date as null
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

  const handleGetFoodCoupons = () => {
    setTimeout(() => {
      navigate("/categories/food");
    }, 1000);
  };

  const getData = async (e) => {
    e.preventDefault();

    const { title, link, couponcode, description, date } = user;

    // Check if any required fields are empty
    if (!title || !couponcode || !date) {
      setErrorMessage("Please fill in all required fields");
      return;
    }

    // Check if link is valid
    if (!isValidLink(link)) {
      setErrorMessage("Please enter a valid link");
      return;
    }

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
        date,
      }),
    };

    try {
      const res = await fetch(
        "https://uploadfoodcoupons-default-rtdb.firebaseio.com/uploadfoodcoupons.json",
        options
      );

      if (res.ok) {
        toast.success("Your coupon is uploaded");
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
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/categories/food" }}>
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
              placeholder="Enter the link "
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
            <DatePicker
              className="form-control"
              selected={user.date}
              onChange={(date) => setUser({ ...user, date })}
              placeholderText="Enter the date"
              autoComplete="off"
              required
              minDate={Date.now()}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="upload-btn">
            <button type="submit" onClick={getData}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="getcoupons">
        <button onClick={handleGetFoodCoupons}>Get Food Coupons</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default FoodUpload;
