import React from "react";
import "./AboutSection.css";
import Features from "../Features/Features";
function AboutSection() {
  return (
    <>
    <div>
      <h1 className="text-center about-color">About Us</h1>
      <div className="about-section my-4">
        <div className="container">
          <div className="row my-3">
            <div className="col-md-6">
              <div className="about-left">
                <li>
                  This is the platform that provides a service to the users were
                  they can use the unused coupon from user platform.
                </li>
                <li>
                  In this platform were users can also upload the their unused
                  coupons on this platform.
                </li>
                <li>
                  To upload the coupon User have to register into our platform.
                </li>
                <li>
                  To upload the user must verify the coupon is valid or not.
                </li>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-right">
                <div className="box1">
                  <div className="box1-heading">
                    We have 4 members in our group
                  </div>
                  <div className="box-list">
                    <ol type="1">
                      <li>Avanti Bhamare</li>
                      <li>Yogesh Bhavsar</li>
                      <li>Swapnil Ranmale</li>
                      <li>Rahul Raundal</li>
                    </ol>
                  </div>
                </div>
                <div className="box1">
                  <div className="box1-heading">We used the tech stack </div>
                  <div className="box-list">
                    <ol type="1">
                      <li>UI : React Js</li>
                      <li>Database : Firebase</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Features />
    </div>
    </>
  );
}

export default AboutSection;
