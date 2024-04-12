import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-content">
              <h4>Coupons Code Exchange Platform</h4>
              <p>
                Unused coupon codes often expire or are lost, leading to
                wasted savings opportunities for consumers and businesses.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="categories">
              <div className="footer-heading">Categories</div>
              <div className="footerlist">
                <ul>
                  <li>
                    <Link className="orange" to="/">Home</Link>
                  </li>
                  <li>
                    <Link className="orange" to="/about">About</Link>
                  </li>
                  <li>
                    <Link className="orange" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-heading">Products</div>
            <div className="footerlist">
              <ul>
                <li>
                  <Link className="orange" to="/foods">Foods</Link>
                </li>
                <li>
                  <Link className="orange" to="/clothing">Clothing</Link>
                </li>
                <li>
                  <Link className="orange" to="/others">Others</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
