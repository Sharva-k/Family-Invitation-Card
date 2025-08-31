import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUsers, FaHeart } from "react-icons/fa";

const FamilySelection = ({ onFamilySelect }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const families = [
    { name: "The Deepali Deshpande Family", color: "danger", emoji: "🌸" },
    { name: "The Deepak Kurhekar Family", color: "primary", emoji: "🌊" },
    { name: "The Akshay Deshpande Family", color: "success", emoji: "🌿" },
    { name: "The Ajinkya Panse Family", color: "secondary", emoji: "🌺" },
    { name: "The Aditi Deshpande Family", color: "warning", emoji: "🌞" },
    { name: "The KK kaka Family", color: "info", emoji: "🦋" },
  ];

  const cardStyle = (index) => ({
    cursor: "pointer",
    transform: hoveredCard === index ? "scale(1.05)" : "scale(1)",
    transition: "all 0.3s ease",
    height: "200px",
  });

  return (
    <div
      className="min-vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Container className="py-5">
        {/* Header */}
        <div className="text-center text-white mb-5 pt-4">
          <h1 className="display-4 fw-bold mb-3">Ganpati Mahalakshmi 2025</h1>
          <p className="lead mb-2">Welcome!</p>
          <p className="fs-5">
            Please select your family to view your personalized invitation
          </p>
        </div>
 
        {/* Family Cards Grid */}
        <Row className="g-4">
          {families.map((family, index) => (
            <Col md={6} lg={4} key={index}>
              <Card
                className={`h-100 shadow-lg border-${family.color} border-2`}
                style={cardStyle(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onFamilySelect(family.name)}
              >
                <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="display-4 mb-3">{family.emoji}</div>
                  <Card.Title className="h4 mb-3">{family.name}</Card.Title>
                  <div className="d-flex align-items-center text-muted mb-3">
                    <FaUsers className="me-2" />
                    <small>Click to view invitation</small>
                  </div>
                  <div
                    className={`w-100 bg-${family.color} rounded`}
                    style={{ height: "3px" }}
                  ></div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Footer */}
        <div className="text-center mt-5 text-white">
          <div className="d-flex justify-content-center align-items-center">
            <FaHeart className="text-danger me-2" />
            <span>We welcome you!</span>
            <FaHeart className="text-danger ms-2" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FamilySelection;
