// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './CustomCard.css';

// export default function CustomCard({ title, buttonText, linkTo }) {
//   const navigate = useNavigate();

//   return (
//     <Card className="custom-card">
//       <Card.Header>{title}</Card.Header>
//       <Card.Body>
//         <Button className="custom-button" onClick={() => navigate(linkTo)}>
//           {buttonText}
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// }
// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './CustomCard.css';

// export default function CustomCard({ title, buttonText, linkTo, imageSrc }) {
//   const navigate = useNavigate();

//   return (
//     <Card className="custom-card" style={{ backgroundImage: `url(${imageSrc})` }}>
//       <div className="card-overlay">
//         <Card.Header className="card-title">{title}</Card.Header>
//         <Card.Body>
//           <Button className="custom-button" onClick={() => navigate(linkTo)}>
//             {buttonText}
//           </Button>
//         </Card.Body>
//       </div>
//     </Card>
//   );
// }

// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './CustomCard.css';

// export default function CustomCard({ title, buttonText, linkTo, imageSrc, hoverText }) {
//   const navigate = useNavigate();

//   return (
//     <Card className="custom-card" style={{ backgroundImage: `url(${imageSrc})` }}>
//       <div className="card-overlay">
//         <Card.Header className="card-title">{title}</Card.Header>
//         <Card.Body>
//           <Button className="custom-button" onClick={() => navigate(linkTo)}>
//             {buttonText}
//           </Button>
//         </Card.Body>
//         <div className="card-hover-text">{hoverText}</div>
//       </div>
//     </Card>
//   );
// }


// import React from 'react';
// import { Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './CustomCard.css';

// export default function CustomCard({ title, linkTo, imageSrc, hoverText }) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(linkTo);
//   };

//   return (
//     <Card className="custom-card" style={{ backgroundImage: `url(${imageSrc})` }} onClick={handleClick}>
//       <div className="card-overlay">
//         <Card.Header className="card-title">{title}</Card.Header>
//         <div className="card-hover-text">{hoverText}</div>
//       </div>
//     </Card>
//   );
// }

// import React from 'react';
// import { Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './CustomCard.css';

// export default function CustomCard({ title, linkTo, imageSrc, hoverText, children }) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     if (!children) {
//       navigate(linkTo);
//     }
//   };

//   return (
//     <Card className="custom-card" style={{ backgroundImage: `url(${imageSrc})` }} onClick={handleClick}>
//       <div className="card-overlay">
//         <Card.Header className="card-title">{title}</Card.Header>
//         <div className="card-hover-text">{hoverText}</div>
//         {children}
//       </div>
//     </Card>
//   );
// }
// import React from 'react';
// import { Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './CustomCard.css';

// export default function CustomCard({ title, linkTo,  hoverText, children }) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     if (!children) {
//       navigate(linkTo);
//     }
//   };

//   return (
//     <Card className="custom-card"  onClick={handleClick}>
//       <div className="card-overlay">
//         <Card.Header className="card-title">{title}</Card.Header>
//         <div className="card-hover-text">{hoverText}</div>
//         {children}
//       </div>
//     </Card>
//   );
// }
// import React from 'react';
// import { Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './CustomCard.css';

// export default function CustomCard({ title, linkTo, imageSrc, hoverText, children ,className }) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     if (!children) {
//       navigate(linkTo);
//     }
//   };

//   return (
//     <Card className="custom-card" style={{ backgroundImage: `url(${imageSrc})` }} onClick={handleClick}>
//       <div className="card-overlay">
//         <div className="card-title">{title} </div>
//         <div className="card-hover-text">{hoverText}</div>
//         {children}
//       </div>
//     </Card>
//   );
// }
// import React from 'react';
// import './CustomCard.css'; // Assume you have some styling here



// const CustomCard = ({ title, linkTo, imageSrc, className, icon }) => {
//   return (
//     <div className={`custom-card ${className}`}>
//       <a href={linkTo} className="custom-card-link">
//         {icon && <div className="icon-container">{icon}</div>} {/* Add the icon */}
//         {imageSrc && <img src={imageSrc} alt={title} className="custom-card-image" />}
//         <div className="custom-card-content">
//           <h3 className="custom-card-title">{title}</h3>
//         </div>
//       </a>
//     </div>
//   );
// };

import React from 'react';
import './CustomCard.css'; // Ensure you have the required CSS

const CustomCard = ({ title, linkTo, imageSrc, className, icon }) => {
  return (
    <div className={`custom-card ${className}`}>
      <a href={linkTo} className="custom-card-link">
        <div className="custom-card-header">
          {icon && <div className="icon-container">{icon}</div>} {/* Icon centered here */}
          {imageSrc && <img src={imageSrc} alt={title} className="custom-card-image" />} {/* Image */}
        </div>
        <div className="custom-card-content">
          <h3 className="custom-card-title">{title}</h3> {/* Title centered and moved up */}
        </div>
      </a>
    </div>
  );
};

export default CustomCard;
