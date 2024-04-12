import React, { useState } from "react";
import "./EducationUpload.css";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EducationUpload() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    title: "",
    link: "",
    couponcode: "",
    description: "",
    date: "", // Added date field
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
      navigate("/categories/education");
    }, 1000);
  };

  const getData = async (e) => {
    e.preventDefault();
  
    // Input validation for link
    if (!isValidLink(user.link)) {
      setErrorMessage(<p className="error-message" style={{ color: "white" }}>Invalid link provided</p>);
      return;
    }

    const { title, link, couponcode, description, date } = user; // Added date
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
        date, // Include date in the data sent to the database
      }),
    };

    try {
      const res = await fetch(
        "https://uploadeducationcoupons-default-rtdb.firebaseio.com/uploadeducationcoupons.json",
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

  // Function to validate link
  const isValidLink = (link) => {
    // Regular expression to validate link format
    const linkRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    // Check if the link is a YouTube video link
    const youtubeRegex = /^(https?:\/\/)?((www\.)?youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)/;
    return linkRegex.test(link) && !youtubeRegex.test(link);
  };
  return (
    <div className="upload-section">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/frontpage" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item
          linkAs={Link}
          linkProps={{ to: "/categories/education" }}
        >
          Education
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
            <DatePicker
              className="form-control"
              name="date"
              placeholderText="Enter the date"
              required
              autoComplete="off"
              selected={user.date}
              onChange={(date) => setUser({ ...user, date })}
              // minDate={new Date()}
              showMonthDropdown
              showYearDropdown
            />
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
        <button onClick={handleGetECoupons}>Get Education Coupons</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default EducationUpload;
