// import React, { useEffect, useState } from 'react';
// import Navbar from '../../Components/Navbar';
// import Table from 'react-bootstrap/Table';
// import { useNavigate } from 'react-router-dom';
// import '../Secretary/Table.css';

// export default function ShortlistedApplicationD() {
//   const [submittedGrants, setSubmittedGrants] = useState([]);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   // Dummy data to simulate grants (since backend connections are removed)
//   useEffect(() => {
//     const dummyData = [
//       { Id: 1, projectTitle: 'Project 1', submittedDate: '2024-10-01', Status: 'Save', selected: false },
//       { Id: 2, projectTitle: 'Project 2', submittedDate: '2024-09-25', Status: 'Submitted', selected: false },
//       { Id: 3, projectTitle: 'Project 3', submittedDate: '2024-09-20', Status: 'Save', selected: false },
//     ];
//     setSubmittedGrants(dummyData);
//   }, []);

//   const handleToggleSelect = (grantId) => {
//     // Toggle the 'selected' status for the grant with the given Id
//     setSubmittedGrants((prevGrants) =>
//       prevGrants.map((grant) =>
//         grant.Id === grantId ? { ...grant, selected: !grant.selected } : grant
//       )
//     );
//   };

//   const handleEdit = (appId) => {
//     // Navigate to the edit-grant page and pass the appId as state
//     navigate('/editgrant', { state: { appId: appId } });
//   };

//   const handleViewPDF = (grantId) => {
//     // Logic for handling viewing the PDF
//     console.log(`View PDF for grant with ID: ${grantId}`);
//   };

//   return (
//     <div>
//       <Navbar />
//       <Table
//         striped
//         bordered
//         hover
//         style={{ marginTop: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}
//       >
//         <thead>
//           <tr>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>Reviewer 1</th>
//             <th>Reviewer 2</th>
//             <th>HOD</th>
//             <th>Dean</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submittedGrants.length > 0 ? (
//             submittedGrants.map((grant, index) => (
//               <tr key={`${grant.Id}-${index}`}>
//                 <td>{grant.projectTitle}</td>
//                 <td>{grant.submittedDate}</td>
//                 <td>Reviewer 1</td> {/* Placeholder for Reviewer 1 */}
//                 <td>Reviewer 2</td> {/* Placeholder for Reviewer 2 */}
//                 <td>HOD</td> {/* Placeholder for HOD */}
//                 <td>Dean</td> {/* Placeholder for Dean */}
//                 <td>
//                   <button
//                     className='select-button'
//                     onClick={() => handleToggleSelect(grant.Id)}
//                   >
//                     {grant.selected ? 'Unselect' : 'Select'}
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" style={{ textAlign: 'center' }}>
//                 No submitted grants found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import Navbar from '../../Components/Navbar';
// import Table from 'react-bootstrap/Table';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import axios
// import '../Secretary/Table.css';

// export default function ShortlistedApplicationD() {
//   const [submittedGrants, setSubmittedGrants] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSubmittedGrants = async () => {
//       try {
//         // Fetch data from the PHP script using axios
//         const response = await axios.get('ApprovedApplications.php'); // URL to your PHP script
//         const grants = Array.isArray(response.data) ? response.data : [];

//         // Set the data in the state
//         setSubmittedGrants(grants);
//       } catch (error) {
//         console.error('Error fetching data:', error); // Handle error if any
//       }
//     };

//     // Call the async function to fetch data
//     fetchSubmittedGrants();
//   }, []);

//   const handleToggleSelect = (grantId) => {
//     setSubmittedGrants((prevGrants) =>
//       prevGrants.map((grant) =>
//         grant.Id === grantId ? { ...grant, selected: !grant.selected } : grant
//       )
//     );
//   };

//   const handleEdit = (appId) => {
//     navigate('/editgrant', { state: { appId: appId } });
//   };

//   const handleViewPDF = (grantId) => {
//     console.log(`View PDF for grant with ID: ${grantId}`);
//   };

