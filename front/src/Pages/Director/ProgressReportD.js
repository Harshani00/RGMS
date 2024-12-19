
// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import '../Secretary/Table.css';

// export default function ProgressReportD() {
//   const [applications] = useState([
//     {
//       id: 1,
//       startDate: '2024-01-15',
//       projectTitle: 'Project A',
//       submittedDate: '2024-02-01',
//       status: 'In Progress',
//     },
//     {
//       id: 2,
//       startDate: '2023-12-20',
//       projectTitle: 'Project B',
//       submittedDate: '2024-01-10',
//       status: 'Completed',
//     },
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [currentApp, setCurrentApp] = useState(null);
//   const [reportType, setReportType] = useState('');
//   const [emailBody, setEmailBody] = useState('');

//   const handleClose = () => setShowModal(false);
//   const handleShow = (id, type) => {
//     setCurrentApp(applications.find(app => app.id === id));
//     setReportType(type);
//     setEmailBody(`This is the email body for the ${type} report for application ${id}.`);
//     setShowModal(true);
//   };

//   const handleSendEmail = () => {
//     console.log(`Sending email for ${reportType} report for application ${currentApp.id}`);
//     // Add logic to send the email
//     handleClose(); // Close modal after sending
//   };

//   return (
//     <div>
//       <Navbar />
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th colSpan={5} className="dropdown-row">
//               <label>Granted Applications </label>
//               <label htmlFor="year-select">Year: </label>
//               <select id="year-select">
//                 <option value="">Select Year</option>
//                 <option value="2023">2023</option>
//                 <option value="2024">2024</option>
//                 <option value="2025">2025</option>
//               </select>
//             </th>
//           </tr>
//           <tr>
//             <th>Start Date</th>
//             <th>Project Title</th>
//             <th>Progress Report Mid</th>
//             <th>Progress Report End</th>
//             <th>Progress Report Final</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((app) => (
//             <tr key={app.id}>
//               <td>{app.startDate}</td>
//               <td>{app.projectTitle}</td>
//               <td>
//                 <button className="view-button" onClick={() => handleView(app.id, 'mid')}>View</button>
//                 <button className="Email-button" onClick={() => handleShow(app.id, 'mid')}>Send Email</button>
//               </td>
//               <td>
//                 <button className="view-button" onClick={() => handleView(app.id, 'end')}>View</button>
//                 <button className="Email-button" onClick={() => handleShow(app.id, 'end')}>Send Email</button>
//               </td>
//               <td>
//                 <button className="view-button" onClick={() => handleView(app.id, 'final')}>View</button>
//                 <button className="Email-button" onClick={() => handleShow(app.id, 'final')}>Send Email</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Send Email</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formProjectTitle">
//               <Form.Label>Project Title</Form.Label>
//               <Form.Control type="text" value={currentApp ? currentApp.projectTitle : ''} readOnly />
//             </Form.Group>
//             <Form.Group controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" value="recipient@example.com" readOnly />
//             </Form.Group>
//             <Form.Group controlId="formEmailBody">
//               <Form.Label>Email Body</Form.Label>
//               <Form.Control as="textarea" rows={3} value={emailBody} onChange={(e) => setEmailBody(e.target.value)} />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleSendEmail}>
//             Send
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// // Handle the view button action
// const handleView = (id, reportType) => {
//   console.log(`Viewing ${reportType} report for application ${id}`);
//   // Add logic to view the specific report
// };

import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from '../../Components/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../Secretary/Table.css';

export default function ProgressReportD() {
  const [applications, setApplications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentApp, setCurrentApp] = useState(null);
  const [reportType, setReportType] = useState('');
  const [emailBody, setEmailBody] = useState('');

  useEffect(() => {
    // Fetch applications with status 5.1
    const fetchApplications = async () => {
      try {
        const response = await axios.get('RequestProgressReport.php');
        console.log('Fetched Applications:', response.data); // Debugging fetched data
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleClose = () => setShowModal(false);

  const handleShow = (id, type) => {
    const selectedApp = applications.find((app) => app.applicationId === id);
    setCurrentApp(selectedApp);
    setReportType(type);
    
    // Assuming the userName field exists in the application object
    const userName = selectedApp.userName || selectedApp.userEmail; // Fallback to email if name is not available
    
    setEmailBody(
      `Dear ${userName},\n\nThis is the email body for the ${type} report for the project "${selectedApp.projectTitle}".`
    );
    setShowModal(true);
  };
  

  const handleSendEmail = async () => {
    try {
      // Prepare the email data
      const emailData = {
        email: currentApp.userEmail,   // Assuming currentApp has userEmail
        subject: `Progress Report: ${reportType} for "${currentApp.projectTitle}"`,
        message:emailBody,
      };
  
      // Send the email via POST request to Email.php
      const response = await axios.post('Email.php', emailData);
      
      if (response.data.status === 'success') {
        console.log('Email sent successfully');
        alert('Email sent successfully!');
      } else {
        console.error('Email sending failed:', response.data.message);
        alert('Failed to send email');
      }
      
      handleClose();  // Close the modal after sending the email
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }
  };
  
  const handleViewApplication = (id) => {
    console.log(`Viewing application ${id}`);
    // Add logic to view the application details
  };

  const handleView = (id, reportType) => {
    console.log(`Viewing ${reportType} report for application ${id}`);
    // Add logic to view the specific report
  };

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Request Progress Report</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Application ID</th>
            <th>Start Date</th>
            <th>Project Title</th>
            <th>Application</th>
            <th>Progress Report Mid</th>
            <th>Progress Report End</th>
            <th>Progress Report Final</th>
          </tr>
        </thead>
        <tbody>
  {Array.isArray(applications) && applications.length > 0 ? (
    applications.map((app) => (
      <tr key={app.applicationId}>
        <td>{app.Id}</td>
        <td>{app.startDate}</td>
        <td>{app.projectTitle}</td>
        <td>
          <button className="view-button" onClick={() => handleViewApplication(app.applicationId)}>
            View
          </button>
        </td>
        <td>
          <button className="view-button" onClick={() => handleView(app.applicationId, 'mid')}>
            View
          </button>
          <button className="Email-button" onClick={() => handleShow(app.applicationId, 'mid')}>
            Send Email
          </button>
        </td>
        <td>
          <button className="view-button" onClick={() => handleView(app.applicationId, 'end')}>
            View
          </button>
          <button className="Email-button" onClick={() => handleShow(app.applicationId, 'end')}>
            Send Email
          </button>
        </td>
        <td>
          <button className="view-button" onClick={() => handleView(app.applicationId, 'final')}>
            View
          </button>
          <button className="Email-button" onClick={() => handleShow(app.applicationId, 'final')}>
            Send Email
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6" style={{ textAlign: 'center' }}>
        No applications found.
      </td>
    </tr>
  )}
</tbody>

      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProjectTitle">
              <Form.Label>Project Title</Form.Label>
              <Form.Control type="text" value={currentApp ? currentApp.projectTitle : ''} readOnly />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={currentApp ? currentApp.userEmail : ''} readOnly />
            </Form.Group>
            <Form.Group controlId="formEmailBody">
              <Form.Label>Email Body</Form.Label>
              <Form.Control as="textarea" rows={3} value={emailBody} onChange={(e) => setEmailBody(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSendEmail}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
