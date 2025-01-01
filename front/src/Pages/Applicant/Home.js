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
// import React, { useEffect, useState } from 'react';
// import './Home.css'; // Import the CSS file
// import Navbar from '../../Components/Navbar';
// import Navbar3 from '../../Components/Navbar3';

// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// const imageSources = [
//   require('../../Assets/16.jpg'), // Replace with your actual image paths
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

//    useEffect(() => {
//     const intervalId = setInterval(changeImage, 5000); // Change image every 5 seconds
//     return () => clearInterval(intervalId); // Cleanup on unmount
//   }, [imageIndex]);

  
//   return (
//     <div className="home-page">
//     <div className="navbar-container">
//       <Navbar />
//       <Navbar3 />
//     </div>
//     <div className="img-card">
//       <div
//         className="background-image"
//         style={{ backgroundImage: `url(${currentImage})` }}
//       ></div>
//     </div>
//     <div className="content"></div>
//     <div className="info-card">
//       <p className="card-text">Please download the necessary documents here.</p>
//     </div>
//   </div>
  
//   );
// }
// import React from "react";
// import "./Home.css";
// import Navbar from '../../Components/Navbar';
// import Navbar3 from '../../Components/Navbar3';
// import backgroundImage from '../../Assets/16.jpg';

// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <Navbar3 />
//       <div className="home-container">
//         <header
//           className="hero-section"
//           style={{
//             backgroundImage: `url(${backgroundImage})`, // Dynamically set the background image
//           }}
//         >
//           <div className="hero-overlay">
//           <h2 className="hero-title">
//   Simplifying the Path to Research Funding and Collaboration
// </h2>
// <p className="hero-subtitle">
//   Streamline your grant process, collaborate effectively, and achieve research excellence with ease!
// </p>

//             {/* <button className="hero-button">Get Started</button> */}
//           </div>
//         </header>

//         <main className="content-section">
//           <section className="features">
//             <h2 className="section-title">Download Necessary Documents Here</h2>
//             <div className="feature-cards">
//               <div className="feature-card">
//                 <i className="fas fa-laptop-code feature-icon"></i>
//                 <h3>Document One</h3>
//                 <p style={{ color: 'black' }}>
//                 Track your progress and make informed decisions with real-time data.
//                 </p>

//               </div>
//               <div className="feature-card">
//                 <i className="fas fa-users feature-icon"></i>
//                 <h3>Document Two</h3>
//                 <p style={{ color: 'black' }}>
//                 Track your progress and make informed decisions with real-time data.
//                 </p>

//               </div>
//               <div className="feature-card">
//                 <i className="fas fa-chart-line feature-icon"></i>
//                 <h3>Document Three</h3>
//                 <p style={{ color: 'black' }}>
//                  Track your progress and make informed decisions with real-time data.
//                 </p>

//               </div>
//             </div>
//           </section>
//           {/* <section className="cta-section">
//           <h2 className="cta-title">Ready to Dive In?</h2>
//           <p>Sign up now and start your journey with us today.</p>
//           <button className="cta-button">Join Now</button>
//         </section> */}
      
//         </main>
//       </div>
//     </div>
//   );
// };


// export default Home;

// import React, { useState, useEffect } from "react";
// import "./Home.css";
// import Navbar from "../../Components/Navbar";
// import Navbar3 from "../../Components/Navbar3";
// import backgroundImage1 from "../../Assets/16.jpg";
// import backgroundImage2 from "../../Assets/slide-4.jpg";
// import backgroundImage3 from "../../Assets/bb.jpg";

// const Home = () => {
//   const images = [backgroundImage1, backgroundImage2, backgroundImage3]; // Array of images
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 5000); // Change image every 5 seconds
//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [images.length]);

//   return (
//     <div>
//       <Navbar />
//       <Navbar3 />
//       <div className="home-container">
//         <header
//           className="hero-section"
//           style={{
//             backgroundImage: `url(${images[currentImage]})`, // Set dynamic background
//           }}
//         >
//           <div className="hero-overlay">
//             <h2 className="hero-title">
//               Simplifying the Path to Research Funding and Collaboration
//             </h2>
//             <p className="hero-subtitle">
//               Streamline your grant process, collaborate effectively, and
//               achieve research excellence with ease!
//             </p>
//           </div>
//         </header>

