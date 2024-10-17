
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import axios from 'axios';
// import { useForm } from './MainForm'; // Ensure useForm hook provides form context
// import Navbar from '../../Components/Navbar';
// import Navbar2 from '../../Components/Navbar2';
// import Sidebar from '../../Components/Sidebar';
// import './Grant.css'; // Import the CSS file

// export default function Grant() {
//   const { formData, handleFormDataChange, updateCompletionStatus,resetFormData  } = useForm();  // Use form context
//   const [grantRows, setGrantRows] = useState(
//     formData.grantRows || [{ fundingSource: '', durationperiod: '', currency: '', amount: '' }]
//   );
//   const [fundingRows, setFundingRows] = useState(
//     formData.fundingRows || [{ fundingOrganization: '', fundingAmount: '' }]
//   );
  
//   const navigate = useNavigate();
//   const [submitted, setSubmitted] = useState(false); // Track form submission
//   const [isSubmitted, setIsSubmitted] = useState(false); 
//   const [errors, setErrors] = useState({});

//   // Sync state with form data when it changes
//   useEffect(() => {
//     if (formData.grantRows) {
//       setGrantRows(formData.grantRows);
//     }
//     if (formData.fundingRows) {
//       setFundingRows(formData.fundingRows);
//     }
//   }, [formData.grantRows, formData.fundingRows]);

//   // Handle changes in grant fields
//   const handleGrantChange = (index, event) => {
//     const { name, value } = event.target;
//     const updatedGrantRows = [...grantRows];
//     updatedGrantRows[index][name] = value;
//     setGrantRows(updatedGrantRows);
//     handleFormDataChange({ grantRows: updatedGrantRows }); // Update global form data
//   };

//   // Handle adding a new grant row
//   const handleAddGrantRow = () => {
//     const newRow = { fundingSource: '', durationperiod: '', currency: '', amount: '' };
//     setGrantRows([...grantRows, newRow]);
//     handleFormDataChange({ grantRows: [...grantRows, newRow] }); // Update global form data
//   };

//   // Handle removing a grant row
//   const handleRemoveGrantRow = (index) => {
//     const updatedGrantRows = [...grantRows];
//     updatedGrantRows.splice(index, 1);
//     setGrantRows(updatedGrantRows);
//     handleFormDataChange({ grantRows: updatedGrantRows }); // Update global form data
//   };

//   // Handle changes in funding fields
//   const handleFundingChange = (index, event) => {
//     const { name, value } = event.target;
//     const updatedFundingRows = [...fundingRows];
//     updatedFundingRows[index][name] = value;
//     setFundingRows(updatedFundingRows);
//     handleFormDataChange({ fundingRows: updatedFundingRows }); // Update global form data
//   };

//   // Handle adding a new funding row
//   const handleAddFundingRow = () => {
//     const newRow = { fundingOrganization: '', fundingAmount: '' };
//     setFundingRows([...fundingRows, newRow]);
//     handleFormDataChange({ fundingRows: [...fundingRows, newRow] }); // Update global form data
//   };

//   // Handle removing a funding row
//   const handleRemoveFundingRow = (index) => {
//     const updatedFundingRows = [...fundingRows];
//     updatedFundingRows.splice(index, 1);
//     setFundingRows(updatedFundingRows);
//     handleFormDataChange({ fundingRows: updatedFundingRows }); // Update global form data
//   };

//   // Function to validate the form fields
//   const validate = () => {
//     let formErrors = {};

//     if (!formData.projectTitle) formErrors.projectTitle = 'Project Title is required.';
//     if (!formData.projectInvolved) formErrors.projectInvolved = 'Project involvement must be selected.';
//     if (!formData.outsidegrants) formErrors.outsidegrants = 'Outside grants must be selected.';
//     if (!formData.researchFacilities) formErrors.researchFacilities = 'Research facilities information is required.';

//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   // Function to handle form submission
//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();

//   //   if (validate()) {
//   //     try {
//   //       const response = await axios.post('/Grant.php', formData, {
//   //         headers: {
//   //           'Content-Type': 'application/x-www-form-urlencoded',
//   //         },
//   //         transformRequest: [(data) => {
//   //           const params = new URLSearchParams();
//   //           for (const key in data) {
//   //             params.append(key, data[key]);
//   //           }
//   //           return params;
//   //         }],
//   //       });
//   //       alert(response.data);
//   //       setSubmitted(true); // Set form as submitted
//   //     } catch (error) {
//   //       alert('There was an error submitting the form. Please try again.');
//   //     }
//   //   }
//   // };
//   // Updated code for handleSubmit to explicitly send grantRows
//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     if (validate()) {
//       // Log the form data to the console
//       console.log({
//         ...formData,
//         grantRows: grantRows // This will show the entire form data including grantRows
//       });
  
