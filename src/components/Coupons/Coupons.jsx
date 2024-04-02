import React from "react";
import "./Coupons.css";
function Coupons() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <div className="coupon">
              <div className="title">
                <h3>Name</h3>
              </div>
              <div className="description">
                This is the coupon of course on Udemy
              </div>
              <div className="coupon-btn">
                <button className="btn btn-dark">Link</button>
                <button className="btn btn-dark">Redeem</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="coupon">
              <div className="title">
                <h3>Name</h3>
              </div>
              <div className="description">
                This is the coupon of course on Udemy
              </div>
              <div className="coupon-btn">
                <button className="btn btn-dark">Link</button>
                <button className="btn btn-dark">Redeem</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="coupon">
              <div className="title">
                <h3>Name</h3>
              </div>
              <div className="description">
                This is the coupon of course on Udemy
              </div>
              <div className="coupon-btn">
                <button className="btn btn-dark">Link</button>
                <button className="btn btn-dark">Redeem</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupons;
