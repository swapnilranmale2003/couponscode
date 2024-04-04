import React, { useState } from "react";
import "./ContactForm.css";
import emailJs from "@emailjs/browser";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_5mfoare";
    const templateId = "template_s1w7rhg";
    const publicKey = "MB-kK6pXHR_v2LmVE";

    const templateParams = {
      from_email: email,
      from_name: name,
      to_name: "Rahul",
      message: message,
    };

    emailJs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log("Email sent successfully!!", res);
        setEmail("");
        setMessage("");
        setName("");
      })
      .catch((error) => {
        console.error("Error occured!!", error);
      });
  };

  return (
    <>
    <div className="contact-section">
    <div className="container contact-form my-3 ">
      <div className="contact-details">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <div className="contact-btn">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}

export default ContactForm;
