// import React from 'react';
// import './Sidebar.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div>
//       <div className="sidebar">
//         <ul className="sidebar-menu">
//         <li><Link to="/grant">New Grant</Link></li>
//           <li><a href="#about">Budget Revision</a></li>
//           <li><a href="#services">Progress Report</a></li>
//           <li><a href="#contact">Final Report</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import './Sidebar.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div>
//       <div className="sidebar">
//         <ul className="sidebar-menu">
//           <li><Link to="/grant">New Grant</Link></li>
//           <li><a href="#about">Budget Revision</a></li>
//           <li><a href="#services">Progress Report</a></li>
//           <li><a href="#contact">Final Report</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import './Sidebar.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';


// const Sidebar = () => {
//   return (
//     <div>
//       <div className="sidebar">
//         <ul className="sidebar-menu">
//         <li><Link to="/grant">New Grant</Link></li>
//           <li><a href="#budget">Budget Revision</a></li>
//           <li><a href="#progress">Progress Report</a></li>
//           <li><a href="#final">Final Report</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import './Sidebar.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div>
//       <div className="navbar">
//         {/* Your navbar content */}
//       </div>
//       <div className="sidebar">
//         <ul className="sidebar-menu">
//           <li><Link to="/grant">New Grant</Link></li>
//           <li><a href="#about">Budget Revision</a></li>
//           <li><a href="#services">Progress Report</a></li>
//           <li><a href="#contact">Final Report</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



