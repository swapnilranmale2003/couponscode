import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import "./FoodUpload.css";
// Custom Colors and Styles
const customStyles = {
  primaryColor: "#F0A500",
  textColor: "#333",
  errorText: {
    color: "#fff",
    backgroundColor: "#dc3545",
    padding: "8px",
    borderRadius: "4px",
    fontSize: "0.875rem",
    marginTop: "10px",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "0.95rem",
    width: "100%",
  },
  button: {
    backgroundColor: "#F0A500",
    border: "none",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: "6px",
    fontWeight: "500",
    fontSize: "1rem",
    width: "100%",
    cursor: "pointer",
  },
};

// Link Validator
const isValidLink = (link) => {
  const linkRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  const blacklist = ["mp4", "sex", "porn", "xxx", "adult"];
  const youtubeRegex =
    /^(https?:\/\/)?((www\.)?youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)/;

  return (
    linkRegex.test(link) &&
    !blacklist.some((k) => link.toLowerCase().includes(k)) &&
    !youtubeRegex.test(link)
  );
};

const FoodUpload = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    title: "",
    link: "",
    couponcode: "",
    description: "",
    date: null,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: name === "title" ? value.slice(0, 12) : value,
    }));
  };

  const handleDateChange = (date) => {
    setUser((prev) => ({ ...prev, date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, link, couponcode, description, date } = user;

    if (!title || !couponcode || !date) {
      setErrorMessage("Please fill in all required fields");
      return;
    }

    if (!isValidLink(link)) {
      setErrorMessage("Please enter a valid link");
      return;
    }

    try {
      const res = await fetch(
        "https://swapnil-5e27c-default-rtdb.firebaseio.com/uploadfoodcoupons.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, link, couponcode, description, date }),
        }
      );

      if (res.ok) {
        toast.success("Coupon uploaded successfully!");
        setUser({
          title: "",
          link: "",
          couponcode: "",
          description: "",
          date: null,
        });
        setErrorMessage("");
      } else {
        throw new Error("Failed to upload coupon");
      }
    } catch (err) {
      setErrorMessage("Error occurred while uploading coupon");
    }
  };

  const handleRedirect = () => {
    setTimeout(() => navigate("/categories/food"), 1000);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "0 20px" }}>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/frontpage" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/categories/food" }}>
          Food
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Upload Coupons</Breadcrumb.Item>
      </Breadcrumb>

      <h2
        style={{
          color: customStyles.primaryColor,
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Upload Food Coupon
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter the title (max 12 chars)"
          value={user.title}
          onChange={handleChange}
          style={customStyles.input}
          required
        />
        <input
          type="text"
          name="link"
          placeholder="Enter the link"
          value={user.link}
          onChange={handleChange}
          style={customStyles.input}
        />
        <input
          type="text"
          name="couponcode"
          placeholder="Enter the coupon code"
          value={user.couponcode}
          onChange={handleChange}
          style={customStyles.input}
          required
        />
        <textarea
          name="description"
          placeholder="Enter a description (optional)"
          rows="4"
          value={user.description}
          onChange={handleChange}
          style={{ ...customStyles.input, resize: "none" }}
        />
        <DatePicker
          selected={user.date}
          onChange={handleDateChange}
          placeholderText="Select expiry date"
          className="form-control"
          minDate={new Date()}
          required
          style={customStyles.input}
        />

        {errorMessage && <p style={customStyles.errorText}>{errorMessage}</p>}

        <button type="submit" style={customStyles.button}>
          Submit
        </button>
      </form>

      <button
        style={{
          ...customStyles.button,
          marginTop: "20px",
          backgroundColor: "#444",
        }}
        onClick={handleRedirect}
      >
        View Food Coupons
      </button>

      <ToastContainer />
    </div>
  );
};

export default FoodUpload;
