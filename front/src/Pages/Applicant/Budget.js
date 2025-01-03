// import React from 'react';
// import { useDropzone } from 'react-dropzone';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './Budget.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';

// const DragAndDropBox = () => {
//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: acceptedFiles => {
//       console.log(acceptedFiles);
//     }
//   });

//   return (
//     <div>
//       <Navbar />
//       <div className="label-container1">
//         <Form.Label>1. Upload Previous Budget Revision</Form.Label>
//       </div>
//       <div className="dropzone-container" {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag & drop some file here, or click to select file</p>
//         <p>File Type:pdf</p>
//         <Button variant="primary">Browse Files</Button>
//       </div>

//       <div className="label-container">
//         <Form.Label>2. Upload Current Budget Revision</Form.Label>
//       </div>
//       <div className="dropzone-container" {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag & drop additional file here, or click to select file</p>
//         <p>File Type:pdf</p>
//         <Button variant="primary">Browse Files</Button>
//       </div>
//     </div>
//   );
// };

// export default DragAndDropBox;
// import React from 'react';
// import { useDropzone } from 'react-dropzone';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './Budget.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';

// const DragAndDropBox = () => {
//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'application/pdf', // Accept only PDF files
//     onDrop: acceptedFiles => {
//       // Handle the uploaded files here
//       acceptedFiles.forEach(file => {
//         console.log(file);
//         // Implement file upload logic here if needed
//       });
//     }
//   });

//   return (
//     <div>
//       <Navbar />
//       <div className="label-container1">
//         <Form.Label>1. Upload Previous Budget Revision</Form.Label>
//       </div>
//       <div className="dropzone-container" {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag & drop some file here, or click to select file</p>
//         <p>File Type:pdf</p>
//         <Button variant="primary">Browse Files</Button>
//       </div>

//       <div className="label-container">
//         <Form.Label>2. Upload Current Budget Revision</Form.Label>
//       </div>
//       <div className="dropzone-container" {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag & drop additional file here, or click to select file</p>
//         <p>File Type:pdf</p>
//         <Button variant="primary">Browse Files</Button>
//       </div>
//     </div>
//   );
// };

// export default DragAndDropBox;
// import React from 'react';
// import { useDropzone } from 'react-dropzone';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';


// function DragAndDrop() {
//   const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   return (
//     <Card className="text-center" style={{ padding: '20px', border: '2px dashed #007bff' }}>
//       <div {...getRootProps({ className: 'dropzone' })} style={{ padding: '20px' }}>
//         <input {...getInputProps()} />
//         <p>Drag & drop some files here, or click to select files</p>
//         <Button variant="primary">Browse Files</Button>
//       </div>
//       <aside>
//         <h6>Files:</h6>
//         <ul>{files}</ul>
//       </aside>
//     </Card>
//   );
// }

// export default DragAndDrop;

// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './UploadFiles.css'; // Import the CSS file
// import Navbar from '../../Components/Navbar'; 
// import axios from 'axios'; // Import axios for HTTP requests

// function Budget() {
//   const [acceptedFiles1, setAcceptedFiles1] = useState([]);
//   const [acceptedFiles2, setAcceptedFiles2] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const { getRootProps: getRootProps1, getInputProps: getInputProps1 } = useDropzone({
//     onDrop: acceptedFiles => setAcceptedFiles1(acceptedFiles),
//   });

//   const { getRootProps: getRootProps2, getInputProps: getInputProps2 } = useDropzone({
//     onDrop: acceptedFiles => setAcceptedFiles2(acceptedFiles),
//   });

//   const validateFiles = () => {
//     const newErrors = {};
//     if (acceptedFiles1.length === 0) newErrors.PreviousBudget = 'Previous Budget Revision file is required';
//     if (acceptedFiles2.length === 0) newErrors.CurrentBudget = 'Current Budget Revision file is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateFiles();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     const formData = new FormData();
//     acceptedFiles1.forEach(file => formData.append('PreviousBudget', file));
//     acceptedFiles2.forEach(file => formData.append('CurrentBudget', file));