// import React, { useState } from 'react';
// import './Sidebar.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <div className="navbar">
//         {/* Your navbar content */}
//       </div>
//       <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//         <button className="toggle-button" onClick={toggleSidebar}>
//           {isOpen ? 'Close' : 'Open'} Sidebar
//         </button>
//         <ul className="sidebar-menu">
//           <li><Link to="/grant">New Grant</Link></li>
//           <li><a href="#about">Budget Revision</a></li>
//           <li><a href="#services">Progress Report</a></li>
//           <li><a href="#contact">Final Report</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
// import React, { useState } from 'react';
// import './Sidebar.css'; 
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const [completedSteps, setCompletedSteps] = useState({
//     profile: false,
//     project: false,
//     proposal: false,
//     budget: false,
//     supervisor: false,
//     principal: false,
//     cosupervisor: false,
//   });

//   const completeStep = (step) => {
//     setCompletedSteps(prevState => ({ ...prevState, [step]: true }));
//   };

//   return (
//     <div className="sidebar">
//       <ul className="sidebar-menu">
//         <li>
//           <div className={`step-circle ${completedSteps.profile ? 'completed' : ''}`}>
//             {completedSteps.profile && '✓'}
//           </div>
//           <Link to="/profile" onClick={() => completeStep('profile')}>Profile Details</Link>
//         </li>
//         <li>
//           <div className={`step-circle ${completedSteps.project ? 'completed' : ''}`}>
//             {completedSteps.project && '✓'}
//           </div>
//           <Link to="#project" onClick={() => completeStep('project')}>Project Details</Link>
//         </li>
//         <li>
//           <div className={`step-circle ${completedSteps.proposal ? 'completed' : ''}`}>
//             {completedSteps.proposal && '✓'}
//           </div>
//           <Link to="#proposal" onClick={() => completeStep('proposal')}>PDF of Project Proposal</Link>
//         </li>
//         <li>
//           <div className={`step-circle ${completedSteps.budget ? 'completed' : ''}`}>
//             {completedSteps.budget && '✓'}
//           </div>
//           <Link to="#budget" onClick={() => completeStep('budget')}>PDF of Budget</Link>
//         </li>
//         <li>
//           <div className={`step-circle ${completedSteps.supervisor ? 'completed' : ''}`}>
//             {completedSteps.supervisor && '✓'}
//           </div>
//           <Link to="/supervisor" onClick={() => completeStep('supervisor')}>Supervisor Details</Link>
//         </li>
//         <li>
//           <div className={`step-circle ${completedSteps.principal ? 'completed' : ''}`}>
//             {completedSteps.principal && '✓'}
//           </div>
//           <Link to="#principal" onClick={() => completeStep('principal')}>CV of the Principal Investigator</Link>
//         </li>
//         <li>
//           <div className={`step-circle ${completedSteps.cosupervisor ? 'completed' : ''}`}>
//             {completedSteps.cosupervisor && '✓'}
//           </div>
//           <Link to="#cosupervisor" onClick={() => completeStep('cosupervisor')}>CV of the Co Supervisor</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// // export default Sidebar;
// import React, { useState } from 'react';
// import './Sidebar.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <div className="navbar">
//         {/* Your navbar content */}
//       </div>
//       <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//         <button className="toggle-button" onClick={toggleSidebar}>
//           {isOpen ? (
//             <FontAwesomeIcon icon={faTimes} size="2x"  /> // Close icon
//           ) : (
//             <FontAwesomeIcon icon={faBars} size="2x" /> // Hamburger icon
//           )}
//         </button>
//         <ul className="sidebar-menu">
//           <li><Link to="/grant">New Grant</Link></li>
//           <li><a href="#about">Budget Revision</a></li>
//           <li><a href="#services">Progress Report</a></li>
//           <li><a href="#contact">Final Report</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useState, useEffect } from 'react';
// import './Sidebar.css';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showToggleButton, setShowToggleButton] = useState(window.innerWidth < window.screen.width);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleResize = () => {
//     setShowToggleButton(window.innerWidth < window.screen.width);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <div className="navbar">
//         {/* Your navbar content */}
//       </div>
//       {showToggleButton && (
//         <button className="toggle-button" onClick={toggleSidebar}>
//           {isOpen ? (
//             <FontAwesomeIcon icon={faTimes} size="2x" />
//           ) : (
//             <FontAwesomeIcon icon={faBars} size="2x" />
//           )}
//         </button>
//       )}
//       <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//         <ul className="sidebar-menu">
//           <li><Link to="/grant">New Grant</Link></li>
//           <li><a href="#about">Budget Revision</a></li>
//           <li><a href="#services">Progress Report</a></li>
//           <li><a href="#contact">Final Report</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useState, useEffect } from 'react';
// import './Sidebar.css';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true); // Initially open
//   const [showToggleButton, setShowToggleButton] = useState(window.innerWidth < 768);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleResize = () => {
//     // Check window width to toggle button visibility
//     if (window.innerWidth < 768) {
//       setShowToggleButton(true);
//     } else {
//       setShowToggleButton(false);
//       setIsOpen(true); // Ensure sidebar is always open in full screen
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     // Initial check
//     handleResize();
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//         <ul className="sidebar-menu">
//           <li><Link to="/grant">New Grant</Link></li>
//           <li><a href="#about">Budget Revision</a></li>
//           <li><a href="#services">Progress Report</a></li>
//           <li><a href="#contact">Final Report</a></li>
//         </ul>
//       </div>
//       {showToggleButton && (
//         <button className="toggle-button" onClick={toggleSidebar}>
//           {isOpen ? (
//             <FontAwesomeIcon icon={faTimes} size="2x" />
//           ) : (
//             <FontAwesomeIcon icon={faBars} size="2x" />
//           )}
//         </button>
//       )}
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useState, useEffect } from 'react';
// import './Sidebar.css';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false); // Initially closed
//   const [showToggleButton, setShowToggleButton] = useState(window.innerWidth < 768);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleResize = () => {
//     const isSmallScreen = window.innerWidth < 768;
//     setShowToggleButton(isSmallScreen);
//     if (!isSmallScreen) {
//       setIsOpen(true); // Ensure sidebar is open in full screen
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     // Initial check
//     handleResize();
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       {showToggleButton && (
//         <button className="toggle-button" onClick={toggleSidebar}>
//           {isOpen ? (
//             <FontAwesomeIcon icon={faTimes} size="2x" />
//           ) : (
//             <FontAwesomeIcon icon={faBars} size="2x" />
//           )}
//         </button>
//       )}
//       <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//         <ul className="sidebar-menu">
//           <li><Link to="/grant">Profile Details</Link></li>
//           <li><a href="#about">Project Details</a></li>
//           <li><a href="#services">Supervisor Details</a></li>
//           <li><a href="#contact">Uploads Details</a></li>
//           <li><a href="#contact">Reviewers Details</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useForm } from '../Pages/Applicant/MainForm';

const Sidebar = () => {
  const { completionStatus } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [showToggleButton, setShowToggleButton] = useState(window.innerWidth < 780);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    const isSmallScreen = window.innerWidth < 780;
    setShowToggleButton(isSmallScreen);
    if (!isSmallScreen) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {showToggleButton && (
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>
      )}
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <ul className="sidebar-menu">
          <li>
            <div className="sidebar-item">
              Profile Details
              {completionStatus.profile && (
                <FontAwesomeIcon icon={faCheck} style={{ marginLeft: '8px', color: 'green' , width:'20px'}} />
              )}
            </div>
          </li>
          <li>
            <div className="sidebar-item">
              Project Details
              {completionStatus.project && (
                <FontAwesomeIcon icon={faCheck} style={{ marginLeft: '8px', color: 'green' }} />
              )}
            </div>
          </li>
          <li>
            <div className="sidebar-item">
              Supervisor Details
              {completionStatus.supervisors && (
                <FontAwesomeIcon icon={faCheck} style={{ marginLeft: '8px', color: 'green' }} />
              )}
            </div>
          </li>
          <li>
            <div className="sidebar-item">
              Uploads Details
              {completionStatus.uploads && (
                <FontAwesomeIcon icon={faCheck} style={{ marginLeft: '8px', color: 'green' }} />
              )}
            </div>
          </li>
          <li>
            <div className="sidebar-item">
              Reviewers Details
              {completionStatus.reviewers && (
                <FontAwesomeIcon icon={faCheck} style={{ marginLeft: '8px', color: 'green' }} />
              )}
            </div>
          </li>
        
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
