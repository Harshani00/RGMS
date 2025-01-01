

// import React, { useEffect, useState } from 'react';
// import Navbar from '../../Components/Navbar';
// import Table from 'react-bootstrap/Table';
// import axios from 'axios';
// import './SubmittedGrant.css'


// export default function SubmittedGrant() {
//   const [submittedGrants, setSubmittedGrants] = useState([]);

//   useEffect(() => {
//     const fetchSubmittedGrants = async () => {
//       try {
//         const response = await axios.get('/SubmittedGrants.php');
//         if (Array.isArray(response.data)) {
//           setSubmittedGrants(response.data);
//         } else {
//           console.error('Expected an array but received:', response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching submitted grants:', error);
//       }
//     };

//     fetchSubmittedGrants();
//   }, []);

//   const handleEdit = (grantId) => {
//     // Logic for handling the edit action
//     console.log(`Edit grant with ID: ${grantId}`);
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
//             <th>Application Id</th>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>Status</th>
//             <th>Grant (Pdf)</th>
//             <th>Agreements</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submittedGrants.length > 0 ? (
//             submittedGrants.map((grant, index) => (
//               <tr key={`${grant.pID}-${index}`}>
//                 <td>{grant.Id}</td>
//                 <td>{grant.projectTitle}</td>
//                 <td>{new Date().toLocaleDateString()}</td> {/* Placeholder for submitted date */}
//                 <td>
//                   {/* Show status and "Edit" button if status is "Save" */}
//                   {grant.Status === 'Save' ? (
//                     <>
//                       <span>{grant.Status}</span>
//                       <button className=' Edit_Button'
//                         onClick={() => handleEdit(grant.Id)}
                       
//                       >
//                         Edit
//                       </button>
//                     </>
//                   ) : (
//                     <span>{grant.Status}</span>
//                   )}
//                 </td>
//                 <td>
//                   {/* Show "Not Available" if status is "Save", else show "View PDF" button */}
//                   {grant.Status === 'Save' ? (
//                     <span>Not Available</span>
//                   ) : (
//                     <button onClick={() => handleViewPDF(grant.Id)} className=' View_Button'>View</button>
//                   )}
//                 </td>
//                 <td>Not Available</td> {/* Placeholder for Agreements */}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" style={{ textAlign: 'center' }}>
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
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './SubmittedGrant.css';

// export default function SubmittedGrant() {
//   const [submittedGrants, setSubmittedGrants] = useState([]);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   useEffect(() => {
//     const fetchSubmittedGrants = async () => {
//       try {
//         const response = await axios.get('/SubmittedGrants.php');
//         if (Array.isArray(response.data)) {
//           setSubmittedGrants(response.data);
//         } else {
//           console.error('Expected an array but received:', response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching submitted grants:', error);
//       }
//     };

//     fetchSubmittedGrants();
//   }, []);

//   const handleEdit = (appId) => {
//     // Navigate to the edit-grant page and pass the appId as state
//     navigate('/editgrant', { state: { appId: appId } });
//   //ass app_ID as a URL parameter i
//   //navigate(`/editgrant/${appId}`);

//   };

//   const handleViewPDF = (grantId) => {
//     // Logic for handling viewing the PDF
//     console.log(`View PDF for grant with ID: ${grantId}`);
//   };

  // const handleDownloadAgreement = (grantId) => {
  //   // Logic for downloading the agreement
  //   console.log(`Download agreement for grant with ID: ${grantId}`);
  //   // Example: Trigger a download from the server
  //   window.location.href = `/downloadAgreement.php?grantId=${grantId}`;
  // };
  
//   const handleUploadAgreement = (grantId) => {
//     // Logic for uploading the agreement
//     console.log(`Upload agreement for grant with ID: ${grantId}`);
//     navigate('/uploadagreement', { state: { grantId: grantId } });
//   };
  