//         <main className="content-section">
//   <section className="features">
//     <h2 className="section-title">Application Guidelines</h2>
//     <div className="feature-cards">
      
//       <div className="feature-card">
//         <i className="fas fa-laptop-code feature-icon" style={{ fontSize: "2.5rem", color: "#007bff" }}></i>
//         <h3 className="feature-title" style={{ margin: "1rem 0", color: "#333" }}>Procedure</h3>
//         <p style={{ color: "#555", lineHeight: "1.8" }}>
//           Grant applications should be submitted online on or before the deadline specified by the URC. Access the submission portal at 
//           <a href="https://rgms.pdn.ac.lk/" style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}> https://rgms.pdn.ac.lk/</a>. 
//           Prepare the following documents before entering the portal:
//         </p>
//         <ul style={{ color: "#555", margin: "1rem 0 0 1.5rem", lineHeight: "1.8" }}>
//           <li>Project proposal (as per the template) converted into a PDF</li>
//           <li>Project budget (as per the template) converted into a PDF</li>
//           <li>Full CV of the Principal Investigator as a PDF</li>
//           <li>Two-page CVs of all Co-Investigators compiled into a single PDF</li>
//           <li>DOI of three journal papers or links to conference papers. For papers without DOI, upload them to Google Drive and provide the link.</li>
//         </ul>
//       </div>
      
//       <div className="feature-card">
//         <i className="fas fa-users feature-icon" style={{ fontSize: "2.5rem", color: "#28a745" }}></i>
//         <h3 className="feature-title" style={{ margin: "1rem 0", color: "#333" }}>Document Two</h3>
//         <p style={{ color: "#555", lineHeight: "1.8" }}>
//           Easily track your progress and make informed decisions with real-time data visualization and insights.
//         </p>
//       </div>
      
//       <div className="feature-card">
//         <i className="fas fa-chart-line feature-icon" style={{ fontSize: "2.5rem", color: "#17a2b8" }}></i>
//         <h3 className="feature-title" style={{ margin: "1rem 0", color: "#333" }}>Document Three</h3>
//         <p style={{ color: "#555", lineHeight: "1.8" }}>
//           Utilize comprehensive tools to monitor your progress, identify bottlenecks, and achieve your objectives effectively.
//         </p>
//       </div>
      
//     </div>
//   </section>
// </main>

//       </div>
//     </div>
//   );
// };

// // export default Home;
// import React, { useState, useEffect } from "react";
// import "./Home.css";
// import Navbar from "../../Components/Navbar";
// import Navbar3 from "../../Components/Navbar3";
// import backgroundImage1 from "../../Assets/16.jpg";
// import backgroundImage2 from "../../Assets/slide-4.jpg";
// import backgroundImage3 from "../../Assets/bb.jpg";
// import DownloadIcon from '@mui/icons-material/Download';

// const Home = () => {
//   const images = [backgroundImage1, backgroundImage2, backgroundImage3];
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div>
//       <Navbar />
//       <Navbar3 />
//       <div className="home-container">
//         <header
//           className="hero-section"
//           style={{
//             backgroundImage: `url(${images[currentImage]})`,
//           }}
//         >
//           <div className="hero-overlay">
//             <h2 className="hero-title">
//               Simplifying the Path to Research Funding and Collaboration
//             </h2>
//             <p className="hero-subtitle">
//               Streamline your grant process, collaborate effectively, and
//               achieve research excellence with ease!
//             </p>
//           </div>
//         </header>

//         <main className="content-section">
//         <section className="features">
//   <h2 className="section-title">Application Guidelines</h2>
//   <div className="feature-cards">
//     <div className="feature-card">
//       <i className="fas fa-laptop-code feature-icon"></i>
//       <h3 className="feature-title" style={{ margin: "1rem 0", color: "#333" }}>Procedure</h3>
//       <p >
//         Grant applications should be submitted online on or before the deadline specified by the URC. Access the submission portal at 
//         <a href="https://rgms.pdn.ac.lk/" style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}> https://rgms.pdn.ac.lk/</a>. 
//         Prepare the following documents before entering the portal:
//       </p>
//       <ul>
//         <li>Project proposal (as per the template) converted into a PDF</li>
//         <li>Project budget (as per the template) converted into a PDF</li>
//         <li>Full CV of the Principal Investigator as a PDF</li>
//         <li>Two-page CVs of all Co-Investigators compiled into a single PDF</li>
//         <li>DOI of three journal papers or links to conference papers. For papers without DOI, upload them to Google Drive and provide the link.</li>
//       </ul>
//     </div>

