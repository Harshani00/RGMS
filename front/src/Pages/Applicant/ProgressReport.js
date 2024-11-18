// import React, { useState } from 'react';
// import Navbar from '../Components/Navbar';
// import ReportProgress from '../Components/ReportProgress';
// import './UploadFiles.css';

// export default function ProgressReport() {
//   const [selectedReport, setSelectedReport] = useState('');

//   const handleReportChange = (event) => {
//     setSelectedReport(event.target.value);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//         <label htmlFor="report-select" className="label-container">Select Report Type:</label>
//         <select
//           id="report-select"
//           value={selectedReport}
//           onChange={handleReportChange}
//           className="select-dropdown"
//         >
//           <option value="">--Please choose an option--</option>
//           <option value="mid-year">Mid Year Report</option>
//           <option value="end-year">End Year Report</option>
//           <option value="final">Final Report</option>
//         </select>
//       </div>
//       <div>
//         {selectedReport && <ReportProgress reportType={selectedReport} />}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import Navbar from '../../Components/Navbar';
// import ReportProgress from '../../Components/ReportProgress';
// import './UploadFiles.css';

// export default function ProgressReport() {
//   const [selectedReport, setSelectedReport] = useState('mid-year'); // Set default to "Mid Year Report"

//   const handleReportChange = (event) => {
//     setSelectedReport(event.target.value);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//         <label htmlFor="report-select" className="label-container">Select Report Type:</label>
//         <select
//           id="report-select"
//           value={selectedReport}
//           onChange={handleReportChange}
//           className="select-dropdown"
//         >
//           <option value="mid-year">Mid Year Report</option> {/* Mid Year as default */}
//           <option value="end-year">End Year Report</option>
//           <option value="final">Final Report</option>
//         </select>
//       </div>
//       <div>
//         {selectedReport && <ReportProgress reportType={selectedReport} />}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import Navbar from '../../Components/Navbar';
// import ReportProgress from '../../Components/ReportProgress';
// import './UploadFiles.css';

// export default function ProgressReport() {
//   const [selectedReport, setSelectedReport] = useState('mid-year'); // Set default to "Mid Year Report"

//   const handleReportChange = (event) => {
//     setSelectedReport(event.target.value);
//   };

//   return (
//     <div>
//       <Navbar />
      
     
//       <div className="container">
//         <label htmlFor="report-select" className="label-container">Select Report Type:</label>
//         <select
//           id="report-select"
//           value={selectedReport}
//           onChange={handleReportChange}
//           className="select-dropdown"
//         >
//           <option value="mid-year">Mid Year Report</option> {/* Mid Year as default */}
//           <option value="end-year">End Year Report</option>
//           <option value="final">Final Report</option>
//         </select>
//       </div>
//       <div>
//         {selectedReport && <ReportProgress reportType={selectedReport} />}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import ReportProgress from '../../Components/ReportProgress';
import { Form } from 'react-bootstrap';
import './UploadFiles.css';

export default function ProgressReport() {
  const [selectedReport, setSelectedReport] = useState('');
  const [projects, setProjects] = useState([]);
  const [selectedAppId, setSelectedAppId] = useState('');
  const [projectTitle, setProjectTitle] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/GetApplicationID.php');
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const handleReportChange = (event) => setSelectedReport(event.target.value);
  const handleProjectChange = (event) => {
    const appId = +event.target.value; // Convert appId to a number
    setSelectedAppId(appId);
  
    // Find the selected project based on appId
    const selectedProject = projects.find((project) => project.app_ID === appId);
    setProjectTitle(selectedProject ? selectedProject.projectTitle : ''); // Set project title
  };
  
  return (
    <div>
      <Navbar />
      <label className='uploadtitle'>Upload Previous and Current Budget Here 👇</label>

      <Form.Group controlId="appIdSelect">
      
        <Form.Label className="selecttitle">Select Application ID:</Form.Label>
        <Form.Control
          className="appid_dropdown"
          as="select"
          value={selectedAppId}
          onChange={handleProjectChange}
        >
          <option value="">-- Select Application ID --</option>
          {projects.map((project) => (
            <option key={project.app_ID} value={project.app_ID}>
              {project.app_ID}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="projectTitleDisplay">
        <Form.Label className="selecttitle">Project Title:</Form.Label>
        <Form.Control
          className="project_dropdown"
          type="text"
          value={projectTitle}
          readOnly
        />
      </Form.Group>

      <Form.Group controlId="reportSelect">
        <Form.Label className="selecttitle">Select Report Type:</Form.Label>
        <Form.Control
          as="select"
          value={selectedReport}
          onChange={handleReportChange}
          className="project_dropdown"
        >
          <option value="">-- Select Report Type --</option>
          <option value="mid-year">Mid Year Report</option>
          <option value="end-year">End Year Report</option>
          <option value="final">Final Report</option>
        </Form.Control>
      </Form.Group>

      {selectedReport && selectedAppId && (
        <ReportProgress reportType={selectedReport} appId={selectedAppId} />
      )}
    </div>
  );
}
