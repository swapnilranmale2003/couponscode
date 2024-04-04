import React, { useState } from "react";
import "./Upload.css";
function Upload() {
  const [user, setUser] = useState({
    title: "",
    link: "",
    couponcode: "",
    description: "",
  });
  let name, value;
  console.log(user);
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const getData = async(e) => {
    const { title, link, couponcode, description } = user;
    e.preventDefault();
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
    if(res){
      alert("Your coupon is uploaded");
    }
    else{
      alert("Error occured")
    }
  };
  return (
    <>
      <h1 className="text-center">Upload Coupons</h1>
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
              className="form-control "
              name="link"
              placeholder="Enter the link (optional)"
              id=""
              autoComplete="off"
              value={user.link}
              onChange={data}
            />
            <input
              type="text"
              className="form-control "
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
          <div>
            <button type="submit" className="btn btn-dark" onClick={getData}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Upload;