//       try {
//         const response = await axios.post('/Grant.php', { 
//           ...formData, // Spread other form data
//           grantRows: grantRows // Explicitly send the grant rows
//         }, {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           transformRequest: [(data) => {
//             const params = new URLSearchParams();
//             for (const key in data) {
//               if (Array.isArray(data[key])) {
//                 // Handle array data (grantRows)
//                 data[key].forEach((item, index) => {
//                   for (const subKey in item) {
//                     params.append(`${key}[${index}][${subKey}]`, item[subKey]);
//                   }
//                 });
//               } else {
//                 params.append(key, data[key]);
//               }
//             }
//             return params;
//           }],
//         });
//         alert(response.data);
//         setSubmitted(true);
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
//       if (response.data.status === 'success') {
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
//         if (fileUploadResponse.data.status === 'success') {
//           alert('Files uploaded successfully.');
  
//           // Clear form data and reset form state
         
//           localStorage.removeItem('formData'); // Optional: Clear any saved form data in localStorage
//           resetFormData();
  
//           // Navigate to the submitted grants page
//           navigate('/submittedgrant'); // Use navigate instead of window.location.href
//         } else {
//           alert(fileUploadResponse.data.message); // Handle file upload failure
//         }
//       } else {
//         alert(response.data.message); // Handle form save failure
//       }
//     } catch (error) {
//       console.error('Error details:', error);
//       alert('There was an error saving the data or uploading files. Please try again.');
//     }
//   };
  
//  // Function to navigate to the previous page
//  const handlePrevious = () => {
//   navigate('/grant'); // Update this path to the correct previous page
// };
//   // Handle Next button click
//  // Function to navigate to the next page
//  const handleNext = async () => {
//   if (validate()) {
//     updateCompletionStatus('project', true);
//     navigate('/supervisors'); // Navigate to the uploads page
//   }else {
//     alert('Missing Fields Required.');
//   }
// };

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useForm } from './MainForm'; // Ensure useForm hook provides form context
import Navbar from '../../Components/Navbar';
import Navbar2 from '../../Components/Navbar2';
import Sidebar from '../../Components/Sidebar';
import './Grant.css'; // Import the CSS file