//   return (
//     <div>
//       <Navbar />
//       <Table
//         striped
//         bordered
//         hover
//         style={{ marginTop: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}
//       >
//         <thead>
//           <tr>
//             <th>Application Id</th>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>Reviewer 1</th>
//             <th>Reviewer 2</th>
//             <th>HOD</th>
//             <th>Dean</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submittedGrants.length > 0 ? (
//             submittedGrants.map((grant, index) => (
//               <tr key={index}>
//                 <td>{grant.Id}</td>
//                 <td>{grant.projectTitle}</td>
//                 <td>{grant.submittedDate}</td>
//                 <td>Reviewer 1</td>
//                 <td>Reviewer 2</td>
//                 <td>HOD</td>
//                 <td>Dean</td>
//                 <td>
//                   <button
//                     className="select-button"
//                     onClick={() => handleToggleSelect(grant.Id)}
//                   >
//                     {grant.selected ? 'Unselect' : 'Select'}
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" style={{ textAlign: 'center' }}>
//                 No submitted grants found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import Navbar from '../../Components/Navbar';
// import Table from 'react-bootstrap/Table';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../Secretary/Table.css';

// export default function ShortlistedApplicationD() {
//   const [submittedGrants, setSubmittedGrants] = useState([]);
//   const navigate = useNavigate();

//   // Fetch data on component mount
//   useEffect(() => {
//     const fetchSubmittedGrants = async () => {
//       try {
//         const response = await axios.get('ApprovedApplications.php');
//         console.log('Response Data:', response.data); // Debugging response
//         const grants = Array.isArray(response.data) ? response.data : [];
//         setSubmittedGrants(grants);
//       } catch (error) {
//         console.error('Error fetching data:', error); // Handle fetch error
//       }
//     };

//     fetchSubmittedGrants();
//   }, []);

//   // Toggle select status for a grant
//   const handleToggleSelect = async (grantId) => {
//     try {
//       const grant = submittedGrants.find((g) => g.Id === grantId);
//       const newStatus = grant.selected ? '5.2' : '5.1';

//       await axios.post('ApplicationStatus_Granted.php', {
//         appId: grantId,
//         status: newStatus,
//       });

//       // Update state after successful status update
//       setSubmittedGrants((prevGrants) =>
//         prevGrants.map((grant) =>
//           grant.Id === grantId ? { ...grant, selected: !grant.selected } : grant
//         )
//       );
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   // Navigate to edit page
//   const handleEdit = (appId) => {
//     navigate('/editgrant', { state: { appId: appId } });
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Approved Applications</h1>
//       <Table
//         striped
//         bordered
//         hover
//         style={{ marginTop: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}
//       >
//         <thead>
//           <tr>
//             <th>Application Id</th>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>Reviewer 1</th>
//             <th>Reviewer 2</th>
//             <th>HOD</th>
//             <th>Dean</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submittedGrants.length > 0 ? (
//             submittedGrants.map((grant, index) => (
//               <tr key={index}>
//                 <td>{grant.Id}</td>
//                 <td>{grant.projectTitle}</td>
//                 <td>{grant.submittedDate}</td>
//                 <td>{grant.reviewer1_mark || 'Not Rated'}</td>
//                 <td>{grant.reviewer2_mark || 'Not Rated'}</td>
//                 <td>{grant.hod_decision || 'Not Decided'}</td>
//                 <td>{grant.dean_decision || 'Not Decided'}</td>
//                 <td>
//                   {console.log('Grant Status:', grant.Status)} {/* Debugging status */}
//                   {grant.Status === '5.1' ? (
//                     <button className="granted-button">Granted</button>
//                   ) : grant.Status === '5.2' ? (
//                     <button className="not-granted-button">Not Granted</button>
//                   ) : grant.Status === '3.1' ? (
//                     <button
//                       className="select-unselect-button"
//                       onClick={() => handleToggleSelect(grant.Id)}
//                     >
//                       {grant.selected ? 'Unselect' : 'Select'}
//                     </button>
//                   ) : (
//                     'No Action'
//                   )}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="8" style={{ textAlign: 'center' }}>
//                 No submitted grants found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap'; // Import Modal and Form
// import Navbar from '../../Components/Navbar';
// import Table from 'react-bootstrap/Table';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../Secretary/Table.css';

