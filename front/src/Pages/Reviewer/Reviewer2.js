import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar4 from '../../Components/Navbar4';
import './Reviewer.css';


export default function Reviwer2() {
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
      <h1 className="dpage-title">Reviewer 2</h1>
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