// import React from 'react';
// import { useDropzone } from 'react-dropzone';
// import { Button, Card, Form } from 'react-bootstrap';
// import "../Pages/UploadFiles.css"


// function ReportProgress({ reportType }) {
//   const {
//     getRootProps,
//     getInputProps,
//     acceptedFiles
//   } = useDropzone();

//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   const handleSubmit = () => {
//     // Handle form submission logic here
//     console.log(`${reportType} report submitted`);
//   };

//   return (
//     <div>
      
//       <div className="label-container3">
//         <Form.Label>{`Upload ${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report`}</Form.Label>
//       </div>
//       <Card className="dropzone-container">
//         <div {...getRootProps({ className: 'dropzone' })}>
//           <input {...getInputProps()} />
//           <p>Drag & drop some files here, or click to select files</p>
//           <Button variant="primary">Browse Files</Button>
//         </div>
//         <aside>
//           <h6>Files:</h6>
//           <ul>{files}</ul>
//         </aside>
//       </Card>
//       <div>
//         <Button variant="success" onClick={handleSubmit} className='submitbutton'>Submit</Button>
//       </div>
//     </div>
//   );
// }

// export default ReportProgress;

// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { Button, Card, Form } from 'react-bootstrap';
// import "../Pages/UploadFiles.css";
// import axios from 'axios';

// function ReportProgress({ reportType }) {
//   const [acceptedFiles, setAcceptedFiles] = useState([]);

//   const {
//     getRootProps,
//     getInputProps
//   } = useDropzone({
//     onDrop: (files) => setAcceptedFiles(files),
//   });

//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     acceptedFiles.forEach(file => formData.append('file[]', file));
//     formData.append('reportType', reportType);

//     try {
//       const response = await axios.post('http://localhost:8080/test/PogressReports.php', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Success:', response.data);
//       alert('Files uploaded successfully!');
//       setAcceptedFiles([]); // Clear accepted files after submission
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error uploading files.');
//     }
//   };

//   return (
//     <div>
//       <div className="label-container3">
//         <Form.Label>{`Upload ${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report`}</Form.Label>
//       </div>
//       <Card className="dropzone-container">
//         <div {...getRootProps({ className: 'dropzone' })}>
//           <input {...getInputProps()} />
//           <p>Drag & drop some files here, or click to select files</p>
//           <Button variant="primary">Browse Files</Button>
//         </div>
//         <aside>
//           <h6>Files:</h6>
//           <ul>{files}</ul>
//         </aside>
//       </Card>
//       <div>
//         <Button variant="success" onClick={handleSubmit} className='submitbutton'>Submit</Button>
//       </div>
//     </div>
//   );
// }

// export default ReportProgress;

// import React, { useState, useEffect } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { Button, Card, Form } from 'react-bootstrap';
// import "../Pages/Applicant/UploadFiles.css";
// import axios from 'axios';

// function ReportProgress({ reportType }) {
//   const [acceptedFiles, setAcceptedFiles] = useState([]);

//   const {
//     getRootProps,
//     getInputProps
//   } = useDropzone({
//     onDrop: (files) => setAcceptedFiles(files),
//   });

//   useEffect(() => {
//     setAcceptedFiles([]); // Clear files when report type changes
//   }, [reportType]);

//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     acceptedFiles.forEach(file => formData.append('file[]', file));
//     formData.append('reportType', reportType);

//     try {
//       const response = await axios.post('/PogressReports.php', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Success:', response.data);
//       alert('Files uploaded successfully!');
//       setAcceptedFiles([]); // Clear accepted files after submission
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error uploading files.');
//     }
//   };

//   return (
//     <div>
//       <div className="label-container3">
//         <Form.Label>{`Upload ${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report`}</Form.Label>
//       </div>
//       <Card className="dropzone-container">
//         <div {...getRootProps({ className: 'dropzone' })}>
//           <input {...getInputProps()} />
//           <p>Drag & drop some files here, or click to select files</p>
//           <Button variant="primary">Browse Files</Button>
//         </div>
//         <aside>
//           <h6>Files:</h6>
//           <ul>{files}</ul>
//         </aside>
//       </Card>
//       <div>
//         <Button variant="success" onClick={handleSubmit} className='submitbutton'>Submit</Button>
//       </div>
//     </div>
//   );
// }

// export default ReportProgress;

// import React, { useState, useEffect } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { Button, Card, Form } from 'react-bootstrap';
// import "../Pages/Applicant/UploadFiles.css";
// import axios from 'axios';

// function ReportProgress({ reportType }) {
//   const [acceptedFiles, setAcceptedFiles] = useState([]);

//   const {
//     getRootProps,
//     getInputProps
//   } = useDropzone({
//     onDrop: (files) => setAcceptedFiles(files),
//   });

