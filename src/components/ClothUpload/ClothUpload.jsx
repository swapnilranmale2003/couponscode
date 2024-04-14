import React, { useState } from "react";
import "./ClothUpload.css";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ClothUpload() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    title: "",
    link: "",
    couponcode: "",
    description: "",
    date: new Date(),
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
      navigate("/categories/clothings");
    }, 1000);
  };

  const isValidLink = (link) => {
    // Regular expression to validate link format
    const linkRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    // Check if the link is a video file or contains inappropriate content
    const videoRegex = /\.(mp4|avi|mov|wmv)$/i;
    const inappropriateRegex = /(sex|porn|xxx)/i;
    return (
      linkRegex.test(link) &&
      !videoRegex.test(link) &&
      !inappropriateRegex.test(link)
    );
  };

  const getData = async (e) => {
    e.preventDefault();

    const { title, link, couponcode, description, date } = user;

    if (!isValidLink(link)) {
      setErrorMessage(
        <p className="error-message white-text">Invalid link provided</p>
      );
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
        "https://uploadclothingcoupons-default-rtdb.firebaseio.com/uploadclothingcoupons.json",
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
        <Breadcrumb.Item
          linkAs={Link}
          linkProps={{ to: "/categories/clothings" }}
        >
          Clothings
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
        <button onClick={handleGetECoupons}>Get Clothings Coupons</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ClothUpload;
