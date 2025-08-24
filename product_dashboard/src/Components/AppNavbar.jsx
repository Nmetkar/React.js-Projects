import React from "react";
import { Navbar, Container, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const AppNavbar = () => {
  return (
    <Navbar bg="white" className="shadow-sm py-2">
      <Container fluid className="d-flex align-items-center justify-content-between">

        {/* Left: Logo */}
        <div className="d-flex align-items-center">
          <h2 className="mb-0" style={{ color: "#f7c948", fontWeight: "bold" }}>
            blink<span style={{ color: "#3ab34a" }}>it</span>
          </h2>
        </div>

        {/* Middle: Delivery Info + Address + Search Bar */}
        <div className="d-flex align-items-center flex-grow-1 mx-4">
          <div className="me-4">
            <div className="fw-bold">Delivery in 16 minutes</div>
            <small className="text-muted">
              136/42, University Rd, Pune Univ...
              <span style={{ cursor: "pointer" }}> ▼</span>
            </small>
          </div>

          {/* Search Box */}
          <InputGroup style={{ maxWidth: "400px", flexGrow: 1 }}>
            <InputGroup.Text className="bg-light border-0">
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder='Search "rice"'
              className="bg-light border-0"
            />
          </InputGroup>
        </div>

        {/* Right: Login */}
        <div>
          <button className="btn btn-link text-dark fw-semibold">Login</button>
        </div>

      </Container>
    </Navbar>
  );
};

export default AppNavbar;
