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
                to="/supervisors" 
                className={`nav-link ${activeLink === '/supervisors' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/supervisors')}
              >
                Supervisors
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/uploads" 
                className={`nav-link ${activeLink === '/uploads' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/uploads')}
              >
                Uploads
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/reviewers" 
                className={`nav-link ${activeLink === '/reviewers' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/reviewers')}
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
