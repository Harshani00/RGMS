
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../../Components/Navbar';
// import Navbar2 from '../../Components/Navbar2';
// import Sidebar from '../../Components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useForm } from './MainForm'; // Import useForm from FormContext (Local Storage Saving)

// export default function Grant() {
//   const { formData, handleFormDataChange, updateCompletionStatus } = useForm(); // Use form context
//   const [formErrors, setFormErrors] = useState({}); // Define state for form errors
//   const [key, setKey] = useState(Date.now()); // Add a key state to force re-render
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
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     if (validate()) {
//       updateCompletionStatus('uploads', true); // Update completion status for uploads

//       const formDataToSend = new FormData();
//       formDataToSend.append('app_ID', formData.app_ID); // Assuming app_ID is in formData

//       formDataToSend.append('projectProposal', formData.projectProposal);
//       formDataToSend.append('projectBudget', formData.projectBudget);
//       formDataToSend.append('projectCV', formData.projectCV);
//       formDataToSend.append('coInvestigatorsCVs', formData.coInvestigatorsCVs);

//       try {
//         const response = await axios.post('/FileUploads.php', formDataToSend, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         console.log('Upload Success:', response.data);
//         alert('Files uploaded successfully!');

//         // Clear the form data and reset the form inputs
//         handleFormDataChange({
//           projectProposal: null,
//           projectBudget: null,
//           projectCV: null,
//           coInvestigatorsCVs: null,
//         });
//         setKey(Date.now()); // Force re-render to clear file inputs

//       } catch (error) {
//         console.error('Upload Error:', error);
//         alert('There was an error uploading the files.');
//       }
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />

//       <div className="form-container">
//         <Form onSubmit={handleSubmit} key={key}> {/* Use the key prop here */}
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

//           <Button variant="primary" onClick={() => navigate('/supervisors')} className="savebutton">
//             Previous
//           </Button>
//           <Button type="submit" variant="primary" className="nextbutton">
//             Submit
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
  const [isSubmitted, setIsSubmitted] = useState(false); 
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

    //Check if each required file input has a value
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

  // Function to handle form submission
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

        const response = await axios.post('/FileUploads.php', formDataToSend, {
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

  // Function to handle save form  
  // const handleSave = async () => {
  //   if (validate()) {
  //     if (isSubmitted) {
  //       alert('Form data has already been submitted.');
  //       return; // Prevent further submissions
  //     }
  
  //     try {
  //       const response = await axios.post('/FileUploads.php', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
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
  //         setIsSubmitted(true); // Mark as submitted
  //         alert('Form saved successfully.');
  //       } else {
  //         alert(response.data.message);
  //       }
  //     } catch (error) {
  //       console.error("Error details:", error);
  //       alert('There was an error saving the data. Please try again.');
  //     }
  //   } else {
  //     alert('Missing Fields Required.');
  //   }
  // };
  const handleSave = async () => {
    if (isSubmitted) {
      alert('Form data has already been saved.');
      return; // Prevent further submissions
    }
  
    try {
      // Save form data to SaveForm.php
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
  
      // Check if the form data was saved successfully
      if (response.data.status === "success") {
        setIsSubmitted(true); // Mark as submitted
        alert('Form saved successfully.');
  
        // Now proceed with file upload to FileUploads.php
        const fileUploadResponse = await axios.post('/SaveFileUploads.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file upload
          },
        });
  
        console.log(fileUploadResponse.data); // Log the file upload response for debugging
  
        // Handle successful file upload
        if (fileUploadResponse.data.status === "success") {
          alert('Files uploaded successfully.');
        } else {
          alert(fileUploadResponse.data.message); // Handle file upload failure
        }
      } else {
        alert(response.data.message); // Handle form save failure
      }
    } catch (error) {
      console.error("Error details:", error);
      alert('There was an error saving the data or uploading files. Please try again.');
    }
  };
  

  // Navigate to the next form page
  const handleNext = async () => {
    if (validate()) {
      updateCompletionStatus('uploads', true);
      navigate('/reviewers'); // Update this path to the correct next page
    } else {
      alert('Missing Fields Required.');
    }
  };

  // Navigate to the previous form page
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
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group controlId="formProjectProposal">
              <Form.Label>1. Upload Project Proposal <span className="text-danger">*</span></Form.Label>
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
              <Form.Label>2. Upload Project Budget <span className="text-danger">*</span></Form.Label>
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
              <Form.Label>3. Upload Project Full CV of the Principal Investigator <span className="text-danger">*</span></Form.Label>
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
              <Form.Label>4. Upload Project two page CVs of all the co-investigators (compile to single pdf) <span className="text-danger">*</span></Form.Label>
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

