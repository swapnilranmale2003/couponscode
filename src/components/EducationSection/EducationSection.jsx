import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import { FaPlus, FaSearch } from "react-icons/fa";
import EducationFetch from "./EducationFetch";

// Custom Bootstrap styling
const customStyles = {
  primaryColor: "#F0A500",
  secondaryBg: "#f8f9fa",
  uploadButtonStyle: {
    color: "#F0A500",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  titleStyle: {
    color: "#F0A500",
    fontWeight: "normal",
  },
};

function EducationSection() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = () => {
    navigate("/categories/education/educationupload");
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container className="py-4">
      {/* Header Section with Breadcrumb and Search */}
      <Row className="mb-4 align-items-center">
        <Col md={6}>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/frontpage" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              active
              linkAs={Link}
              linkProps={{ to: "/categories/education" }}
            >
              Education
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col md={6}>
          <InputGroup className="mb-0">
            <InputGroup.Text className="bg-white border-end-0">
              <FaSearch className="text-secondary" />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search by title"
              value={searchQuery}
              onChange={handleSearch}
              className="border-start-0 shadow-none"
              style={{ height: "50px" }}
            />
          </InputGroup>
        </Col>
      </Row>

      {/* Upload Button Section */}
      <Row className="my-5 justify-content-center text-center">
        <Col xs={12}>
          <Button
            variant="link"
            className="d-flex align-items-center justify-content-center mx-auto p-3 text-decoration-none"
            onClick={handleClick}
            style={customStyles.uploadButtonStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <FaPlus
              size={42}
              color={customStyles.primaryColor}
              className="me-3"
            />
            <span className="fs-4" style={{ color: customStyles.primaryColor }}>
              Upload Education Coupons!
            </span>
          </Button>
        </Col>
      </Row>

      {/* Content Section */}
      <Row className="mt-4">
        <Col xs={12} className="text-center mb-4">
          <h1 style={customStyles.titleStyle} className="mb-4">
            Available Education Coupons
          </h1>
        </Col>
        <Col xs={12}>
          <EducationFetch searchQuery={searchQuery} />
        </Col>
      </Row>
    </Container>
  );
}

export default EducationSection;
