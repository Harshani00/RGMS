


// import React, { useEffect, useState } from 'react';
// import './Sidebar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
// import { useForm } from '../Pages/Applicant/MainForm';

// const Sidebar = () => {
//   const { completionStatus } = useForm();
//   const [isOpen, setIsOpen] = useState(false);
//   const [showToggleButton, setShowToggleButton] = useState(window.innerWidth < 780);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleResize = () => {
//     const isSmallScreen = window.innerWidth < 780;
//     setShowToggleButton(isSmallScreen);
//     if (!isSmallScreen) {
//       setIsOpen(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
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
//           <li>
//             <div className="sidebar-item">
//               Profile Details
//               {completionStatus.profile && (
//                 <FontAwesomeIcon icon={faCheck} style={{ marginLeft: '8px', color: 'green' , width:'20px'}} />
//               )}
//             </div>
//           </li>
//           <li>
//             <div className="sidebar-item">
//               Project Details
//               {completionStatus.project && (
//                 <FontAwesomeIcon icon={faCheck} style={{ marginLeft: '8px', color: 'green' }} />
//               )}
//             </div>
//           </li>
//           <li>
//             <div className="sidebar-item">
//               Supervisor Details
//               {completionStatus.supervisors && (
//                 <FontAwesomeIcon icon={faCheck} style={{ marginLeft: '8px', color: 'green' }} />
//               )}
//             </div>
//           </li>
//           <li>
//             <div className="sidebar-item">
//               Uploads Details
//               {completionStatus.uploads && (
//                 <FontAwesomeIcon icon={faCheck} style={{ marginLeft: '8px', color: 'green' }} />
//               )}
//             </div>
//           </li>
//           <li>
//             <div className="sidebar-item">
//               Reviewers Details
//               {completionStatus.reviewers && (
//                 <FontAwesomeIcon icon={faCheck} style={{ marginLeft: '8px', color: 'green' }} />
//               )}
//             </div>
//           </li>
        
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useForm } from '../Pages/Applicant/MainForm';

const Sidebar = () => {
  const { completionStatus } = useForm();

  const steps = [
    { title: 'Profile Details', completed: completionStatus.profile },
    { title: 'Project Details', completed: completionStatus.project },
    { title: 'Investigator Details', completed: completionStatus.supervisors },
    { title: 'Uploads Details', completed: completionStatus.uploads },
    { title: 'Reviewers Details', completed: completionStatus.reviewers },
  ];

  return (
    <div className="progress-sidebar">
      <div className="progress-container">
        {steps.map((step, index) => (
          <div className="progress-step" key={index}>
            <div className={`circle ${step.completed ? 'completed' : ''}`}>
              {step.completed && <FontAwesomeIcon icon={faCheckCircle} />}
            </div>
            <div className="step-title">{step.title}</div>
            {index < steps.length - 1 && (
              <div className={`line ${steps[index + 1].completed ? 'completed' : ''}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
