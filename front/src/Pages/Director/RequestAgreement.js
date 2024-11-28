// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Navbar from '../../Components/Navbar';
// import '../Secretary/Table.css';

// export default function ViewApplication() {
//   const [applications] = useState([
//     // Dummy data for testing
//     { id: 1, userEmail: 'user1@example.com', projectTitle: 'Project One', submittedDate: '2024-08-30' },
//     { id: 2, userEmail: 'user2@example.com', projectTitle: 'Project Two', submittedDate: '2024-08-29' }
//   ]);
//   const [filteredApplications, setFilteredApplications] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [currentAppId, setCurrentAppId] = useState(null);

//   useEffect(() => {
//     setFilteredApplications(applications); // Initialize with all data
//   }, [applications]);

//   const handleUploadClick = (id) => {
//     setCurrentAppId(id);
//     setShowModal(true);
//   };

//   const handleRequestClick = (id) => {
//     console.log(`Request clicked for application ${id}`);
//   };

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleFileUpload = () => {
//     if (selectedFile) {
//       // Implement the file upload logic here, e.g., using FormData and an API call.
//       console.log(`Uploading ${selectedFile.name} for application ${currentAppId}`);
//       setShowModal(false); // Close the modal after uploading
//     } else {
//       alert("Please select a file first.");
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Request Agreements</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th colSpan={6} className="title">
//               <label htmlFor="status-select">All Completed Applications ( HOD / Dean / Reviewers)</label>
//             </th>
//           </tr>
//           <tr>
//             <th>User Email</th>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredApplications.map((app) => (
//             <tr key={app.id}>
//               <td>{app.userEmail}</td>
//               <td>{app.projectTitle}</td>
//               <td>{app.submittedDate}</td>
//               <td>
//                 <button 
//                   className="uploadRequest_button"
//                   onClick={() => handleUploadClick(app.id)}
//                 >
//                   Upload
//                 </button>
//                 <button 
//                   className="uploadRequest_button"
//                   onClick={() => handleRequestClick(app.id)}
//                 >
//                   Request
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Upload File</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <input type="file" onChange={handleFileChange} />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleFileUpload}>
//             Upload
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Navbar from '../../Components/Navbar';
// import '../Secretary/Table.css';

// export default function ViewApplication() {
//   const [applications, setApplications] = useState([]);
//   const [filteredApplications, setFilteredApplications] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [currentAppId, setCurrentAppId] = useState(null);

//   useEffect(() => {
//     // Fetch applications from the PHP script
//     fetchApplications();
//   }, []);

//   // Fetch data from the PHP backend
//   const fetchApplications = async () => {
//     try {
//       const response = await fetch('/RequestAgreement.php'); // Adjust path as needed
//       const data = await response.json();
//       setApplications(data); // Set the fetched data to the state
//       setFilteredApplications(data); // Optionally, filter data if needed
//     } catch (error) {
//       console.error('Error fetching applications:', error);
//     }
//   };

//   const handleUploadClick = (id) => {
//     setCurrentAppId(id);
//     setShowModal(true);
//   };

//   const handleRequestClick = (id) => {
//     console.log(`Request clicked for application ${id}`);
//   };

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleFileUpload = () => {
//     if (selectedFile) {
//       // Implement the file upload logic here, e.g., using FormData and an API call.
//       console.log(`Uploading ${selectedFile.name} for application ${currentAppId}`);
//       setShowModal(false); // Close the modal after uploading
//     } else {
//       alert("Please select a file first.");
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Request Agreements</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th colSpan={6} className="title">
//               <label htmlFor="status-select">All Completed Applications ( HOD / Dean / Reviewers)</label>
//             </th>
//           </tr>
//           <tr>
//             <th>Application ID</th>
//             <th>User Email</th>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredApplications.map((app) => (
//             <tr key={app.application_id}>
//               <td>{app.Id}</td>
//               <td>{app.email}</td>
//               <td>{app.projectTitle}</td>
//               <td>{app.submittedDate}</td>
//               <td>
//                 <button 
//                   className="uploadRequest_button"
//                   onClick={() => handleUploadClick(app.application_id)}
//                 >
//                   Upload
//                 </button>
//                 <button 
//                   className="uploadRequest_button"
//                   onClick={() => handleRequestClick(app.application_id)}
//                 >
//                   Request
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Upload File</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <input type="file" onChange={handleFileChange} />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleFileUpload}>
//             Upload
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Navbar from '../../Components/Navbar';
// import '../Secretary/Table.css';

// export default function ViewApplication() {
//   const [applications, setApplications] = useState([]);
//   const [filteredApplications, setFilteredApplications] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [currentAppId, setCurrentAppId] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   useEffect(() => {
//     // Fetch applications from the PHP script
//     fetchApplications();
//   }, []);

