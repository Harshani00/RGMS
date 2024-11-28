import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from '../../Components/Navbar';
import '../Secretary/Table.css';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

export default function ApproveBudget() {
  const [applications, setApplications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    // Fetch applications from the PHP script
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      // Use axios for a GET request
      const response = await axios.get('/ApproveBudget.php');
      // Set the fetched data to state variables
      setApplications(response.data);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  // Handle the decision change
  const handleDecisionChange = (id, newDecision) => {
    const updatedApplications = applications.map((app) =>
      app.app_ID === id ? { ...app, decision: newDecision } : app
    );
    setApplications(updatedApplications);
  };

  // Save decision for the given application id
  const saveDecision = async (id) => {
    const app = applications.find(app => app.app_ID === id);
    try {
      // Send the decision to the backend to be saved in the database
      const response = await axios.post('/ApproveBudget.php', {
        app_ID: app.app_ID,
        decision: app.decision,
      });

      if (response.data.status === 'success') {
        console.log(`Decision "${app.decision}" saved for application ${id}`);
        fetchApplications(); // Refresh the application list after saving the decision
        setModalMessage(`Decision "${app.decision}" was saved successfully!`);
        setShowModal(true);  // Show the modal with the success message
      } else {
        console.error('Failed to save decision');
        setModalMessage('Failed to save decision');
        setShowModal(true);  // Show the modal with the error message
      }
    } catch (error) {
      console.error('Error saving decision:', error);
      setModalMessage('Error saving decision');
      setShowModal(true);  // Show the modal with the error message
    }
  };

  // Handle the view button action
  const handleView = (id, reportType) => {
    console.log(`Viewing ${reportType} budget for application ${id}`);
    // Add logic to view the specific report or show a placeholder PDF
  };

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Approve Budget Revision</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Project Title</th>
            <th>Request Date</th>
            <th>Previous Budget</th>
            <th>New Budget</th>
            <th>Decision</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.app_ID}>
              <td>{app.projectTitle}</td>
              <td>{app.uploaded_at}</td>
              <td>
                <button
                  className="view-button"
                  onClick={() => handleView(app.app_ID, 'previous')}
                >
                  View
                </button>
              </td>
              <td>
                <button
                  className="view-button"
                  onClick={() => handleView(app.app_ID, 'new')}
                >
                  View
                </button>
              </td>
              <td>
                <select
                  value={app.decision}
                  onChange={(e) => handleDecisionChange(app.app_ID, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
              <td>
                <button
                  className="view-button"
                  onClick={() => saveDecision(app.app_ID)}
                >
                  Save
                </button>
              </td>
            </tr>
          ))}
          {applications.length === 0 && (
            <tr>
              <td colSpan={6}>No applications available</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Modal for showing the decision status */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Decision Saved</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
