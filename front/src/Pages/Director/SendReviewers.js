// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import '../Secretary/Table.css';

// export default function SendReviewers() {
//   const [applications] = useState([
//     {
//       id: 1,
//       projectTitle: 'Project A',
//       submiteddate: '2023-12-28',
//     },
//     {
//       id: 2,
//       projectTitle: 'Project B',
//       submiteddate: '2023-12-28',
//       // submittedDate: '2024-01-10',
//       // status: 'Completed',
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

//   // Handle the view button action
//   const handleView = (id, reportType) => {
//     console.log(`Viewing ${reportType} report for application ${id}`);
//     // Add logic to view the specific report
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Send Reviewers</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th className="title">Project Title</th>
//             <th className="title">Submited Date</th>
//             <th colSpan={2} className="title">Reviewers</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((app) => (
//             <tr key={app.id}>
//               <td>{app.projectTitle}</td>
//               <td>{app.submiteddate}</td>
//               <td>
//                 <div>
//                   <label className="Reviewer">Reviewer 1</label>
//                 </div>
//                 <button className="Email-button" onClick={() => handleShow(app.id, 'mid')}>Send Email</button>
//                 <br />
//                 <button className="btn-approved" onClick={() => handleView(app.id, 'mid')}>Approved</button>
//                 <button className="btn-rejected" onClick={() => handleView(app.id, 'mid')}>Rejected</button>
//                 <button className="view-button" onClick={() => handleView(app.id, 'mid')}>View</button>
//               </td>
//               <td>
//                 <div>
//                   <label className="Reviewer">Reviewer 2</label>
//                 </div>
//                 <button className="Email-button" onClick={() => handleShow(app.id, 'end')}>Send Email</button>
//                 <br />
//                 <button className="btn-approved" onClick={() => handleView(app.id, 'mid')}>Approved</button>
//                 <button className="btn-rejected" onClick={() => handleView(app.id, 'mid')}>Rejected</button>
//                 <button className="view-button" onClick={() => handleView(app.id, 'mid')}>View</button>
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
// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import '../Secretary/Table.css';

// export default function SendReviewers() {
//   const [applications] = useState([
//     {
//       id: 1,
//       projectTitle: 'Project A',
//       submiteddate: '2023-12-28',
//       reviewer1: { name: 'Reviewer 1', email: 'reviewer1@example.com', affiliation: 'University A' },
//       reviewer2: { name: 'Reviewer 2', email: 'reviewer2@example.com', affiliation: 'University B' }
//     },
//     {
//       id: 2,
//       projectTitle: 'Project B',
//       submiteddate: '2023-12-28',
//       reviewer1: { name: 'Reviewer 3', email: 'reviewer3@example.com', affiliation: 'University C' },
//       reviewer2: { name: 'Reviewer 4', email: 'reviewer4@example.com', affiliation: 'University D' }
//     },
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [currentApp, setCurrentApp] = useState(null);
//   const [currentReviewer, setCurrentReviewer] = useState({});
//   const [emailBody, setEmailBody] = useState('');

//   const handleClose = () => setShowModal(false);
//   const handleShow = (appId, reviewer, type) => {
//     const app = applications.find(app => app.id === appId);
//     setCurrentApp(app);
//     setCurrentReviewer(reviewer);
//     setEmailBody(`This is the email body for the ${type} report for application ${appId}.`);
//     setShowModal(true);
//   };

//   const handleSendEmail = () => {
//     console.log(`Sending email to ${currentReviewer.email} for application ${currentApp.id}`);
//     // Add logic to send the email
//     handleClose(); // Close modal after sending
//   };

//   const handleView = (id, reportType) => {
//     console.log(`Viewing ${reportType} report for application ${id}`);
//     // Add logic to view the specific report
//   };

//   return (
//     <div>
//       <Navbar />
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th className="title">Project Title</th>
//             <th className="title">Submitted Date</th>
//             <th colSpan={2} className="title">Reviewers</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((app) => (
//             <tr key={app.id}>
//               <td>{app.projectTitle}</td>
//               <td>{app.submiteddate}</td>
//               <td>
//                 <div>
//                   <label className="Reviewer">{app.reviewer1.name}</label>
//                 </div>
//                 <button className="Email-button" onClick={() => handleShow(app.id, app.reviewer1, 'mid')}>Send Email</button>
//                 <br />
                
//                 <button className="btn-rejected" onClick={() => handleView(app.id, 'mid')}>Final Mark</button>
//                 <button className="view-button" onClick={() => handleView(app.id, 'mid')}>View</button>
//               </td>
//               <td>
//                 <div>
//                   <label className="Reviewer">{app.reviewer2.name}</label>
//                 </div>
//                 <button className="Email-button" onClick={() => handleShow(app.id, app.reviewer2, 'end')}>Send Email</button>
//                 <br />
               