//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Submitted Grants</h1>
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
//             <th>Status</th>
//             <th>Grant (Pdf)</th>
//             <th>Agreements</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submittedGrants.length > 0 ? (
//             submittedGrants.map((grant, index) => (
//               <tr key={`${grant.pID}-${index}`}>
//                 <td>{grant.Id}</td>
//                 <td>{grant.projectTitle}</td>
//                 <td>{grant.submittedDate}</td>
//                 <td>
//                   {grant.Status === 'Save' ? (
//                     <>
//                       <span>{grant.Status}</span>
//                       <button
//                         className="Edit_Button"
//                         onClick={() => handleEdit(grant.Id)}
//                       >
//                         Edit
//                       </button>
//                     </>
//                   ) : (
//                     <span>{grant.Status}</span>
//                   )}
//                 </td>
//                 <td>
//                   {grant.Status === 'Save' ? (
//                     <span>Not Available</span>
//                   ) : (
//                     <button
//                       onClick={() => handleViewPDF(grant.Id)}
//                       className="View_Button"
//                     >
//                       View
//                     </button>
//                   )}
//                 </td>
//                 <td>
                  // <button
                  //   className="DownloadUpload_Button"
                  //   onClick={() => handleDownloadAgreement(grant.Id)}
                  // >
                  //   Download
                  // </button>
//                   <button
//                     className="DownloadUpload_Button"
//                     onClick={() => handleUploadAgreement(grant.Id)}
//                   >
//                     Upload
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" style={{ textAlign: 'center' }}>
//                 No submitted grants found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
  
// }
import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SubmittedGrant.css';

