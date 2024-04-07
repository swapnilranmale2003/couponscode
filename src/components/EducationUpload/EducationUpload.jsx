  import React, { useState } from "react";
  import "./EducationUpload.css"; // Import your CSS file for EducationUpload component styling
  import { Link, useNavigate } from "react-router-dom";
  import { Breadcrumb } from "react-bootstrap";
  function EducationUpload() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
      title: "",
      link: "",
      couponcode: "",
      description: "",
    });

    const [errorMessage, setErrorMessage] = useState(""); // State for error message

    const data = (e) => {
      const { name, value } = e.target;

      // Truncate the title to 12 characters if it exceeds
      if (name === "title" && value.length > 12) {
        setUser({ ...user, [name]: value.slice(0, 12) });
      } else {
        setUser({ ...user, [name]: value });
      }
    };
    const handleGetECoupons = () => {
      setTimeout(() => {
        navigate("/categories/education");
      }, 1000); // Navigate after 5 seconds
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
          "https://uploadeducationcoupons-default-rtdb.firebaseio.com/uploadeducationcoupons.json",
          options
        );

        if (res.ok) {
          alert("Your coupon is uploaded");
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
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
            {/* Display error message if exists */}
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
      </div>
    );
  }

  export default EducationUpload;