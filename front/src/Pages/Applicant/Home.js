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
// import React from 'react';
// import './Home.css'; // Import the CSS file
// import Navbar from '../../Components/Navbar';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import videoSource from '../../Assets/vedio (2).mp4'; // Import your video file
// import Footer from '../../Components/Footer';

// export default function HomePage() {
//   const navigate = useNavigate(); // Initialize navigate for routing

//   const handleLoginClick = () => {
//     navigate('/login'); // Navigate to the login page
//   };

//   const handleSignupClick = () => {
//     navigate('/signup'); // Navigate to the signup page
//   };

//   return (
//     <div className="home-page">
//       <Navbar />
    
//       <video className="background-video" autoPlay loop muted>
//         <source src={videoSource} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="content">
//         <h1 className="title1">Research Grant Management System</h1>
//         <lable className="title2"> UNIVERSITY OF PERADENIYA</lable>
//         <div className="buttons">
//           <button className="accessbuttons" onClick={handleLoginClick}>Login</button>
//           <button className="accessbuttons" onClick={handleSignupClick}>Sign Up</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import './Home.css'; // Import the CSS file
// import Navbar from '../../Components/Navbar';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation


// const imageSources = [
//   require('../../Assets/background.png'), // Replace with your actual image paths
//   require('../../Assets/background3.png'),
//   require('../../Assets/bb.jpg'),
// ];

// export default function HomePage() {
//   const navigate = useNavigate(); // Initialize navigate for routing
//   const [currentImage, setCurrentImage] = useState(imageSources[0]); // Set initial image
//   const [imageIndex, setImageIndex] = useState(0); // Index for the current image

//   // Function to change images
//   const changeImage = () => {
//     const nextIndex = (imageIndex + 1) % imageSources.length;
//     setCurrentImage(imageSources[nextIndex]);
//     setImageIndex(nextIndex);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(changeImage, 1000); // Change image every 5 seconds
//     return () => clearInterval(intervalId); // Cleanup on unmount
//   }, [imageIndex]);

//   const handleLoginClick = () => {
//     navigate('/login'); // Navigate to the login page
//   };

//   const handleSignupClick = () => {
//     navigate('/signup'); // Navigate to the signup page
//   };

//   return (
//     <div className="home-page">
//       <Navbar />
//       <div
//         className="background-image"
//         style={{ backgroundImage: `url(${currentImage})` }}
//       ></div>
//       <div className="content">
//         <h1 className="title1">Research Grant Management System</h1>
//         <label className="title2">UNIVERSITY OF PERADENIYA</label>
//         <div className="buttons">
//           <button className="accessbuttons" onClick={handleLoginClick}>Login</button>
//           <button className="accessbuttons" onClick={handleSignupClick}>Sign Up</button>
//         </div>
//       </div>
     
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the CSS file
import Navbar from '../../Components/Navbar';
import Navbar3 from '../../Components/Navbar3';

import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const imageSources = [
  require('../../Assets/backgroungimage.png'), // Replace with your actual image paths
  // require('../../Assets/background3.png'),
  // require('../../Assets/bb.jpg'),
];

export default function HomePage() {
  const navigate = useNavigate(); // Initialize navigate for routing
  const [currentImage, setCurrentImage] = useState(imageSources[0]); // Set initial image
  const [imageIndex, setImageIndex] = useState(0); // Index for the current image

  // Function to change images
  const changeImage = () => {
    const nextIndex = (imageIndex + 1) % imageSources.length;
    setCurrentImage(imageSources[nextIndex]);
    setImageIndex(nextIndex);
  };

   useEffect(() => {
    const intervalId = setInterval(changeImage, 5000); // Change image every 5 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [imageIndex]);

  
  return (
    <div className="home-page">
      
      <Navbar />
      <Navbar3 />
      <div className="img-card">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${currentImage})` }}
      ></div>
      </div>
      <div className="content">
        
        {/* <div className="buttons">
          <button className="accessbuttons" onClick={handleLoginClick}>Login</button>
          <button className="accessbuttons" onClick={handleSignupClick}>Sign Up</button>
        </div> */}
      </div>
      <div className="info-card">
       
        <p className="card-text">Please download the necessary documents here.</p>
       
      </div>
    </div>
  );
}