// export default function ShortlistedApplicationD() {
//   const [submittedGrants, setSubmittedGrants] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedGrant, setSelectedGrant] = useState(null);
//   const [startDate, setStartDate] = useState('');
//   const [period, setPeriod] = useState('');
//   const navigate = useNavigate();

//   // Fetch data on component mount
//   useEffect(() => {
//     const fetchSubmittedGrants = async () => {
//       try {
//         const response = await axios.get('ApprovedApplications.php');
//         setSubmittedGrants(Array.isArray(response.data) ? response.data : []);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchSubmittedGrants();
//   }, []);

//   const handleShowModal = (grant) => {
//     setSelectedGrant(grant);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setStartDate('');
//     setPeriod('');
//     setSelectedGrant(null);
//   };

//   const handleGrant = async () => {
//     if (!selectedGrant) return;

//     try {
//       await axios.post('ApplicationStatus_Granted.php', {
//         appId: selectedGrant.Id,
//         status: '5.1',
//         startDate,
//         period,
//       });

//       // Update state to reflect changes
//       setSubmittedGrants((prevGrants) =>
//         prevGrants.map((grant) =>
//           grant.Id === selectedGrant.Id ? { ...grant, Status: '5.1' } : grant
//         )
//       );

//       handleCloseModal(); // Close the modal after successful update
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Approved Applications</h1>
//       <Table
//         striped
//         bordered
//         hover
//         style={{ marginTop: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}
//       >
//         <thead>
//           <tr>
//             <th>Application Id</th>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>Reviewer 1</th>
//             <th>Reviewer 2</th>
//             <th>HOD</th>
//             <th>Dean</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//   {submittedGrants.length > 0 ? (
//     submittedGrants.map((grant, index) => (
//       <tr key={index}>
//         <td>{grant.Id}</td>
//         <td>{grant.projectTitle}</td>
//         <td>{grant.submittedDate}</td>
//         <td>{grant.reviewer1_mark || 'Not Rated'}</td>
//         <td>{grant.reviewer2_mark || 'Not Rated'}</td>
//         <td>{grant.hod_decision || 'Not Decided'}</td>
//         <td>{grant.dean_decision || 'Not Decided'}</td>
//         <td>
//           {grant.Status === '3.1' && (
//             <button
//               className="select-unselect-button"
//               onClick={() => handleShowModal(grant)}
//             >
//               Select
//             </button>
//           )}
//           {grant.Status === '5.1' && (
//             <button className="granted-button" disabled>
//               Granted
//             </button>
//           )}
//         </td>
//       </tr>
//     ))
//   ) : (
//     <tr>
//       <td colSpan="8" style={{ textAlign: 'center' }}>
//         No submitted grants found.
//       </td>
//     </tr>
//   )}
// </tbody>

//       </Table>

//       {/* Popup Modal */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Enter Grant Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group>
//               <Form.Label>Start Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Period</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={period}
//                 onChange={(e) => setPeriod(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleGrant}>
//             OK
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Navbar from '../../Components/Navbar';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import '../Secretary/Table.css';

