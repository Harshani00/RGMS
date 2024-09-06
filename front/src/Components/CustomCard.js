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
import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CustomCard.css';

export default function CustomCard({ title, linkTo, imageSrc, hoverText, children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!children) {
      navigate(linkTo);
    }
  };

  return (
    <Card className="custom-card" style={{ backgroundImage: `url(${imageSrc})` }} onClick={handleClick}>
      <div className="card-overlay">
        <Card.Header className="card-title">{title}</Card.Header>
        <div className="card-hover-text">{hoverText}</div>
        {children}
      </div>
    </Card>
  );
}