import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="container-fluid">
        <footer>
          <div className="row">
            <div className="col-md-6">
                <div className="footer-content">

                
              <h4>Coupons Code Exchange Plateform</h4>
              <p>
                Unused coupon codes often expire or are lost, leading to wasted
                savings opportunities for consumers and businesses.
              </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="categories">
                <div className="footer-heading">Categories</div>
                <div className="footerlist">
                  <ul>
                    <Link className="orange">Home</Link>
                    <Link className="orange">About</Link>
                    <Link className="orange">Contact</Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              {" "}
              <div className="footer-heading">Products</div>
              <div className="footerlist">
                <ul>
                  <Link className="orange">Foods</Link>
                  <Link className="orange">Clothing</Link>
                  <Link className="orange">Others</Link>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
