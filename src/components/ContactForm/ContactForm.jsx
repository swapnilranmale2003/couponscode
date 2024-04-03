import React from "react";
import "./ContactForm.css";
function ContactForm() {
  return (
    <div className="container contact-form my-3 ">
      <div className="contact-details">
        <input type="text" placeholder="Email" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <div className="contact-btn">
          <button className="btn btn-dark">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
