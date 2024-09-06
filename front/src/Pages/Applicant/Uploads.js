
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';
// import Navbar2 from '../Components/Navbar2';
// import Sidebar from '../Components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from './MainForm'; // Import useForm from FormContext (Local Storage Saving)
// import axios from 'axios'; // Import axios for HTTP requests

// export default function Grant() {
//   const { formData, handleFormDataChange } = useForm(); // Use form context
//   const [formErrors, setFormErrors] = useState({}); // Define state for form errors
//   const [submitted, setSubmitted] = useState(false); // Define state for form submission
//   const navigate = useNavigate();

//   // Handle file input changes
//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       const file = files[0];
//       handleFormDataChange({ [name]: file }); // Save the file object in the form data
//     }
//   };

//   // Validation function to check required fields
//  // Validation function to check required fields
// const validate = () => {
//   let errors = {};

//   // Check if each required file input has a value
//   if (!formData.projectProposal || !(formData.projectProposal instanceof File)) {
//     errors.projectProposal = 'Project Proposal is required.';
//   }

//   if (!formData.projectBudget || !(formData.projectBudget instanceof File)) {
//     errors.projectBudget = 'Project Budget is required.';
//   }

//   if (!formData.projectCV || !(formData.projectCV instanceof File)) {
//     errors.projectCV = 'Project CV is required.';
//   }

//   if (!formData.coInvestigatorsCVs || !(formData.coInvestigatorsCVs instanceof File)) {
//     errors.coInvestigatorsCVs = 'Co-investigators CVs are required.';
//   }

//   setFormErrors(errors);
//   return Object.keys(errors).length === 0; // Return true if no errors
// };


//   // Handle form submission
//   const handleSubmit = async () => {
//     if (validate()) {
//       try {
//         const formDataToSend = new FormData();
//         for (const key in formData) {
//           if (formData[key] instanceof File) {
//             formDataToSend.append(key, formData[key]);
//           } else {
//             formDataToSend.append(key, formData[key]);
//           }
//         }
//         // Log FormData for debugging
//       for (let [key, value] of formDataToSend.entries()) {
//         console.log(key, value);
//       }

//         const response = await axios.post('http://localhost:8080/test/Grant.php', formDataToSend, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         alert(response.data);
//         setSubmitted(true); // Set form as submitted
//       } catch (error) {
//         alert('There was an error submitting the form. Please try again.');
//       }
//     }
//   };

//   // Handle Save button
//   const handleSave = async () => {
//     const isValid = validate(); // Validate form
//     if (isValid) {
//       await handleSubmit(); // Submit form data if valid
//     }
//   };

//   // Navigate to the next form step
//   const handleNext = async () => {
//     if (validate()) {
//       navigate('/reviewers'); // Update this path to the correct previous page
//     }else {
//       alert('Missing Fields Required.');
//     }
//   };
  
  

//   // Navigate to the previous form step
//   const handlePrevious = () => {
//     navigate('/supervisors'); // Navigate to the supervisors page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />
      
//       <div className="form-container">
       
      
//         <Form>
//           <Row className="mb-3">
//             <Form.Group controlId="formProjectProposal">
//               <Form.Label>1. Upload Project Proposal</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectProposal"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectProposal}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectProposal}
//               </Form.Control.Feedback>
//               {formData.projectProposal instanceof File && (
//                 <a href={URL.createObjectURL(formData.projectProposal)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project Proposal
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formProjectBudget">
//               <Form.Label>2. Upload Project Budget</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectBudget"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectBudget}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectBudget}
//               </Form.Control.Feedback>
//               {formData.projectBudget instanceof File && (
//                 <a href={URL.createObjectURL(formData.projectBudget)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project Budget
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formProjectCV">
//               <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectCV"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectCV}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectCV}
//               </Form.Control.Feedback>
//               {formData.projectCV instanceof File && (
//                 <a href={URL.createObjectURL(formData.projectCV)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project CV
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formCoInvestigatorsCVs">
//               <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="coInvestigatorsCVs"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.coInvestigatorsCVs}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.coInvestigatorsCVs}
//               </Form.Control.Feedback>
//               {formData.coInvestigatorsCVs instanceof File && (
//                 <a href={URL.createObjectURL(formData.coInvestigatorsCVs)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Co-investigators' CVs
//                 </a>
//               )}
//             </Form.Group>
//           </Row>

//           <Button variant="primary" onClick={handleSave} type="button" className='savebutton'>
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
// import { useForm } from './MainForm'; // Import useForm from FormContext (Local Storage Saving)
// import axios from 'axios'; // Import axios for HTTP requests

