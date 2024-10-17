// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import '../Secretary/Table.css';

// export default function RequestApproval() {
//   const [applications] = useState([
//     {
//       id: 1,
//       projectTitle: 'Project A',
//       submittedDate: '2023-12-28',
//       statusHod: 'HOD',
//       statusDean: 'Dean',
//     },
//     {
//       id: 2,
//       projectTitle: 'Project B',
//       submittedDate: '2023-12-28',
//       statusHod: 'HOD',
//       statusDean: 'Dean',
//     },
//   ]);

//   const [showEmailModal, setShowEmailModal] = useState(false);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [currentApp, setCurrentApp] = useState(null);
//   const [reportType, setReportType] = useState('');
//   const [emailBody, setEmailBody] = useState('');
//   const [recipientRole, setRecipientRole] = useState(''); // State for selected role
//   const [email, setEmail] = useState(''); // State for email input

//   // Add modal state
//   const [faculty, setFaculty] = useState('');
//   const [department, setDepartment] = useState('');
//   const [name, setName] = useState('');

//   const handleCloseEmail = () => setShowEmailModal(false);
//   const handleCloseAdd = () => {
//     setShowAddModal(false);
//     // Reset fields
//     setFaculty('');
//     setDepartment('');
//     setEmail('');
//     setName('');
//   };

//   const handleShowEmail = (id, type) => {
//     setCurrentApp(applications.find(app => app.id === id));
//     setReportType(type);
//     setEmailBody(`This is the email body for the ${type} report for application ${id}.`);
//     setRecipientRole(''); // Reset role on modal open
//     setEmail(''); // Reset email on modal open
//     setShowEmailModal(true);
//   };

//   const handleShowAdd = (id) => {
//     setCurrentApp(applications.find(app => app.id === id));
//     setShowAddModal(true);
//   };

//   const handleSendEmail = () => {
//     console.log(`Sending email to ${recipientRole} for application ${currentApp.id}: ${emailBody}`);
//     console.log(`Email to: ${email}`);
//     // Add logic to send the email
//     handleCloseEmail(); // Close modal after sending
//   };

//   const handleAddComment = () => {
//     console.log(`Adding comment for application ${currentApp.id}: ${faculty}, ${department}, ${email}, ${name}`);
//     // Add logic to save the comment
//     handleCloseAdd(); // Close modal after adding
//   };

//   const handleDecision = (id, decision, role) => {
//     console.log(`Decision for application ${id} by ${role}: ${decision}`);
//     // Add logic to handle decision (approve/reject)
//   };

//   return (
//     <div>
//       <Navbar />
//       <Table striped bordered hover>
//         <thead>
//           <label>All Shorted Applications</label>
//           <tr>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>Status</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((app) => (
//             <tr key={app.id}>
//               <td>{app.projectTitle}</td>
//               <td>{app.submittedDate}</td>
//               <td>
//                 {app.statusHod}
//                 <br />
//                 <Button variant="success" className='btn-approved' onClick={() => handleDecision(app.id, 'Approved', 'HOD')}>
//                   Approve
//                 </Button>
//                 <Button variant="danger" className='btn-rejected' onClick={() => handleDecision(app.id, 'Rejected', 'HOD')}>
//                   Reject
//                 </Button>
//                 <Button variant="info" onClick={() => handleShowAdd(app.id)}>
//                   Add
//                 </Button>
//                 <Button variant="secondary" className='Email-button' onClick={() => handleShowEmail(app.id, 'HOD')}>
//                   Send Email
//                 </Button>
//               </td>
//               <td>
//                 {app.statusDean}
//                 <br />
//                 <Button variant="success" className='btn-approved' onClick={() => handleDecision(app.id, 'Approved', 'Dean')}>
//                   Approve
//                 </Button>
//                 <Button variant="danger" className='btn-rejected' onClick={() => handleDecision(app.id, 'Rejected', 'Dean')}>
//                   Reject
//                 </Button>
//                 <Button variant="info" onClick={() => handleShowAdd(app.id)}>
//                   Add
//                 </Button>
//                 <Button variant="secondary" className='Email-button' onClick={() => handleShowEmail(app.id, 'Dean')}>
//                   Send Email
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//      {/* Send Email Modal */}
// <Modal show={showEmailModal} onHide={handleCloseEmail}>
//   <Modal.Header closeButton>
//     <Modal.Title>Send Email</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//     <Form>
//       <Form.Group controlId="formProjectTitle">
//         <Form.Label>Project Title</Form.Label>
//         <Form.Control type="text" value={currentApp ? currentApp.projectTitle : ''} readOnly />
//       </Form.Group>
//       <Form.Group controlId="formRecipientRole">
//         <Form.Label>Select Role</Form.Label>
//         <Form.Control as="select" value={recipientRole} onChange={(e) => setRecipientRole(e.target.value)}>
        
      
//         <option value="">Select Role</option>
//           <option value="HOD">HOD</option>
//           <option value="Dean">Dean</option>
        
//         </Form.Control>
//       </Form.Group>
//       <Form.Group controlId="formEmail">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </Form.Group>
//       <Form.Group controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" value="recipient@example.com" readOnly />
//             </Form.Group>
//       <Form.Group controlId="formEmailBody">
//         <Form.Label>Email Body</Form.Label>
//         <Form.Control as="textarea" rows={3} value={emailBody} onChange={(e) => setEmailBody(e.target.value)} />
//       </Form.Group>
//     </Form>
//   </Modal.Body>
//   <Modal.Footer>
//     <Button variant="secondary" onClick={handleCloseEmail}>
//       Cancel
//     </Button>
//     <Button variant="primary" onClick={handleSendEmail}>
//       Send
//     </Button>
//   </Modal.Footer>
// </Modal>

