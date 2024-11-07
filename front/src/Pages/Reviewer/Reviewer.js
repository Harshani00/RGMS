// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar4 from '../../Components/Navbar4';
// import './Reviewer.css';


// export default function Reviwer() {
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

//   const handleViewClick = (id) => {
//     // Perform action on view click
//     console.log('Viewing project ID: ${id}');
//   };

//   const handleFileUpload = (e) => {
//     // Handle file upload logic here
//     console.log('File uploaded:', e.target.files[0]);
//   };

//   const handleMarksSubmit = () => {
//     // Handle the submission of overall marks
//     console.log('Overall Marks Submitted:', overallMarks);
//     // You can add further logic like sending the data to an API or backend
//   };

//   return (
//     <div>
//       <Navbar4 />
//       <h1 className="dpage-title">Reviewer 1</h1>
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


//       <div className="download-section">
//   <div className="criteria-section">
    
//     <label htmlFor="downloadCriteria">Download Evaluation Criteria: </label>
//     <button className="download-button">Download</button>
//     <p>(First,You Download the Evaluation Criteria and Upload Evaluation Report.)</p> {/* Added sentence */}
//   </div>
          
//       <div className="evaluation-section">
//         <div className="upload-section">
//           <label htmlFor="uploadReport">Upload Evaluation Report: </label>
//           <input 
//             type="file" 
//             id="uploadReport" 
//             onChange={handleFileUpload}
//           />
//         </div>

//           {/* Replace "Add" button with input and submit button */}
//           <div className="marks-section">
//             <label htmlFor="overallMarks">Overall Marks: </label>
//             <input
//               type="text"
//               id="overallMarks"
//               value={overallMarks}
//               onChange={(e) => setOverallMarks(e.target.value)} // Update state
//               placeholder="Enter marks"
//               className="marks-input"
//             />
//             <button 
//               className="submit-button" 
//               onClick={handleMarksSubmit} // Handle marks submission
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar4 from '../../Components/Navbar4';
// import './Reviewer.css';


// export default function Reviwer() {
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

//   const handleViewClick = (id) => {
//     // Perform action on view click
//     console.log('Viewing project ID: ${id}');
//   };

//   const handleFileUpload = (e) => {
//     // Handle file upload logic here
//     console.log('File uploaded:', e.target.files[0]);
//   };

//   const handleMarksSubmit = () => {
//     // Handle the submission of overall marks
//     console.log('Overall Marks Submitted:', overallMarks);
//     // You can add further logic like sending the data to an API or backend
//   };

//   return (
//     <div>
//       <Navbar4 />
//       <h1 className="dpage-title">Reviewer Page</h1>
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


//       <div className="download-section">
//   <div className="criteria-section">
    
//     <label htmlFor="downloadCriteria">Download Evaluation Criteria: </label>
//     <button className="download-button">Download</button>
//     <p>(First,You Download the Evaluation Criteria and Upload Evaluation Report.)</p> {/* Added sentence */}
//   </div>
          
//       <div className="evaluation-section">
//         <div className="upload-section">
//           <label htmlFor="uploadReport">Upload Evaluation Report: </label>
//           <input 
//             type="file" 
//             id="uploadReport" 
//             onChange={handleFileUpload}
//           />
//         </div>

//           {/* Replace "Add" button with input and submit button */}
//           <div className="marks-section">
//             <label htmlFor="overallMarks">Overall Marks: </label>
//             <input
//               type="text"
//               id="overallMarks"
//               value={overallMarks}
//               onChange={(e) => setOverallMarks(e.target.value)} // Update state
//               placeholder="Enter marks"
//               className="marks-input"
//             />
//             <button 
//               className="submit-button" 
//               onClick={handleMarksSubmit} // Handle marks submission
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Navbar4 from '../../Components/Navbar4';
import './Reviewer.css';
import { useNavigate } from 'react-router-dom';

export default function Reviewer() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const app_ID = query.get('app_ID'); // Get app_ID from query parameters
  const [application, setApplication] = useState(null);
  const [overallMarks, setOverallMarks] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchApplicationDetails = async () => {
      if (app_ID) { // Ensure app_ID is defined
        try {
          // Update the URL to the correct path
          const response = await axios.get(`/Reviewer.php?app_ID=${app_ID}`);
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
  const handleFileUpload = (e) => {
    console.log('File uploaded:', e.target.files[0]);
    // File upload logic here
  };
  


  const handleMarksSubmit = () => {
    console.log('Overall Marks Submitted:', overallMarks);
    // Additional logic for handling marks submission can be added here
  };

  if (!application) {
    return <div>Loading...</div>;
  }

  if (application.error) {
    return <div>{application.error}</div>; // Display error message
  }
  
  const handleViewClick = (Id) => {
    navigate(`/view-application/${Id}`); // Navigate to the detailed view page
  };

  return (
    <div>
      <Navbar4 />
      <h1 className="dpage-title">Reviewer for Application ID: {application.app_ID}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Application Id</th>
            <th>Project Title</th>
            <th>Applicant Name</th>
            <th>Application</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{application.app_ID}</td>
            <td>{application.projectTitle}</td>
            <td>{application.name}</td>
            <td>
                <button 
                  className="view-button" // Add your custom class name for styling
                  onClick={() => handleViewClick(application.app_ID)} // Handle button click
                >
                  View
                </button>
              </td>
            
          </tr>
        </tbody>
      </Table>

      <div className="download-section">
        <div className="criteria-section">
          <label htmlFor="downloadCriteria">Download Evaluation Criteria: </label>
          <button className="download-button">Download</button>
          <p>(First, download the Evaluation Criteria and upload the Evaluation Report.)</p>
        </div>

        <div className="evaluation-section">
          <div className="upload-section">
            <label htmlFor="uploadReport">Upload Evaluation Report: </label>
            <input 
              type="file" 
              id="uploadReport" 
              onChange={handleFileUpload}
            />
          </div>

          <div className="marks-section">
            <label htmlFor="overallMarks">Overall Marks: </label>
            <input
              type="text"
              id="overallMarks"
              value={overallMarks}
              onChange={(e) => setOverallMarks(e.target.value)}
              placeholder="Enter marks"
              className="marks-input"
            />
            <button 
              className="submit-button" 
              onClick={handleMarksSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
