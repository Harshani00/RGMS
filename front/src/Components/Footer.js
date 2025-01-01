import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../Assets/logo2.png';
import FooterImage from '../Assets/Footer.png'; // Import the background image
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer
      className="footer-background"
      style={{
        backgroundImage: `url(${FooterImage})`, // Set the background image dynamically
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="footer-overlay">
        <Container>
          <Row>
            <Col md={6} className="text-left">
              <img src={Logo} alt="University Logo" width="300px" height="80" className="mb-3" />
              <h5>University of Peradeniya</h5>
              <p className="mb-1">Peradeniya</p>
              <p className="mb-1">20400, Sri Lanka</p>
              <p className="mb-1">Phone: +94 81 238 8301</p>
              <p className="mb-1">Fax: +94 81 238 8102</p><br></br>
              <span className="mt-3">Copyright © 2024 University of Peradeniya. All rights reserved.</span>
            </Col>
            <Col md={6}>
             
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
