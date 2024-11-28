// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import Logo from '../Assets/Img1.png';

// const Navbar = () => (
//   <div>
//     <div className="nav-bar-container">
//       <div className="nav-left">
//         <img src={Logo} alt="Logo" className="Logo" />
//       </div>

//       <div className="nav-center">
//         <h1 className="main-title">RESEARCH GRANT MANAGEMENT SYSTEM</h1>
//       </div>

//       <div className="nav-right">
//         <button className="nav-button dashboard-button">
//           <Link to="/dashboard">Dashboard</Link>
//         </button>
//         <button className="nav-button profile-button">
//           <Link to="/profile">Profile</Link>
//         </button>
//         <button className="nav-button logout-button">
//           <Link to="/logout">Log Out</Link>
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default Navbar;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import Logo from '../Assets/Img1.png';

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       // Call the logout endpoint
//       const response = await fetch('http://localhost:8080/test/Logout.php', { method: 'GET' });
//       const result = await response.json();
      
//       if (result.message === 'Logged out successfully') {
//         // Redirect to login page
//         navigate('/login');
//       } else {
//         // Handle error
//         console.error('Logout failed:', result.message);
//       }
//     } catch (error) {
//       console.error('Error during logout:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="nav-bar-container">
//         <div className="nav-left">
//           <img src={Logo} alt="Logo" className="Logo" />
//         </div>

//         <div className="nav-center">
//           <h1 className="main-title">RESEARCH GRANT MANAGEMENT SYSTEM</h1>
//         </div>

//         <div className="nav-right">
//           <button className="nav-button dashboard-button">
//             <Link to="/dashboard">Dashboard</Link>
//           </button>
//           <button className="nav-button profile-button">
//             <Link to="/profile">Profile</Link>
//           </button>
//           <button className="nav-button logout-button" onClick={handleLogout}>
//             Log Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Assets/logo2.png';

const Navbar = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || 'Profile'; // Get username from localStorage

  const handleLogout = async () => {
    try {

      const response = await fetch('/Logout.php', { method: 'GET' });
      const result = await response.json();
      
      if (result.message === 'Logged out successfully') {
        localStorage.removeItem('userName'); // Clear username from localStorage
        localStorage.removeItem('userRole'); // Store user role in localStorage
        localStorage.removeItem('userID'); // Store user role in localStorage
        localStorage.removeItem('formData'); // Clear form data from localStorage (add this line)
        localStorage.removeItem('completionStatus'); // Clear username from localStorage

        navigate('/login');
      } else {
        console.error('Logout failed:', result.message);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div>
      <div className="nav-bar-container">
        <div className="nav-left">
          <img src={Logo} alt="Logo" className="Logo" />
        </div>

        <div className="nav-center">
          <h1 className="main-title">RESEARCH GRANT MANAGEMENT SYSTEM</h1>
        </div>
        <div className="nav-right">
        <Link to="/home" className="nav-link">
    Home
  </Link>
  <Link to="/dashboard" className="nav-link">
    Dashboard
  </Link>
  <Link to="/profile" className="nav-link">
    {userName}
  </Link> {/* Show username or "Profile" */}
  <span className="nav-link logout-link" onClick={handleLogout}>
    Log Out
  </span>
</div>

      </div>
    </div>
  );
};

export default Navbar;
