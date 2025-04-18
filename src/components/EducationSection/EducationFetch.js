import React, { useEffect, useState } from "react";
import { Row, Col, Card, Badge, Button, Spinner, Alert } from "react-bootstrap";
import { FaExternalLinkAlt, FaCopy, FaClock } from "react-icons/fa";
import "./EducationFetch.css";

// Custom Bootstrap styling
const customStyles = {
  primaryColor: "#F0A500",
  expiredBadge: {
    backgroundColor: "#dc3545",
    position: "absolute",
    top: "10px",
    right: "10px",
    zIndex: 1,
  },
  cardHeaderStyle: {
    backgroundColor: "#F0A500",
    color: "#fff",
  },
  hiddenCode: {
    letterSpacing: "2px",
    color: "#F0A500",
    fontFamily: "monospace",
    fontWeight: "bold",
  },
  copyButton: {
    backgroundColor: "#F0A500",
    borderColor: "#F0A500",
  },
  expiredCard: {
    opacity: 0.8,
  },
  cardBase: {
    backgroundColor: "#ffffff",
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    height: "200px",
  },
  descriptionContainer: {
    maxHeight: "95px",
    overflowY: "auto",
    marginBottom: "auto",
  },
};

function EducationFetch({ searchQuery }) {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCopyAlert, setShowCopyAlert] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://swapnil-5e27c-default-rtdb.firebaseio.com/uploadeducationcoupons.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        const fetchedData = [];
        for (const key in data) {
          fetchedData.push({ id: key, ...data[key] });
        }
        setRecords(fetchedData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
        console.error(err);
      });
  }, []);

  const copyCouponCode = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setShowCopyAlert(true);
        setTimeout(() => setShowCopyAlert(false), 3000);
      })
      .catch((error) => console.error("Failed to copy: ", error));
  };

  const hideCouponCode = (code) => {
    return "#".repeat(code.length);
  };

  const isCouponExpired = (couponDate) => {
    if (!couponDate) return false;
    const currentDate = new Date();
    const couponExpiryDate = new Date(couponDate);
    couponExpiryDate.setHours(12, 0, 0, 0);
    return currentDate > couponExpiryDate;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const filteredRecords = records
    .filter((record) =>
      record.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aExpired = isCouponExpired(a.date);
      const bExpired = isCouponExpired(b.date);
      return aExpired - bExpired; // unexpired (false=0) come before expired (true=1)
    });

  if (isLoading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status" variant="warning">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-3 text-secondary">Loading coupons...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="my-4">
        Error: {error}
      </Alert>
    );
  }

  if (filteredRecords.length === 0) {
    return (
      <Alert variant="info" className="my-4">
        No education coupons found matching your search.
      </Alert>
    );
  }

  return (
    <>
      {showCopyAlert && (
        <Alert
          variant="success"
          className="position-fixed top-0 start-50 translate-middle-x mt-4 px-4 py-2"
          style={{ zIndex: 1050, maxWidth: "300px" }}
        >
          Coupon code copied to clipboard!
        </Alert>
      )}

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredRecords.map((item, index) => {
          const isExpired = isCouponExpired(item.date);

          return (
            <Col key={index}>
              <Card
                className="shadow-sm border-0 position-relative"
                style={{
                  height: "350px",
                  borderRadius: "0.75rem",
                  ...customStyles.cardBase,
                  ...(isExpired ? customStyles.expiredCard : {}),
                }}
              >
                {isExpired && (
                  <Badge pill style={customStyles.expiredBadge}>
                    Expired
                  </Badge>
                )}

                <Card.Header
                  style={customStyles.cardHeaderStyle}
                  className="py-2 px-3"
                >
                  <Card.Title className="fs-6 mb-0 text-truncate">
                    {item.title}
                  </Card.Title>
                </Card.Header>

                <Card.Body style={customStyles.cardBody} className="px-3 py-2">
                  <div>
                    <div className="small text-muted mb-1">Coupon Code</div>
                    <div className="bg-light rounded px-2 py-1 mb-2">
                      <span style={customStyles.hiddenCode}>
                        {hideCouponCode(item.couponcode)}
                      </span>
                    </div>

                    {item.description && (
                      <>
                        <div className="small text-muted mb-1">Description</div>
                        <div
                          style={customStyles.descriptionContainer}
                          className="bg-light rounded px-2 py-1 small text-secondary mb-2"
                        >
                          {item.description}
                        </div>
                      </>
                    )}
                  </div>

                  {item.date && (
                    <div className="text-muted small d-flex align-items-center mt-auto">
                      <FaClock className="me-2" />
                      <span>{formatDate(item.date)}</span>
                    </div>
                  )}
                </Card.Body>

                <Card.Footer className="bg-white border-top py-2 px-3">
                  <div
                    className={`d-grid gap-2 ${
                      item.link && !isExpired
                        ? "d-md-flex justify-content-md-between"
                        : ""
                    }`}
                  >
                    {item.link && !isExpired && (
                      <Button
                        variant="outline-secondary"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center justify-content-center flex-fill"
                        size="sm"
                      >
                        <FaExternalLinkAlt className="me-2" />
                        Visit Site
                      </Button>
                    )}

                    {item.couponcode && !isExpired && (
                      <Button
                        onClick={() => copyCouponCode(item.couponcode)}
                        className="d-flex align-items-center justify-content-center flex-fill text-white"
                        size="sm"
                        style={customStyles.copyButton}
                      >
                        <FaCopy className="me-2" />
                        Copy Code
                      </Button>
                    )}

                    {isExpired && (
                      <div className="text-center text-secondary fst-italic small py-1 w-100">
                        This coupon has expired
                      </div>
                    )}
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default EducationFetch;
