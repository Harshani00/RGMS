// import React from 'react';
// import { Button } from 'react-bootstrap';
// import './Home.css';
// import backgroundImage from '../Assets/img10.jpg'; // Import your background image

// export default function HomePage() {
//   return (
//     <div style={{ backgroundImage: `url(${backgroundImage})` }}>
//     <div className="home-page-container">
//       <div className="content-container">
//         <h1 className="home-title">Welcome to Research Grant Managment System</h1>
//         <Button className="home-button" href="/signup">Signup</Button>
//         <Button className="home-button" href="/login">Login</Button>
//       </div>
//     </div>
//     </div>
//   );
// }
// import React from 'react';
// import { Button } from 'react-bootstrap';
// import './Home.css'; // Import the CSS file
// import backgroundImage from '../../Assets/img5.png'; // Import your background image

// export default function HomePage() {
//   return (
//     <div className="home-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="home-page-container">
//         <div className="content-container">
//         <h1 className="home-title">
//          Welcome to <span className="system-name">RESEARCH GRANT MANAGMENT SYSTEM</span>
//         </h1>
//           <div className="button-container">
//           <Button className="home-button" href="/signup">Signup</Button>
//           <Button className="home-button" href="/login">Login</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React from 'react';
// import { Button } from 'react-bootstrap';
// import './Home.css'; // Import the CSS file
// import backgroundImage from '../../Assets/img5.png'; // Import your background image
// import Navbar from '../../Components/Navbar';

// export default function HomePage() {
//   return (
//     <div>
//      <Navbar />
//     <div className="home-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
    
     
//         <div className="content-container">
//           <h1 className="home-title">
//             Welcome to <br />
//             <span className="system-name">RESEARCH GRANT MANAGEMENT SYSTEM</span>
//           </h1>
//           <div className="button-container">
//             <Button className="home-button" href="/signup">Signup</Button>
//             <Button className="home-button" href="/login">Login</Button>
//           </div>
//         </div>
//       </div>
//     </div>
  
//   );
// }
// import React from 'react';
// import { Button } from 'react-bootstrap';
// import './Home.css'; // Import the CSS file
// import Navbar from '../../Components/Navbar';
// import videoSource from '../../Assets/video.mp4'; // Import your video file

// export default function HomePage() {
//   return (
//     <div className="full-page">
//       <Navbar />
//       <video autoPlay loop muted className="video-background">
//         <source src={videoSource} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="content-container">
//         <h1 className="home-title">
//           Welcome to <br />
//           <span className="system-name">RESEARCH GRANT MANAGEMENT SYSTEM</span>
//         </h1>
//         <div className="button-container">
//           <Button className="home-button" href="/signup">Signup</Button>
//           <Button className="home-button" href="/login">Login</Button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import './Home.css'; // Import the CSS file
import Navbar from '../../Components/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import videoSource from '../../Assets/vedio (2).mp4'; // Import your video file

export default function HomePage() {
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <div className="home-page">
      <Navbar />
      <video className="background-video" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className="title">Research Grant Management System</h1>
        <lable className="title2"> UNIVERSITY OF PERADENIYA</lable>
        <div className="buttons">
          <button className="accessbuttons" onClick={handleLoginClick}>Login</button>
          <button className="accessbuttons" onClick={handleSignupClick}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