//     try {
//       const response = await axios.post('/Budget.php', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Success:', response.data);
//       setSubmitted(true);
//       alert('Files uploaded successfully!');

//       // Clear the form after successful submission
//       setAcceptedFiles1([]);
//       setAcceptedFiles2([]);
//       setErrors({});
//       setSubmitted(false); // Optionally reset the submitted state
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error uploading files.');
//     }
//   };

//   return (
//     <div>
//       <Navbar />
      // <div className="label-container1">
      //   <Form.Label>1. Upload Previous Budget</Form.Label>
      //   {errors.PreviousBudget && <p className="error">{errors.PreviousBudget}</p>}
      // </div>
      // <Card className="dropzone-container">
      //   <div {...getRootProps1({ className: 'dropzone' })}>
      //     <input {...getInputProps1()} />
      //     <p>Drag & drop some files here, or click to select files</p>
      //     <p>Rename Your File Name to ProjectTitle_PerviousBudget</p>
      //     <Button variant="primary" className='browsefiles'>Browse Files</Button>
      //   </div>
      //   <aside>
      //     <h6>Files:</h6>
      //     <ul>
      //       {acceptedFiles1.map(file => (
      //         <li key={file.path}>{file.path} - {file.size} bytes</li>
      //       ))}
      //     </ul>
      //   </aside>
      // </Card>

      // <div className="label-container2">
      //   <Form.Label>2. Upload Current Budget</Form.Label>
      //   {errors.CurrentBudget && <p className="error">{errors.CurrentBudget}</p>}
      // </div>
      // <Card className="dropzone-container">
      //   <div {...getRootProps2({ className: 'dropzone' })}>
      //     <input {...getInputProps2()} />
      //     <p>Drag & drop some files here, or click to select files</p>
      //     <p>Rename Your File Name to ProjectTitle_CurrentBudget</p>
      //     <Button variant="primary">Browse Files</Button>
      //   </div>
      //   <aside>
      //     <h6>Files:</h6>
      //     <ul>
      //       {acceptedFiles2.map(file => (
      //         <li key={file.path}>{file.path} - {file.size} bytes</li>
      //       ))}
      //     </ul>
      //   </aside>
      // </Card>

//       <div>
//         <Button variant="success" onClick={handleSubmit} className='submitbutton'>Submit</Button>
//       </div>
//     </div>
//   );
// }

// export default Budget;
// import React, { useState, useEffect } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import Navbar from '../../Components/Navbar'; 
// import './UploadFiles.css'; // Import the CSS file

// function Budget() {
//   const [appIds, setAppIds] = useState([]);
//   const [selectedAppId, setSelectedAppId] = useState("");
//   const [acceptedFiles1, setAcceptedFiles1] = useState([]);
//   const [acceptedFiles2, setAcceptedFiles2] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     // Fetch app_IDs for the user
//     axios.get('/GetApplicationID.php')
//       .then(response => {
//         // Check if the response data is an array
//         if (Array.isArray(response.data)) {
//           setAppIds(response.data);
//           setSelectedAppId(response.data[0] || ""); // Default to the first app_ID if available
//         } else {
//           console.error('Invalid data format, expected an array');
//         }
//       })
//       .catch(error => console.error('Error fetching app_IDs:', error));
//   }, []);

//   const { getRootProps: getRootProps1, getInputProps: getInputProps1 } = useDropzone({
//     onDrop: acceptedFiles => setAcceptedFiles1(acceptedFiles),
//   });

//   const { getRootProps: getRootProps2, getInputProps: getInputProps2 } = useDropzone({
//     onDrop: acceptedFiles => setAcceptedFiles2(acceptedFiles),
//   });

