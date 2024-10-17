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

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './UploadFiles.css'; // Import the CSS file
import Navbar from '../../Components/Navbar'; 
import axios from 'axios'; // Import axios for HTTP requests

function Budget() {
  const [acceptedFiles1, setAcceptedFiles1] = useState([]);
  const [acceptedFiles2, setAcceptedFiles2] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const { getRootProps: getRootProps1, getInputProps: getInputProps1 } = useDropzone({
    onDrop: acceptedFiles => setAcceptedFiles1(acceptedFiles),
  });

  const { getRootProps: getRootProps2, getInputProps: getInputProps2 } = useDropzone({
    onDrop: acceptedFiles => setAcceptedFiles2(acceptedFiles),
  });

  const validateFiles = () => {
    const newErrors = {};
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
      setSubmitted(false); // Optionally reset the submitted state
    } catch (error) {
      console.error('Error:', error);
      alert('Error uploading files.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="label-container1">
        <Form.Label>1. Upload Previous Budget</Form.Label>
        {errors.PreviousBudget && <p className="error">{errors.PreviousBudget}</p>}
      </div>
      <Card className="dropzone-container">
        <div {...getRootProps1({ className: 'dropzone' })}>
          <input {...getInputProps1()} />
          <p>Drag & drop some files here, or click to select files</p>
          <p>Rename Your File Name to ProjectTitle_PerviousBudget</p>
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
          <p>Drag & drop some files here, or click to select files</p>
          <p>Rename Your File Name to ProjectTitle_CurrentBudget</p>
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

      <div>
        <Button variant="success" onClick={handleSubmit} className='submitbutton'>Submit</Button>
      </div>
    </div>
  );
}

export default Budget;
