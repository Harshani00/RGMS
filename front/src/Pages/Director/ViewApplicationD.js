import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from '../../Components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Secretary/Table.css';

export default function ViewApplication() {
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/ViewApplication.php');
        setApplications(response.data);
        setFilteredApplications(response.data); // Initialize with all data
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  useEffect(() => {
    const filteredByStatus = selectedStatus
      ? applications.filter((app) => app.Status === selectedStatus)
      : applications;

    const filteredByYear = selectedYear
      ? filteredByStatus.filter((app) => new Date(app.submittedDate).getFullYear() === parseInt(selectedYear))
      : filteredByStatus;

    setFilteredApplications(filteredByYear);
  }, [selectedStatus, selectedYear, applications]);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleViewClick = (Id) => {
    navigate(`/view-application/${Id}`); // Navigate to the detailed view page
  };

  return (
    <div>
      <Navbar />
      <h1 className="page-title">View Applications</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={5} className="dropdown-row">
              <label htmlFor="year-select">Year: </label>
              <select id="year-select" onChange={handleYearChange}>
                <option value="">Select Year</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
              
              <label htmlFor="status-select">Status: </label>
              <select id="status-select" onChange={handleStatusChange}>
                <option value="">Select Status</option>
                <option value="Save">Save</option>
                <option value="Submitted">Submitted</option>
                <option value="Granted">Granted</option>
                <option value="Pending Approvals">Pending Approvals</option>
                <option value="Reviewers Comments">Reviewers Comments</option>
                <option value="Reject">Reject</option>
              </select>
            </th>
          </tr>
          <tr>
            <th>Application Id</th>
            <th>Project Title</th>
            <th>Submitted Date</th>
            <th>Status</th>
            <th>View Grant (PDF)</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplications.map((app) => (
            <tr key={app.app_ID}>
              <td>{app.app_ID}</td>
              <td>{app.projectTitle}</td>
              <td>{app.submittedDate}</td>
              <td>{app.Status}</td> {/* Display the status from application table */}
              <td>
                <button 
                  className="view-button" // Add your custom class name for styling
                  onClick={() => handleViewClick(app.app_ID)} // Handle button click
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