//     <div className="feature-card">
//   <i className="fas fa-users feature-icon"></i>
//   <h3 className="feature-title" style={{ margin: "1rem 0", color: "#333" }}>
//     Detailed Application Instructions Available for Download
//   </h3>
//   <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "1rem 0" }}>
//     <DownloadIcon style={{ fontSize: "2.5rem", color: "#007bff" }} />
//   </div>
// </div>


//     <div className="feature-card">
//       <i className="fas fa-chart-line feature-icon" style={{ fontSize: "2.5rem", color: "#17a2b8" }}></i>
//       <h3 className="feature-title" style={{ margin: "1rem 0", color: "#333" }}>Document Three</h3>
//       <p style={{ color: "#555", lineHeight: "1.8" }}>
//         Utilize comprehensive tools to monitor your progress, identify bottlenecks, and achieve your objectives effectively.
//       </p>
//     </div>
//   </div>
// </section>


//         </main>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar";
import Navbar3 from "../../Components/Navbar3";
import backgroundImage1 from "../../Assets/backgroundImage1.png";
import backgroundImage2 from "../../Assets/backgroundImage2.png";
import backgroundImage3 from "../../Assets/backgroundImage3.png";
import DownloadIcon from "@mui/icons-material/Download";
import ReactPlayer from 'react-player';

const Home = () => {
  const images = [backgroundImage1, backgroundImage2, backgroundImage3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <Navbar />
      <Navbar3 />
      <div className="home-container">
        <header
          className="hero-section"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
          }}
        >
          <div className="hero-overlay">
            <h2 className="hero-title">
              Simplifying the Path to Research Funding and Collaboration
            </h2>
            <p className="hero-subtitle">
              Streamline your grant process, collaborate effectively, and
              achieve research excellence with ease!
            </p>
          </div>
        </header>

        <main className="content-section">
          <section className="features">
            <h2 className="section-title">Application Guidelines</h2>
            <div className="feature-cards">
              <div className="feature-card">
                <i className="fas fa-laptop-code feature-icon"></i>
                <h3
                  className="feature-title"
         
                >
                  Procedure
                </h3>
                <p>
                  Grant applications should be submitted online on or before the
                  deadline specified by the URC. Access the submission portal at
                  <a
                    href="https://rgms.pdn.ac.lk/"
                    style={{
                      color: "#800000",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    https://rgms.pdn.ac.lk/
                  </a>
                  . Prepare the following documents before entering the portal:
                </p>
                <ul>
                  <li>
                    Project proposal (as per the template) converted into a PDF 
                  </li>
                  <li>
                    Project budget (as per the template) converted into a PDF <div>
    <a 
      href="/Templates/Project Budget.docx" 
      download="Project Budget.docx"
      className="template-download-link"
    >
      Click Here to Download the Template
    </a>
  </div>
                  </li>
                  <li>
                    Full CV of the Principal Investigator as a PDF
                  </li>
                  <li>
                    Two-page CVs of all Co-Investigators compiled into a single
                    PDF
                  </li>
                  <li>
                    DOI of three journal papers or links to conference papers.
                    For papers without DOI, upload them to Google Drive and
                    provide the link.
                  </li>
                </ul>
              </div>

              <div className="feature-card">
                <i className="fas fa-users feature-icon"></i>
                <h3
                  className="feature-title"
               
                >
                  Detailed Application Instructions Available for Download
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "1rem 0",
                  }}
                >
                  <a
                    href="/Templates/Application Guidelines.pdf"
                    download="Application Guidelines.pdf"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "#800000",
                      fontWeight: "bold",
                    }}
                  >
                    <DownloadIcon style={{ fontSize: "2.5rem", color: "#80000", marginRight: "0.5rem" }} />
                    Application Guidelines.pdf
                  </a>
                </div>
              </div>

              <div className="feature-card">
      <h3 className="feature-title">Application Portal User Guide</h3>
      
      <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <ReactPlayer
          url="/video/Application_Portal_Guide.mp4"
          width="560px"
          height="315px"
          controls
        />
      </div>
    </div>

            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