//                 <button className="btn-rejected" onClick={() => handleView(app.id, 'mid')}>Final Mark</button>
//                 <button className="view-button" onClick={() => handleView(app.id, 'mid')}>View</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Send Email to {currentReviewer.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//   <Form>
//     <Form.Group controlId="formProjectTitle">
//       <Form.Label>Project Title</Form.Label>
//       {/* Removed readOnly to make it editable */}
//       <Form.Control
//         type="text"
//         value={currentApp ? currentApp.projectTitle : ''}
//         onChange={(e) => setCurrentApp({ ...currentApp, projectTitle: e.target.value })}
//       />
//     </Form.Group>
//     <Form.Group controlId="formReviewerName">
//       <Form.Label>Reviewer Name</Form.Label>
//       {/* Removed readOnly to make it editable */}
//       <Form.Control
//         type="text"
//         value={currentReviewer.name}
//         onChange={(e) => setCurrentReviewer({ ...currentReviewer, name: e.target.value })}
//       />
//     </Form.Group>
//     <Form.Group controlId="formReviewerEmail">
//       <Form.Label>Reviewer Email</Form.Label>
//       {/* Removed readOnly to make it editable */}
//       <Form.Control
//         type="email"
//         value={currentReviewer.email}
//         onChange={(e) => setCurrentReviewer({ ...currentReviewer, email: e.target.value })}
//       />
//     </Form.Group>
//     <Form.Group controlId="formReviewerAffiliation">
//       <Form.Label>Reviewer Affiliation</Form.Label>
//       {/* Removed readOnly to make it editable */}
//       <Form.Control
//         type="text"
//         value={currentReviewer.affiliation}
//         onChange={(e) => setCurrentReviewer({ ...currentReviewer, affiliation: e.target.value })}
//       />
//     </Form.Group>
//     <Form.Group controlId="formEmailBody">
//       <Form.Label>Email Body</Form.Label>
//       <Form.Control
//         as="textarea"
//         rows={3}
//         value={emailBody}
//         onChange={(e) => setEmailBody(e.target.value)}
//       />
//     </Form.Group>
//   </Form>
// </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary">
//             Form Application 
//           </Button>
//           <Button variant="primary" onClick={handleSendEmail}>
//             Send
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import '../Secretary/Table.css';

// export default function SendReviewers() {
//   const [applications, setApplications] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [currentApp, setCurrentApp] = useState(null);
//   const [currentReviewer, setCurrentReviewer] = useState({});
//   const [emailBody, setEmailBody] = useState('');

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get('/SendReviewers.php');
//         setApplications(response.data);
//       } catch (error) {
//         console.error('Error fetching applications:', error);
//       }
//     };
  
//     fetchApplications();
//   }, []);

//   const handleClose = () => setShowModal(false);
//   const handleShow = (appId, reviewer, type) => {
//     const app = applications.find(app => app.app_ID === appId);
//     setCurrentApp(app);
//     setCurrentReviewer(reviewer);
//     setEmailBody(`This is the email body for the ${type} report for application ${appId}.`);
//     setShowModal(true);
//   };

//   const handleSendEmail = () => {
//     console.log(`Sending email to ${currentReviewer.email} for application ${currentApp.app_ID}`);
//     handleClose();
//   };

//   const handleView = (id, reportType) => {
//     console.log(`Viewing ${reportType} report for application ${id}`);
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Send Reviewers</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th className="title">Application ID</th>
//             <th className="title">Project Title</th>
//             <th className="title">Submitted Date</th>
//             <th className="title" colSpan={2}>Reviewers</th>
//           </tr>
//           <tr>
//             <th colSpan={3}></th>
//             <th className="title">Reviewer One</th>
//             <th className="title">Reviewer Two</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((app) => (
//             <tr key={app.app_ID}>
//               <td>{app.app_ID}</td>
//               <td>{app.projectTitle}</td>
// <td>{app.submittedDate}</td>
// <td>
//   <div>
//     <label className="Reviewer">{app.reviewer1Name}</label>
//   </div>
//   <button className="Email-button" onClick={() => handleShow(app.app_ID, { 
//     name: app.reviewer1Name, 
     
//   }, 'mid')}>Send Email</button>
//   <br />
//   <button className="btn-rejected" onClick={() => handleView(app.app_ID, 'mid')}>Final Mark</button>
//   <button className="view-button" onClick={() => handleView(app.app_ID, 'mid')}>View</button>
// </td>
// <td>
//   <div>
//     <label className="Reviewer">{app.reviewer2Name}</label>
//   </div>
//   <button className="Email-button" onClick={() => handleShow(app.app_ID, { 
//     name: app.reviewer2Name, 
    
