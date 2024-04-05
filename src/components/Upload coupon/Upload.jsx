import React, { useState } from "react";
import "./Upload.css";
import { useNavigate } from "react-router";

function Upload() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    title: "",
    link: "",
    couponcode: "",
    description: "",
  });

  const data = (e) => {
    const { name, value } = e.target;

    // Truncate the title to 12 characters if it exceeds
    if (name === "title" && value.length > 12) {
      setUser({ ...user, [name]: value.slice(0, 12) });
    } else {
      setUser({ ...user, [name]: value });
    }
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

    const res = await fetch(
      "https://uploadcoupons-6b1e4-default-rtdb.firebaseio.com/UploadCoupon.json",
      options
    );

    if (res) {
      alert("Your coupon is uploaded");
    } else {
      alert("Error occurred");
    }
  };

  const handleGetCoupons = () => {
    setTimeout(() => {
      navigate("/frontpage");
    }, 1000); // Navigate after 5 seconds
  };

  return (
    <>
      <div className="upload-section">
        <h1 className="text-center color">Upload Coupons</h1>

        <div className="container my-5 upload-coupons">
          <form method="POST">
            <div className="inputs">
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="Enter the Title"
                id=""
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
                id=""
                autoComplete="off"
                value={user.link}
                onChange={data}
                required
              />
              <input
                type="text"
                className="form-control"
                name="couponcode"
                placeholder="Enter the coupon code"
                id=""
                required
                autoComplete="off"
                value={user.couponcode}
                onChange={data}
              />
              <textarea
                name="description"
                placeholder="Enter your description"
                id=""
                cols="30"
                rows="5"
                autoComplete="off"
                value={user.description}
                onChange={data}
              ></textarea>
            </div>
            <div className="upload-btn">
              <button type="submit" onClick={getData}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="getcoupons">
          <button onClick={handleGetCoupons}>Get Coupons</button>
        </div>
      </div>
    </>
  );
}

export default Upload;
