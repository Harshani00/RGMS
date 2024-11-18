import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Navbar4 from '../../Components/Navbar4';
import './Reviewer.css';

export default function Reviewer1() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const app_ID = query.get('app_ID'); // Get app_ID from query parameters
  const [application, setApplication] = useState(null);
  const [overallMarks, setOverallMarks] = useState('');
  const [evaluationReport, setEvaluationReport] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchApplicationDetails = async () => {
      if (app_ID) {
        try {
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
    setEvaluationReport(e.target.files[0]);
  };

  const handleMarksSubmit = async () => {
    if (!overallMarks || !evaluationReport) {
      alert("Please enter the overall marks and upload the evaluation report.");
      return;
    }

    const formData = new FormData();
    formData.append('app_ID', app_ID);
    formData.append('overallMarks', overallMarks);
    formData.append('evaluationReport', evaluationReport);

    try {
      const response = await axios.post('/Reviewer1Evaluvation.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.status === "success") {
        alert("Evaluation report and marks submitted successfully.");
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      console.error('Error submitting marks and report:', error);
      alert("There was an error submitting the data.");
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
      <h1 className="reviewer_title">Reviewer 1</h1>
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
              <button className="view-button" onClick={() => navigate(`/view-application/${application.app_ID}`)}>
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
            <button className="submit-button" onClick={handleMarksSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
