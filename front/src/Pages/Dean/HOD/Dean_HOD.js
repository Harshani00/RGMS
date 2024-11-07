// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import Navbar4 from '../../../Components/Navbar4';
// import './Dean_HOD.css';

// export default function Dean_HOD() {
//   const [selectedStatus, setSelectedStatus] = useState('');
//   const [applications, setApplications] = useState([]);
//   const [filteredApplications, setFilteredApplications] = useState([]);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get('/HodApprovel.php'); // Adjust endpoint as needed
//         setApplications(response.data);
//         setFilteredApplications(response.data); // Initialize with all data
//       } catch (error) {
//         console.error('Error fetching applications:', error);
//       }
//     };

//     fetchApplications();
//   }, []);

//   useEffect(() => {
//     if (selectedStatus) {
//       setFilteredApplications(
//         applications.filter((app) => app.status === selectedStatus)
//       );
//     } else {
//       setFilteredApplications(applications); // Show all if no filter
//     }
//   }, [selectedStatus, applications]);

//   const handleStatusChange = (e) => {
//     setSelectedStatus(e.target.value);
//   };

//   const handleViewClick = (Id) => {
//     navigate(`/view-application/${Id}`); // Navigate to the detailed view page
//   };

//   return (
//     <div>
//      <Navbar4/>
//       <Table striped bordered hover>
//         <thead>

//           <tr>
//             <th>Project Title</th>
//             <th>Applicant Name</th>
//             <th>Department</th>
//             <th>Faculty</th>
//             <th>View Grant (PDF)</th>
//           </tr>
//         </thead>

//        <tbody>
            
//             <tr>
//               <td>--</td>
//               <td>--</td>
//               <td>--</td>
//               <td>--</td>
//               <td>
//                 <button 
//                   className="view-button" // Add your custom class name for styling
//                 >
//                   View
//                 </button>
//               </td>
//             </tr>
//         </tbody>
//       </Table>

      
//       <label htmlFor="decision" className="hod-decision">Decision: </label>
//               <select id="decision">
//                 <option value="">-</option>
//                 <option value="Approved">Approved</option>
//                 <option value="Rejected">Rejected</option>
//               </select>
              
//               <label htmlFor="remarks" className="hod-decision">Remarks: </label>
//               <input
//                 type="text"
//                 id="status-filter"
//                 value={selectedStatus}
//                 onChange={(e) => handleStatusChange(e)}
//                 placeholder="Enter Remarks"
//               />
           
//     </div>
//   );
// }



import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar4 from '../../../Components/Navbar4';
import './Dean_HOD.css';

export default function Reviewer() {
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
  const [decision, setDecision] = useState(''); // State for decision
  const [remarks, setRemarks] = useState(''); // State for remarks

  const handleViewClick = (id) => {
    // Perform action on view click
    console.log(`Viewing project ID: ${id}`);
  };

  const handleMarksSubmit = () => {
    // Handle the submission of overall marks, decision, and remarks
    console.log('Overall Marks Submitted:', overallMarks);
    console.log('Decision:', decision);
    console.log('Remarks:', remarks);
    // You can add further logic like sending the data to an API or backend
  };

  return (
    <div>
      <Navbar4 />
      <h1 className="dpage-title">Dean | HOD</h1>
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

      <div className="marks-section">
        

        <div className="decision-section">
          <label htmlFor="decision">Decision: </label>
          <select
            id="decision"
            value={decision}
            onChange={(e) => setDecision(e.target.value)}
            className="decision-input"
          >
            <option value="">Select Decision</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="remarks-section">
          <label htmlFor="remarks" className="remarks-label" >Remarks:</label>
          <textarea
            id="remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)} // Update state
            placeholder="Enter remarks"
            className="remarks-input"
            rows={3}
          />
        </div>

        <button 
          className="submit-button" 
          onClick={handleMarksSubmit} // Handle marks submission
        >
          Submit
        </button>
      </div>
    </div>
  );
}
