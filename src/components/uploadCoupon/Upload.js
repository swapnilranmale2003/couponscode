import React, { useState } from 'react'
import 'firebase/firestore';
import firebase from 'firebase/compat/app'
const Upload = () => {
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    couponCode: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const db = firebase.firestore();
      await db.collection('coupons').add(formData);
      // Reset form data after submission
      setFormData({
        title: '',
        link: '',
        couponCode: '',
        description: '',
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="link"
        value={formData.link}
        onChange={handleChange}
        placeholder="Link"
      />
      <input
        type="text"
        name="couponCode"
        value={formData.couponCode}
        onChange={handleChange}
        placeholder="Coupon Code"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Upload;
