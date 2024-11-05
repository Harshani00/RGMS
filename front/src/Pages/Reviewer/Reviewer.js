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

import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar4 from '../../Components/Navbar4';
import './Reviewer.css';


export default function Reviwer() {
  // Hardcoded project data
  const [projects] = useState([
    {
      id: 1,
      projectTitle: '---',
      applicantName: '---',
      department: '---',
      faculty: '---'
    },
  
  ]);

  const [overallMarks, setOverallMarks] = useState(''); // State for marks input

  const handleViewClick = (id) => {
    // Perform action on view click
    console.log('Viewing project ID: ${id}');
  };

  const handleFileUpload = (e) => {
    // Handle file upload logic here
    console.log('File uploaded:', e.target.files[0]);
  };

  const handleMarksSubmit = () => {
    // Handle the submission of overall marks
    console.log('Overall Marks Submitted:', overallMarks);
    // You can add further logic like sending the data to an API or backend
  };

  return (
    <div>
      <Navbar4 />
      <h1 className="dpage-title">Reviewer 1</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Project Title</th>
            <th>Applicant Name</th>
            <th>Department</th>
            <th>Faculty</th>
            <th>View Application</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.projectTitle}</td>
              <td>{project.applicantName}</td>
              <td>{project.department}</td>
              <td>{project.faculty}</td>
              <td>
                <button
                  className="view-button" // Custom class for styling
                  onClick={() => handleViewClick(project.id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


      <div className="download-section">
  <div className="criteria-section">
    
    <label htmlFor="downloadCriteria">Download Evaluation Criteria: </label>
    <button className="download-button">Download</button>
    <p>(First,You Download the Evaluation Criteria and Upload Evaluation Report.)</p> {/* Added sentence */}
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

          {/* Replace "Add" button with input and submit button */}
          <div className="marks-section">
            <label htmlFor="overallMarks">Overall Marks: </label>
            <input
              type="text"
              id="overallMarks"
              value={overallMarks}
              onChange={(e) => setOverallMarks(e.target.value)} // Update state
              placeholder="Enter marks"
              className="marks-input"
            />
            <button 
              className="submit-button" 
              onClick={handleMarksSubmit} // Handle marks submission
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React, { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar4 from '../../Components/Navbar4';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './Reviewer.css';

// export default function Reviewer() {
//   const { appId } = useParams(); // Extract the appId from the URL
//   const [project, setProject] = useState(null); // State to hold project data
//   const [overallMarks, setOverallMarks] = useState(''); // State for marks input

//   // Fetch project data based on appId
//   useEffect(() => {
//     const fetchProjectData = async () => {
//       try {
//         const response = await axios.get(`/api/projects/${appId}`); // Adjust API endpoint as needed
//         setProject(response.data);
//       } catch (error) {
//         console.error('Error fetching project data:', error);
//       }
//     };

//     fetchProjectData();
//   }, [appId]);

//   const handleFileUpload = (e) => {
//     console.log('File uploaded:', e.target.files[0]);
//     // File upload logic here
//   };

//   const handleMarksSubmit = () => {
//     console.log('Overall Marks Submitted:', overallMarks);
//     // Add further logic to send the marks to an API or backend
//   };

//   if (!project) {
//     return <div>Loading...</div>; // Display loading while fetching data
//   }

//   return (
//     <div>
//       <Navbar4 />
//       <h1 className="dpage-title">Reviewer</h1>
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
//           <tr>
//             <td>{project.projectTitle}</td>
//             <td>{project.applicantName}</td>
//             <td>{project.department}</td>
//             <td>{project.faculty}</td>
//             <td>
//               <button className="view-button" onClick={() => console.log('Viewing project')}>
//                 View
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </Table>

//       <div className="download-section">
//         <div className="criteria-section">
//           <label htmlFor="downloadCriteria">Download Evaluation Criteria: </label>
//           <button className="download-button">Download</button>
//           <p>(First, download the Evaluation Criteria and upload the Evaluation Report.)</p>
//         </div>

//         <div className="evaluation-section">
//           <div className="upload-section">
//             <label htmlFor="uploadReport">Upload Evaluation Report: </label>
//             <input 
//               type="file" 
//               id="uploadReport" 
//               onChange={handleFileUpload}
//             />
//           </div>

//           <div className="marks-section">
//             <label htmlFor="overallMarks">Overall Marks: </label>
//             <input
//               type="text"
//               id="overallMarks"
//               value={overallMarks}
//               onChange={(e) => setOverallMarks(e.target.value)}
//               placeholder="Enter marks"
//               className="marks-input"
//             />
//             <button 
//               className="submit-button" 
//               onClick={handleMarksSubmit}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
