import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar3.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

export default function Navbar3() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary1">
      <Container className="navbar-custom-container d-flex justify-content-start">
        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-custom1">
          <nav className="nav">
            <Link 
              to="/login" 
              className="nav-link text-decoration-none me-2"
            >
              Login
            </Link>
            <span className="separator">|</span>
            <Link 
              to="/signup" 
              className="nav-link text-decoration-none ms-2"
            >
              Signup
            </Link>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