//   const validateFiles = () => {
//     const newErrors = {};
//     if (!selectedAppId) newErrors.appId = 'Please select an application ID';
//     if (acceptedFiles1.length === 0) newErrors.PreviousBudget = 'Previous Budget Revision file is required';
//     if (acceptedFiles2.length === 0) newErrors.CurrentBudget = 'Current Budget Revision file is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateFiles();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     // const formData = new FormData();
//     // formData.append('app_ID', selectedAppId); // Include selected app_ID
//     // acceptedFiles1.forEach(file => formData.append('PreviousBudget', file));
//     // acceptedFiles2.forEach(file => formData.append('CurrentBudget', file));

//     const formData = new FormData();
//     formData.append('app_ID', selectedAppId);
//     console.log("Sending app_ID:", selectedAppId); // Debugging line
//     acceptedFiles1.forEach(file => formData.append('PreviousBudget', file));
//     acceptedFiles2.forEach(file => formData.append('CurrentBudget', file));     

//     try {
//       const response = await axios.post('/Budget.php', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Success:', response.data);
//       setSubmitted(true);
//       alert('Files uploaded successfully!');

//       // Clear the form after successful submission
//       setAcceptedFiles1([]);
//       setAcceptedFiles2([]);
//       setErrors({});
//       setSubmitted(false);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error uploading files.');
//     }
//   };

//   return (
//     <div>
//        <Navbar />
//       <h2>Budget Revision Upload</h2>
     
//       <Form.Group controlId="appIdSelect">
//   <Form.Label>Select Application ID</Form.Label>
//   {errors.appId && <p className="error">{errors.appId}</p>}
//   <Form.Control
//     className="appid_dropdwon"
//     as="select"
//     value={selectedAppId}
//     onChange={(e) => setSelectedAppId(e.target.value)}
//   >
//     <option value="">-- Select Application ID --</option>
//     {Array.isArray(appIds) && appIds.length > 0 ? (
//       appIds.map((appId) => (
//         <option key={appId} value={appId}>
//           {appId}
//         </option>
//       ))
//     ) : (
//       <option>No Application IDs available</option>
//     )}
//   </Form.Control>
// </Form.Group>


//       <div className="label-container1">
//         <Form.Label>1. Upload Previous Budget</Form.Label>
//         {errors.PreviousBudget && <p className="error">{errors.PreviousBudget}</p>}
//       </div>
//       <Card className="dropzone-container">
//         <div {...getRootProps1({ className: 'dropzone' })}>
//           <input {...getInputProps1()} />
//           <p>Drag & drop some files here, or click to select files</p>
//           <p>Rename Your File Name to ProjectTitle_PerviousBudget</p>
//           <Button variant="primary" className='browsefiles'>Browse Files</Button>
//         </div>
//         <aside>
//           <h6>Files:</h6>
//           <ul>
//             {acceptedFiles1.map(file => (
//               <li key={file.path}>{file.path} - {file.size} bytes</li>
//             ))}
//           </ul>
//         </aside>
//       </Card>

//       <div className="label-container2">
//         <Form.Label>2. Upload Current Budget</Form.Label>
//         {errors.CurrentBudget && <p className="error">{errors.CurrentBudget}</p>}
//       </div>
//       <Card className="dropzone-container">
//         <div {...getRootProps2({ className: 'dropzone' })}>
//           <input {...getInputProps2()} />
//           <p>Drag & drop some files here, or click to select files</p>
//           <p>Rename Your File Name to ProjectTitle_CurrentBudget</p>
//           <Button variant="primary">Browse Files</Button>
//         </div>
//         <aside>
//           <h6>Files:</h6>
//           <ul>
//             {acceptedFiles2.map(file => (
//               <li key={file.path}>{file.path} - {file.size} bytes</li>
//             ))}
//           </ul>
//         </aside>
//       </Card>

//       <Button variant="success" onClick={handleSubmit} className='submitbutton '>Submit</Button>
//     </div>
//   );
// }

