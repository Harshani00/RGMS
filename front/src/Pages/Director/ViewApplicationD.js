
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from '../../Components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../Secretary/Table.css';

export default function ViewApplicationD() {
  const [selectedStatus, setSelectedStatus] = useState('');
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/ViewApplication.php'); // Adjust endpoint as needed
        setApplications(response.data);
        setFilteredApplications(response.data); // Initialize with all data
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  useEffect(() => {
    if (selectedStatus) {
      setFilteredApplications(
        applications.filter((app) => app.status === selectedStatus)
      );
    } else {
      setFilteredApplications(applications); // Show all if no filter
    }
  }, [selectedStatus, applications]);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleViewClick = (id) => {
    navigate(`/view-application/${id}`); // Navigate to the detailed view page
  };

  return (
    <div>
      <Navbar />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={5} className="dropdown-row">
              <label htmlFor="year-select">Year: </label>
              <select id="year-select">
                <option value="">Select Year</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
              
              <label htmlFor="status-select">Status: </label>
              <select id="status-select" onChange={handleStatusChange}>
                <option value="">Select Status</option>
                <option value="Submitted">Submitted</option>
                <option value="Granted">Granted</option>
                <option value="Pending Approvals">Pending Approvals</option>
                <option value="Reviewers Comments">Reviewers Comments</option>
                <option value="Reject">Reject</option>
              </select>
            </th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Project Title</th>
            <th>Submitted Date</th>
            <th>Status</th>
            <th>View Grant (PDF)</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplications.map((app) => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.projectTitle}</td>
              <td>{app.submittedDate}</td>
              <td>{app.status}</td>
              <td>
                <button 
                  className="view-button" // Add your custom class name for styling
                  onClick={() => handleViewClick(app.id)} // Handle button click
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
