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
              <blockquote class="quote">
                <p>
                  "Unlock the full potential of your savings journey by
                  utilizing every coupon code available. Don't miss out on
                  valuable discounts that could expire or go unused, leaving
                  both consumers and businesses at a loss. Seize every
                  opportunity to save and make the most out of every deal!"
                </p>
              </blockquote>
            </div>
          </div>
          <div className="col-md-3">
            <div className="categories">
              <div className="footer-heading">Categories</div>
              <div className="footerlist">
                <ul>
                  <li>
                    <Link className="orange" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="orange" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="orange" to="/contact">
                      Contact
                    </Link>
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
                  <Link className="orange" to="/categories/education">
                    Education
                  </Link>
                </li>
                <li>
                  <Link className="orange" to="/categories/food">
                    Foods
                  </Link>
                </li>
                <li>
                  <Link className="orange" to="/categories/clothings">
                    Clothing
                  </Link>
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