//   }, 'end')}>Send Email</button>
//   <br />
//   <button className="btn-rejected" onClick={() => handleView(app.app_ID, 'end')}>Final Mark</button>
//   <button className="view-button" onClick={() => handleView(app.app_ID, 'end')}>View</button>
// </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Send Email to {currentReviewer.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formProjectTitle">
//               <Form.Label>Project Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={currentApp ? currentApp.projectTitle : ''}
//                 readOnly
//               />
//             </Form.Group>
//             <Form.Group controlId="formReviewerName">
//               <Form.Label>Reviewer Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={currentReviewer.name}
//                 readOnly
//               />
//             </Form.Group>
//             <Form.Group controlId="formReviewerEmail">
//               <Form.Label>Reviewer Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 value={currentReviewer.email}
//                 readOnly
//               />
//             </Form.Group>
//             <Form.Group controlId="formReviewerAffiliation">
//               <Form.Label>Reviewer Affiliation</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={currentReviewer.affiliation}
//                 readOnly
//               />
//             </Form.Group>
//             <Form.Group controlId="formEmailBody">
//               <Form.Label>Email Body</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={emailBody}
//                 onChange={(e) => setEmailBody(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Cancel</Button>
//           <Button variant="primary" onClick={handleSendEmail}>Send</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Navbar from '../../Components/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Secretary/Table.css';

export default function SendReviewers() {
  const [applications, setApplications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentApp, setCurrentApp] = useState(null);
  const [currentReviewer, setCurrentReviewer] = useState({});
  const [emailBody, setEmailBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/SendReviewers.php');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };
  
    fetchApplications();
  }, []);

  const handleClose = () => setShowModal(false);

  const handleShow = (appId, reviewer, type) => {
    const app = applications.find(app => app.app_ID === appId);
    setCurrentApp(app);
    setCurrentReviewer(reviewer);

    // Generate the dynamic link
    const reviewerLink = `${window.location.origin}/reviewer?app_ID=${appId}&reviewer=${type}`;

    setEmailBody(`Please review at the following link:\n ${reviewerLink}`);
    // const reviewerLink = `http://yourdomain.com/review/${appId}?reviewer=${type}`;
    // setEmailBody(
    //   `This is the email body for the ${type} report for application ${appId}.\n\n` +
    //   `Please click the following link to access the review page: \n` +
    //   `<a href="${reviewerLink}">Review Application ${appId} as Reviewer ${type === 'one' ? 'One' : 'Two'}</a>`
    // );

    setShowModal(true);
  };

  const handleSendEmail = () => {
    console.log(`Sending email to ${currentReviewer.email} for application ${currentApp.app_ID}`);
    console.log(`Email body: ${emailBody}`);
    handleClose();
  };

  const handleView = (id, reportType) => {
    navigate(`/reviewerOne?app_ID=${id}&reportType=${reportType}`);
  };

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Send Reviewers</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="title">Application ID</th>
            <th className="title">Project Title</th>
            <th className="title">Submitted Date</th>
            <th className="title" colSpan={2}>Reviewers</th>
          </tr>
          <tr>
            <th colSpan={3}></th>
            <th className="title">Reviewer One</th>
            <th className="title">Reviewer Two</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.app_ID}>
              <td>{app.app_ID}</td>
              <td>{app.projectTitle}</td>
              <td>{app.submittedDate}</td>
              <td>
                <div>
                  <label className="Reviewer">{app.reviewer1Name}</label>
                </div>
                <button className="Email-button" onClick={() => handleShow(app.app_ID, { 
                  name: app.reviewer1Name, 
                }, 'Reviewer One')}>Send Email</button>
                <br />
                <button className="btn-rejected" onClick={() => handleView(app.app_ID, 'mid')}>Final Mark</button>
                <button className="view-button" onClick={() => handleView(app.app_ID, 'mid')}>View</button>
              </td>
              <td>
                <div>
                  <label className="Reviewer">{app.reviewer2Name}</label>
                </div>
                <button className="Email-button" onClick={() => handleShow(app.app_ID, { 
                  name: app.reviewer2Name, 
                }, 'Reviewer Two')}>Send Email</button>
                <br />
                <button className="btn-rejected" onClick={() => handleView(app.app_ID, 'end')}>Final Mark</button>
                <button className="view-button" onClick={() => handleView(app.app_ID, 'end')}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Email to {currentReviewer.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProjectTitle">
              <Form.Label>Project Title</Form.Label>
              <Form.Control
                type="text"
                value={currentApp ? currentApp.projectTitle : ''}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formReviewerName">
              <Form.Label>Reviewer Name</Form.Label>
              <Form.Control
                type="text"
                value={currentReviewer.name}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formReviewerEmail">
              <Form.Label>Reviewer Email</Form.Label>
              <Form.Control
                type="email"
                value={currentReviewer.email}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formReviewerAffiliation">
              <Form.Label>Reviewer Affiliation</Form.Label>
              <Form.Control
                type="text"
                value={currentReviewer.affiliation}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formEmailBody">
              <Form.Label>Email Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSendEmail}>Send</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
