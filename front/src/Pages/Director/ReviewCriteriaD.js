// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import '../Secretary/Table.css';


// export default function ReviewCriteriaD() {
//   const [inputValue, setInputValue] = useState('');
//   const [entries, setEntries] = useState([]);

//   // Function to handle adding new entry
//   const handleAdd = () => {
//     if (inputValue.trim()) {
//       setEntries([...entries, inputValue]);
//       setInputValue(''); // Clear the input after adding
//     }
//   };

//   // Function to handle removing an entry
//   const handleRemove = (index) => {
//     setEntries(entries.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <Navbar />
//       <Table className="review_t1 " striped bordered hover>
//         <tr>
//             <th>
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
//             </th>
//             <td colSpan="2"> {/* This cell spans the remaining columns */}
//               <Table striped bordered hover>
//                 <tbody>
//                   {entries.map((entry, index) => (
//                     <tr key={index}>
//                       <td>{entry}</td>
//                       <td>
//                         <button
//                           onClick={() => handleRemove(index)}
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
//       </Table>
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import { useDropzone } from 'react-dropzone';
// import '../Secretary/Table.css';
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
// import axios from 'axios';
// import DescriptionIcon from '@mui/icons-material/Description'; // Material UI icon import
// import '../Secretary/Table.css';

// export default function ViewApplication() {
//   const [files, setFiles] = useState([]);
//   const [criteriaFiles, setCriteriaFiles] = useState([]);

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
//       formData.append('criteria', files[0]);

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
//           setFiles([]);
//           fetchCriteriaFiles();
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
//       console.log('Response from server:', response.data);
//       const result = response.data;

//       if (result.criteria) {
//         const filesWithNames = result.criteria.map((file) => ({
//           name: file,
//           path: `D:/Xampp/htdocs/uploads/CriteriaFiles/${file}`,
//         }));
//         setCriteriaFiles(filesWithNames);
//       } else {
//         console.error('No criteria files found in response:', result);
//       }
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
//                           <DescriptionIcon className="file-icon" /> {/* Material UI icon */}
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
import '../Secretary/Table.css';

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
          path: `D:/GrantData/CriteriaFiles/${file}`,
        }));
        setCriteriaFiles(filesWithNames);
      } else {
        console.error('No criteria files found in response:', result);
      }
    } catch (error) {
      console.error('Error fetching criteria files:', error);
    }
  };

  // Function to handle downloading agreement or criteria files
  const handleDownloadFile = (filePath, fileName) => {
    axios
      .get(`/Criteria.php?download=${fileName}`, {
        responseType: 'blob', // Ensure we receive the file as a blob
      })
      .then((response) => {
        // Create a link element to trigger the download
        const link = document.createElement('a');
        const blob = new Blob([response.data], { type: 'application/octet-stream' });
        link.href = URL.createObjectURL(blob);
        link.download = fileName; // Set the file name
        link.click();
  
        // Clean up the object URL
        URL.revokeObjectURL(link.href);
      })
      .catch((error) => {
        console.error('Error downloading file:', error);
        alert('An error occurred while downloading the file.');
      });
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
                      <button
                        className="file-link"
                        onClick={() =>
                          handleDownloadFile(file.path, file.name)
                        }
                      >
                        <div className="file-card">
                          <DescriptionIcon className="file-icon" /> {/* Material UI icon */}
                          <span>{file.name}</span>
                        </div>
                      </button>
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