// export default Budget;
// import React, { useState, useEffect } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import Navbar from '../../Components/Navbar'; 
// import './UploadFiles.css';

// function Budget() {
//   const [appData, setAppData] = useState([]);
//   const [selectedAppId, setSelectedAppId] = useState("");
//   const [selectedProjectTitle, setSelectedProjectTitle] = useState("");
//   const [acceptedFiles1, setAcceptedFiles1] = useState([]);
//   const [acceptedFiles2, setAcceptedFiles2] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     // Fetch app_IDs and project titles for the user
//     axios.get('/GetApplicationID.php')
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           setAppData(response.data);
//         } else {
//           console.error('Invalid data format, expected an array');
//         }
//       })
//       .catch(error => console.error('Error fetching app_IDs and project titles:', error));
//   }, []);

//   const { getRootProps: getRootProps1, getInputProps: getInputProps1 } = useDropzone({
//     onDrop: acceptedFiles => setAcceptedFiles1(acceptedFiles),
//   });

//   const { getRootProps: getRootProps2, getInputProps: getInputProps2 } = useDropzone({
//     onDrop: acceptedFiles => setAcceptedFiles2(acceptedFiles),
//   });

//   const validateFiles = () => {
//     const newErrors = {};
//     if (!selectedAppId) newErrors.appId = 'Please select an application ID';
//     if (acceptedFiles1.length === 0) newErrors.PreviousBudget = 'Previous Budget Revision file is required';
//     if (acceptedFiles2.length === 0) newErrors.CurrentBudget = 'Current Budget Revision file is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateFiles();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     const formData = new FormData();
//     formData.append('app_ID', selectedAppId);
//     formData.append('project_title', selectedProjectTitle); // Append the selected project title
//     acceptedFiles1.forEach(file => formData.append('PreviousBudget', file));
//     acceptedFiles2.forEach(file => formData.append('CurrentBudget', file));

//     try {
//       const response = await axios.post('/Budget.php', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Success:', response.data);
//       setSubmitted(true);
//       alert('Files uploaded successfully!');

//       // Clear the form after successful submission
   
//       setSelectedAppId("");
//       setSelectedProjectTitle("");
//       setAcceptedFiles1([]);
//       setAcceptedFiles2([]);
//       setErrors({});

//       setSubmitted(false);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error uploading files.');
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <label className='uploadtitle'>Upload Previous and Current Budget Here 👇</label>

//       <Form.Group controlId="appIdSelect">
//         <Form.Label className='selecttitle'>Select Application ID:</Form.Label>
//         {errors.appId && <p className="error">{errors.appId}</p>}
//         <Form.Control
//           className="appid_dropdown"
//           as="select"
//           value={selectedAppId}
//           onChange={(e) => setSelectedAppId(e.target.value)}
//         >
//           <option value="">-- Select Application ID --</option>
//           {appData.map((item) => (
//             <option key={item.app_ID} value={item.app_ID}>
//               {item.app_ID}
//             </option>
//           ))}
//         </Form.Control>
//       </Form.Group>

//       <Form.Group controlId="projectTitleSelect">
//   <Form.Label className='selecttitle'>Select Project Title:</Form.Label>
//   <Form.Control
//     className="project_dropdown"
//     as="select"
//     value={selectedProjectTitle}
//     onChange={(e) => setSelectedProjectTitle(e.target.value)}
//   >
//     <option value="">-- Select Project Title --</option>
//     {appData.map((item) => (
//       <option key={item.app_ID} value={item.projectTitle}>
//         {item.projectTitle}
//       </option>
//     ))}
//   </Form.Control>
// </Form.Group>


