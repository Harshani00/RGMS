import React, { useState } from 'react';
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
  const { formData, handleFormDataChange, resetFormData,updateCompletionStatus } = useForm();
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // Track form submission
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

  //Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!validate()) {
  //     // Create a list of missing fields
  //     const missingFields = Object.keys(formErrors).map(key => {
  //       const fieldLabel = key.replace(/([A-Z])/g, ' $1').trim(); // Convert camelCase to space-separated
  //       return fieldLabel;
  //     }).join(', ');

  //     alert(`Missing Required Fields: ${missingFields}`);
  //     setSubmitted(false); // Ensure not submitted if validation fails
  //     return;
  //   }

  //   try {
  //     const response = await axios.post('http://localhost:8080/test/Grant.php', formData, {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       transformRequest: [(data) => {
  //         const params = new URLSearchParams();
  //         for (const key in data) {
  //           params.append(key, data[key]);
  //         }
  //         return params;
  //       }],
  //     });

  //     if (response.data === "Form submitted successfully!") {
  //       setSubmitted(true); // Set form as submitted only on success
  //       alert(response.data);

  //       // Clear form data and local storage
  //       localStorage.removeItem('formData');
  //       resetFormData(); // Reset formData to initial state

  //     } else {
  //       alert('Form submission failed. Please try again.');
  //     }
  //   } catch (error) {
  //     alert('There was an error submitting the form. Please try again.');
  //   }
  // };
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

        if (response.data === "Form submitted successfully!") {
            setSubmitted(true); // Set form as submitted only on success
            window.alert(response.data);

            // Clear form data and local storage
            localStorage.removeItem('formData');
            resetFormData(); // Reset formData to initial state

        } else {
            window.alert('Form submission failed. Please try again.');
        }
    } catch (error) {
        window.alert('There was an error submitting the form. Please try again.');
    }
};


  const handlePrevious = () => {
    navigate('/uploads'); // Navigate to the previous page
  };

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const isValid = validate(); // Validate form
    if (isValid) {
      await handleSubmit(e); // Pass the event object to handleSubmit
    }
  };

  const handleFinish = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const isValid = validate(); // Validate form
    if (isValid) {
      updateCompletionStatus('reviewers', true);
      await handleSubmit(e); // Pass the event object to handleSubmit
    }else {
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
            <Form.Label>*Names & Affiliations of 3- Reviewers of the research proposal (preferably from other faculties/outside institutions)</Form.Label>

            <Form.Group controlId="formGridinvestigator">
              <Form.Label>1. Name of the Reviewer</Form.Label>
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
                name="reviewer1Email" 
                value={formData.reviewer1Email || ''} 
                placeholder="Reviewer 1: Email " 
                className="form-control"
                onChange={handleInputChange} 
                isInvalid={!!formErrors.reviewer1Email}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.reviewer1Email}
              </Form.Control.Feedback>

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

            </Form.Group>
            <Form.Group controlId="formGridforeign">
              <Form.Label>3. Affiliation</Form.Label>
              <Form.Control 
                name="reviewer1Affiliation" 
                value={formData.reviewer1Affiliation || ''} 
                placeholder="Reviewer 1: Affiliation " 
                className="form-control"
                onChange={handleInputChange} 
                isInvalid={!!formErrors.reviewer1Affiliation}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.reviewer1Affiliation}
              </Form.Control.Feedback>

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
          </Row>

          <Button variant="primary" onClick={handleSave} type="button" className='savebutton'>
            Save
          </Button>

          <Button variant="primary" onClick={handlePrevious} className='previousbutton'>
            Previous
          </Button>
          <Button variant="primary" onClick={handleFinish} type="button" className='nextbutton'>
            Finish and Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}




