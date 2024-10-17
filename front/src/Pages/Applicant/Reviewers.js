import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Grant.css'; // Import the CSS file
import Navbar from '../../Components/Navbar';
import Navbar2 from '../../Components/Navbar2';
import Sidebar from '../../Components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { useForm } from './MainForm'; // Import useForm from FormContext
import axios from 'axios'; // Import axios for HTTP requests

export default function Grant() {
  const { formData, handleFormDataChange, resetFormData, updateCompletionStatus } = useForm();
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // Track form submission
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleFormDataChange({ [name]: value });
  };

  // Validation function to check required fields
  const validate = () => {
    let errors = {};

    if (!formData.reviewer1Name) errors.reviewer1Name = 'Reviewer 1 Name is required.';
    if (!formData.reviewer2Name) errors.reviewer2Name = 'Reviewer 2 Name is required.';
    if (!formData.reviewer3Name) errors.reviewer3Name = 'Reviewer 3 Name is required.';
    if (!formData.reviewer1Email) errors.reviewer1Email = 'Reviewer 1 Email is required.';
    if (!formData.reviewer2Email) errors.reviewer2Email = 'Reviewer 2 Email is required.';
    if (!formData.reviewer3Email) errors.reviewer3Email = 'Reviewer 3 Email is required.';
    if (!formData.reviewer1Affiliation) errors.reviewer1Affiliation = 'Reviewer 1 Affiliation is required.';
    if (!formData.reviewer2Affiliation) errors.reviewer2Affiliation = 'Reviewer 2 Affiliation is required.';
    if (!formData.reviewer3Affiliation) errors.reviewer3Affiliation = 'Reviewer 3 Affiliation is required.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Function to Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run validation first
    const isValid = validate();

    if (!isValid) {
        // Generate a list of missing fields if validation fails
        const missingFields = Object.keys(formErrors).map(key => {
            const fieldLabel = key.replace(/([A-Z])/g, ' $1').trim(); // Convert camelCase to space-separated
            return fieldLabel;
        }).join(', ');

        // Display an alert with the missing fields
        window.alert(`Missing Required Fields: ${missingFields}`);
        setSubmitted(false); // Ensure not submitted if validation fails
        return; // Exit the function early to prevent submission
    }

    // Proceed with form submission if validation passes
    try {
        const response = await axios.post('/Grant.php', formData, {
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

        console.log(response.data); // Log the response for debugging

        if (response.data.status === "success") {
            setSubmitted(true); // Set form as submitted only on success
            window.alert(response.data.message);

            // Clear form data and local storage
            localStorage.removeItem('formData');
            resetFormData(); // Reset formData to initial state

        } else {
            window.alert('Form submission failed. Please try again.');
        }
    } catch (error) {
        console.error('There was an error submitting the form:', error);
        window.alert('There was an error submitting the form. Please try again.');
    }
  };

 // Function to navigate to the next page
  const handlePrevious = () => {
    navigate('/uploads'); // Navigate to the previous page
  };

  // const handleSave = async () => {
  //   if (validate()) {
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
  
  
  // const handleFinish = async (e) => {
  //   e.preventDefault(); // Prevent default form submission behavior
  //   const isValid = validate(); // Validate form
  //   if (isValid) {
  //     updateCompletionStatus('reviewers', true);
  //     await handleSubmit(e); // Pass the event object to handleSubmit
  //   } else {
  //     window.alert('Missing Fields Required.');
  //   }
  // };

  //////////

   // Function to handle form submission (Finish and Submit)
  // const handleFinish = async (e) => {  // handle Finish and Submit Action in the From
  //   e.preventDefault(); // Prevent default form submission behavior
  
  //   // Validate the form
  //   const isValid = validate(); 
  
  //   if (isValid) {
  //     try {
  //       // Submit the grant form data to Grant.php
  //       const grantResponse = await axios.post('/Grant.php', formData, {  // Store the grant response data in grantResponse variable
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded', // Send the from data to Grant.php using hhtp POST request via axios
  //         },
  //         transformRequest: [(data) => {
  //           const params = new URLSearchParams();
  //           for (const key in data) {
  //             params.append(key, data[key]);
  //           }
  //           return params;
  //         }],
  //       });
  
  //       console.log(grantResponse.data); // Log the response for debugging
  
  //       if (grantResponse.data.status === "success") {
  //         // Call updateCompletionStatus for the reviewers form
  //         updateCompletionStatus('reviewers', true);
  
  //         // Proceed to submit the files to FileUploads.php
  //         const fileUploadResponse = await axios.post('/FileUploads.php', formData, { // Send the from data to FileUploads.php using hhtp POST request via axios and  Store the upload response data in grantResponse variable
  //           headers: {
  //             'Content-Type': 'multipart/form-data', // the content type is set to multipart/form-data, which is suitable for file uploads.
  //           },
  //         });
  
  //         console.log(fileUploadResponse.data); // Log the response for debugging
  
  //         if (fileUploadResponse.data.status === "success") {
  //           // Handle successful file upload
  //           window.alert('All forms submitted successfully!');
  
  //           // Clear form data and local storage
  //           localStorage.removeItem('formData');
  //           resetFormData(); // Reset formData to initial state
  //           setSubmitted(true); // Set form as submitted only on success
  //         } else {
  //           window.alert('File upload failed. Please try again.');
  //         }
  //       } else {
  //         window.alert('Grant form submission failed. Please Fill all the Required Fields.');
  //       }
  //     } catch (error) {
  //       console.error('There was an error submitting the form:', error);
  //       window.alert('There was an error submitting the form. Please try again.');
  //     }
  //   } else {
  //     window.alert('Missing Required Fields.');
  //   }
  // };
  // const handleFinish = async (e) => {
  //   e.preventDefault(); // Prevent default form submission behavior
  
  //   const isValid = validate(); // Validate the form
  
  //   if (isValid) {
  //     try {
  //       // Step 1: Submit the grant form data to Grant.php
  //       const grantResponse = await axios.post('/Grant.php', formData, {  // Store the grant response data in grantResponse variable
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded', // Send the form data to Grant.php using POST request via axios
  //         },
  //         transformRequest: [(data) => {
  //           const params = new URLSearchParams();
  //           for (const key in data) {
  //             params.append(key, data[key]);
  //           }
  //           return params;
  //         }],
  //       });
  
  //       console.log(grantResponse.data); // Log the response for debugging
  
  //       if (grantResponse.data.status === "success") {
  //         // Call updateCompletionStatus for the reviewers form
  //         updateCompletionStatus('reviewers', true);
  
  //         // Step 2: Proceed to submit the files to FileUploads.php
  //         const fileUploadResponse = await axios.post('/FileUploads.php', formData, { // Send the form data to FileUploads.php using POST request via axios and store the upload response data
  //           headers: {
  //             'Content-Type': 'multipart/form-data', // The content type is set to multipart/form-data, which is suitable for file uploads
  //           },
  //         });
  
  //         console.log(fileUploadResponse.data); // Log the response for debugging
  
  //         if (fileUploadResponse.data.status === "success") {
  //           // Step 3: Submit data to MultipleRows.php using JSON
  //           const multipleRowsResponse = await axios.post('/MultipleRows.php', formData, { // Send form data to MultipleRows.php using POST request
  //             headers: {
  //               'Content-Type': 'application/json', // Set content type to JSON for MultipleRows.php
  //             },
  //           });
  
  //           console.log(multipleRowsResponse.data); // Log the response for debugging
  
  //           if (multipleRowsResponse.data.status === "success") {
  //             // Handle successful submissions
  //             window.alert('All forms and files submitted successfully!');
  
  //             // Clear form data and local storage
  //             localStorage.removeItem('formData');
  //             resetFormData(); // Reset formData to initial state
  //             setSubmitted(true); // Set form as submitted only on success
  //           } else {
  //             window.alert('Submission to MultipleRows.php failed. Please try again.');
  //           }
  //         } else {
  //           window.alert('File upload failed. Please try again.');
  //         }
  //       } else {
  //         window.alert('Grant form submission failed. Please fill all the required fields.');
  //       }
  //     } catch (error) {
  //       console.error('There was an error submitting the form:', error);
  //       window.alert('There was an error submitting the form. Please try again.');
  //     }
  //   } else {
  //     window.alert('Missing required fields.');
  //   }
  // };
  const handleFinish = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    const isValid = validate(); // Validate the form
  
    if (isValid) {
      try {
        // Step 1: Submit the grant form data to Grant.php
        const grantResponse = await axios.post('/Grant.php', formData, { // Store the grant response data in grantResponse variable
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Send the form data to Grant.php using POST request via axios
          },
          transformRequest: [(data) => {
            const params = new URLSearchParams();
            for (const key in data) {
              params.append(key, data[key]);
            }
            return params;
          }],
        });
  
        console.log(grantResponse.data); // Log the response for debugging
  
        if (grantResponse.data.status === "success") {
          // Call updateCompletionStatus for the reviewers form
          updateCompletionStatus('reviewers', true);
  
          // Step 2: Proceed to submit the files to FileUploads.php
          const fileUploadResponse = await axios.post('/FileUploads.php', formData, { // Send the form data to FileUploads.php using POST request via axios and store the upload response data
            headers: {
              'Content-Type': 'multipart/form-data', // The content type is set to multipart/form-data, which is suitable for file uploads
            },
          });
  
          console.log(fileUploadResponse.data); // Log the response for debugging
  
          if (fileUploadResponse.data.status === "success") {
            // Step 3: Filter out only the relevant data (grantRows and fundingRows)
            const relevantData = {
              grantRows: formData.grantRows,
              fundingRows: formData.fundingRows,
            
            };
  
            // Step 4: Submit the filtered data to MultipleRows.php using JSON
            const multipleRowsResponse = await axios.post('/MultipleRows.php', relevantData, { // Send relevant form data to MultipleRows.php using POST request
              headers: {
                'Content-Type': 'application/json', // Set content type to JSON for MultipleRows.php
              },
            });
  
            console.log(multipleRowsResponse.data); // Log the response for debugging
  
            // if (multipleRowsResponse.data.status === "success") {
            //   window.alert('All forms and files submitted successfully!');
            //   localStorage.removeItem('formData');
            //   resetFormData(); // Reset formData to initial state
            //   setSubmitted(true); // Set form as submitted only on success
            // } else {
            //   //console.error('Error from server:', multipleRowsResponse.data.error); // Log server error
            //   window.alert('Submission to MultipleRows.php failed: ' + multipleRowsResponse.data.error);
            // }
            if (multipleRowsResponse.data.status === "success") {
              window.alert('All forms and files submitted successfully!');
              localStorage.removeItem('formData');
              resetFormData(); // Reset formData to initial state
              setSubmitted(true); // Set form as submitted only on success
          } else {
              // Log the error returned from the server for debugging
              console.error('Error from server:', multipleRowsResponse.data.message);
              window.alert('Submission to MultipleRows.php failed: ' + multipleRowsResponse.data.message);
          }
          
              
          } else {
            window.alert('File upload failed. Please try again.');
          }
        } else {
          window.alert('Grant form submission failed. Please fill all the required fields.');
        }
      } catch (error) {
        console.error('There was an error submitting the form:', error);
        window.alert('There was an error submitting the form. Please try again.');
      }
    } else {
      window.alert('Missing required fields.');
    }
  };
  
  // const handleFinish = async (e) => {  
  //   e.preventDefault(); 
    
  //   const isValid = validate(); 
    
  //   if (isValid) {
  //     try {
  //       // Submit the grant form data to Grant.php
  //       const grantResponse = await axios.post('/Grant.php', formData, {  
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
    
  //       console.log(grantResponse.data); 
    
  //       if (grantResponse.data.status === "success") {
  //         // Call updateCompletionStatus for the reviewers form
  //         updateCompletionStatus('reviewers', true);
  
  //         // Handle successful submission
  //         window.alert('Grant form submitted successfully!');
  
  //         // Clear form data and local storage
  //         localStorage.removeItem('formData');
  //         resetFormData(); // Reset formData to initial state
  //         setSubmitted(true); // Set form as submitted only on success
  //       } else {
  //         window.alert('Grant form submission failed. Please try again.');
  //       }
  //     } catch (error) {
  //       console.error('There was an error submitting the form:', error);
  //       window.alert('There was an error submitting the form. Please try again.');
  //     }
  //   } else {
  //     window.alert('Missing Required Fields.');
  //   }
  // };
  

  // Navigate to the next form step
 
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
    <Form.Label>
      *Names & Affiliations of 3 Reviewers of the research proposal (preferably from other faculties/outside institutions)
    </Form.Label>

    {/* Reviewer 1 Details */}
    <Col md={4}>
      <Form.Group controlId="formGridReviewer1">
        <Form.Label> Reviewer 1 <span className="text-danger">*</span></Form.Label><br></br>
        <Form.Label>1. Name</Form.Label>
        <Form.Control
          name="reviewer1Name"
          value={formData.reviewer1Name || ''}
          placeholder="Reviewer 1"
          className="form-control"
          onChange={handleInputChange}
          isInvalid={!!formErrors.reviewer1Name}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.reviewer1Name}
        </Form.Control.Feedback>

        <Form.Label>2. Email</Form.Label>
        <Form.Control
          name="reviewer1Email"
          value={formData.reviewer1Email || ''}
          placeholder="Reviewer 1: Email"
          className="form-control"
          onChange={handleInputChange}
          isInvalid={!!formErrors.reviewer1Email}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.reviewer1Email}
        </Form.Control.Feedback>

        <Form.Label>3. Affiliation</Form.Label>
        <Form.Control
          name="reviewer1Affiliation"
          value={formData.reviewer1Affiliation || ''}
          placeholder="Reviewer 1: Affiliation"
          className="form-control"
          onChange={handleInputChange}
          isInvalid={!!formErrors.reviewer1Affiliation}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.reviewer1Affiliation}
        </Form.Control.Feedback>
      </Form.Group>
    </Col>

    {/* Reviewer 2 Details */}
    <Col md={4}>
      <Form.Group controlId="formGridReviewer2">
        <Form.Label>Reviewer 2 <span className="text-danger">*</span></Form.Label><br></br>
        <Form.Label>1. Name</Form.Label>
        <Form.Control
          name="reviewer2Name"
          value={formData.reviewer2Name || ''}
          placeholder="Reviewer 2"
          className="form-control"
          onChange={handleInputChange}
          isInvalid={!!formErrors.reviewer2Name}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.reviewer2Name}
        </Form.Control.Feedback>

        <Form.Label>2. Email</Form.Label>
        <Form.Control
          name="reviewer2Email"
          value={formData.reviewer2Email || ''}
          placeholder="Reviewer 2: Email"
          className="form-control"
          onChange={handleInputChange}
          isInvalid={!!formErrors.reviewer2Email}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.reviewer2Email}
        </Form.Control.Feedback>

        <Form.Label>3. Affiliation</Form.Label>
        <Form.Control
          name="reviewer2Affiliation"
          value={formData.reviewer2Affiliation || ''}
          placeholder="Reviewer 2: Affiliation"
          className="form-control"
          onChange={handleInputChange}
          isInvalid={!!formErrors.reviewer2Affiliation}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.reviewer2Affiliation}
        </Form.Control.Feedback>
      </Form.Group>
    </Col>

    {/* Reviewer 3 Details */}
    <Col md={4}>
      <Form.Group controlId="formGridReviewer3">
        <Form.Label>Reviewer 3 <span className="text-danger">*</span></Form.Label><br></br>
        <Form.Label>1. Name</Form.Label>
        <Form.Control
          name="reviewer3Name"
          value={formData.reviewer3Name || ''}
          placeholder="Reviewer 3"
          className="form-control"
          onChange={handleInputChange}
          isInvalid={!!formErrors.reviewer3Name}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.reviewer3Name}
        </Form.Control.Feedback>

        <Form.Label>2. Email</Form.Label>
        <Form.Control
          name="reviewer3Email"
          value={formData.reviewer3Email || ''}
          placeholder="Reviewer 3: Email"
          className="form-control"
          onChange={handleInputChange}
          isInvalid={!!formErrors.reviewer3Email}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.reviewer3Email}
        </Form.Control.Feedback>

        <Form.Label>3. Affiliation</Form.Label>
        <Form.Control
          name="reviewer3Affiliation"
          value={formData.reviewer3Affiliation || ''}
          placeholder="Reviewer 3: Affiliation"
          className="form-control"
          onChange={handleInputChange}
          isInvalid={!!formErrors.reviewer3Affiliation}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.reviewer3Affiliation}
        </Form.Control.Feedback>
      </Form.Group>
    </Col>
  </Row>

  <div className="form-buttons">
    <Button variant="secondary" onClick={handleSave} className='savebutton'>
      Save
    </Button>
    <Button variant="secondary" onClick={handlePrevious} className='previousbutton'>
      Previous
    </Button>
    <Button variant="primary" type="submit" onClick={handleFinish} className='nextbutton'>
      Finish and Submit
    </Button>
  </div>
</Form>

      </div>
    </div>
  );
}