//       <div className="label-container1">
//         <Form.Label>1. Upload Previous Budget</Form.Label>
//         {errors.PreviousBudget && <p className="error">{errors.PreviousBudget}</p>}
//       </div>
//       <Card className="dropzone-container">
//         <div {...getRootProps1({ className: 'dropzone' })}>
//           <input {...getInputProps1()} />
//           <p>Drag & drop some files here, or click to select files</p>
//           <p>Rename Your File Name to ProjectTitle_PreviousBudget</p>
//           <Button variant="primary" className='browsefiles'>Browse Files</Button>
//         </div>
//         <aside>
//           <h6>Files:</h6>
//           <ul>
//             {acceptedFiles1.map(file => (
//               <li key={file.path}>{file.path} - {file.size} bytes</li>
//             ))}
//           </ul>
//         </aside>
//       </Card>

//       <div className="label-container2">
//         <Form.Label>2. Upload Current Budget</Form.Label>
//         {errors.CurrentBudget && <p className="error">{errors.CurrentBudget}</p>}
//       </div>
//       <Card className="dropzone-container">
//         <div {...getRootProps2({ className: 'dropzone' })}>
//           <input {...getInputProps2()} />
//           <p>Drag & drop some files here, or click to select files</p>
//           <p>Rename Your File Name to ProjectTitle_CurrentBudget</p>
//           <Button variant="primary">Browse Files</Button>
//         </div>
//         <aside>
//           <h6>Files:</h6>
//           <ul>
//             {acceptedFiles2.map(file => (
//               <li key={file.path}>{file.path} - {file.size} bytes</li>
//             ))}
//           </ul>
//         </aside>
//       </Card>

//       <Button variant="success" onClick={handleSubmit} className='submitbutton'>Submit</Button>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Navbar from '../../Components/Navbar'; 
import './UploadFiles.css';
import DownloadIcon from "@mui/icons-material/Download";

