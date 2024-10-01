import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar2.css'; // Import the CSS file for styling
import { useLocation, Link } from 'react-router-dom';

export default function Navbar2Edit() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="navbar-custom-container">
        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-custom">
          <Nav>
            <li className="nav-item">
              <Link 
                to="/editgrant" 
                className={`nav-link ${activeLink === '/editgrant' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/editgrant')}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/editproject" 
                className={`nav-link ${activeLink === '/editproject' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/editproject')}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/editsupervisors" 
                className={`nav-link ${activeLink === '/editsupervisors' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/editsupervisors')}
              >
                Supervisors
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/edituploads" 
                className={`nav-link ${activeLink === '/edituploads' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/edituploads')}
              >
                Uploads
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/editreviewers" 
                className={`nav-link ${activeLink === '/editreviewers' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/editreviewers')}
              >
                Reviewers
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