export default function Grant() {
  const { formData, handleFormDataChange, updateCompletionStatus, resetFormData } = useForm();  // Use form context
  const [grantRows, setGrantRows] = useState(
    formData.grantRows || [{ fundingSource: '', durationperiod: '', currency: '', amount: '' }]
  );
  const [fundingRows, setFundingRows] = useState(
    formData.fundingRows || [{ fundingOrganization: '', fundingAmount: '' }]
  );
  
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false); // Track form submission
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [errors, setErrors] = useState({});

  // Sync state with form data when it changes
  useEffect(() => {
    if (formData.grantRows) {
      setGrantRows(formData.grantRows);
    }
    if (formData.fundingRows) {
      setFundingRows(formData.fundingRows);
    }
  }, [formData.grantRows, formData.fundingRows]);

  // Handle changes in grant fields
  const handleGrantChange = (index, event) => {
    const { name, value } = event.target;
    const updatedGrantRows = [...grantRows];
    updatedGrantRows[index][name] = value;
    setGrantRows(updatedGrantRows);
    handleFormDataChange({ grantRows: updatedGrantRows }); // Update global form data
  };

  // Handle adding a new grant row
  const handleAddGrantRow = () => {
    const newRow = { fundingSource: '', durationperiod: '', currency: '', amount: '' };
    setGrantRows([...grantRows, newRow]);
    handleFormDataChange({ grantRows: [...grantRows, newRow] }); // Update global form data
  };

  // Handle removing a grant row
  const handleRemoveGrantRow = (index) => {
    const updatedGrantRows = [...grantRows];
    updatedGrantRows.splice(index, 1);
    setGrantRows(updatedGrantRows);
    handleFormDataChange({ grantRows: updatedGrantRows }); // Update global form data
  };

  // Handle changes in funding fields
  const handleFundingChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFundingRows = [...fundingRows];
    updatedFundingRows[index][name] = value;
    setFundingRows(updatedFundingRows);
    handleFormDataChange({ fundingRows: updatedFundingRows }); // Update global form data
  };

  // Handle adding a new funding row
  const handleAddFundingRow = () => {
    const newRow = { fundingOrganization: '', fundingAmount: '' };
    setFundingRows([...fundingRows, newRow]);
    handleFormDataChange({ fundingRows: [...fundingRows, newRow] }); // Update global form data
  };

  // Handle removing a funding row
  const handleRemoveFundingRow = (index) => {
    const updatedFundingRows = [...fundingRows];
    updatedFundingRows.splice(index, 1);
    setFundingRows(updatedFundingRows);
    handleFormDataChange({ fundingRows: updatedFundingRows }); // Update global form data
  };


  

  // Function to validate the form fields
  const validate = () => {
    let formErrors = {};

    if (!formData.projectTitle) formErrors.projectTitle = 'Project Title is required.';
    if (!formData.projectInvolved) formErrors.projectInvolved = 'Project involvement must be selected.';
    if (!formData.outsidegrants) formErrors.outsidegrants = 'Outside grants must be selected.';
    if (!formData.researchFacilities) formErrors.researchFacilities = 'Research facilities information is required.';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (validate()) {
      try {
        // First: Send data to Grant.php with 'application/x-www-form-urlencoded'
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
  
        // Check response from Grant.php
        if (grantResponse.data.success) {
          console.log('Data submitted to Grant.php successfully.');
        } else {
          alert('Error submitting to Grant.php: ' + grantResponse.data.error);
          return; // Stop here if there's an error in Grant.php submission
        }
  
        // Filter formData for MultipleRows.php (grantRows and fundingRows only)
        const relevantData = {
          grantRows: formData.grantRows,
          fundingRows: formData.fundingRows,
        };
  
        // Second: Send filtered data to MultipleRows.php with 'application/json'
        const multipleRowsResponse = await axios.post('/MultipleRows.php', relevantData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        // Check response from MultipleRows.php
        if (multipleRowsResponse.data.success) {
          console.log('Data submitted to MultipleRows.php successfully.');
          alert('All rows submitted successfully.');
          setSubmitted(true); // Mark form as submitted
        } else {
          alert('Error submitting to MultipleRows.php: ' + multipleRowsResponse.data.error);
        }
  
      } catch (error) {
        console.error('Error during form submission:', error); // Log error for debugging
        alert('There was an error submitting the form. Please try again.');
      }
    } else {
      alert('Please fill out the required fields.');
    }
  };
  
  

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

      if (response.data.status === 'success') {
        setIsSubmitted(true);
        alert('Form saved successfully.');

        const fileUploadResponse = await axios.post('/SaveFileUploads.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log(fileUploadResponse.data); 

        if (fileUploadResponse.data.status === 'success') {
          alert('Files uploaded successfully.');
          localStorage.removeItem('formData');
          resetFormData();
          navigate('/submittedgrant'); 
        } else {
          alert(fileUploadResponse.data.message);
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error details:', error);
      alert('There was an error saving the data or uploading files. Please try again.');
    }
  };

  const handlePrevious = () => {
    navigate('/grant');
  };

  const handleNext = async () => {
    if (validate()) {
      updateCompletionStatus('project', true);
      navigate('/supervisors');
    } else {
      alert('Missing Fields Required.');
    }
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
            <Form.Label>1. Project Title <span className="text-danger">*</span></Form.Label>
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Control
                as="textarea"
                rows={3}
                name="projectTitle"
                value={formData.projectTitle || ''}
                onChange={(e) => handleFormDataChange({ projectTitle: e.target.value })}
                isInvalid={!!errors.projectTitle}
                className="required"
              />
              <Form.Control.Feedback type="invalid">
                {errors.projectTitle}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          {/* Dynamically generated grant rows */}
          <Row className="mb-3">
            <Form.Label>2. Please list any previous university or other grants you have received.</Form.Label>
          </Row>

          <Row className="mb-3">
            <Col><Form.Label>Funding Source</Form.Label></Col>
            <Col><Form.Label>Duration</Form.Label></Col>
            <Col><Form.Label>Unit of Currency</Form.Label></Col>
            <Col><Form.Label>Amount (Numbers only)</Form.Label></Col>
          </Row>

          {grantRows.map((row, index) => (
            <Row className="mb-3" key={index}>
              <Col>
                <Form.Control
                  name="fundingSource"
                  value={row.fundingSource}
                  onChange={(e) => handleGrantChange(index, e)}
                />
              </Col>
              <Col>
                <Form.Control
                  name="durationperiod"
                  value={row.durationperiod}
                  onChange={(e) => handleGrantChange(index, e)}
                  placeholder="Ex: 01/01/2012-31/12/2012"
                />
              </Col>
              <Col>
                <Form.Control
                  name="currency"
                  value={row.currency}
                  onChange={(e) => handleGrantChange(index, e)}
                />
              </Col>
              <Col>
                <Form.Control
                  name="amount"
                  value={row.amount}
                  onChange={(e) => handleGrantChange(index, e)}
                />
              </Col>
              {grantRows.length > 1 && (
                <Button variant="secondary" size="sm" onClick={() => handleRemoveGrantRow(index)} className="mb-3" style={{ width: 'auto' }} >
                  Remove
                </Button>
              )}
            </Row>
          ))}

          <Button variant="secondary" size="sm" onClick={handleAddGrantRow} className="mb-3">
            Add Grant Row
          </Button>

          <Row className="mb-3">
            <Form.Label>3. Are you currently involved in a project? <span className="text-danger">*</span></Form.Label>
            <Form.Group as={Col} controlId="formGridProject">
              <Row>
                <Col xs={6}>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="projectInvolved"
                    value="yes"
                    checked={formData.projectInvolved === 'yes'}
                    onChange={(e) => handleFormDataChange({ projectInvolved: e.target.value })}
                    isInvalid={!!errors.projectInvolved}
                    
                  />
                </Col>
                <Col xs={6}>
                  <Form.Check
                    type="radio"
                    label="No"
                    name="projectInvolved"
                    value="no"
                    checked={formData.projectInvolved === 'no'}
                    onChange={(e) => handleFormDataChange({ projectInvolved: e.target.value })}
                    isInvalid={!!errors.projectInvolved}
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                {errors.projectInvolved}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label>4. Please list 3 of your recent publications (provide links related to the publications).</Form.Label>
            <Form.Group as={Col} controlId="formGridPublications">
              <Form.Label>Link 1</Form.Label>
              <Form.Control
                placeholder=""
                name="publication1"
                value={formData.publication1 || ''}
                onChange={(e) => handleFormDataChange({ publication1: e.target.value })}
              />
              <Form.Label>Link 2</Form.Label>
              <Form.Control
                placeholder=""
                name="publication2"
                value={formData.publication2 || ''}
                onChange={(e) => handleFormDataChange({ publication2: e.target.value })}
              />
              <Form.Label>Link 3</Form.Label>
              <Form.Control
                placeholder=""
                name="publication3"
                value={formData.publication3 || ''}
                onChange={(e) => handleFormDataChange({ publication3: e.target.value })}
              />
            </Form.Group>
          </Row>

          {/* Dynamically generated funding rows */}
          <Row className="mb-3">
          <Form.Label>5. Have you received any grants from outside for this/similar project? <span className="text-danger">*</span></Form.Label>
            <Form.Group as={Col} controlId="formGridProject">
              <Row>
                <Col xs={6}>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="outsidegrants"
                    value="yes"
                    checked={formData.outsidegrants === 'yes'}
                    onChange={(e) => handleFormDataChange({ outsidegrants: e.target.value })}
                    isInvalid={!!errors.outsidegrants}
                  />
                </Col>
                <Col xs={6}>
                  <Form.Check
                    type="radio"
                    label="No"
                    name="outsidegrants"
                    value="no"
                    checked={formData.outsidegrants === 'no'}
                    onChange={(e) => handleFormDataChange({ outsidegrants: e.target.value })}
                    isInvalid={!!errors.outsidegrants}
                  />
                </Col>
                </Row>
            </Form.Group>
          </Row>

          {/* Funding Organization Rows */}
          <Row className="mb-3">
            <Col><Form.Label>Funding Organization</Form.Label></Col>
            <Col><Form.Label>Amount</Form.Label></Col>
          </Row>

          {fundingRows.map((row, index) => (
            <Row className="mb-3" key={index}>
              <Col>
                <Form.Control
                  name="fundingOrganization"
                  value={row.fundingOrganization|| ''}
                  onChange={(e) => handleFundingChange(index, e)}
                  placeholder="Enter funding organization"
                />
              </Col>
              <Col>
                <Form.Control
                  name="fundingAmount"
                  value={row.fundingAmount|| ''}
                  onChange={(e) => handleFundingChange(index, e)}
                  placeholder="Enter amount"
                />
              </Col>
              {fundingRows.length > 1 && (
                <Button variant="secondary" size="sm" onClick={() => handleRemoveFundingRow(index)} className="mb-3" style={{ width: 'auto' }}  >
                  Remove
                </Button>
              )}
            </Row>
          ))}
          

          <Button variant="secondary" size="sm" onClick={handleAddFundingRow} className="mb-3">
            Add Funding Row
          </Button>
          <Row className="mb-3">
            <Form.Label>6. List the equipment/resources/facilities available in your Department/Faculty for your research <span className="text-danger">*</span> </Form.Label>
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder=""
                name="researchFacilities"
                value={formData.researchFacilities || ''}
                onChange={(e) => handleFormDataChange({ researchFacilities: e.target.value })}
                isInvalid={!!errors.researchFacilities}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="button" onClick={handleSave} className="savebutton">
            Save
          </Button>
          <Button variant="primary" onClick={handlePrevious} className="previousbutton">
            Previous
          </Button>
          <Button variant="primary" type="button" onClick={handleNext} className="nextbutton">
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
}
