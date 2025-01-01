// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar4 from '../../../Components/Navbar4';
// import './Dean_HOD.css';

// export default function HOD() {
//   // Hardcoded project data
//   const [projects] = useState([
//     {
//       id: 1,
//       projectTitle: '---',
//       applicantName: '---',
//       department: '---',
//       faculty: '---'
//     },
//   ]);

//   const [overallMarks, setOverallMarks] = useState(''); // State for marks input
//   const [decision, setDecision] = useState(''); // State for decision
//   const [remarks, setRemarks] = useState(''); // State for remarks

//   const handleViewClick = (id) => {
//     // Perform action on view click
//     console.log(`Viewing project ID: ${id}`);
//   };

//   const handleMarksSubmit = () => {
//     // Handle the submission of overall marks, decision, and remarks
//     console.log('Overall Marks Submitted:', overallMarks);
//     console.log('Decision:', decision);
//     console.log('Remarks:', remarks);
//     // You can add further logic like sending the data to an API or backend
//   };

//   return (
//     <div>
//       <Navbar4 />
//       <h1 className="hoddean_title">HOD</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Project Title</th>
//             <th>Applicant Name</th>
//             <th>Department</th>
//             <th>Faculty</th>
//             <th>View Application</th>
//           </tr>
//         </thead>
//         <tbody>
//           {projects.map((project) => (
//             <tr key={project.id}>
//               <td>{project.projectTitle}</td>
//               <td>{project.applicantName}</td>
//               <td>{project.department}</td>
//               <td>{project.faculty}</td>
//               <td>
//                 <button
//                   className="view-button" // Custom class for styling
//                   onClick={() => handleViewClick(project.id)}
//                 >
//                   View
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <div className="marks-section">
        

//         <div className="decision-section">
//           <label htmlFor="decision">Decision: </label>
//           <select
//             id="decision"
//             value={decision}
//             onChange={(e) => setDecision(e.target.value)}
//             className="decision-input"
//           >
//             <option value="">Select Decision</option>
//             <option value="approved">Approved</option>
//             <option value="rejected">Rejected</option>
//           </select>
//         </div>

//         <div className="remarks-section">
//           <label htmlFor="remarks" className="remarks-label" >Remarks:</label>
//           <textarea
//             id="remarks"
//             value={remarks}
//             onChange={(e) => setRemarks(e.target.value)} // Update state
//             placeholder="Enter remarks"
//             className="remarks-input"
//             rows={3}
//           />
//         </div>

//         <button 
//           className="submit-button" 
//           onClick={handleMarksSubmit} // Handle marks submission
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Table from 'react-bootstrap/Table';
// import Navbar4 from '../../../Components/Navbar4';
// import './Dean_HOD.css';

// export default function Dean_HOD() {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   const app_ID = query.get('app_ID');
//   const [application, setApplication] = useState(null);
//   const [decision, setDecision] = useState('');
//   const [remarks, setRemarks] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const fetchApplicationDetails = async () => {
//       if (app_ID) {
//         try {
//           const response = await axios.get(`/DeanHOD.php?app_ID=${app_ID}`);
//           setApplication(response.data);
//         } catch (error) {
//           console.error('Error fetching application details:', error);
//           setApplication({ error: "Failed to fetch application details." });
//         }
//       } else {
//         setApplication({ error: "No app_ID provided." });
//       }
//     };

//     fetchApplicationDetails();
//   }, [app_ID]);

//   const handleMarksSubmit = async () => {
//     // Validate that decision and remarks are not empty
//     if (!decision || !remarks) {
//       setErrorMessage('Both decision and remarks are required.');
//       return;
//     }

//     setErrorMessage(''); // Clear previous error message

//     const approvalCode = decision === 'approved' ? '3.1' : '3.2';

//     try {
//       // Send data to the backend for database update
//       const response = await axios.post('/HODEvaluvation.php', {
//         app_ID,
//          decision: approvalCode,
//         // hod_approval: approvalCode,
//         remarks
//       });

//       if (response.data.success) {
//         alert('Submission successful!');
//       } else {
//         alert('Failed to submit. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting data:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   if (!application) {
//     return <div>Loading...</div>;
//   }