// export default function Grant() {
//   const { formData, handleFormDataChange } = useForm(); // Use form context
//   const [formErrors, setFormErrors] = useState({}); // Define state for form errors
//   const [submitted, setSubmitted] = useState(false); // Define state for form submission
//   const navigate = useNavigate();

//   // Handle file input changes
//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       const file = files[0];
//       handleFormDataChange({ [name]: file }); // Save the file object in the form data
//     }
//   };

//   // Validation function to check required fields
//   const validate = () => {
//     let errors = {};

//     // Check if each required file input has a value
//     if (!formData.projectProposal || !(formData.projectProposal instanceof File)) {
//       errors.projectProposal = 'Project Proposal is required.';
//     }

//     if (!formData.projectBudget || !(formData.projectBudget instanceof File)) {
//       errors.projectBudget = 'Project Budget is required.';
//     }

//     if (!formData.projectCV || !(formData.projectCV instanceof File)) {
//       errors.projectCV = 'Project CV is required.';
//     }

//     if (!formData.coInvestigatorsCVs || !(formData.coInvestigatorsCVs instanceof File)) {
//       errors.coInvestigatorsCVs = 'Co-investigators CVs are required.';
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0; // Return true if no errors
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     if (validate()) {
//       try {
//         const formDataToSend = new FormData();
//         for (const key in formData) {
//           if (formData[key] instanceof File) {
//             formDataToSend.append(key, formData[key]);
//           } else {
//             formDataToSend.append(key, formData[key]);
//           }
//         }

//         const response = await axios.post('/test/Grant.php', formDataToSend, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         alert(response.data);
//         setSubmitted(true); // Set form as submitted
//       } catch (error) {
//         alert('There was an error submitting the form. Please try again.');
//       }
//     }
//   };

//   // Handle Save button
//   const handleSave = async () => {
//     const isValid = validate(); // Validate form
//     if (isValid) {
//       await handleSubmit(); // Submit form data if valid
//     }
//   };

//   // Navigate to the next form step
//   const handleNext = async () => {
//     if (validate()) {
//       navigate('/reviewers'); // Update this path to the correct previous page
//     } else {
//       alert('Missing Fields Required.');
//     }
//   };

//   // Navigate to the previous form step
//   const handlePrevious = () => {
//     navigate('/supervisors'); // Navigate to the supervisors page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />

//       <div className="form-container">
//         <Form>
//           <Row className="mb-3">
//             <Form.Group controlId="formProjectProposal">
//               <Form.Label>1. Upload Project Proposal</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectProposal"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectProposal}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectProposal}
//               </Form.Control.Feedback>
//               {formData.projectProposal instanceof File && (
//                 <a href={URL.createObjectURL(formData.projectProposal)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project Proposal
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formProjectBudget">
//               <Form.Label>2. Upload Project Budget</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectBudget"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectBudget}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectBudget}
//               </Form.Control.Feedback>
//               {formData.projectBudget instanceof File && (
//                 <a href={URL.createObjectURL(formData.projectBudget)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project Budget
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formProjectCV">
//               <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectCV"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectCV}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectCV}
//               </Form.Control.Feedback>
//               {formData.projectCV instanceof File && (
//                 <a href={URL.createObjectURL(formData.projectCV)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Project CV
//                 </a>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formCoInvestigatorsCVs">
//               <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="coInvestigatorsCVs"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.coInvestigatorsCVs}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.coInvestigatorsCVs}
//               </Form.Control.Feedback>
//               {formData.coInvestigatorsCVs instanceof File && (
//                 <a href={URL.createObjectURL(formData.coInvestigatorsCVs)} target="_blank" rel="noopener noreferrer">
//                   View Uploaded Co-investigators' CVs
//                 </a>
//               )}
//             </Form.Group>
//           </Row>

//           <Button variant="primary" onClick={handleSave} type="button" className="savebutton">
//             Save
//           </Button>
//           <Button variant="primary" onClick={handlePrevious} className="previousbutton">
//             Previous
//           </Button>
//           <Button variant="primary" onClick={handleNext} className="nextbutton">
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
// import { useForm } from './MainForm'; // Import useForm from FormContext (Local Storage Saving)
// import axios from 'axios'; // Import axios for HTTP requests

// export default function Grant() {
//   const { formData, handleFormDataChange } = useForm(); // Use form context
//   const [formErrors, setFormErrors] = useState({}); // Define state for form errors
//   const [submitted, setSubmitted] = useState(false); // Define state for form submission
//   const navigate = useNavigate();

//   // Handle file input changes
//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       const file = files[0];
//       handleFormDataChange({ [name]: file }); // Save the file object in the form data
//     }
//   };

//   // Validation function to check required fields
//   const validate = () => {
//     let errors = {};

//     // Check if each required file input has a value
//     if (!formData.projectProposal || !(formData.projectProposal instanceof File)) {
//       errors.projectProposal = 'Project Proposal is required.';
//     }

//     if (!formData.projectBudget || !(formData.projectBudget instanceof File)) {
//       errors.projectBudget = 'Project Budget is required.';
//     }

//     if (!formData.projectCV || !(formData.projectCV instanceof File)) {
//       errors.projectCV = 'Project CV is required.';
//     }

//     if (!formData.coInvestigatorsCVs || !(formData.coInvestigatorsCVs instanceof File)) {
//       errors.coInvestigatorsCVs = 'Co-investigators CVs are required.';
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0; // Return true if no errors
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     if (validate()) {
//       try {
//         const formDataToSend = new FormData();
//         for (const key in formData) {
//           if (formData[key] instanceof File) {
//             formDataToSend.append(key, formData[key]);
//           } else {
//             formDataToSend.append(key, formData[key]);
//           }
//         }
        
//         // Debugging: Log FormData entries
//         for (let pair of formDataToSend.entries()) {
//           console.log(pair[0]+ ', ' + pair[1]);
//         }
  
//         const response = await axios.post('/test/Grant.php', formDataToSend, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
  
//         alert(response.data);
//         setSubmitted(true); // Set form as submitted
//       } catch (error) {
//         alert('There was an error submitting the form. Please try again.');
//       }
//     }
//   };
  
//   // Handle Save button
//   const handleSave = async () => {
//     const isValid = validate(); // Validate form
//     if (isValid) {
//       await handleSubmit(); // Submit form data if valid
//     }
//   };

//   // Navigate to the next form step
//   const handleNext = async () => {
//     if (validate()) {
//       navigate('/reviewers'); // Update this path to the correct previous page
//     } else {
//       alert('Missing Fields Required.');
//     }
//   };

//   // Navigate to the previous form step
//   const handlePrevious = () => {
//     navigate('/supervisors'); // Navigate to the supervisors page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />

//       <div className="form-container">
//         <Form>
//           <Row className="mb-3">
//             <Form.Group controlId="formProjectProposal">
//               <Form.Label>1. Upload Project Proposal</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectProposal"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectProposal}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectProposal}
//               </Form.Control.Feedback>
//               {formData.projectProposal && (
//                 <div className="file-name">
//                   {formData.projectProposal.name}
//                 </div>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formProjectBudget">
//               <Form.Label>2. Upload Project Budget</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectBudget"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectBudget}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectBudget}
//               </Form.Control.Feedback>
//               {formData.projectBudget && (
//                 <div className="file-name">
//                   {formData.projectBudget.name}
//                 </div>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formProjectCV">
//               <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectCV"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectCV}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectCV}
//               </Form.Control.Feedback>
//               {formData.projectCV && (
//                 <div className="file-name">
//                   {formData.projectCV.name}
//                 </div>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formCoInvestigatorsCVs">
//               <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="coInvestigatorsCVs"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.coInvestigatorsCVs}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.coInvestigatorsCVs}
//               </Form.Control.Feedback>
//               {formData.coInvestigatorsCVs && (
//                 <div className="file-name">
//                   {formData.coInvestigatorsCVs.name}
//                 </div>
//               )}
//             </Form.Group>
//           </Row>

//           <Button variant="primary" onClick={handleSave} type="button" className="savebutton">
//             Save
//           </Button>
//           <Button variant="primary" onClick={handlePrevious} className="previousbutton">
//             Previous
//           </Button>
//           <Button variant="primary" onClick={handleNext} className="nextbutton">
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
// import { useForm } from './MainForm'; // Import useForm from FormContext (Local Storage Saving)
// import axios from 'axios'; // Import axios for HTTP requests

// export default function Grant() {
//   const { formData, handleFormDataChange } = useForm(); // Use form context
//   const [formErrors, setFormErrors] = useState({}); // Define state for form errors
//   const [submitted, setSubmitted] = useState(false); // Define state for form submission
//   const navigate = useNavigate();

//   // Handle file input changes
//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       handleFormDataChange({ [name]: files[0] }); // Save the file object in the form data
//     }
//   };

//   // Validation function to check required fields
//   const validate = () => {
//     let errors = {};

//     // Check if each required file input has a value
//     if (!formData.projectProposal || !(formData.projectProposal instanceof File)) {
//       errors.projectProposal = 'Project Proposal is required.';
//     }

//     if (!formData.projectBudget || !(formData.projectBudget instanceof File)) {
//       errors.projectBudget = 'Project Budget is required.';
//     }

//     if (!formData.projectCV || !(formData.projectCV instanceof File)) {
//       errors.projectCV = 'Project CV is required.';
//     }

//     if (!formData.coInvestigatorsCVs || !(formData.coInvestigatorsCVs instanceof File)) {
//       errors.coInvestigatorsCVs = 'Co-investigators CVs are required.';
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0; // Return true if no errors
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     if (validate()) {
//       try {
//         const formDataToSend = new FormData();
//         for (const key in formData) {
//           if (formData[key] instanceof File) {
//             // Extract filename and send as string
//             formDataToSend.append(key, formData[key].name);
//           } else {
//             formDataToSend.append(key, formData[key]);
//           }
//         }
        
//         // Debugging: Log FormData entries
//         for (let pair of formDataToSend.entries()) {
//           console.log(pair[0]+ ', ' + pair[1]);
//         }
  
//         const response = await axios.post('/Grant.php', formDataToSend, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
  
//         alert(response.data);
//         setSubmitted(true); // Set form as submitted
//       } catch (error) {
//         alert('There was an error submitting the form. Please try again.');
//       }
//     }
//   };
  
//   // Handle Save button
//   const handleSave = async () => {
//     const isValid = validate(); // Validate form
//     if (isValid) {
//       await handleSubmit(); // Submit form data if valid
//     }
//   };

//   // Navigate to the next form step
//   const handleNext = async () => {
//     if (validate()) {
//       navigate('/reviewers'); // Update this path to the correct previous page
//     } else {
//       alert('Missing Fields Required.');
//     }
//   };

//   // Navigate to the previous form step
//   const handlePrevious = () => {
//     navigate('/supervisors'); // Navigate to the supervisors page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />

//       <div className="form-container">
//         <Form>
//           <Row className="mb-3">
//             <Form.Group controlId="formProjectProposal">
//               <Form.Label>1. Upload Project Proposal</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectProposal"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectProposal}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectProposal}
//               </Form.Control.Feedback>
//               {formData.projectProposal && (
//                 <div className="file-name">
//                   {formData.projectProposal.name}
//                 </div>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formProjectBudget">
//               <Form.Label>2. Upload Project Budget</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectBudget"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectBudget}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectBudget}
//               </Form.Control.Feedback>
//               {formData.projectBudget && (
//                 <div className="file-name">
//                   {formData.projectBudget.name}
//                 </div>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formProjectCV">
//               <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="projectCV"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.projectCV}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.projectCV}
//               </Form.Control.Feedback>
//               {formData.projectCV && (
//                 <div className="file-name">
//                   {formData.projectCV.name}
//                 </div>
//               )}
//             </Form.Group>

//             <Form.Group controlId="formCoInvestigatorsCVs">
//               <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="coInvestigatorsCVs"
//                 onChange={handleFileChange}
//                 isInvalid={!!formErrors.coInvestigatorsCVs}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.coInvestigatorsCVs}
//               </Form.Control.Feedback>
//               {formData.coInvestigatorsCVs && (
//                 <div className="file-name">
//                   {formData.coInvestigatorsCVs.name}
//                 </div>
//               )}
//             </Form.Group>
//           </Row>

//           <Button variant="primary" onClick={handleSave} type="button" className="savebutton">
//             Save
//           </Button>
//           <Button variant="primary" onClick={handlePrevious} className="previousbutton">
//             Previous
//           </Button>
//           <Button variant="primary" onClick={handleNext} className="nextbutton">
//             Next
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Grant.css'; // Import the CSS file
import Navbar from '../../Components/Navbar';
import Navbar2 from '../../Components/Navbar2';
import Sidebar from '../../Components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { useForm } from './MainForm'; // Import useForm from FormContext (Local Storage Saving)
import axios from 'axios'; // Import axios for HTTP requests

export default function Grant() {
  const { formData, handleFormDataChange,updateCompletionStatus } = useForm(); // Use form context
  const [formErrors, setFormErrors] = useState({}); // Define state for form errors
  const [submitted, setSubmitted] = useState(false); // Define state for form submission
  const navigate = useNavigate();

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      handleFormDataChange({ [name]: files[0] }); // Save the file object in the form data
    }
  };

  // Validation function to check required fields
  const validate = () => {
    let errors = {};

    // Check if each required file input has a value
    if (!formData.projectProposal || !(formData.projectProposal instanceof File)) {
      errors.projectProposal = 'Project Proposal is required.';
    }

    if (!formData.projectBudget || !(formData.projectBudget instanceof File)) {
      errors.projectBudget = 'Project Budget is required.';
    }

    if (!formData.projectCV || !(formData.projectCV instanceof File)) {
      errors.projectCV = 'Project CV is required.';
    }

    if (!formData.coInvestigatorsCVs || !(formData.coInvestigatorsCVs instanceof File)) {
      errors.coInvestigatorsCVs = 'Co-investigators CVs are required.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (validate()) {
      try {
        const formDataToSend = new FormData();
        for (const key in formData) {
          if (formData[key] instanceof File) {
            // Extract filename and send as string
            formDataToSend.append(key, formData[key]);
          } else {
            formDataToSend.append(key, formData[key]);
          }
        }

        // Debugging: Log FormData entries
        for (let pair of formDataToSend.entries()) {
          console.log(pair[0] + ', ' + pair[1]);
        }

        const response = await axios.post('/Grant.php', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        alert(response.data);
        setSubmitted(true); // Set form as submitted
      } catch (error) {
        alert('There was an error submitting the form. Please try again.');
      }
    }
  };

  // Handle Save button
  const handleSave = async () => {
    const isValid = validate(); // Validate form
    if (isValid) {
      await handleSubmit(); // Submit form data if valid
    }
  };

  // Navigate to the next form step
  const handleNext = async () => {
    if (validate()) {
      updateCompletionStatus('uploads', true);
      navigate('/reviewers'); // Update this path to the correct next page
    } else {
      alert('Missing Fields Required.');
    }
  };

  // Navigate to the previous form step
  const handlePrevious = () => {
    navigate('/supervisors'); // Navigate to the previous page
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Sidebar />

      <div className="form-container">
        {submitted && (
          <div className="alert alert-success" role="alert">
            Form submitted successfully!
          </div>
        )}
        <Form>
          <Row className="mb-3">
            <Form.Group controlId="formProjectProposal">
              <Form.Label>1. Upload Project Proposal</Form.Label>
              <Form.Control
                type="file"
                name="projectProposal"
                onChange={handleFileChange}
                isInvalid={!!formErrors.projectProposal}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.projectProposal}
              </Form.Control.Feedback>
              {formData.projectProposal && (
                <div className="file-name">
                  {formData.projectProposal.name}
                </div>
              )}
            </Form.Group>

            <Form.Group controlId="formProjectBudget">
              <Form.Label>2. Upload Project Budget</Form.Label>
              <Form.Control
                type="file"
                name="projectBudget"
                onChange={handleFileChange}
                isInvalid={!!formErrors.projectBudget}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.projectBudget}
              </Form.Control.Feedback>
              {formData.projectBudget && (
                <div className="file-name">
                  {formData.projectBudget.name}
                </div>
              )}
            </Form.Group>

            <Form.Group controlId="formProjectCV">
              <Form.Label>3. Upload Project Full CV of the Principal Investigator</Form.Label>
              <Form.Control
                type="file"
                name="projectCV"
                onChange={handleFileChange}
                isInvalid={!!formErrors.projectCV}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.projectCV}
              </Form.Control.Feedback>
              {formData.projectCV && (
                <div className="file-name">
                  {formData.projectCV.name}
                </div>
              )}
            </Form.Group>

            <Form.Group controlId="formCoInvestigatorsCVs">
              <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf)</Form.Label>
              <Form.Control
                type="file"
                name="coInvestigatorsCVs"
                onChange={handleFileChange}
                isInvalid={!!formErrors.coInvestigatorsCVs}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.coInvestigatorsCVs}
              </Form.Control.Feedback>
              {formData.coInvestigatorsCVs && (
                <div className="file-name">
                  {formData.coInvestigatorsCVs.name}
                </div>
              )}
            </Form.Group>
          </Row>

          <Button variant="primary" onClick={handleSave} type="button" className="savebutton">
            Save
          </Button>
          <Button variant="primary" onClick={handlePrevious} className="previousbutton">
            Previous
          </Button>
          <Button variant="primary" onClick={handleNext} className="nextbutton">
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
}
