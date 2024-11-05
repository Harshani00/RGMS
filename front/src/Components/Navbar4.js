import React from 'react';
//import './NavbarA.css';
import Logo from '../Assets/logo2.png';

const Navbar4 = () => {
  return (
    <div>
      <div className="nav-bar-container">
        <div className="nav-left">
          <img src={Logo} alt="Logo" className="Logo" />
        </div>

        <div className="nav-center">
          <h1 className="main-title">RESEARCH GRANT MANAGEMENT SYSTEM</h1>
        </div>

        <div className="nav-right"></div> {/* Placeholder for right alignment */}
      </div>
    </div>
  );
};

export default Navbar4;