function Budget() {
  const [appData, setAppData] = useState([]);
  const [selectedAppId, setSelectedAppId] = useState("");
  const [selectedProjectTitle, setSelectedProjectTitle] = useState("");
  const [acceptedFiles1, setAcceptedFiles1] = useState([]);
  const [acceptedFiles2, setAcceptedFiles2] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    axios.get('/GetApplicationID.php')
      .then(response => {
        console.log("Fetched Data:", response.data); // Log the fetched data
        if (Array.isArray(response.data)) {
          setAppData(response.data);
        } else {
          console.error('Invalid data format, expected an array');
        }
      })
      .catch(error => console.error('Error fetching app_IDs and project titles:', error));
  }, []);
  

  useEffect(() => {
    console.log("appData:", appData); // Ensure appData is populated
    console.log("selectedAppId:", selectedAppId); // Ensure selectedAppId is valid
  
    const selectedApp = appData.find(item => item.app_ID === parseInt(selectedAppId, 10));  // If app_ID is a number
console.log("Selected App:", selectedApp);
    // Set the project title if a matching app is found
    if (selectedApp) {
      setSelectedProjectTitle(selectedApp.projectTitle);
      console.log("Selected Project Title:", selectedApp.projectTitle); // Log before setting state
    } else {
      setSelectedProjectTitle("");
      console.log("No matching project title found for app_ID:", selectedAppId); // Log when no match found
    }
  }, [selectedAppId, appData]);
  
  useEffect(() => {
    console.log("Selected Project Title (Updated):", selectedProjectTitle); // Log whenever title updates
  }, [selectedProjectTitle]);
  
  

  const { getRootProps: getRootProps1, getInputProps: getInputProps1 } = useDropzone({
    onDrop: acceptedFiles => setAcceptedFiles1(acceptedFiles),
  });

  const { getRootProps: getRootProps2, getInputProps: getInputProps2 } = useDropzone({
    onDrop: acceptedFiles => setAcceptedFiles2(acceptedFiles),
  });

  const validateFiles = () => {
    const newErrors = {};
    if (!selectedAppId) newErrors.appId = 'Please select an application ID';
    if (acceptedFiles1.length === 0) newErrors.PreviousBudget = 'Previous Budget Revision file is required';
    if (acceptedFiles2.length === 0) newErrors.CurrentBudget = 'Current Budget Revision file is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFiles();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new FormData();
    formData.append('app_ID', selectedAppId);
    formData.append('project_title', selectedProjectTitle);
    acceptedFiles1.forEach(file => formData.append('PreviousBudget', file));
    acceptedFiles2.forEach(file => formData.append('CurrentBudget', file));

    try {
      const response = await axios.post('/Budget.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Success:', response.data);
      setSubmitted(true);
      alert('Files uploaded successfully!');

      // Clear the form after successful submission
      setAcceptedFiles1([]);
      setAcceptedFiles2([]);
      setErrors({});
      setSubmitted(false);
    } catch (error) {
      console.error('Error:', error);
      alert('Error uploading files.');
    }
  };

  return (
    
    <div>
      <Navbar />

       {/* Download Template Section */}
       <div className="template-download-section">
        <p>
          <strong className='downloadtitle'>Download the Template: (Remove previous budget)</strong>
          <a 
            href="/Templates/Budget Revisions.docx" 
            download = "Budget Revisions.docx"
            className="template-link"
            
          >
           Budget Template
           <DownloadIcon style={{ fontSize: "1.5rem", marginRight: "0.5rem" }} />

          </a>
        </p>
      </div>
     
      <label className='uploadtitle'>Upload Previous and Current Budget Here 👇</label>

<Form.Group controlId="projectTitleSelect">
        <Form.Label className='selecttitle'>Select Application ID:</Form.Label>
      <Form.Control
  className="appid_dropdown"
  as="select"
  value={selectedAppId}
  onChange={(e) => {
    const selectedId = e.target.value;
    console.log("Selected App ID:", selectedId); // Log the selected ID
    setSelectedAppId(selectedId);
  }}
>
  <option value="">-- Select Application ID --</option>
  {appData.map((item) => (
    <option key={item.app_ID} value={item.app_ID}>
      {item.app_ID}
    </option>
  ))}
</Form.Control>

</Form.Group>

      <Form.Group controlId="projectTitleSelect">
        <Form.Label className='selecttitle'>Project Title:</Form.Label>
        <Form.Control
          className="project_dropdown"
          type="text"
          value={selectedProjectTitle}
          readOnly
        />
      </Form.Group>
     
      <div className="label-container1">
        <Form.Label>1. Upload Previous Budget</Form.Label>
        {errors.PreviousBudget && <p className="error">{errors.PreviousBudget}</p>}
      </div>
      <Card className="dropzone-container">
        <div {...getRootProps1({ className: 'dropzone' })}>
          <input {...getInputProps1()} />
          <p>Drag & drop file here, or click to select file</p>
         
          <Button variant="primary" className='browsefiles'>Browse Files</Button>
        </div>
        <aside>
          <h6>Files:</h6>
          <ul>
            {acceptedFiles1.map(file => (
              <li key={file.path}>{file.path} - {file.size} bytes</li>
            ))}
          </ul>
        </aside>
      </Card>

      <div className="label-container2">
        <Form.Label>2. Upload Current Budget</Form.Label>
        {errors.CurrentBudget && <p className="error">{errors.CurrentBudget}</p>}
      </div>
      <Card className="dropzone-container">
        <div {...getRootProps2({ className: 'dropzone' })}>
          <input {...getInputProps2()} />
          <p>Drag & drop file here, or click to select file</p>
         
          <Button variant="primary">Browse Files</Button>
        </div>
        <aside>
          <h6>Files:</h6>
          <ul>
            {acceptedFiles2.map(file => (
              <li key={file.path}>{file.path} - {file.size} bytes</li>
            ))}
          </ul>
        </aside>
      </Card>

      <Button variant="success" onClick={handleSubmit} className='submitbutton'>Submit</Button>
    </div>
  );
}

export default Budget;