export default function SubmittedGrant() {
  const [submittedGrants, setSubmittedGrants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentGrantId, setCurrentGrantId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubmittedGrants = async () => {
      try {
        const response = await axios.get('/SubmittedGrants.php');
        if (Array.isArray(response.data)) {
          setSubmittedGrants(response.data);
        } else {
          console.error('Expected an array but received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching submitted grants:', error);
      }
    };

    fetchSubmittedGrants();
  }, []);

  const handleUploadAgreement = (grantId) => {
    setCurrentGrantId(grantId); // Set the grant ID for the modal
    setShowModal(true); // Show the modal
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Set the selected file
  };
  
  const handleDownloadAgreement = (grantId) => {
    console.log(`Download agreement for grant with ID: ${grantId}`);
    
    // Trigger a GET request to fetch the agreement file
    axios
      .get(`/SubmittedGrants.php?grantId=${grantId}`, {
        responseType: 'blob', // Ensure we receive the file as a blob
      })
      .then((response) => {
        // Create a link element to trigger the download
        const link = document.createElement('a');
        const blob = new Blob([response.data], { type: 'application/pdf' });
        link.href = URL.createObjectURL(blob);
        link.download = `${grantId}_Agreement.pdf`; // Set the file name
        link.click();
  
        // Clean up the object URL
        URL.revokeObjectURL(link.href);
      })
      .catch((error) => {
        console.error('Error downloading agreement:', error);
        alert('An error occurred while downloading the agreement.');
      });
  };
  
  
  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('grantId', currentGrantId);

    try {
      const response = await axios.post('/SubmittedGrants.php', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        alert('File uploaded successfully!');
      } else {
        alert('File upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the file.');
    } finally {
      setShowModal(false); // Close the modal
      setSelectedFile(null); // Reset the file input
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Submitted Grants</h1>
      <Table
        striped
        bordered
        hover
        style={{ marginTop: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}
      >
        <thead>
          <tr>
            <th>Application Id</th>
            <th>Project Title</th>
            <th>Submitted Date</th>
            <th>Status</th>
            <th>Grant (Pdf)</th>
            <th>Agreements</th>
          </tr>
        </thead>
        {/* <tbody>
          {submittedGrants.length > 0 ? (
            submittedGrants.map((grant, index) => (
              <tr key={`${grant.pID}-${index}`}>
                <td>{grant.Id}</td>
                <td>{grant.projectTitle}</td>
                <td>{grant.submittedDate}</td>
                <td>
                  {grant.Status === 'Save' ? (
                    <>
                      <span>{grant.Status}</span>
                      <button
                        className="Edit_Button"
                        onClick={() => navigate('/editgrant', { state: { appId: grant.Id } })}
                      >
                        Edit
                      </button>
                    </>
                  ) : (
                    <span>{grant.Status}</span>
                  )}
                </td>
                <td>
                  {grant.Status === 'Save' ? (
                    <span>Not Available</span>
                  ) : (
                    <button
                      onClick={() => console.log(`View PDF for grant ${grant.Id}`)}
                      className="View_Button"
                    >
                      View
                    </button>
                  )}
                </td>
                <td>
  <button
    className="DownloadUpload_Button"
    onClick={() => handleDownloadAgreement(grant.Id)}
  >
    Download
  </button>
  <button
    className="DownloadUpload_Button"
    onClick={() => handleUploadAgreement(grant.Id)}
  >
    Upload
  </button>
</td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>
                No submitted grants found.
              </td>
            </tr>
          )}
        </tbody> */}
        <tbody>
  {submittedGrants.length > 0 ? (
    submittedGrants.map((grant, index) => (
      <tr key={`${grant.pID}-${index}`}>
        <td>{grant.Id}</td>
        <td>{grant.projectTitle}</td>
        <td>{grant.submittedDate}</td>
        <td>
          {grant.Status === 'Save' ? (
            <>
              <span>{grant.Status}</span>
              <button
                className="Edit_Button"
                onClick={() => navigate('/editgrant', { state: { appId: grant.Id } })}
              >
                Edit
              </button>
            </>
          ) : (
            <span>{grant.Status}</span>
          )}
        </td>
        <td>
          {grant.Status === 'Save' ? (
            <span>Not Available</span>
          ) : (
            <button
              onClick={() => console.log(`View PDF for grant ${grant.Id}`)}
              className="View_Button"
            >
              View
            </button>
          )}
        </td>
        <td>
          {grant.hasAgreement ? (
            <>
              <button
                className="DownloadUpload_Button"
                onClick={() => handleDownloadAgreement(grant.Id)}
              >
                Download
              </button>
              <button
                className="DownloadUpload_Button"
                onClick={() => handleUploadAgreement(grant.Id)}
              >
                Upload
              </button>
            </>
          ) : (
            <span>Not Available</span>
          )}
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6" style={{ textAlign: 'center' }}>
        No submitted grants found.
      </td>
    </tr>
  )}
</tbody>
      </Table>

      {/* Modal for Uploading File */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Agreement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFile">
              <Form.Label>Select File</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" className='modalupdatebutton' onClick={handleFileUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
// import React, { useEffect, useState } from 'react';
// import Navbar from '../../Components/Navbar';
// import Table from 'react-bootstrap/Table';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './SubmittedGrant.css';

// export default function SubmittedGrant() {
//   const [submittedGrants, setSubmittedGrants] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [currentGrantId, setCurrentGrantId] = useState(null);
//   const [agreementRecords, setAgreementRecords] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSubmittedGrants = async () => {
//       try {
//         const response = await axios.get('/SubmittedGrants.php');
//         if (Array.isArray(response.data)) {
//           setSubmittedGrants(response.data);
//         } else {
//           console.error('Expected an array but received:', response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching submitted grants:', error);
//       }
//     };

//     const checkAgreementStatus = async () => {
//       try {
//         const results = await Promise.all(
//           submittedGrants.map(async (grant) => {
//             const response = await axios.post('/SubmittedGrants.php', {
//               action: 'checkAgreement',
//               grantId: grant.Id,
//             });
//             return {
//               grantId: grant.Id,
//               exists: response.data.exists,
//             };
//           })
//         );

//         const agreementStatus = {};
//         results.forEach((result) => {
//           agreementStatus[result.grantId] = result.exists;
//         });

//         setAgreementRecords(agreementStatus);
//       } catch (error) {
//         console.error('Error checking agreement status:', error);
//       }
//     };

//     fetchSubmittedGrants();
//     checkAgreementStatus();
//   }, []);

//   const handleUploadAgreement = (grantId) => {
//     setCurrentGrantId(grantId); // Set the grant ID for the modal
//     setShowModal(true); // Show the modal
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]); // Set the selected file
//   };

//   const handleDownloadAgreement = (grantId) => {
//     console.log(`Download agreement for grant with ID: ${grantId}`);

//     // Trigger a GET request to fetch the agreement file
//     axios
//       .get(`/SubmittedGrants.php?grantId=${grantId}`, {
//         responseType: 'blob', // Ensure we receive the file as a blob
//       })
//       .then((response) => {
//         // Create a link element to trigger the download
//         const link = document.createElement('a');
//         const blob = new Blob([response.data], { type: 'application/pdf' });
//         link.href = URL.createObjectURL(blob);
//         link.download = `${grantId}_Agreement.pdf`; // Set the file name
//         link.click();

//         // Clean up the object URL
//         URL.revokeObjectURL(link.href);
//       })
//       .catch((error) => {
//         console.error('Error downloading agreement:', error);
//         alert('An error occurred while downloading the agreement.');
//       });
//   };

//   const handleFileUpload = async () => {
//     if (!selectedFile) {
//       alert('Please select a file to upload.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', selectedFile);
//     formData.append('grantId', currentGrantId);

//     try {
//       const response = await axios.post('/SubmittedGrants.php', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       if (response.data.success) {
//         alert('File uploaded successfully!');
//       } else {
//         alert('File upload failed.');
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       alert('An error occurred while uploading the file.');
//     } finally {
//       setShowModal(false); // Close the modal
//       setSelectedFile(null); // Reset the file input
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Submitted Grants</h1>
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
//             <th>Status</th>
//             <th>Grant (Pdf)</th>
//             <th>Agreements</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submittedGrants.length > 0 ? (
//             submittedGrants.map((grant, index) => (
//               <tr key={`${grant.pID}-${index}`}>
//                 <td>{grant.Id}</td>
//                 <td>{grant.projectTitle}</td>
//                 <td>{grant.submittedDate}</td>
//                 <td>
//                   {grant.Status === 'Save' ? (
//                     <>
//                       <span>{grant.Status}</span>
//                       <button
//                         className="Edit_Button"
//                         onClick={() => navigate('/editgrant', { state: { appId: grant.Id } })}
//                       >
//                         Edit
//                       </button>
//                     </>
//                   ) : (
//                     <span>{grant.Status}</span>
//                   )}
//                 </td>
//                 <td>
//                   {grant.Status === 'Save' ? (
//                     <span>Not Available</span>
//                   ) : (
//                     <button
//                       onClick={() => console.log(`View PDF for grant ${grant.Id}`)}
//                       className="View_Button"
//                     >
//                       View
//                     </button>
//                   )}
//                 </td>
//                 <td>
//                   {agreementRecords[grant.Id] ? (
//                     <>
//                       <button
//                         className="DownloadUpload_Button"
//                         onClick={() => handleDownloadAgreement(grant.Id)}
//                       >
//                         Download
//                       </button>
//                       <button
//                         className="DownloadUpload_Button"
//                         onClick={() => handleUploadAgreement(grant.Id)}
//                       >
//                         Upload
//                       </button>
//                     </>
//                   ) : (
//                     <span>Not Available</span>
//                   )}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" style={{ textAlign: 'center' }}>
//                 No submitted grants found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>

//       {/* Modal for Uploading File */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Upload Agreement</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formFile">
//               <Form.Label>Select File</Form.Label>
//               <Form.Control type="file" onChange={handleFileChange} />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="primary" className="modalupdatebutton" onClick={handleFileUpload}>
//             Upload
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
