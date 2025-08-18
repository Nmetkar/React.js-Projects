import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap';


const NavbarMain = () => {
  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ width: '200px', height: '100vh' }}>
      <h4 className="mb-4">My App</h4>
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        <Nav.Link
  as={Link}
  to="/logout"
  className="logout-link text-danger fw-bold mt-2"
>
  LogOut
</Nav.Link>
      </Nav>
    </div>
  )
}

export default NavbarMain