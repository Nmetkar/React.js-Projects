import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>Shipping & Returns</li>
              <li>Order Tracking</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <div>
              <i className="bi bi-facebook me-2"></i>
              <i className="bi bi-instagram me-2"></i>
              <i className="bi bi-twitter"></i>
            </div>
          </Col>
        </Row>
        <hr className="my-3"/>
        <p className="text-center mb-0">&copy; 2025 MyEcommerceStore. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