//       {/* Add Comment Modal */}
//       <Modal show={showAddModal} onHide={handleCloseAdd}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Comment</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formFaculty">
//               <Form.Label>Faculty</Form.Label>
//               <Form.Control type="text" value={faculty} onChange={(e) => setFaculty(e.target.value)} />
//             </Form.Group>
//             <Form.Group controlId="formDepartment">
//               <Form.Label>Department</Form.Label>
//               <Form.Control type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
//             </Form.Group>
//             <Form.Group controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </Form.Group>
//             <Form.Group controlId="formName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseAdd}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleAddComment}>
//             Add
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }


import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from '../../Components/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Secretary/Table.css';

export default function RequestApproval() {
  const [applications] = useState([
    {
      id: 1,
      projectTitle: 'Project A',
      submittedDate: '2023-12-28',
      statusHod: 'HOD',
      statusDean: 'Dean',
    },
    {
      id: 2,
      projectTitle: 'Project B',
      submittedDate: '2023-12-28',
      statusHod: 'HOD',
      statusDean: 'Dean',
    },
  ]);

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentApp, setCurrentApp] = useState(null);
  const [reportType, setReportType] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [recipientRole, setRecipientRole] = useState(''); // State for selected role
  const [email, setEmail] = useState(''); // State for email input

  // Add modal state
  const [faculty, setFaculty] = useState('');
  const [department, setDepartment] = useState('');
  const [name, setName] = useState('');

  const handleCloseEmail = () => setShowEmailModal(false);
  const handleCloseAdd = () => {
    setShowAddModal(false);
    // Reset fields
    setFaculty('');
    setDepartment('');
    setEmail('');
    setName('');
  };

  const handleShowEmail = (id, type) => {
    setCurrentApp(applications.find(app => app.id === id));
    setReportType(type);
    setEmailBody(`This is the email body for the ${type} report for application ${id}.`);
    setRecipientRole(''); // Reset role on modal open
    setEmail(''); // Reset email on modal open
    setShowEmailModal(true);
  };

  const handleShowAdd = (id) => {
    setCurrentApp(applications.find(app => app.id === id));
    setShowAddModal(true);
  };

  const handleSendEmail = () => {
    console.log(`Sending email to ${recipientRole} for application ${currentApp.id}: ${emailBody}`);
    console.log(`Email to: ${email}`);
    // Add logic to send the email
    handleCloseEmail(); // Close modal after sending
  };

  const handleAddComment = () => {
    console.log(`Adding comment for application ${currentApp.id}: ${faculty}, ${department}, ${email}, ${name}`);
    // Add logic to save the comment
    handleCloseAdd(); // Close modal after adding
  };

  const handleDecision = (id, decision, role) => {
    console.log(`Decision for application ${id} by ${role}: ${decision}`);
    // Add logic to handle decision (approve/reject)
  };

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Request Approval</h1>
      <Table striped bordered hover>
        <thead>
          <th colSpan={6} className='tittle'>
          <label>All Shorted Applications</label></th>
          <tr>
            <th>Project Title</th>
            <th>Submitted Date</th>
            <th>Status</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.projectTitle}</td>
              <td>{app.submittedDate}</td>
              <td>
                {app.statusHod}
                <br />
                <button className="btn-approved" onClick={() => handleDecision(app.id, 'Approved', 'HOD')}>
                  Approve
                </button>
                <button className='btn-rejected' onClick={() => handleDecision(app.id, 'Rejected', 'HOD')}>
                  Reject
                </button>
                <button className='view-button' onClick={() => handleShowAdd(app.id)}>
                  Add
                </button>
                <button className="Email-button" onClick={() => handleShowEmail(app.id, 'HOD')}>Send Email</button>
              </td>
              <td>
                {app.statusDean}
                <br />
                <button className='btn-approved' onClick={() => handleDecision(app.id, 'Approved', 'Dean')}>
                  Approve
                </button>
                <button className='btn-rejected' onClick={() => handleDecision(app.id, 'Rejected', 'Dean')}>
                  Reject
                </button>
                <button className='view-button' onClick={() => handleShowAdd(app.id)}>
                  Add
                </button>
                <button className='Email-button' onClick={() => handleShowEmail(app.id, 'Dean')}>
                  Send Email
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Send Email Modal */}
      <Modal show={showEmailModal} onHide={handleCloseEmail}>
        <Modal.Header closeButton>
          <Modal.Title>Send Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProjectTitle">
              <Form.Label>Project Title</Form.Label>
              <Form.Control type="text" value={currentApp ? currentApp.projectTitle : ''} readOnly />
            </Form.Group>
            <Form.Group controlId="formRecipientRole">
              <Form.Label>Select Role</Form.Label>
              <Form.Control as="select" value={recipientRole} onChange={(e) => setRecipientRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="HOD">HOD</option>
                <option value="Dean">Dean</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formEmailBody">
              <Form.Label>Email Body</Form.Label>
              <Form.Control as="textarea" rows={3} value={emailBody} onChange={(e) => setEmailBody(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-cancel' onClick={handleCloseEmail}>
            Cancel
          </Button>
          <Button className='btn-send' onClick={handleSendEmail}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Comment Modal */}
      <Modal show={showAddModal} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFaculty">
              <Form.Label>Faculty</Form.Label>
              <Form.Control type="text" value={faculty} onChange={(e) => setFaculty(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formDepartment">
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-cancel' onClick={handleCloseAdd}>
            Cancel
          </Button>
          <Button className='btn-add-comment' onClick={handleAddComment}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