//   if (application.error) {
//     return <div>{application.error}</div>;
//   }

//   return (
//     <div>
//       <Navbar4 />
//       <h1 className='dpage-title'>HOD</h1>
//       <h1 className="dpage-title">Application ID: {application.app_ID}</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Project Title</th>
//             <th>Applicant Name</th>
//             <th>View</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{application.projectTitle}</td>
//             <td>{application.name}</td>
//             <td>
//               <button
//                 className="view-button"
//                 onClick={() => console.log(`Viewing project ID: ${application.id}`)}
//               >
//                 View
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </Table>

//       <div className="marks-section">
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
        
//         <div className="decision-section">
//           <label htmlFor="decision">Decision: </label>
//           <select
//             id="decision"
//             value={decision}
//             onChange={(e) => setDecision(e.target.value)}
//             className="decision-input"
//             required
//           >
//             <option value="">Select Decision</option>
//             <option value="approved">Approved</option>
//             <option value="rejected">Rejected</option>
//           </select>
//         </div>

//         <div className="remarks-section">
//           <label htmlFor="remarks" className="remarks-label">Remarks:</label>
//           <textarea
//             id="remarks"
//             value={remarks}
//             onChange={(e) => setRemarks(e.target.value)}
//             placeholder="Enter remarks"
//             className="remarks-input"
//             rows={3}
//             required
//           />
//         </div>

//         <button 
//           className="submit-button" 
//           onClick={handleMarksSubmit}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Navbar4 from '../../../Components/Navbar4';
import './Dean_HOD.css';

export default function Dean_HOD() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const app_ID = query.get('app_ID');
  const [application, setApplication] = useState(null);
  const [decision, setDecision] = useState('');
  const [remarks, setRemarks] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchApplicationDetails = async () => {
      if (app_ID) {
        try {
          const response = await axios.get(`/DeanHOD.php?app_ID=${app_ID}`);
          setApplication(response.data);
        } catch (error) {
          console.error('Error fetching application details:', error);
          setApplication({ error: "Failed to fetch application details." });
        }
      } else {
        setApplication({ error: "No app_ID provided." });
      }
    };

    fetchApplicationDetails();
  }, [app_ID]);

  const handleMarksSubmit = async () => {
    // Clear any previous error message
    setErrorMessage('');

    // Validate decision and remarks
    if (!decision && !remarks) {
      setErrorMessage('Both decision and remarks are required.');
      return;
    }

    if (!decision) {
      setErrorMessage('Decision is required');
      return;
    }

    if (!remarks) {
      setErrorMessage('Remarks are required');
      return;
    }

    const approvalCode = decision === 'approved' ? '3.1' : '3.2';

    try {
      // Send data to the backend for database update
      const response = await axios.post('/HODEvaluvation.php', {
        app_ID,
        decision: approvalCode,
        remarks
      });

      if (response.data.success) {
        alert('Submission successful!');
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred. Please try again.');
    }
  };

  if (!application) {
    return <div>Loading...</div>;
  }

  if (application.error) {
    return <div>{application.error}</div>;
  }

  return (
    <div>
      <Navbar4 />
      <h1 className='dpage-title'>HOD</h1>
      <h1 className="dpage-title">Application ID: {application.app_ID}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Project Title</th>
            <th>Applicant Name</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{application.projectTitle}</td>
            <td>{application.name}</td>
            <td>
              <button
                className="view-button"
                onClick={() => console.log(`Viewing project ID: ${application.id}`)}
              >
                View
              </button>
            </td>
          </tr>
        </tbody>
      </Table>

      <div className="marks-section">
        {errorMessage && <p className="error-message" style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>}

        <div className="decision-section">
          <label htmlFor="decision">Decision: </label>
          <select
            id="decision"
            value={decision}
            onChange={(e) => setDecision(e.target.value)}
            className="decision-input"
            required
          >
            <option value="">Select Decision</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="remarks-section">
          <label htmlFor="remarks" className="remarks-label">Remarks:</label>
          <textarea
            id="remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            placeholder="Enter remarks"
            className="remarks-input"
            rows={3}
            required
          />
        </div>

        <button 
          className="submit-button" 
          onClick={handleMarksSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