//   useEffect(() => {
//     setAcceptedFiles([]); // Clear files when report type changes
//   }, [reportType]);

//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     acceptedFiles.forEach(file => formData.append('file[]', file));
//     formData.append('reportType', reportType);

//     try {
//       const response = await axios.post('/PogressReports.php', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Success:', response.data);
//       alert('Files uploaded successfully!');
//       setAcceptedFiles([]); // Clear accepted files after submission
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error uploading files.');
//     }
//   };

//   return (
//     <div>
//       <div className="label-container3">
//         <Form.Label>{`Upload ${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report`}</Form.Label>
//       </div>
//       <Card className="dropzone-container">
//         <div {...getRootProps({ className: 'dropzone' })}>
//           <input {...getInputProps()} />
//           <p>Drag & drop some files here, or click to select files</p>
//           <Button variant="primary">Browse Files</Button>
//         </div>
//         <aside>
//           <h6>Files:</h6>
//           <ul>{files}</ul>
//         </aside>
//       </Card>
//       <div>
//         <Button variant="success" onClick={handleSubmit} className='submitbutton'>Submit</Button>
//       </div>
//     </div>
//   );
// }

// export default ReportProgress;

// import React, { useState, useEffect } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { Button, Card, Form } from 'react-bootstrap';
// import axios from 'axios';
// import "../Pages/Applicant/UploadFiles.css";

// function ReportProgress({ reportType, appId }) {
//   const [acceptedFiles, setAcceptedFiles] = useState([]);

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: (files) => setAcceptedFiles(files),
//   });

//   useEffect(() => {
//     setAcceptedFiles([]); // Clear files when report type changes
//   }, [reportType]);

//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     formData.append('app_ID', appId); // Ensure appId is passed correctly
//     formData.append('reportType', reportType); // Add report type to form data
    
//     // Append files under 'file[]'
//     acceptedFiles.forEach(file => formData.append('file[]', file));
  
//     try {
//       const response = await axios.post('/ProgressReports.php', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
  
//       console.log('Success:', response.data);
//       alert('Files uploaded successfully!');
//       setAcceptedFiles([]); // Clear files after successful upload
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error uploading files.');
//     }
//   };
  
  
//   return (
//     <div>
//       <div className="label-container3">
//         <Form.Label>{`Upload ${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report`}</Form.Label>
//       </div>

//       <Card className="dropzone-container">
//         <div {...getRootProps({ className: 'dropzone' })}>
//           <input {...getInputProps()} />
//           <p>Drag & drop some files here, or click to select files</p>
//           <Button variant="primary">Browse Files</Button>
//         </div>
//         <aside>
//           <h6>Files:</h6>
//           <ul>{files}</ul>
//         </aside>
//       </Card>

//       <div>
//         <Button variant="success" onClick={handleSubmit} className='submitbutton'>Submit</Button>
//       </div>
//     </div>
//   );
// }

// export default ReportProgress;

import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import "../Pages/Applicant/UploadFiles.css";

function ReportProgress({ reportType, appId }) {
  const [acceptedFiles, setAcceptedFiles] = useState([]);
  const [currentReportType, setCurrentReportType] = useState(reportType);
  const [currentAppId, setCurrentAppId] = useState(appId);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => setAcceptedFiles(files),
  });

  useEffect(() => {
    setAcceptedFiles([]); // Clear files when report type changes
    setCurrentReportType(reportType); // Update reportType state
    setCurrentAppId(appId); // Update appId state
  }, [reportType, appId]);

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('app_ID', currentAppId); // Use currentAppId from state
    formData.append('reportType', currentReportType); // Use currentReportType from state
    
    // Append files under 'file[]'
    acceptedFiles.forEach(file => formData.append('file[]', file));
  
    try {
      const response = await axios.post('/ProgressReports.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('Success:', response.data);
      alert('Files uploaded successfully!');
      
      // Clear fields after successful upload
      setAcceptedFiles([]);
      setCurrentReportType(''); // Clear reportType
      setCurrentAppId(''); // Clear appId
      //setProjectTitle(''); // Clear projectTitle
      
    } catch (error) {
      console.error('Error:', error);
      alert('Error uploading files.');
    }
  };
  
  
  return (
    <div>
      <div className="label-container3">
        <Form.Label>{`Upload ${currentReportType.charAt(0).toUpperCase() + currentReportType.slice(1)} Report`}</Form.Label>
      </div>

      <Card className="dropzone-container">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag & drop some files here, or click to select files</p>
          <Button variant="primary">Browse Files</Button>
        </div>
        <aside>
          <h6>Files:</h6>
          <ul>{files}</ul>
        </aside>
      </Card>

      <div>
        <Button variant="success" onClick={handleSubmit} className='submitbutton'>Submit</Button>
      </div>
    </div>
  );
}

export default ReportProgress;
