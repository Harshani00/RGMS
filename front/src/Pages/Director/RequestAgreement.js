import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Navbar from '../../Components/Navbar';
import '../Secretary/Table.css';

export default function ViewApplication() {
  const [applications] = useState([
    // Dummy data for testing
    { id: 1, userEmail: 'user1@example.com', projectTitle: 'Project One', submittedDate: '2024-08-30' },
    { id: 2, userEmail: 'user2@example.com', projectTitle: 'Project Two', submittedDate: '2024-08-29' }
  ]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentAppId, setCurrentAppId] = useState(null);

  useEffect(() => {
    setFilteredApplications(applications); // Initialize with all data
  }, [applications]);

  const handleUploadClick = (id) => {
    setCurrentAppId(id);
    setShowModal(true);
  };

  const handleRequestClick = (id) => {
    console.log(`Request clicked for application ${id}`);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Implement the file upload logic here, e.g., using FormData and an API call.
      console.log(`Uploading ${selectedFile.name} for application ${currentAppId}`);
      setShowModal(false); // Close the modal after uploading
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Request Agreements</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={6} className="title">
              <label htmlFor="status-select">All Completed Applications ( HOD / Dean / Reviewers)</label>
            </th>
          </tr>
          <tr>
            <th>User Email</th>
            <th>Project Title</th>
            <th>Submitted Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplications.map((app) => (
            <tr key={app.id}>
              <td>{app.userEmail}</td>
              <td>{app.projectTitle}</td>
              <td>{app.submittedDate}</td>
              <td>
                <button 
                  className="uploadRequest_button"
                  onClick={() => handleUploadClick(app.id)}
                >
                  Upload
                </button>
                <button 
                  className="uploadRequest_button"
                  onClick={() => handleRequestClick(app.id)}
                >
                  Request
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Upload File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="file" onChange={handleFileChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFileUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