export default function ShortlistedApplicationD() {
  const [submittedGrants, setSubmittedGrants] = useState([]);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showGrantModal, setShowGrantModal] = useState(false);
  const [selectedGrant, setSelectedGrant] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [period, setPeriod] = useState('');
  const [amount, setAmount] = useState('');
  const [decision, setDecision] = useState(null); // "Granted" or "Deny"

  // Fetch data on component mount
  useEffect(() => {
    const fetchSubmittedGrants = async () => {
      try {
        const response = await axios.get('ApprovedApplications.php');
        setSubmittedGrants(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSubmittedGrants();
  }, []);

  // Open the modal with the decision options
  const handleShowStatusModal = (grant) => {
    setSelectedGrant(grant);
    setShowStatusModal(true);
  };

  // Close the first modal
  const handleCloseStatusModal = () => {
    setShowStatusModal(false);
    setDecision(null);
  };

  // Show the second modal (Start Date and Period input)
  const handleGrantedClick = () => {
    setShowStatusModal(false); // Close first modal
    setShowGrantModal(true);   // Show the second modal
    setDecision('Granted');
  };

  // Handle Deny click
  const handleDenyClick = async () => {
    setShowStatusModal(false); // Close first modal
    await updateStatus('5.2');  // Denied status
  };

  const handleGrant = async () => {
    if (!selectedGrant) return;
  
    try {
      // Update the application status to "Granted"
      await updateStatus('5.1');
  
      // Prepare email details
      const emailData = {
        email: selectedGrant.email, // Ensure `selectedGrant` contains the applicant's email
        subject: 'Application Granted for Funding',
        message: `
          Dear ${selectedGrant.name},<br><br>
          We are pleased to inform you that your application titled <b>${selectedGrant.projectTitle}</b>
          has been approved for funding.<br>
          <b>Start Date:</b> ${startDate}<br>
          <b>Period:</b> ${period}<br>
          <b>Approved Amount:</b> LKR ${amount}<br><br>
          Best regards,<br>
          University of Peradeniya.
        `,
      };
  
      // Send email
      const emailResponse = await axios.post('Email.php', emailData);
  
      if (emailResponse.data.status === 'success') {
        alert('Email notification sent to the applicant.');
      } else {
        alert(`Error sending email: ${emailResponse.data.message}`);
      }
  
      // Close modal
      handleCloseGrantModal();
    } catch (error) {
      console.error('Error granting application or sending email:', error);
    }
  };
  

  // Update the status of the application (Granted or Denied)
  const updateStatus = async (status) => {
    try {
      // Send request to update the application status
      await axios.post('ApplicationStatus_Granted.php', {
        appId: selectedGrant.Id,
        status,
        startDate,
        period,
        amount,
      });

      // Update state to reflect changes
      setSubmittedGrants((prevGrants) =>
        prevGrants.map((grant) =>
          grant.Id === selectedGrant.Id ? { ...grant, Status: status } : grant
        )
      );

      handleCloseGrantModal(); // Close the second modal after successful update
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleCloseGrantModal = () => {
    setShowGrantModal(false);
    setStartDate('');
    setPeriod('');
    setAmount('');
    setSelectedGrant(null);
  };

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Approved Applications</h1>
      <Table striped bordered hover style={{ marginTop: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <thead>
          <tr>
            <th>Application Id</th>
            <th>Project Title</th>
            <th>Submitted Date</th>
            <th>Reviewer 1</th>
            <th>Reviewer 2</th>
            <th>HOD</th>
            <th>Dean</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {submittedGrants.length > 0 ? (
            submittedGrants.map((grant, index) => (
              <tr key={index}>
                <td>{grant.Id}</td>
                <td>{grant.projectTitle}</td>
                <td>{grant.submittedDate}</td>
                <td>{grant.reviewer1_mark || 'Not Rated'}</td>
                <td>{grant.reviewer2_mark || 'Not Rated'}</td>
                <td>{grant.hod_decision || 'Not Decided'}</td>
                <td>{grant.dean_decision || 'Not Decided'}</td>
                <td>
                  {grant.Status === '3.1' && (
                    <button className="select-unselect-button" onClick={() => handleShowStatusModal(grant)}>
                      Select
                    </button>
                  )}
                  {grant.Status === '5.1' && (
                    <button className="granted-button" disabled>
                      Granted
                    </button>
                  )}
                   {grant.Status === '5.2' && (
                    <button className="not-granted-button" disabled>
                      Deny
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center' }}>
                No submitted grants found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Status Selection Modal */}
      <Modal show={showStatusModal} onHide={handleCloseStatusModal}>
        <Modal.Header closeButton>
          <Modal.Title className='modaltitle'>Select Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="success" className='granted_deny' onClick={handleGrantedClick} >
            Granted
          </Button>
          <Button variant="danger" className ='granted_deny' onClick={handleDenyClick} >
            Deny
          </Button>
        </Modal.Body>
      </Modal>

      {/* Grant Details Modal */}
      <Modal show={showGrantModal} onHide={handleCloseGrantModal}>
        <Modal.Header closeButton>
          <Modal.Title className='modaltitle'>Enter Grant Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal'>
          <Form>
            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Period</Form.Label>
              <Form.Control
                type="text"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                placeholder='Ex: 2 Months / 2 Years'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Approved Amount (LKR) </Form.Label>
              <Form.Control
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseGrantModal}>
            Cancel
          </Button>
          <Button variant="primary" className=' Grant_Application' onClick={handleGrant}>
            Grant Application
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}



// import React, { useEffect, useState } from 'react';
// import Navbar from '../../Components/Navbar';
// import Table from 'react-bootstrap/Table';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../Secretary/Table.css';

// export default function ShortlistedApplicationD() {
//   const [submittedGrants, setSubmittedGrants] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSubmittedGrants = async () => {
//       try {
//         const response = await axios.get('ApprovedApplications.php');
//         console.log(response.data); // Add this line to log the response
//         const grants = Array.isArray(response.data) ? response.data : [];
//         setSubmittedGrants(grants);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
  
//     fetchSubmittedGrants();
//   }, []);
  

//   const handleToggleSelect = async (grantId) => {
//     try {
//       const grant = submittedGrants.find((g) => g.Id === grantId);
//       const newStatus = grant.selected ? '5.2' : '5.1';
  
//       // Make the API call to update the status
//       await axios.post('ApplicationStatus_Granted.php', {
//         appId: grantId,
//         status: newStatus,
//       });
  
//       // Update the state to reflect the change in status
//       setSubmittedGrants((prevGrants) =>
//         prevGrants.map((grant) =>
//           grant.Id === grantId ? { ...grant, selected: !grant.selected } : grant
//         )
//       );
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   const handleEdit = (appId) => {
//     navigate('/editgrant', { state: { appId: appId } });
//   };

//   const handleViewPDF = (grantId) => {
//     console.log(`View PDF for grant with ID: ${grantId}`);
//   };

//   return (
//     <div>
//       <Navbar />
//       <Table
//         striped
//         bordered
//         hover
//         style={{ marginTop: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}
//       >
//         <thead>
//           <tr>
//             <th>Application Id</th>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>Reviewer 1</th>
//             <th>Reviewer 2</th>
//             <th>HOD</th>
//             <th>Dean</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submittedGrants.length > 0 ? (
//             submittedGrants.map((grant, index) => (
//               <tr key={index}>
//                 <td>{grant.Id}</td>
//                 <td>{grant.projectTitle}</td>
//                 <td>{grant.submittedDate}</td>
//                 <td>{grant.reviewer1_mark || 'Not Rated'}</td>
//                 <td>{grant.reviewer2_mark || 'Not Rated'}</td>
//                 <td>{grant.hod_decision || 'Not Decided'}</td>
//                 <td>{grant.dean_decision || 'Not Decided'}</td>
//                 <td>
//                   {grant.Status === '5.1' ? (
//                     <button className="granted-button">Granted</button>
//                   ) : grant.Status === '5.2' ? (
//                     <button className="not-granted-button">Not Granted</button>
//                   ) : grant.Status === '3.1' ? (
//                     <button
//                       className="select-button"
//                       onClick={() => handleToggleSelect(grant.Id)}
//                     >
//                       {grant.selected ? 'Unselect' : 'Select'}
//                     </button>
//                   ) : null}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="8" style={{ textAlign: 'center' }}>
//                 No submitted grants found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
