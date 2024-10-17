

// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';
// import Navbar2 from '../Components/Navbar2';
// import Sidebar from '../Components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from './MainForm'; // Import useForm from your context

// export default function Grant() {
//   const { formData, handleFormDataChange } = useForm(); // Use form context
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     handleFormDataChange({ [e.target.name]: e.target.value });
//   };

//   const handleNext = () => {
//     navigate('/uploads'); // Navigate to the uploads page
//   };

//   const handlePrevious = () => {
//     navigate('/project'); // Navigate to the project page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />
      
//       <div className="form-container">
//         <Form>
//           <Row className="mb-3">
//             <Form.Group controlId="formGridinvestigator">
//               <Form.Label>1. Co-investigators of the Project</Form.Label>
//               <Form.Control
//                 name="co_investigators"
//                 value={formData.co_investigators || ''}
//                 onChange={handleChange}
//                 placeholder="Enter co-investigator's name"
//               />
             
//               <Form.Label>Affiliated Department and University</Form.Label>
//               <Form.Control
//                 name="co_investigator_departmentUniversity"
//                 value={formData.co_investigator_departmentUniversity || ''}
//                 onChange={handleChange}
//                 placeholder="Enter affiliated Department and University"
//               />
              
//             </Form.Group>

//             <Form.Group controlId="formGridforeign">
//               <Form.Label>2. Foreign Collaborators of the Project</Form.Label>
//               <Form.Control
//                 name="foreign_collaborators"
//                 value={formData.foreign_collaborators || ''}
//                 onChange={handleChange}
//                 placeholder="Enter foreign collaborator's Name"
//               />
             
//               <Form.Label>Affiliated Department and University</Form.Label>
//               <Form.Control
//                 name="foreign_collaborator_departmentUniversity"
//                 value={formData.foreign_collaborator_departmentUniversity || ''}
//                 onChange={handleChange}
//                 placeholder="Enter affiliated Department and University"
//               />
//             </Form.Group>
//           </Row>

//           <Button variant="primary" type="submit" className='savebutton'>
//             Save
//           </Button>

//           <Button variant="primary" onClick={handlePrevious} className='previousbutton'>
//             Previous
//           </Button>
//           <Button variant="primary" onClick={handleNext} className='nextbutton'>
//             Next
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }




// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../../Components/Navbar';
// import Navbar2 from '../../Components/Navbar2';
// import Sidebar from '../../Components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from './MainForm'; // Import useForm from your context
// import axios from 'axios';

// export default function Grant() {
//   const { formData, handleFormDataChange,updateCompletionStatus } = useForm(); // Use form context
//   const [submitted, setSubmitted] = useState(false); // Define state for form submission
//   const [formErrors, setFormErrors] = useState({}); // Define state for form errors
//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     handleFormDataChange({ [name]: value }); // Update the central form data
//   };

//   const validate = () => {
//     let errors = {};
    
