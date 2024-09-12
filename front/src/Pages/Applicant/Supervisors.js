

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

import React, { useState } from 'react';
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
  const { formData, handleFormDataChange,updateCompletionStatus } = useForm(); // Use form context
  const [submitted, setSubmitted] = useState(false); // Define state for form submission
  const [formErrors, setFormErrors] = useState({}); // Define state for form errors
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    handleFormDataChange({ [name]: value }); // Update the central form data
  };

  const validate = () => {
    let errors = {};
    
    if (!formData.co_investigators) errors.co_investigators = 'Co-investigators are required.';
    if (!formData.co_investigator_departmentUniversity) 
      errors.co_investigator_departmentUniversity = 'Affiliated Department and University are required.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
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
        alert(response.data);
        setSubmitted(true); // Set form as submitted
      } catch (error) {
        alert('There was an error submitting the form. Please try again.');
      }
    }
  };

  const handleNext = async () => {
    if (validate()) {
      updateCompletionStatus('supervisors', true);
      navigate('/uploads'); // Navigate to the uploads page
    }else {
      alert('Missing Fields Required.');
    }
  };

  const handlePrevious = () => {
    navigate('/project'); // Navigate to the project page
  };

  const handleSave = async () => {
    if (validate()) {
      await handleSubmit(); // Submit form data if valid
    }
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Sidebar />
      
      <div className="form-container">
        
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group controlId="formGridinvestigator">
              <Form.Label>1. Co-investigators of the Project</Form.Label>
              <Form.Control
                name="co_investigators"
                value={formData.co_investigators || ''}
                onChange={handleChange}
                placeholder="Enter co-investigator's name"
                isInvalid={!!formErrors.co_investigators}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.co_investigators}
              </Form.Control.Feedback>

              <Form.Label>Affiliated Department and University</Form.Label>
              <Form.Control
                name="co_investigator_departmentUniversity"
                value={formData.co_investigator_departmentUniversity || ''}
                onChange={handleChange}
                placeholder="Enter affiliated Department and University"
                isInvalid={!!formErrors.co_investigator_departmentUniversity}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.co_investigator_departmentUniversity}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGridforeign">
              <Form.Label>2. Foreign Collaborators of the Project</Form.Label>
              <Form.Control
                name="foreign_collaborators"
                value={formData.foreign_collaborators || ''}
                onChange={handleChange}
                placeholder="Enter foreign collaborator's Name"
              />
              <Form.Label>Affiliated Department and University</Form.Label>
              <Form.Control
                name="foreign_collaborator_departmentUniversity"
                value={formData.foreign_collaborator_departmentUniversity || ''}
                onChange={handleChange}
                placeholder="Enter affiliated Department and University"
              />
            </Form.Group>
          </Row>

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























