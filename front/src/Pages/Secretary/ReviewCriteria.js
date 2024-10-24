
// Table  of Review Criteria
// import React, { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import './Table.css';

// export default function ReviewCriteria() {
//   const [inputValue, setInputValue] = useState('');
//   const [entries, setEntries] = useState([]);

//   useEffect(() => {
//     fetch('/Criteria.php') // Update the path as needed
//       .then(response => response.json())
//       .then(data => setEntries(data))
//       .catch(error => console.error('Error:', error));
//   }, []);

//   const handleAdd = () => {
//     if (inputValue.trim()) {
//       fetch('/Criteria.php', { // Update the path as needed
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams({
//           'criteria': inputValue,
//         }),
//       })
//       .then(response => response.json())
//       .then(newEntry => {
//         setEntries([...entries, newEntry]);
//         setInputValue('');
//       })
//       .catch(error => console.error('Error:', error));
//     }
//   };
  
//   const handleRemove = (id) => {
//     fetch('/Criteria.php', { // Update the path as needed
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({
//         'C_Id': id,
//       }),
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         setEntries(entries.filter(entry => entry.C_Id !== id));
//       } else {
//         console.error('Error:', data.error);
//       }
//     })
//     .catch(error => console.error('Error:', error));
//   };
  

//   return (
//     <div>
//       <Navbar />
//       <Table className="review_t1" striped bordered hover>
//         <thead>
//           <tr>
//             <th style={{ width: '40%' }}>Add Criteria</th>
//             <th style={{ width: '60%' }}>Criteria Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 placeholder="Enter Review Criteria"
//                 className="textbox1"
//               />
//               <button onClick={handleAdd} className="btn_add">
//                 Add
//               </button>
//             </td>
//             <td>
//               <Table striped bordered hover>
//                 <tbody>
//                   {entries.map((entry) => (
//                     <tr key={entry.C_Id}>
//                       <td>{entry.criteria}</td>
//                       <td>
//                         <button
//                           onClick={() => handleRemove(entry.C_Id)}
//                           className="btn_remove"
//                         >
//                           Remove
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import { useDropzone } from 'react-dropzone';
// import './Table.css';
// import axios from 'axios';

// export default function ViewApplication() {

//   const [files, setFiles] = useState([]);

//   // Use react-dropzone to handle drag-and-drop
//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: (acceptedFiles) => {
//       setFiles(acceptedFiles);
//     }
//   });

//   const handleSubmit = async () => {
//     if (files.length > 0) {
//       const formData = new FormData();
//       formData.append('criteria', files[0]); // Only upload the first file
  
//       try {
//         // Send the form data to UploadCriteria.php using Axios
//         const response = await axios.post('/Criteria.php', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data', // Axios automatically sets this when using FormData
//           },
//         });
        
//         const result = response.data; // Get the response data
//         console.log(result);
  
//         if (result.criteria && result.criteria.includes('Error')) {
//           alert('Error: ' + result.criteria);
//         } else {
//           alert('File uploaded successfully!');
//           setFiles([]); // Clear the files after successful submission
//         }
//       } catch (error) {
//         console.error('Error uploading file:', error);
//         alert('Error uploading file.');
//       }
//     } else {
//       alert('Please select or drop files to upload.');
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Upload Criteria ( Word File) </th>
//             <th className="view-criteria-header">View Criteria</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <div className="upload-box">
              
//                 {/* Drag and drop box */}
//                 <div
//                   {...getRootProps({ className: 'dropzone' })}
//                 >
//                   <input {...getInputProps()} />
//                   {files.length > 0 ? (
//                     <ul>
//                       {files.map((file) => (
//                         <li key={file.path}>{file.path}</li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p>Drag & drop files here, or click to select files.</p>
                    
              
//                   )}
//                 </div>
//                 {/* Submit button */}
                
//               </div>
//               <button
//                   type="button"
//                   onClick={handleSubmit}
//                   className='Submitcriteria'
//                 >
//                   Submit
//                 </button>
//             </td>
//             <td>
//               <div className="view-box">
//                 View Criteria Content
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import { useDropzone } from 'react-dropzone';
// import './Table.css';
// import axios from 'axios';

// export default function ViewApplication() {

//   const [files, setFiles] = useState([]);
//   const [criteriaFile, setCriteriaFile] = useState(null);

//   // Use react-dropzone to handle drag-and-drop
//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: (acceptedFiles) => {
//       setFiles(acceptedFiles);
//     }
//   });

//   // Function to handle file upload
//   const handleSubmit = async () => {
//     if (files.length > 0) {
//       const formData = new FormData();
//       formData.append('criteria', files[0]); // Only upload the first file
  
//       try {
//         const response = await axios.post('/Criteria.php', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
        
//         const result = response.data;
//         console.log(result);
  
//         if (result.criteria && result.criteria.includes('Error')) {
//           alert('Error: ' + result.criteria);
//         } else {
//           alert('File uploaded successfully!');
//           setFiles([]); // Clear the files after successful submission
//           fetchCriteriaFile(); // Fetch the latest file to display in the table
//         }
//       } catch (error) {
//         console.error('Error uploading file:', error);
//         alert('Error uploading file.');
//       }
//     } else {
//       alert('Please select or drop files to upload.');
//     }
//   };

//   // Function to fetch the uploaded criteria file
//   const fetchCriteriaFile = async () => {
//     try {
//       const response = await axios.get('/Criteria.php');
//       const result = response.data;
//       setCriteriaFile(result.criteria); // Set the retrieved file name/path
//     } catch (error) {
//       console.error('Error fetching criteria file:', error);
//     }
//   };

//   // Fetch criteria file when the component is mounted
//   useEffect(() => {
//     fetchCriteriaFile();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Upload Criteria (Word File)</th>
//             <th className="view-criteria-header">View Criteria</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <div className="upload-box">
//                 <div {...getRootProps({ className: 'dropzone' })}>
//                   <input {...getInputProps()} />
//                   {files.length > 0 ? (
//                     <ul>
//                       {files.map((file) => (
//                         <li key={file.path}>{file.path}</li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p>Drag & drop files here, or click to select files.</p>
//                   )}
//                 </div>
//               </div>
//               <button type="button" onClick={handleSubmit} className="Submitcriteria">
//                 Submit
//               </button>
//             </td>
//             <td>
//               <div className="view-box">
//                 {criteriaFile ? (
//                   <a href={criteriaFile} target="_blank" rel="noopener noreferrer">
//                     View Criteria Document
//                   </a>
//                 ) : (
//                   <p>No criteria file uploaded yet.</p>
//                 )}
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import { useDropzone } from 'react-dropzone';
// import './Table.css';
// import axios from 'axios';

// export default function ViewApplication() {
//   const [files, setFiles] = useState([]);
//   const [criteriaFile, setCriteriaFile] = useState(null);

//   // Use react-dropzone to handle drag-and-drop
//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: (acceptedFiles) => {
//       setFiles(acceptedFiles);
//     }
//   });

//   // Function to handle file upload
//   const handleSubmit = async () => {
//     if (files.length > 0) {
//       const formData = new FormData();
//       formData.append('criteria', files[0]); // Only upload the first file
  
//       try {
//         const response = await axios.post('/Criteria.php', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
        
//         const result = response.data;
//         console.log(result);
  
//         if (result.criteria && result.criteria.includes('Error')) {
//           alert('Error: ' + result.criteria);
//         } else {
//           alert('File uploaded successfully!');
//           setFiles([]); // Clear the files after successful submission
//           fetchCriteriaFile(); // Fetch the latest file to display in the table
//         }
//       } catch (error) {
//         console.error('Error uploading file:', error);
//         alert('Error uploading file.');
//       }
//     } else {
//       alert('Please select or drop files to upload.');
//     }
//   };

//   // Function to fetch the uploaded criteria file
//   const fetchCriteriaFile = async () => {
//     try {
//       const response = await axios.get('/Criteria.php');
//       const result = response.data;
//       setCriteriaFile(result.criteria); // Set the retrieved file name/path
//     } catch (error) {
//       console.error('Error fetching criteria file:', error);
//     }
//   };

//   // Fetch criteria file when the component is mounted
//   useEffect(() => {
//     fetchCriteriaFile();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Upload Criteria (Word File)</th>
//             <th className="view-criteria-header">View Criteria</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <div className="upload-box">
//                 <div {...getRootProps({ className: 'dropzone' })}>
//                   <input {...getInputProps()} />
//                   {files.length > 0 ? (
//                     <ul>
//                       {files.map((file) => (
//                         <li key={file.path}>{file.path}</li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p>Drag & drop files here, or click to select files.</p>
//                   )}
//                 </div>
//               </div>
//               <button type="button" onClick={handleSubmit} className="Submitcriteria">
//                 Submit
//               </button>
//             </td>
//             <td>
//               <div className="view-box">
//                 {criteriaFile ? (
//                   <a href={criteriaFile} target="_blank" rel="noopener noreferrer">
//                     View Criteria Document
//                   </a>
//                 ) : (
//                   <p>No criteria file uploaded yet.</p>
//                 )}
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import { useDropzone } from 'react-dropzone';
// import './Table.css';
// import axios from 'axios';

// export default function ViewApplication() {
//   const [files, setFiles] = useState([]);
//   const [criteriaFiles, setCriteriaFiles] = useState([]); // Change to an array

//   // Use react-dropzone to handle drag-and-drop
//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: (acceptedFiles) => {
//       setFiles(acceptedFiles);
//     }
//   });

//   // Function to handle file upload
//   const handleSubmit = async () => {
//     if (files.length > 0) {
//       const formData = new FormData();
//       formData.append('criteria', files[0]); // Only upload the first file

//       try {
//         const response = await axios.post('/Criteria.php', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
        
//         const result = response.data;
//         console.log(result);

//         if (result.criteria && result.criteria.includes('Error')) {
//           alert('Error: ' + result.criteria);
//         } else {
//           alert('File uploaded successfully!');
//           setFiles([]); // Clear the files after successful submission
//           fetchCriteriaFiles(); // Fetch the latest files to display in the table
//         }
//       } catch (error) {
//         console.error('Error uploading file:', error);
//         alert('Error uploading file.');
//       }
//     } else {
//       alert('Please select or drop files to upload.');
//     }
//   };

//   // Function to fetch the uploaded criteria files
//   const fetchCriteriaFiles = async () => {
//     try {
//       const response = await axios.get('/Criteria.php');
//       const result = response.data;
//       setCriteriaFiles(result.criteria); // Set the retrieved file names/paths
//     } catch (error) {
//       console.error('Error fetching criteria files:', error);
//     }
//   };

//   // Fetch criteria files when the component is mounted
//   useEffect(() => {
//     fetchCriteriaFiles();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Upload and Veiw Criteria</h1>
      
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Upload Criteria (Word File)</th>
//             <th className="view-criteria-header">View Criteria</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <div className="upload-box">
//                 <div {...getRootProps({ className: 'dropzone2' })}>
//                   <input {...getInputProps()} />
//                   {files.length > 0 ? (
//                     <ul>
//                       {files.map((file) => (
//                         <li key={file.path}>{file.path}</li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p>Drag & drop files here, or click to select files.</p>
//                   )}
//                 </div>
//               </div>
//               <button type="button" onClick={handleSubmit} className="Submitcriteria">
//                 Submit
//               </button>
//             </td>
//             <td>
//               <div className="view-box">
//                 {criteriaFiles.length > 0 ? (
//                   criteriaFiles.map((file, index) => (
//                     <div key={index}>
//                       <a href={file} target="_blank" rel="noopener noreferrer">
//                         View Criteria Document {index + 1}
//                       </a>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No criteria file uploaded yet.</p>
//                 )}
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import { useDropzone } from 'react-dropzone';
// import './Table.css';
// import axios from 'axios';

// export default function ViewApplication() {
//   const [files, setFiles] = useState([]);
//   const [criteriaFiles, setCriteriaFiles] = useState([]); // Initialize as an empty array

//   // Use react-dropzone to handle drag-and-drop
//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: (acceptedFiles) => {
//       setFiles(acceptedFiles);
//     }
//   });

//   // Function to handle file upload
//   const handleSubmit = async () => {
//     if (files.length > 0) {
//       const formData = new FormData();
//       formData.append('criteria', files[0]); // Only upload the first file

//       try {
//         const response = await axios.post('/Criteria.php', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
        
//         const result = response.data;
//         console.log(result);

//         if (result.criteria && result.criteria.includes('Error')) {
//           alert('Error: ' + result.criteria);
//         } else {
//           alert('File uploaded successfully!');
//           setFiles([]); // Clear the files after successful submission
//           fetchCriteriaFiles(); // Fetch the latest files to display in the table
//         }
//       } catch (error) {
//         console.error('Error uploading file:', error);
//         alert('Error uploading file.');
//       }
//     } else {
//       alert('Please select or drop files to upload.');
//     }
//   };

//   // Function to fetch the uploaded criteria files
//   const fetchCriteriaFiles = async () => {
//     try {
//         const response = await axios.get('/Criteria.php');
//         console.log('Response from server:', response.data);
//         const result = response.data;

//         if (result.criteria) {
//             // Update file paths to use the web-accessible URL
//             setCriteriaFiles(result.criteria.map(file => `/uploads/CriteriaFiles/${file}`));
//         } else {
//             console.error("No criteria files found in response:", result);
//         }
//     } catch (error) {
//         console.error('Error fetching criteria files:', error);
//     }
// };

//   // Fetch criteria files when the component is mounted
//   useEffect(() => {
//     fetchCriteriaFiles();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Upload and View Criteria</h1>
      
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Upload Criteria (Word File)</th>
//             <th className="view-criteria-header">View Criteria</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <div className="upload-box">
//                 <div {...getRootProps({ className: 'dropzone2' })}>
//                   <input {...getInputProps()} />
//                   {files.length > 0 ? (
//                     <ul>
//                       {files.map((file) => (
//                         <li key={file.path}>{file.path}</li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p>Drag & drop files here, or click to select files.</p>
//                   )}
//                 </div>
//               </div>
//               <button type="button" onClick={handleSubmit} className="Submitcriteria">
//                 Submit
//               </button>
//             </td>
//             <td>
//               <div className="view-box">
//                 {criteriaFiles.length > 0 ? (
//                   criteriaFiles.map((file, index) => (
//                     <div key={index}>
//                       <a href={file} download>
//                         Download Criteria Document {index + 1}
//                       </a>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No criteria file uploaded yet.</p>
//                 )}
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import { useDropzone } from 'react-dropzone';
// import './Table.css';
// import axios from 'axios';

// export default function ViewApplication() {
//   const [files, setFiles] = useState([]);
//   const [criteriaFiles, setCriteriaFiles] = useState([]); // Initialize as an empty array

//   // Use react-dropzone to handle drag-and-drop
//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: (acceptedFiles) => {
//       setFiles(acceptedFiles);
//     }
//   });

//   // Function to handle file upload
//   const handleSubmit = async () => {
//     if (files.length > 0) {
//       const formData = new FormData();
//       formData.append('criteria', files[0]); // Only upload the first file

//       try {
//         const response = await axios.post('/Criteria.php', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
        
//         const result = response.data;
//         console.log(result);

//         if (result.criteria && result.criteria.includes('Error')) {
//           alert('Error: ' + result.criteria);
//         } else {
//           alert('File uploaded successfully!');
//           setFiles([]); // Clear the files after successful submission
//           fetchCriteriaFiles(); // Fetch the latest files to display in the table
//         }
//       } catch (error) {
//         console.error('Error uploading file:', error);
//         alert('Error uploading file.');
//       }
//     } else {
//       alert('Please select or drop files to upload.');
//     }
//   };

//   // Function to fetch the uploaded criteria files
//   const fetchCriteriaFiles = async () => {
//     try {
//         const response = await axios.get('/Criteria.php');
//         console.log('Response from server:', response.data);
//         const result = response.data;

//         if (result.criteria) {
//             // Create an array of objects containing file names and their paths
//             const filesWithNames = result.criteria.map(file => ({
//                 name: file, // Actual file name
//                 path: `/uploads/CriteriaFiles/${file}` // URL path for download
//             }));
//             setCriteriaFiles(filesWithNames);
//         } else {
//             console.error("No criteria files found in response:", result);
//         }
//     } catch (error) {
//         console.error('Error fetching criteria files:', error);
//     }
//   };

//   // Fetch criteria files when the component is mounted
//   useEffect(() => {
//     fetchCriteriaFiles();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Upload and View Criteria</h1>
      
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Upload Criteria (Word File)</th>
//             <th className="view-criteria-header">View Criteria</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <div className="upload-box">
//                 <div {...getRootProps({ className: 'dropzone2' })}>
//                   <input {...getInputProps()} />
//                   {files.length > 0 ? (
//                     <ul>
//                       {files.map((file) => (
//                         <li key={file.path}>{file.path}</li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p>Drag & drop files here, or click to select files.</p>
//                   )}
//                 </div>
//               </div>
//               <button type="button" onClick={handleSubmit} className="Submitcriteria">
//                 Submit
//               </button>
//             </td>
//             <td>
//               <div className="view-box">
//                 {criteriaFiles.length > 0 ? (
//                   criteriaFiles.map((file, index) => (
//                     <div key={index} className="file-item">
//                       <a href={file.path} download className="file-link">
//                         <div className="file-card">
//                           <i className="fas fa-file-word file-icon"></i> {/* Icon for Word file */}
//                           <span>{file.name}</span>
//                         </div>
//                       </a>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No criteria file uploaded yet.</p>
//                 )}
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from '../../Components/Navbar';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import DescriptionIcon from '@mui/icons-material/Description'; // Material UI icon import
import './Table.css';

export default function ViewApplication() {
  const [files, setFiles] = useState([]);
  const [criteriaFiles, setCriteriaFiles] = useState([]);

  // Use react-dropzone to handle drag-and-drop
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    }
  });

  // Function to handle file upload
  const handleSubmit = async () => {
    if (files.length > 0) {
      const formData = new FormData();
      formData.append('criteria', files[0]);

      try {
        const response = await axios.post('/Criteria.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const result = response.data;
        console.log(result);

        if (result.criteria && result.criteria.includes('Error')) {
          alert('Error: ' + result.criteria);
        } else {
          alert('File uploaded successfully!');
          setFiles([]);
          fetchCriteriaFiles();
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file.');
      }
    } else {
      alert('Please select or drop files to upload.');
    }
  };

  // Function to fetch the uploaded criteria files
  const fetchCriteriaFiles = async () => {
    try {
      const response = await axios.get('/Criteria.php');
      console.log('Response from server:', response.data);
      const result = response.data;

      if (result.criteria) {
        const filesWithNames = result.criteria.map((file) => ({
          name: file,
          path: `/uploads/CriteriaFiles/${file}`,
        }));
        setCriteriaFiles(filesWithNames);
      } else {
        console.error('No criteria files found in response:', result);
      }
    } catch (error) {
      console.error('Error fetching criteria files:', error);
    }
  };

  // Fetch criteria files when the component is mounted
  useEffect(() => {
    fetchCriteriaFiles();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Upload and View Criteria</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Upload Criteria (Word File)</th>
            <th className="view-criteria-header">View Criteria</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="upload-box">
                <div {...getRootProps({ className: 'dropzone2' })}>
                  <input {...getInputProps()} />
                  {files.length > 0 ? (
                    <ul>
                      {files.map((file) => (
                        <li key={file.path}>{file.path}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>Drag & drop files here, or click to select files.</p>
                  )}
                </div>
              </div>
              <button type="button" onClick={handleSubmit} className="Submitcriteria">
                Submit
              </button>
            </td>
            <td>
              <div className="view-box">
                {criteriaFiles.length > 0 ? (
                  criteriaFiles.map((file, index) => (
                    <div key={index} className="file-item">
                      <a href={file.path} download className="file-link">
                        <div className="file-card">
                          <DescriptionIcon className="file-icon" /> {/* Material UI icon */}
                          <span>{file.name}</span>
                        </div>
                      </a>
                    </div>
                  ))
                ) : (
                  <p>No criteria file uploaded yet.</p>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