//   // Fetch data from the PHP backend
//   const fetchApplications = async () => {
//     try {
//       const response = await fetch('/RequestAgreement.php'); // Adjust path as needed
//       const data = await response.json();
//       setApplications(data); // Set the fetched data to the state
//       setFilteredApplications(data); // Optionally, filter data if needed
//     } catch (error) {
//       console.error('Error fetching applications:', error);
//     }
//   };

//   const handleUploadClick = (id) => {
//     setCurrentAppId(id);
//     setShowModal(true);
//   };

  // const handleRequestClick = (id) => {
  //   console.log(`Request clicked for application ${id}`);
  // };

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };
//   const handleFileUpload = async () => {
//     if (selectedFile) {
//       setUploading(true);
//       const formData = new FormData();
//       formData.append('app_ID', currentAppId); // Ensure currentAppId is the actual application ID
//       formData.append('uploadedFile', selectedFile);
  
//       try {
//         const response = await fetch('/RequestAgreement.php', { // Adjust to your PHP script path
//           method: 'POST',
//           body: formData,
//         });
  
//         const result = await response.json();
  
//         if (result.status === 'success') {
//           alert(result.message);
//           setShowModal(false);
//           fetchApplications(); // Refresh application data
//         } else {
//           alert(result.message);
//         }
//       } catch (error) {
//         console.error('Error uploading file:', error);
//         alert('An error occurred while uploading the file.');
//       } finally {
//         setUploading(false);
//       }
//     } else {
//       alert("Please select a file first.");
//     }
//   };
  
  

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Request Agreements</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th colSpan={6} className="title">
//               <label htmlFor="status-select">All Completed Applications ( HOD / Dean / Reviewers)</label>
//             </th>
//           </tr>
//           <tr>
//             <th>Application ID</th>
//             <th>User Email</th>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredApplications.map((app) => (
//             <tr key={app.application_id}>
//               <td>{app.Id}</td>
//               <td>{app.email}</td>
//               <td>{app.projectTitle}</td>
//               <td>{app.submittedDate}</td>
//               <td>
//                 <button 
//                   className="uploadRequest_button"
//                   onClick={() => handleUploadClick(app.application_id)}
//                 >
//                   Upload
//                 </button>
//                 <button 
//                   className="uploadRequest_button"
//                   onClick={() => handleRequestClick(app.application_id)}
//                 >
//                   Request
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Upload File</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <input type="file" onChange={handleFileChange} />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button 
//             variant="primary" 
//             onClick={handleFileUpload}
//             disabled={uploading} // Disable button while uploading
//           >
//             {uploading ? 'Uploading...' : 'Upload'}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Navbar from '../../Components/Navbar';
import '../Secretary/Table.css';
import axios from 'axios';

export default function ViewApplication() {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentAppId, setCurrentAppId] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    // Fetch applications from the PHP script
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
        // Use axios for a GET request
        const response = await axios.get('/RequestAgreement.php');

        // Set the fetched data to state variables
        setApplications(response.data); 
        setFilteredApplications(response.data); 
    } catch (error) {
        console.error('Error fetching applications:', error);
    }
};

  const handleUploadClick = (id) => {
    setCurrentAppId(id); // Set the current application ID
    setShowModal(true); // Open the modal
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Store the selected file
  };
  const handleRequestClick = (id) => {
    console.log(`Request clicked for application ${id}`);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
        setUploading(true); // Start uploading
        const formData = new FormData();
        formData.append('app_ID', currentAppId); // Attach the app_ID
        formData.append('uploadedFile', selectedFile); // Attach the file

        try {
            // Use axios to post the form data to the server
            const response = await axios.post('/RequestAgreement.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Important to set this for file uploads
                },
            });

            // Handle the response from the server
            if (response.data.status === 'success') {
                alert(response.data.message);
                setShowModal(false); // Close the modal
                fetchApplications(); // Refresh the list of applications
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('An error occurred while uploading the file.');
        } finally {
            setUploading(false); // Stop uploading
        }
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
              <label htmlFor="status-select">All Completed Applications</label>
            </th>
          </tr>
          <tr>
            <th>Application ID</th>
            <th>User Email</th>
            <th>Project Title</th>
            <th>Submitted Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  {filteredApplications.map((app, index) => (
    <tr key={app.Id || index}>
      <td>{app.Id}</td>
      <td>{app.email}</td>
      <td>{app.projectTitle}</td>
      <td>{app.submittedDate}</td>
      <td>
        <button 
          className="uploadRequest_button"
          onClick={() => handleUploadClick(app.Id)}
        >
          Upload
        </button>
        <button 
          className="uploadRequest_button"               
          onClick={() => handleRequestClick(app.Id)}
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
          <Button 
            variant="primary" 
            onClick={handleFileUpload}
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
