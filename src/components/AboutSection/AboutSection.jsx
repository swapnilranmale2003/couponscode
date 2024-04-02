import React from "react";
import "./AboutSection.css";
function AboutSection() {
  return (
    <div>
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
            <div className="row">
              <div className="col-md-12">
                <div className="box1">
                  <h1>We have 4 members in our group</h1>
                 <div className="box1-list">
                    <ol type="1">
                    <li>Avanti Bhamare</li>
                    <li>Yogesh Bhavsar</li>
                    <li>Swapnil Ranmale</li>
                    <li>Rahul Raundal</li>
                    </ol>
                 </div>

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="box1">
                  <h1>We used the tech stack </h1>
                  <div className="box1-list">
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
  );
}

export default AboutSection;
