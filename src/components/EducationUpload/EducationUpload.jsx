import React, { useState } from "react";
import "./EducationUpload.css";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

function EducationUpload() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    title: "",
    link: "",
    couponcode: "",
    description: "",
    date: "",
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

  const isValidLink = (link) => {
    const linkRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const youtubeRegex =
      /^(https?:\/\/)?((www\.)?youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)/;
    return linkRegex.test(link) && !youtubeRegex.test(link);
  };

  const getData = async (e) => {
    e.preventDefault();

    if (!isValidLink(user.link)) {
      setErrorMessage("Invalid link provided");
      return;
    }

    const { title, link, couponcode, description, date } = user;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, link, couponcode, description, date }),
    };

    try {
      const res = await fetch(
        "https://swapnil-5e27c-default-rtdb.firebaseio.com/uploadeducationcoupons.json",
        options
      );
      if (res.ok) {
        toast.success("Your coupon is uploaded");
        setUser({
          title: "",
          link: "",
          couponcode: "",
          description: "",
          date: "",
        });
        setErrorMessage("");
      } else {
        throw new Error("Failed to upload coupon");
      }
    } catch (error) {
      setErrorMessage("Error occurred while uploading coupon");
    }
  };

  return (
    <div className="upload-section container py-4">
      <Breadcrumb>
        <Breadcrumb.Item
          linkAs={Link}
          linkProps={{ to: "/frontpage" }}
          style={{ color: "black" }}
        >
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item
          linkAs={Link}
          linkProps={{ to: "/categories/education" }}
          style={{ color: "black" }}
        >
          Education
        </Breadcrumb.Item>
        <Breadcrumb.Item active style={{ color: "black" }}>
          Upload Coupons
        </Breadcrumb.Item>
      </Breadcrumb>

      <h2
        className="text-center mb-4"
        style={{ color: customStyles.primaryColor }}
      >
        Upload Education Coupons
      </h2>

      <form
        onSubmit={getData}
        className="mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Title"
          required
          autoComplete="off"
          value={user.title}
          onChange={data}
          style={customStyles.input}
        />
        <input
          type="text"
          className="form-control"
          name="link"
          placeholder="Coupon Link"
          autoComplete="off"
          value={user.link}
          onChange={data}
          style={customStyles.input}
        />
        <input
          type="text"
          className="form-control"
          name="couponcode"
          placeholder="Coupon Code"
          required
          autoComplete="off"
          value={user.couponcode}
          onChange={data}
          style={customStyles.input}
        />
        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          autoComplete="off"
          value={user.description}
          onChange={data}
          className="form-control"
          style={{ ...customStyles.input, resize: "vertical" }}
        ></textarea>
        <DatePicker
          className="form-control"
          placeholderText="Select Expiry Date"
          required
          selected={user.date}
          onChange={(date) => setUser({ ...user, date })}
          minDate={new Date()}
          showMonthDropdown
          showYearDropdown
          style={customStyles.input}
        />

        {errorMessage && <p style={customStyles.errorText}>{errorMessage}</p>}

        <div className="mt-4">
          <button type="submit" style={customStyles.button}>
            Submit Coupon
          </button>
        </div>
      </form>

      <div className="text-center mt-4">
        <button
          onClick={handleGetECoupons}
          style={{
            ...customStyles.button,
            backgroundColor: "#333",
            marginTop: "10px",
            width: "auto",
            padding: "8px 20px",
          }}
        >
          View Coupons
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default EducationUpload;
