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
import { useNavigate } from 'react-router-dom';
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
  //const imageUrl = `${process.env.PUBLIC_URL}/Templates/designation.png`;


  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/SendReviewers.php');
        console.log('Fetched applications:', response.data); // Debug log
    
        // Ensure response is an array
        if (Array.isArray(response.data)) {
          setApplications(response.data);
        } else {
          console.error('Unexpected data format:', response.data);
          setApplications([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error('Error fetching applications:', error);
        setApplications([]); // Ensure applications is always an array
      }
    };
    
    fetchApplications();
  }, []);
  

  const handleClose = () => setShowModal(false);

  const handleShow = (appId, reviewer, type) => {
    const app = applications.find(app => app.app_ID === appId);
    setCurrentApp(app);
    setCurrentReviewer({
      name: reviewer.name,
      email: reviewer.email,
      affiliation: reviewer.affiliation,
      type: type,  // 'Reviewer One' or 'Reviewer Two'
    });
  
    // Generate the dynamic link based on the reviewer type (Reviewer One or Reviewer Two)
    const reviewerLink = `${window.location.origin}/${type === 'Reviewer One' ? 'reviewer1' : 'reviewer2'}?app_ID=${appId}`;
  
    // Set the email body with the dynamic link and placeholders for name and project title
    setEmailBody(`
      Dear ${reviewer.name},<br /><br />
      We hope this message finds you well.<br /><br />
      We extend our sincere gratitude to those of you who have supported our research grant evaluation process in the past. Your invaluable insights have significantly contributed to the advancement of research at our university.<br /><br />
      We’re excited to announce that this year, we’ve once again opened applications for our annual multidisciplinary research grant scheme. This program aims to foster collaborative research projects across different faculties, addressing diverse and critical research questions with the potential for significant impact.<br /><br />
      We’re pleased to invite you to serve as an evaluator for a multidisciplinary research grant proposal titled "${app.projectTitle}". Your expertise in the field of this grant application would be invaluable in assessing the scientific merit, innovation, and feasibility of this project. We kindly request that you review the attached documents and provide your expert opinion using the enclosed evaluation template.<br /><br />
      The attached documents include:<br />
      1. Project Proposal<br />
      2. Project Budget<br />
      3. Principal Investigator's Curriculum Vitae<br />
      4. Combined Curriculum Vitae of Co-Investigators<br /><br />
      We understand your time is valuable, and we would be grateful if you could submit your review within the next 10 days. If you encounter any conflicts of interest or are unable to undertake this review, please let us know promptly by email.<br /><br />
      Should you have any questions or require further information, please do not hesitate to contact me directly.<br /><br />
      Thank you in advance for considering this request and for your continued support in advancing impactful research.<br /><br />
      Please Review the Application here , Review Link: ${reviewerLink}<br /><br />
      With best regards<br><br />
      Janaka<br><br />
      <span style="color: blue;">Prof. Janaka Ekanayake</span><br><br />
      <span style="color: blue;">BScEng(Hons), PhD, FIEEE (USA), FIET (UK), FNAS (SL), FIESL, CEng</span><br><br />
      <span style="color: blue;">Senior Professor and Chair of Electrical and Electronic Engineering</span><br><br />
      <span style="color: blue;">Director, University Research Council</span><br><br />
      <span style="color: blue;">University of Peradeniya, Sri Lanka</span><br><br />
      <span style="color: blue;">Tel: +94 777146979</span><br><br />
      <span style="color: blue;">Email: <a href="mailto:EkanayakeJ@eng.pdn.ac.lk" style="color: blue;">EkanayakeJ@eng.pdn.ac.lk</a></span>

      
      
    `);
    // <img src="${imageUrl}" alt="Your Designation Image" style="width: 100px; height: auto;" /><br />
    // <img src="https://example.com/images/designation.png" alt="Your Designation Image" style="width: 100px; height: auto;" /><br />
    
    
    setShowModal(true);
  };
  

  
  const handleSendEmail = async (event) => {
    event.preventDefault();
  
    try {
      // Save reviewer details
      const endpoint = currentReviewer.type === 'Reviewer One' ? '/SaveReviewer1.php' : '/SaveReviewer2.php';
      const saveResponse = await axios.post(endpoint, {
        app_ID: currentApp.app_ID,
        reviewerEmail: currentReviewer.email,
        reviewerName: currentReviewer.name,
        reviewerAffiliation: currentReviewer.affiliation,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        transformRequest: [(data) => {
          const params = new URLSearchParams();
          for (const key in data) {
            params.append(key, data[key]);
          }
          return params;
        }],
      });
  
      if (saveResponse.data.status === "success") {
        console.log("Reviewer details saved successfully");
  
        // Send email
        const emailResponse = await axios.post('Email.php', {
          email: currentReviewer.email,
          subject: `Invitation to Review Project: ${currentApp.projectTitle}`,
          message: emailBody, // Email body containing the dynamic link
        });
  
        if (emailResponse.data.status === "success") {
          alert("Email sent successfully!");
          console.log("Email response:", emailResponse.data);
        } else {
          alert(`Failed to send email: ${emailResponse.data.message}`);
          console.error("Email error:", emailResponse.data.message);
        }
      } else {
        alert('There was an error saving reviewer details. Please try again.');
      }
    } catch (error) {
      console.error("Error during the process:", error);
      alert('An error occurred. Please try again.');
    }
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
          <th colSpan={5}>
          <label>Approved Applications ( By Dean)</label>
          </th>
          </tr>
          
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
  {Array.isArray(applications) && applications.length > 0 ? (
    applications.map((app) => (
      <tr key={app.app_ID}>
        <td>{app.app_ID}</td>
        <td>{app.projectTitle}</td>
        <td>{app.submittedDate}</td>
        <td>
          <div>
            <label className="Reviewer">{app.reviewer1Name}</label>
          </div>
          {app.reviewer1_mark ? null : (
            <button
              className="Email-button"
              onClick={() =>
                handleShow(app.app_ID, {
                  name: app.reviewer1Name,
                  email: app.reviewer1Email,
                  affiliation: app.reviewer1Affiliation,
                }, 'Reviewer One')
              }
            >
              Send Email
            </button>
          )}
          <br />
          <div className="marks-container">
            <label className="marks-label">Mark: {app.reviewer1_mark || 'N/A'}</label>
            <button className="view-button" onClick={() => handleView(app.app_ID, 'mid')}>View</button>
          </div>
        </td>
        <td>
          <div>
            <label className="Reviewer">{app.reviewer2Name}</label>
          </div>
          {app.reviewer2_mark ? null : (
            <button
              className="Email-button"
              onClick={() =>
                handleShow(app.app_ID, {
                  name: app.reviewer2Name,
                  email: app.reviewer2Email,
                  affiliation: app.reviewer2Affiliation,
                }, 'Reviewer Two')
              }
            >
              Send Email
            </button>
          )}
          <br />
          <div className="marks-container">
            <label className="marks-label">Mark: {app.reviewer2_mark || 'N/A'}</label>
            <button className="view-button" onClick={() => handleView(app.app_ID, 'end')}>View</button>
          </div>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5">No applications found.</td>
    </tr>
  )}
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
        onChange={(e) => setCurrentReviewer({ ...currentReviewer, name: e.target.value })}
      />
    </Form.Group>

    <Form.Group controlId="formReviewerEmail">
      <Form.Label>Reviewer Email</Form.Label>
      <Form.Control
        type="email"
        value={currentReviewer.email}
        onChange={(e) => setCurrentReviewer({ ...currentReviewer, email: e.target.value })}
      />
    </Form.Group>

    <Form.Group controlId="formReviewerAffiliation">
      <Form.Label>Reviewer Affiliation</Form.Label>
      <Form.Control
        type="text"
        value={currentReviewer.affiliation}
        onChange={(e) => setCurrentReviewer({ ...currentReviewer, affiliation: e.target.value })}
      />
    </Form.Group>

    <Form.Group controlId="formEmailBody">
      <Form.Label>Email Body</Form.Label>
      <Form.Control
        as="textarea"
        value={emailBody}
        onChange={(e) => setEmailBody(e.target.value)}
        rows={5}
      />
    </Form.Group>

    <Form.Group controlId="formReviewerLink">
      <Form.Label>Review Link</Form.Label>
      <div style={{ color: 'black', padding: '8px', backgroundColor: '#f8f9fa', border: '1px solid #ced4da', borderRadius: '4px',textDecoration: 'none' }}>
        {currentApp && currentReviewer.type ? (
          <a href={`${window.location.origin}/${currentReviewer.type === 'Reviewer One' ? 'reviewer1' : 'reviewer2'}?app_ID=${currentApp.app_ID}`} target="_blank" rel="noopener noreferrer">
            {`${window.location.origin}/${currentReviewer.type === 'Reviewer One' ? 'reviewer1' : 'reviewer2'}?app_ID=${currentApp.app_ID}`}
          </a>
        ) : (
          <span>No link available</span>
        )}
      </div>
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

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
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
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get('/SendReviewers.php');
//         console.log('Fetched applications:', response.data); // Debug log
    
//         // Ensure response is an array
//         if (Array.isArray(response.data)) {
//           setApplications(response.data);
//         } else {
//           console.error('Unexpected data format:', response.data);
//           setApplications([]); // Fallback to an empty array
//         }
//       } catch (error) {
//         console.error('Error fetching applications:', error);
//         setApplications([]); // Ensure applications is always an array
//       }
//     };
    
//     fetchApplications();
//   }, []);
  

//   const handleClose = () => setShowModal(false);

//   const handleShow = (appId, reviewer, type) => {
//     const app = applications.find(app => app.app_ID === appId);
//     setCurrentApp(app);
//     setCurrentReviewer({
//       name: reviewer.name,
//       email: reviewer.email,
//       affiliation: reviewer.affiliation,
//       type: type,  // 'Reviewer One' or 'Reviewer Two'
//     });
  
//     // Generate the dynamic link based on the reviewer type (Reviewer One or Reviewer Two)
//     const reviewerLink = `${window.location.origin}/${type === 'Reviewer One' ? 'reviewer1' : 'reviewer2'}?app_ID=${appId}`;
  
//     // Set the email body with the dynamic link
//     setEmailBody(
//       `<span style="color: black;">Please review at the following link:</span>\n` +
//       `<a href="${reviewerLink}" target="_blank">${reviewerLink}</a>`
//     );
  
//     setShowModal(true);
//   };
  

  
//   const handleSendEmail = async (event) => {
//     event.preventDefault();
  
//     try {
//       // Save reviewer details
//       const endpoint = currentReviewer.type === 'Reviewer One' ? '/SaveReviewer1.php' : '/SaveReviewer2.php';
//       const saveResponse = await axios.post(endpoint, {
//         app_ID: currentApp.app_ID,
//         reviewerEmail: currentReviewer.email,
//         reviewerName: currentReviewer.name,
//         reviewerAffiliation: currentReviewer.affiliation,
//       }, {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         transformRequest: [(data) => {
//           const params = new URLSearchParams();
//           for (const key in data) {
//             params.append(key, data[key]);
//           }
//           return params;
//         }],
//       });
  
//       if (saveResponse.data.status === "success") {
//         console.log("Reviewer details saved successfully");
  
//         // Send email
//         const emailResponse = await axios.post('Email.php', {
//           email: currentReviewer.email,
//           subject: `Invitation to Review Project: ${currentApp.projectTitle}`,
//           message: emailBody, // Email body containing the dynamic link
//         });
  
//         if (emailResponse.data.status === "success") {
//           alert("Email sent successfully!");
//           console.log("Email response:", emailResponse.data);
//         } else {
//           alert(`Failed to send email: ${emailResponse.data.message}`);
//           console.error("Email error:", emailResponse.data.message);
//         }
//       } else {
//         alert('There was an error saving reviewer details. Please try again.');
//       }
//     } catch (error) {
//       console.error("Error during the process:", error);
//       alert('An error occurred. Please try again.');
//     }
//   };
  
  

  
//   const handleView = (id, reportType) => {
//     navigate(`/reviewerOne?app_ID=${id}&reportType=${reportType}`);
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Send Reviewers</h1>
//       <Table striped bordered hover>
//         <thead>
//         <tr>
//           <th colSpan={5}>
//           <label>Approved Applications ( By Dean)</label>
//           </th>
//           </tr>
          
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
//   {Array.isArray(applications) && applications.length > 0 ? (
//     applications.map((app) => (
//       <tr key={app.app_ID}>
//         <td>{app.app_ID}</td>
//         <td>{app.projectTitle}</td>
//         <td>{app.submittedDate}</td>
//         <td>
//           <div>
//             <label className="Reviewer">{app.reviewer1Name}</label>
//           </div>
//           {app.reviewer1_mark ? null : (
//             <button
//               className="Email-button"
//               onClick={() =>
//                 handleShow(app.app_ID, {
//                   name: app.reviewer1Name,
//                   email: app.reviewer1Email,
//                   affiliation: app.reviewer1Affiliation,
//                 }, 'Reviewer One')
//               }
//             >
//               Send Email
//             </button>
//           )}
//           <br />
//           <div className="marks-container">
//             <label className="marks-label">Mark: {app.reviewer1_mark || 'N/A'}</label>
//             <button className="view-button" onClick={() => handleView(app.app_ID, 'mid')}>View</button>
//           </div>
//         </td>
//         <td>
//           <div>
//             <label className="Reviewer">{app.reviewer2Name}</label>
//           </div>
//           {app.reviewer2_mark ? null : (
//             <button
//               className="Email-button"
//               onClick={() =>
//                 handleShow(app.app_ID, {
//                   name: app.reviewer2Name,
//                   email: app.reviewer2Email,
//                   affiliation: app.reviewer2Affiliation,
//                 }, 'Reviewer Two')
//               }
//             >
//               Send Email
//             </button>
//           )}
//           <br />
//           <div className="marks-container">
//             <label className="marks-label">Mark: {app.reviewer2_mark || 'N/A'}</label>
//             <button className="view-button" onClick={() => handleView(app.app_ID, 'end')}>View</button>
//           </div>
//         </td>
//       </tr>
//     ))
//   ) : (
//     <tr>
//       <td colSpan="5">No applications found.</td>
//     </tr>
//   )}
// </tbody>



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
//                 onChange={(e) => setCurrentReviewer({ ...currentReviewer, name: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group controlId="formReviewerEmail">
//               <Form.Label>Reviewer Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 value={currentReviewer.email}
//                 onChange={(e) => setCurrentReviewer({ ...currentReviewer, email: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group controlId="formReviewerAffiliation">
//               <Form.Label>Reviewer Affiliation</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={currentReviewer.affiliation}
//                 onChange={(e) => setCurrentReviewer({ ...currentReviewer, affiliation: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group controlId="formEmailBody">
//               <Form.Label>Email Body</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={5}
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

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
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
//   const navigate = useNavigate();

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
  
//     // Generate the dynamic link based on the reviewer type (Reviewer One or Reviewer Two)
//     const reviewerLink = `${window.location.origin}/${type === 'Reviewer One' ? 'reviewer1' : 'reviewer2'}?app_ID=${appId}`;
  
//     // Set the email body with the dynamic link, but make sure the link is uneditable
//     setEmailBody(
//       `Please review at the following link:\n` +
//       `<span contentEditable="false"><a href="${reviewerLink}" target="_blank">${reviewerLink}</a></span>`
//     );
  
//     setShowModal(true);
//   };

//   const handleEmailBodyChange = (e) => {
//     // Only allow editing of the non-link portion of the email body
//     setEmailBody(e.target.innerHTML);
//   };

//   const handleSendEmail = () => {
//     console.log(`Sending email to ${currentReviewer.email} for application ${currentApp.app_ID}`);
//     console.log(`Email body: ${emailBody}`);
//     handleClose();
//   };

//   const handleView = (id, reportType) => {
//     navigate(`/reviewerOne?app_ID=${id}&reportType=${reportType}`);
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
//               <td>{app.submittedDate}</td>
//               <td>
//                 <div>
//                   <label className="Reviewer">{app.reviewer1Name}</label>
//                 </div>
//                 <button className="Email-button" onClick={() => handleShow(app.app_ID, { 
//                   name: app.reviewer1Name,
//                   email: app.reviewer1Email,
//                   affiliation: app.reviewer1Affiliation,
//                 }, 'Reviewer One')}>Send Email</button>
//                 <br />
//                 <button className="btn-rejected" onClick={() => handleView(app.app_ID, 'mid')}>Final Mark</button>
//                 <button className="view-button" onClick={() => handleView(app.app_ID, 'mid')}>View</button>
//               </td>
//               <td>
//                 <div>
//                   <label className="Reviewer">{app.reviewer2Name}</label>
//                 </div>
//                 <button className="Email-button" onClick={() => handleShow(app.app_ID, { 
//                   name: app.reviewer2Name,
//                   email: app.reviewer2Email,
//                   affiliation: app.reviewer2Affiliation, 
//                 }, 'Reviewer Two')}>Send Email</button>
//                 <br />
//                 <button className="btn-rejected" onClick={() => handleView(app.app_ID, 'end')}>Final Mark</button>
//                 <button className="view-button" onClick={() => handleView(app.app_ID, 'end')}>View</button>
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
//               <div
//                 style={{
//                   color: 'black',
//                   padding: '8px',
//                   backgroundColor: '#f8f9fa',
//                   border: '1px solid #ced4da',
//                   borderRadius: '4px',
//                 }}
//                 contentEditable
//                 onInput={handleEmailBodyChange}
//                 dangerouslySetInnerHTML={{ __html: emailBody }}
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
