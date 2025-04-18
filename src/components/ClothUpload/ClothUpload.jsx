import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Breadcrumb,
  Alert,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ClothUpload.css";
function ClothUpload() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    title: "",
    link: "",
    couponcode: "",
    description: "",
    date: new Date(),
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title" && value.length > 12) {
      setUser({ ...user, [name]: value.slice(0, 12) });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleGetECoupons = () => {
    navigate("/categories/clothings");
  };

  const isValidLink = (link) => {
    const linkRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const videoRegex = /\.(mp4|avi|mov|wmv)$/i;
    const inappropriateRegex = /(sex|porn|xxx)/i;
    return (
      linkRegex.test(link) &&
      !videoRegex.test(link) &&
      !inappropriateRegex.test(link)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    const { title, link, couponcode, description, date } = user;

    if (!isValidLink(link)) {
      setErrorMessage("Invalid link provided");
      return;
    }

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
        date,
      }),
    };

    try {
      const res = await fetch(
        "https://swapnil-5e27c-default-rtdb.firebaseio.com/uploadclothcoupon.json",
        options
      );

      if (res.ok) {
        toast.success("Your coupon is uploaded");
        // Reset form after successful submission
        setUser({
          title: "",
          link: "",
          couponcode: "",
          description: "",
          date: new Date(),
        });
        setValidated(false);
      } else {
        throw new Error("Failed to upload coupon");
      }
    } catch (error) {
      setErrorMessage("Error occurred while uploading coupon");
    }
  };

  return (
    <Container className="py-4">
      <Breadcrumb className="mb-3">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/frontpage" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item
          linkAs={Link}
          linkProps={{ to: "/categories/clothings" }}
        >
          Clothings
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Upload Coupons</Breadcrumb.Item>
      </Breadcrumb>

      <h2 className="text-center mb-4">Upload Clothing Coupon</h2>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          {errorMessage && (
            <Alert variant="danger" className="mb-3">
              {errorMessage}
            </Alert>
          )}

          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="border rounded p-4 bg-light"
          >
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter coupon title"
                required
                maxLength={12}
                value={user.title}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Maximum 12 characters
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="url"
                name="link"
                placeholder="https://example.com"
                required
                value={user.link}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Coupon Code</Form.Label>
              <Form.Control
                type="text"
                name="couponcode"
                placeholder="SAVE20"
                required
                value={user.couponcode}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={3}
                placeholder="Enter coupon details"
                value={user.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Expiration Date</Form.Label>
              <DatePicker
                className="form-control"
                selected={user.date}
                onChange={(date) => setUser({ ...user, date })}
                minDate={new Date()}
                dateFormat="MM/dd/yyyy"
                placeholderText="Select expiration date"
                required
              />
            </Form.Group>

            <div className="btns">
              <Button variant="outline-secondary" onClick={handleGetECoupons}>
                View All Clothing Coupons
              </Button>
              <Button variant="primary" type="submit">
                Submit Coupon
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

      <ToastContainer position="bottom-right" />
    </Container>
  );
}

export default ClothUpload;