//     if (!formData.co_investigators) errors.co_investigators = 'Co-investigators are required.';
//     if (!formData.co_investigator_departmentUniversity) 
//       errors.co_investigator_departmentUniversity = 'Affiliated Department and University are required.';

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async () => {
//     if (validate()) {
//       try {
//         const response = await axios.post('/Grant.php', formData, {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           transformRequest: [(data) => {
//             const params = new URLSearchParams();
//             for (const key in data) {
//               params.append(key, data[key]);
//             }
//             return params;
//           }],
//         });
//         alert(response.data);
//         setSubmitted(true); // Set form as submitted
//       } catch (error) {
//         alert('There was an error submitting the form. Please try again.');
//       }
//     }
//   };

//   const handleNext = async () => {
//     if (validate()) {
//       updateCompletionStatus('supervisors', true);
//       navigate('/reviewers'); // Navigate to the uploads page
//     }else {
//       alert('Missing Fields Required.');
//     }
//   };

//   const handlePrevious = () => {
//     navigate('/project'); // Navigate to the project page
//   };

//   const handleSave = async () => {
//     if (validate()) {
//       await handleSubmit(); // Submit form data if valid
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />
      
//       <div className="form-container">
        
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group controlId="formGridinvestigator">
//               <Form.Label>1. Co-investigators of the Project</Form.Label>
//               <Form.Control
//                 name="co_investigators"
//                 value={formData.co_investigators || ''}
//                 onChange={handleChange}
//                 placeholder="Enter co-investigator's name"
//                 isInvalid={!!formErrors.co_investigators}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.co_investigators}
//               </Form.Control.Feedback>

//               <Form.Label>Affiliated Department and University</Form.Label>
//               <Form.Control
//                 name="co_investigator_departmentUniversity"
//                 value={formData.co_investigator_departmentUniversity || ''}
//                 onChange={handleChange}
//                 placeholder="Enter affiliated Department and University"
//                 isInvalid={!!formErrors.co_investigator_departmentUniversity}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.co_investigator_departmentUniversity}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group controlId="formGridforeign">
//               <Form.Label>2. Foreign Collaborators of the Project</Form.Label>
//               <Form.Control
//                 name="foreign_collaborators"
//                 value={formData.foreign_collaborators || ''}
//                 onChange={handleChange}
//                 placeholder="Enter foreign collaborator's Name"
//               />
//               <Form.Label>Affiliated Department and University</Form.Label>
//               <Form.Control
//                 name="foreign_collaborator_departmentUniversity"
//                 value={formData.foreign_collaborator_departmentUniversity || ''}
//                 onChange={handleChange}
//                 placeholder="Enter affiliated Department and University"
//               />
//             </Form.Group>
//           </Row>

//           <Button variant="primary" type="button" onClick={handleSave} className='savebutton'>
//             Save
//           </Button>
//           <Button variant="primary" type="button" onClick={handlePrevious} className='previousbutton'>
//             Previous
//           </Button>
//           <Button variant="primary" type="button" onClick={handleNext} className='nextbutton'>
//             Next
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../../Components/Navbar';
// import Navbar2 from '../../Components/Navbar2';
// import Sidebar from '../../Components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from './MainForm'; // Import useForm from your context
// import axios from 'axios';

// export default function Grant() {
//   const { formData, handleFormDataChange,updateCompletionStatus } = useForm(); // Use form context
//   const [submitted, setSubmitted] = useState(false); // Define state for form submission
//   const [isSubmitted, setIsSubmitted] = useState(false); 
//   const [formErrors, setFormErrors] = useState({}); // Define state for form errors
//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     handleFormDataChange({ [name]: value }); // Update the central form data
//   };

//   const validate = () => {
//     let errors = {};
    
//     if (!formData.co_investigators) errors.co_investigators = 'Co-investigators are required.';
//     if (!formData.co_investigator_departmentUniversity) 
//       errors.co_investigator_departmentUniversity = 'Affiliated Department and University are required.';

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

  
//   // Function to handle form submission
//   const handleSubmit = async () => {
//     if (validate()) {
//       try {
//         const response = await axios.post('/Grant.php', formData, {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           transformRequest: [(data) => {
//             const params = new URLSearchParams();
//             for (const key in data) {
//               params.append(key, data[key]);
//             }
//             return params;
//           }],
//         });
//         alert(response.data);
//         setSubmitted(true); // Set form as submitted
//       } catch (error) {
//         alert('There was an error submitting the form. Please try again.');
//       }
//     }
//   };

  
//   const handleSave = async () => {
//     if (isSubmitted) {
//       alert('Form data has already been saved.');
//       return; // Prevent further submissions
//     }
  
//     try {
//       // Save form data to SaveForm.php
//       const response = await axios.post('/SaveForm.php', formData, {
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
  
//       // Check if the form data was saved successfully
//       if (response.data.status === "success") {
//         setIsSubmitted(true); // Mark as submitted
//         alert('Form saved successfully.');
  
//         // Now proceed with file upload to FileUploads.php
//         const fileUploadResponse = await axios.post('/SaveFileUploads.php', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file upload
//           },
//         });
  
//         console.log(fileUploadResponse.data); // Log the file upload response for debugging
  
//         // Handle successful file upload
//         if (fileUploadResponse.data.status === "success") {
//           alert('Files uploaded successfully.');
//         } else {
//           alert(fileUploadResponse.data.message); // Handle file upload failure
//         }
//       } else {
//         alert(response.data.message); // Handle form save failure
//       }
//     } catch (error) {
//       console.error("Error details:", error);
//       alert('There was an error saving the data or uploading files. Please try again.');
//     }
//   };
  


//  // function to navigate to next page
//   const handleNext = async () => {
//     if (validate()) {
//       updateCompletionStatus('supervisors', true);
//       navigate('/uploads'); // Navigate to the uploads page
//     }else {
//       alert('Missing Fields Required.');
//     }
//   };
//  // function to navigate to previous page
//   const handlePrevious = () => {
//     navigate('/project'); // Navigate to the project page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />
      
//       <div className="form-container">
        
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group controlId="formGridinvestigator">
//               <Form.Label>1. Co-investigators of the Project <span className="text-danger">*</span></Form.Label>
//               <Form.Control
//                 name="co_investigators"
//                 value={formData.co_investigators || ''}
//                 onChange={handleChange}
//                 placeholder="Enter co-investigator's name"
//                 isInvalid={!!formErrors.co_investigators}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.co_investigators}
//               </Form.Control.Feedback>

            //   <Form.Label>Affiliated Department and University <span className="text-danger">*</span></Form.Label>
            //   <Form.Control
            //     name="co_investigator_departmentUniversity"
            //     value={formData.co_investigator_departmentUniversity || ''}
            //     onChange={handleChange}
            //     placeholder="Enter affiliated Department and University"
            //     isInvalid={!!formErrors.co_investigator_departmentUniversity}
            //   />
            //   <Form.Control.Feedback type="invalid">
            //     {formErrors.co_investigator_departmentUniversity}
            //   </Form.Control.Feedback>
            // </Form.Group>

//             <Form.Group controlId="formGridforeign">
//               <Form.Label>2. Foreign Collaborators of the Project</Form.Label>
//               <Form.Control
//                 name="foreign_collaborators"
//                 value={formData.foreign_collaborators || ''}
//                 onChange={handleChange}
//                 placeholder="Enter foreign collaborator's Name"
//               />
//               <Form.Label>Affiliated Department and University</Form.Label>
//               <Form.Control
//                 name="foreign_collaborator_departmentUniversity"
//                 value={formData.foreign_collaborator_departmentUniversity || ''}
//                 onChange={handleChange}
//                 placeholder="Enter affiliated Department and University"
//               />
//             </Form.Group>
//           </Row>

//           <Button variant="primary" type="button" onClick={handleSave} className='savebutton'>
//             Save
//           </Button>
//           <Button variant="primary" type="button" onClick={handlePrevious} className='previousbutton'>
//             Previous
//           </Button>
//           <Button variant="primary" type="button" onClick={handleNext} className='nextbutton'>
//             Next
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../../Components/Navbar';
// import Navbar2 from '../../Components/Navbar2';
// import Sidebar from '../../Components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from './MainForm'; // Import useForm from your context
// import axios from 'axios';

// export default function Grant() {
//   const { formData, handleFormDataChange, updateCompletionStatus } = useForm(); // Use form context
//   const [submitted, setSubmitted] = useState(false); // Define state for form submission
//   const [isSubmitted, setIsSubmitted] = useState(false); 
//   const [formErrors, setFormErrors] = useState({}); // Define state for form errors
//   const navigate = useNavigate();
  
//   const [coInvestigators, setCoInvestigators] = useState([{ name: '', departmentUniversity: '' }]); // State to manage multiple co-investigators

//   const handleChange = (index, event) => {
//     const { name, value } = event.target;
//     const newCoInvestigators = [...coInvestigators];
//     newCoInvestigators[index][name] = value;
//     setCoInvestigators(newCoInvestigators); // Update co-investigators state
//     handleFormDataChange({ co_investigators: newCoInvestigators }); // Update global form state
//   };
  

//   // Handle foreign collaborators field change
//   const handleForeignChange = (event) => {
//     const { name, value } = event.target;
//     handleFormDataChange({ [name]: value }); // Update formData for foreign collaborators
//   };

//   const validate = () => {
//     let errors = {};
//     // Validation for co-investigators
//     if (!coInvestigators[0].name) errors.co_investigators = 'Co-investigators are required.';
//     if (!coInvestigators[0].departmentUniversity) 
//       errors.co_investigator_departmentUniversity = 'Affiliated Department and University are required.';

//     // Validation for foreign collaborators
//     if (!formData.foreign_collaborators) errors.foreign_collaborators = 'Foreign collaborators are required.';
//     if (!formData.foreign_collaborator_departmentUniversity)
//       errors.foreign_collaborator_departmentUniversity = 'Affiliated Department and University for foreign collaborators are required.';

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // Handle adding new row
//   const handleAddRow = () => {
//     setCoInvestigators([...coInvestigators, { name: '', departmentUniversity: '' }]);
//   };

//   // Handle removing a row
//   const handleRemoveRow = (index) => {
//     const newCoInvestigators = [...coInvestigators];
//     newCoInvestigators.splice(index, 1);
//     setCoInvestigators(newCoInvestigators);
//   };

//   // Function to handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent default form behavior

//     if (validate()) {
//       try {
//         const response = await axios.post('/Grant.php', formData, {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           transformRequest: [(data) => {
//             const params = new URLSearchParams();
//             for (const key in data) {
//               params.append(key, data[key]);
//             }
//             return params;
//           }],
//         });
//         alert(response.data);
//         setSubmitted(true); // Set form as submitted
//       } catch (error) {
//         alert('There was an error submitting the form. Please try again.');
//       }
//     }
//   };

//   // Save form data and upload files
//   const handleSave = async () => {
//     if (isSubmitted) {
//       alert('Form data has already been saved.');
//       return; // Prevent further submissions
//     }
  
//     try {
//       const response = await axios.post('/SaveForm.php', formData, {
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
  
//       if (response.data.status === "success") {
//         setIsSubmitted(true);
//         alert('Form saved successfully.');
  
//         const fileUploadResponse = await axios.post('/SaveFileUploads.php', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data', 
//           },
//         });
  
//         if (fileUploadResponse.data.status === "success") {
//           alert('Files uploaded successfully.');
//         } else {
//           alert(fileUploadResponse.data.message); 
//         }
//       } else {
//         alert(response.data.message); 
//       }
//     } catch (error) {
//       console.error("Error details:", error);
//       alert('There was an error saving the data or uploading files. Please try again.');
//     }
//   };

//   // function to navigate to next page
//   const handleNext = async () => {
//     if (validate()) {
//       updateCompletionStatus('supervisors', true);
//       navigate('/uploads'); // Navigate to the uploads page
//     } else {
//       alert('Missing Fields Required.');
//     }
//   };

//   // function to navigate to previous page
//   const handlePrevious = () => {
//     navigate('/project'); // Navigate to the project page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />
      
//       <div className="form-container">
        
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             {coInvestigators.map((investigator, index) => (
//               <div key={index}>
//                 <Form.Group controlId={`formGridInvestigator${index}`}>
//                   <Form.Label>
//                     1. Co-investigator {index + 1} <span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     name="name"
//                     value={investigator.name}
//                     onChange={(e) => handleChange(index, e)}
//                     placeholder="Enter co-investigator's name"
//                     isInvalid={!!formErrors.co_investigators}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {formErrors.co_investigators}
//                   </Form.Control.Feedback>

//                   <Form.Label>
//                     Affiliated Department and University <span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     name="departmentUniversity"
//                     value={investigator.departmentUniversity}
//                     onChange={(e) => handleChange(index, e)}
//                     placeholder="Enter affiliated Department and University"
//                     isInvalid={!!formErrors.co_investigator_departmentUniversity}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {formErrors.co_investigator_departmentUniversity}
//                   </Form.Control.Feedback>

//                   {coInvestigators.length > 1 && (
//                     <Button variant="secondary" size="sm" onClick={() => handleRemoveRow(index)} className="mb-3">
//                       Remove
//                     </Button>
//                   )}
//                 </Form.Group>
//               </div>
//             ))}
//           </Row>


//           <Button variant="secondary" size="sm" onClick={handleAddRow} className="mb-3">
//             Add Row
//           </Button>

//           <Form.Group controlId="formGridforeign">
//             <Form.Label>2. Foreign Collaborators of the Project <span className="text-danger">*</span></Form.Label>              
//             <Form.Control
//               name="foreign_collaborators"
//               value={formData.foreign_collaborators || ''}
//               onChange={handleForeignChange}
//               placeholder="Enter foreign collaborator's Name"
//               isInvalid={!!formErrors.foreign_collaborators}
//             />
//             <Form.Control.Feedback type="invalid">
//               {formErrors.foreign_collaborators}
//             </Form.Control.Feedback>

//             <Form.Label>Affiliated Department and University <span className="text-danger">*</span></Form.Label>
//             <Form.Control
//               name="foreign_collaborator_departmentUniversity"
//               value={formData.foreign_collaborator_departmentUniversity || ''}
//               onChange={handleForeignChange}
//               placeholder="Enter affiliated Department and University"
//               isInvalid={!!formErrors.foreign_collaborator_departmentUniversity}
//             />
//             <Form.Control.Feedback type="invalid">
//               {formErrors.foreign_collaborator_departmentUniversity}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" type="button" onClick={handleSave} className='savebutton'>
//             Save
//           </Button>
//           <Button variant="primary" type="button" onClick={handlePrevious} className='previousbutton'>
//             Previous
//           </Button>
//           <Button variant="primary" type="button" onClick={handleNext} className='nextbutton'>
//             Next
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Grant.css'; // Import the CSS file
import Navbar from '../../Components/Navbar';
import Navbar2 from '../../Components/Navbar2';
import Sidebar from '../../Components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { useForm } from './MainForm'; // Import useForm from your context
import axios from 'axios';

export default function Grant() {
  const { formData, handleFormDataChange, updateCompletionStatus } = useForm(); // Use form context
  const [submitted, setSubmitted] = useState(false); // Define state for form submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({}); // Define state for form errors
  const navigate = useNavigate();
  
  const [coInvestigators, setCoInvestigators] = useState(
    formData.co_investigators || [{ name: '', departmentUniversity: '' }] // Load data from formData or set default
  );

  useEffect(() => {
    // Load existing co-investigators from formData when the component mounts
    if (formData.co_investigators) {
      setCoInvestigators(formData.co_investigators);
    }
  }, [formData.co_investigators]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newCoInvestigators = [...coInvestigators];
    newCoInvestigators[index][name] = value;
    setCoInvestigators(newCoInvestigators); // Update co-investigators state
    handleFormDataChange({ co_investigators: newCoInvestigators }); // Also update the central form data
  };

  // Handle foreign collaborators field change
  const handleForeignChange = (event) => {
    const { name, value } = event.target;
    handleFormDataChange({ [name]: value }); // Update formData for foreign collaborators
  };

  const validate = () => {
    let errors = {};
    // Validation for co-investigators
    if (!coInvestigators[0].name) errors.co_investigators = 'Co-investigators are required.';
    if (!coInvestigators[0].departmentUniversity) 
      errors.co_investigator_departmentUniversity = 'Affiliated Department and University are required.';

    // Validation for foreign collaborators
    if (!formData.foreign_collaborators) errors.foreign_collaborators = 'Foreign collaborators are required.';
    if (!formData.foreign_collaborator_departmentUniversity)
      errors.foreign_collaborator_departmentUniversity = 'Affiliated Department and University for foreign collaborators are required.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle adding new row
  const handleAddRow = () => {
    const newRow = { name: '', departmentUniversity: '' };
    setCoInvestigators([...coInvestigators, newRow]);
  };

  // Handle removing a row
  const handleRemoveRow = (index) => {
    const newCoInvestigators = [...coInvestigators];
    newCoInvestigators.splice(index, 1);
    setCoInvestigators(newCoInvestigators);
  };


 

  // Function to handle form submission
   // Function to handle form submission
  //  const handleSubmit = async () => {
  //   if (validate()) {
  //     try {
  //       const response = await axios.post('/Grant.php', formData, {
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
  //       alert(response.data);
  //       setSubmitted(true); // Set form as submitted
  //     } catch (error) {
  //       alert('There was an error submitting the form. Please try again.');
  //     }
  //   }
  // };

  const handleSubmit = async () => {
    if (validate()) {
      try {
        // First: Submit data to Grant.php
        const grantResponse = await axios.post('/Grant.php', formData, {
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
  
        alert(grantResponse.data.message); // Display response message from Grant.php
  
        // Prepare relevantData for MultipleRows.php
        const relevantData = {
          coInvestigators: coInvestigators, // Include coInvestigators data
        };
  
        // Second: Send filtered data to MultipleRows.php with 'application/json'
        const multipleRowsResponse = await axios.post('/MultipleRows.php', relevantData, {
          headers: {
            'Content-Type': 'application/json', // Use JSON for sending data
          },
        });
  
        alert(multipleRowsResponse.data.message); // Display response message from MultipleRows.php
        setSubmitted(true); // Set form as submitted
  
      } catch (error) {
        alert('There was an error submitting the form. Please try again.');
      }
    }
  };
  
  // Save form data and upload files
  const handleSave = async () => {
    if (isSubmitted) {
      alert('Form data has already been saved.');
      return; // Prevent further submissions
    }

    try {
      const response = await axios.post('/SaveForm.php', formData, {
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

      if (response.data.status === "success") {
        setIsSubmitted(true);
        alert('Form saved successfully.');

        const fileUploadResponse = await axios.post('/SaveFileUploads.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (fileUploadResponse.data.status === "success") {
          alert('Files uploaded successfully.');
        } else {
          alert(fileUploadResponse.data.message);
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error details:", error);
      alert('There was an error saving the data or uploading files. Please try again.');
    }
  };

  // function to navigate to next page
  const handleNext = async () => {
    if (validate()) {
      updateCompletionStatus('supervisors', true);
      navigate('/uploads'); // Navigate to the uploads page
    } else {
      alert('Missing Fields Required.');
    }
  };

  // function to navigate to previous page
  const handlePrevious = () => {
    navigate('/project'); // Navigate to the project page
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Sidebar />
      
      <div className="form-container">
        
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            {coInvestigators.map((investigator, index) => (
              <div key={index}>
                <Form.Group controlId={`formGridInvestigator${index}`}>
                  <Form.Label>
                    1. Co-investigator {index + 1} <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="name"
                    value={investigator.name}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter co-investigator's name"
                    isInvalid={!!formErrors.co_investigators}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.co_investigators}
                  </Form.Control.Feedback>

                  <Form.Label>
                    Affiliated Department and University <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="departmentUniversity"
                    value={investigator.departmentUniversity}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter affiliated Department and University"
                    isInvalid={!!formErrors.co_investigator_departmentUniversity}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.co_investigator_departmentUniversity}
                  </Form.Control.Feedback>

                  {coInvestigators.length > 1 && (
                    <Button variant="secondary" size="sm" onClick={() => handleRemoveRow(index)} className="mb-3">
                      Remove
                    </Button>
                  )}
                </Form.Group>
              </div>
            ))}
          </Row>


          <Button variant="secondary" size="sm" onClick={handleAddRow} className="mb-3">
            Add Row
          </Button>

          <Form.Group controlId="formGridforeign">
            <Form.Label>2. Foreign Collaborators of the Project <span className="text-danger">*</span></Form.Label>              
            <Form.Control
              name="foreign_collaborators"
              value={formData.foreign_collaborators || ''}
              onChange={handleForeignChange}
              placeholder="Enter foreign collaborator's Name"
              isInvalid={!!formErrors.foreign_collaborators}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.foreign_collaborators}
            </Form.Control.Feedback>

            <Form.Label>Affiliated Department and University <span className="text-danger">*</span></Form.Label>
            <Form.Control
              name="foreign_collaborator_departmentUniversity"
              value={formData.foreign_collaborator_departmentUniversity || ''}
              onChange={handleForeignChange}
              placeholder="Enter affiliated Department and University"
              isInvalid={!!formErrors.foreign_collaborator_departmentUniversity}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.foreign_collaborator_departmentUniversity}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="button" onClick={handleSave} className='savebutton'>
            Save
          </Button>
          <Button variant="primary" type="button" onClick={handlePrevious} className='previousbutton'>
            Previous
          </Button>
          <Button variant="primary" type="button" onClick={handleNext} className='nextbutton'>
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
}
// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../../Components/Navbar';
// import Navbar2 from '../../Components/Navbar2';
// import Sidebar from '../../Components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from './MainForm'; // Import useForm from your context
// import axios from 'axios';

// export default function Grant() {
//   const { formData, handleFormDataChange, updateCompletionStatus } = useForm(); // Use form context
//   const [submitted, setSubmitted] = useState(false); // Define state for form submission
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formErrors, setFormErrors] = useState({}); // Define state for form errors
//   const navigate = useNavigate();

//   const [coInvestigators, setCoInvestigators] = useState(
//     Array.isArray(formData.co_investigators) ? formData.co_investigators : [{ name: '', departmentUniversity: '' }]
//   );

//   useEffect(() => {
//     if (Array.isArray(formData.co_investigators)) {
//       setCoInvestigators(formData.co_investigators);
//     }
//   }, [formData.co_investigators]);

//   const handleChange = (index, event) => {
//     const { name, value } = event.target;
//     const newCoInvestigators = [...coInvestigators];
//     newCoInvestigators[index][name] = value;
//     setCoInvestigators(newCoInvestigators); // Update co-investigators state
//     handleFormDataChange({ co_investigators: newCoInvestigators }); // Also update the central form data
//   };

//   // Handle foreign collaborators field change
//   const handleForeignChange = (event) => {
//     const { name, value } = event.target;
//     handleFormDataChange({ [name]: value }); // Update formData for foreign collaborators
//   };

//   const validate = () => {
//     let errors = {};
//     // Validation for all co-investigators
//     coInvestigators.forEach((investigator, index) => {
//       if (!investigator.name) {
//         errors[`co_investigators_${index}`] = 'Co-investigator name is required.';
//       }
//       if (!investigator.departmentUniversity) {
//         errors[`co_investigator_departmentUniversity_${index}`] = 'Affiliated Department and University are required.';
//       }
//     });

//     // Validation for foreign collaborators
//     if (!formData.foreign_collaborators) errors.foreign_collaborators = 'Foreign collaborators are required.';
//     if (!formData.foreign_collaborator_departmentUniversity)
//       errors.foreign_collaborator_departmentUniversity = 'Affiliated Department and University for foreign collaborators are required.';

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // Handle adding new row
//   const handleAddRow = () => {
//     const newRow = { name: '', departmentUniversity: '' };
//     setCoInvestigators([...coInvestigators, newRow]);
//   };

//   // Handle removing a row
//   const handleRemoveRow = (index) => {
//     const newCoInvestigators = [...coInvestigators];
//     newCoInvestigators.splice(index, 1);
//     setCoInvestigators(newCoInvestigators);
//     handleFormDataChange({ co_investigators: newCoInvestigators });
//   };

//   const transformRequest = (data) => {
//     const params = new URLSearchParams();

//     // Serialize each co-investigator as a JSON string
//     data.co_investigators.forEach((investigator, index) => {
//       params.append(`co_investigators[${index}]`, JSON.stringify(investigator));
//     });

//     // Handle other form fields normally
//     for (const key in data) {
//       if (key !== 'co_investigators') {
//         params.append(key, data[key]);
//       }
//     }

//     return params;
//   };

  // // Function to handle form submission
  // const handleSubmit = async (event) => {
  //   event.preventDefault(); // Prevent default form behavior

  //   if (validate()) {
  //     try {
  //       // Submit to Grant.php
  //       const response = await axios.post('/Grant.php', formData, {
  //         transformRequest: [(data) => transformRequest(data)], // Use your function here
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //         },
  //       });

  //       alert(response.data);
  //       setSubmitted(true); // Set form as submitted

  //       // If successful, submit to MultipleForm.php
  //       const multipleFormResponse = await axios.post('/MultipleRows.php', formData, {
  //         transformRequest: [(data) => transformRequest(data)],
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //         },
  //       });

  //       if (multipleFormResponse.data.status === "success") {
  //         alert('Data saved successfully to MultipleForm.');
  //       } else {
  //         alert(multipleFormResponse.data.message);
  //       }

  //     } catch (error) {
  //       alert('There was an error submitting the form. Please try again.');
  //     }
  //   }
  // };

//   // Save form data and upload files
//   const handleSave = async () => {
//     if (isSubmitted) {
//       alert('Form data has already been saved.');
//       return; // Prevent further submissions
//     }

//     try {
//       const response = await axios.post('/SaveForm.php', formData, {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         transformRequest: [(data) => transformRequest(data)],
//       });

//       if (response.data.status === "success") {
//         setIsSubmitted(true);
//         alert('Form saved successfully.');

//         const fileUploadResponse = await axios.post('/SaveFileUploads.php', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         if (fileUploadResponse.data.status === "success") {
//           alert('Files uploaded successfully.');
//         } else {
//           alert(fileUploadResponse.data.message);
//         }
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       console.error("Error details:", error);
//       alert('There was an error saving the data or uploading files. Please try again.');
//     }
//   };

//   // Function to navigate to next page
//   const handleNext = async () => {
//     if (validate()) {
//       updateCompletionStatus('supervisors', true);
//       navigate('/uploads'); // Navigate to the uploads page
//     } else {
//       alert('Missing Fields Required.');
//     }
//   };

//   // Function to navigate to previous page
//   const handlePrevious = () => {
//     navigate('/project'); // Navigate to the project page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />
      
//       <div className="form-container">
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             {coInvestigators.map((investigator, index) => (
//               <div key={index}>
//                 <Form.Group controlId={`formGridInvestigator${index}`}>
//                   <Form.Label>
//                     1. Co-investigator {index + 1} <span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     name="name"
//                     value={investigator.name}
//                     onChange={(e) => handleChange(index, e)}
//                     placeholder="Enter co-investigator's name"
//                     isInvalid={!!formErrors[`co_investigators_${index}`]}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {formErrors[`co_investigators_${index}`]}
//                   </Form.Control.Feedback>

//                   <Form.Label>
//                     Affiliated Department and University <span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     name="departmentUniversity"
//                     value={investigator.departmentUniversity}
//                     onChange={(e) => handleChange(index, e)}
//                     placeholder="Enter affiliated Department and University"
//                     isInvalid={!!formErrors[`co_investigator_departmentUniversity_${index}`]}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {formErrors[`co_investigator_departmentUniversity_${index}`]}
//                   </Form.Control.Feedback>

//                   {coInvestigators.length > 1 && (
//                     <Button variant="secondary" size="sm" onClick={() => handleRemoveRow(index)} className="mb-3">
//                       Remove
//                     </Button>
//                   )}
//                 </Form.Group>
//               </div>
//             ))}
//           </Row>

//           <Button variant="secondary" size="sm" onClick={handleAddRow} className="mb-3">
//             Add Row
//           </Button>

//           <Form.Group controlId="formGridforeign">
//             <Form.Label>2. Foreign Collaborators of the Project <span className="text-danger">*</span></Form.Label>              
//             <Form.Control
//               name="foreign_collaborators"
//               value={formData.foreign_collaborators || ''}
//               onChange={handleForeignChange}
//               placeholder="Enter foreign collaborator's Name"
//               isInvalid={!!formErrors.foreign_collaborators}
//             />
//             <Form.Control.Feedback type="invalid">
//               {formErrors.foreign_collaborators}
//             </Form.Control.Feedback>

//             <Form.Label>Affiliated Department and University <span className="text-danger">*</span></Form.Label>
//             <Form.Control
//               name="foreign_collaborator_departmentUniversity"
//               value={formData.foreign_collaborator_departmentUniversity || ''}
//               onChange={handleForeignChange}
//               placeholder="Enter affiliated Department and University"
//               isInvalid={!!formErrors.foreign_collaborator_departmentUniversity}
//             />
//             <Form.Control.Feedback type="invalid">
//               {formErrors.foreign_collaborator_departmentUniversity}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <div className="form-buttons">

//           <Button variant="primary" type="button" onClick={handleSave} className='savebutton'>
//             Save
//           </Button>
//           <Button variant="primary" onClick={handlePrevious} className="previousbutton">
//             Previous
//           </Button>
//           <Button variant="primary" type="button" onClick={handleNext} className='nextbutton'>
//             Next
//           </Button>
          
            
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// }
