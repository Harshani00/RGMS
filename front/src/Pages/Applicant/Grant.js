
// import React, { useState } from 'react';
// import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';
// import Navbar2 from '../Components/Navbar2';
// import Sidebar from '../Components/Sidebar';
// import { useNavigate } from 'react-router-dom'; 

// export default function Grant() {
//   const [formData, setFormData] = useState({
//     title: '',
//     name: '',
//     faculty: '',
//     department: '',
//     email: '',
//     phone: '',
//     position: '',
//     degree: '',
//     university: '',
//     year: '',
//     field: '',
//     start_date: '',
//     duration: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' }); // Clear error when user types
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     // Validation checks for each field
//     if (!formData.title) newErrors.title = 'Title is required';
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.faculty) newErrors.faculty = 'Faculty is required';
//     if (!formData.department) newErrors.department = 'Department is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.phone) newErrors.phone = 'Phone number is required';
//     if (!formData.position) newErrors.position = 'Position is required';
//     if (!formData.degree) newErrors.degree = 'Degree is required';
//     if (!formData.university) newErrors.university = 'University is required';
//     if (!formData.year) newErrors.year = 'Year is required';
//     if (!formData.field) newErrors.field = 'Field is required';
//     if (!formData.start_date) newErrors.start_date = 'Start Date is required';
//     if (!formData.duration) newErrors.duration = 'Duration is required';

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
  
//     try {
//       const response = await axios.post('http://localhost:8080/test/Grant.php', formData, {
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
//       // Optionally reset form data here
//       setFormData({
//         title: '',
//         name: '',
//         faculty: '',
//         department: '',
//         email: '',
//         phone: '',
//         position: '',
//         degree: '',
//         university: '',
//         year: '',
//         field: '',
//         start_date: '',
//         duration: ''
//       });
//     } catch (error) {
//       alert('There was an error submitting the form. Please try again.');
//     }
//   };
//   const handleNext = (e) => {
//     e.preventDefault();
//     navigate('/project'); // Navigate to the "project" page
//   };
  
//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />
//       <div className="form-container">
//         {submitted && (
//           <div className="alert alert-success" role="alert">
//             Form submitted successfully!
//           </div>
//         )}
//         <Form onSubmit={handleSubmit} method="post">
//           <Row className="mb-3">
//             <Form.Group as={Col} xs={12} md={4} controlId="formGridTitle">
//               <Form.Label>1. Title</Form.Label>
//               <Form.Select
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 isInvalid={!!errors.title}
//               >
//                 <option></option>
//                 <option>Mr</option>
//                 <option>Mrs</option>
//                 <option>Miss</option>
//                 <option>Rev</option>
//                 <option>Dr</option>
//                 <option>Prof</option>
//               </Form.Select>
//               <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group xs={12} md={8} controlId="formGridName">
//               <Form.Label>2. Name</Form.Label>
//               <Form.Control
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter Your Full Name"
//                 isInvalid={!!errors.name}
//               />
//               <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Label>3. Affiliation</Form.Label>
//             <Form.Group as={Col} xs={12} md={6} controlId="formGridFaculty">
//               <Form.Label>Faculty</Form.Label>
//               <Form.Select
//                 name="faculty"
//                 value={formData.faculty}
//                 onChange={handleChange}
//                 isInvalid={!!errors.faculty}
//               >
//                 <option></option>
//                 <option>Faculty of Agriculture</option>
//                 <option>Faculty of Allied Health Sciences</option>
//                 <option>Faculty of Arts</option>
//                 <option>Faculty of Dental Sciences</option>
//                 <option>Faculty of Engineering</option>
//                 <option>Faculty of Medicine</option>
//                 <option>Faculty of Science</option>
//                 <option>Faculty of Veterinary Medicine and Animal Science</option>
//                 <option>Faculty of Management</option>
//                 <option>Faculty of Dental Sciences</option>
//                 <option>Faculty of Science</option>
//               </Form.Select>
//               <Form.Control.Feedback type="invalid">{errors.faculty}</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} xs={12} md={6} controlId="formGridDepartment">
//               <Form.Label>Department</Form.Label>
//               <Form.Select
//                 name="department"
//                 value={formData.department}
//                 onChange={handleChange}
//                 isInvalid={!!errors.department}
//               >
//                 <option></option>
//                 <option>Department of Crop Science</option>
                

                

//               </Form.Select>
//               <Form.Control.Feedback type="invalid">{errors.department}</Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Label>4. Contacts</Form.Label>
//             <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Ex: abc@gmail.com"
//                 isInvalid={!!errors.email}
//               />
//               <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} xs={12} md={6} controlId="formGridPhone">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Enter Your Phone Number"
//                 isInvalid={!!errors.phone}
//               />
//               <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Group as={Col} xs={12} md={6} controlId="formGridPosition">
//               <Form.Label>5. Present Position/Designation</Form.Label>
//               <Form.Control
//                 name="position"
//                 value={formData.position}
//                 onChange={handleChange}
//                 isInvalid={!!errors.position}
//               />
//               <Form.Control.Feedback type="invalid">{errors.position}</Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Label>6. Academic Highest Qualification</Form.Label>
//             <Form.Group as={Col} xs={12} md={4} controlId="formGridDegree">
//               <Form.Label>Degree</Form.Label>
//               <Form.Control
//                 name="degree"
//                 value={formData.degree}
//                 onChange={handleChange}
//                 isInvalid={!!errors.degree}
//               />
//               <Form.Control.Feedback type="invalid">{errors.degree}</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} xs={12} md={4} controlId="formGridUniversity">
//               <Form.Label>University</Form.Label>
//               <Form.Control
//                 name="university"
//                 value={formData.university}
//                 onChange={handleChange}
//                 isInvalid={!!errors.university}
//               />
//               <Form.Control.Feedback type="invalid">{errors.university}</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} xs={12} md={4} controlId="formGridYear">
//               <Form.Label>Year</Form.Label>
//               <Form.Control
//                 name="year"
//                 value={formData.year}
//                 onChange={handleChange}
//                 isInvalid={!!errors.year}
//               />
//               <Form.Control.Feedback type="invalid">{errors.year}</Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Group as={Col} controlId="formGridField">
//               <Form.Label>7. Your Field of Specialization</Form.Label>
//               <Form.Control
//                 name="field"
//                 value={formData.field}
//                 onChange={handleChange}
//                 isInvalid={!!errors.field}
//               />
//               <Form.Control.Feedback type="invalid">{errors.field}</Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Group as={Col} xs={12} md={6} controlId="formGridStartDate">
//               <Form.Label>8. Starting Date of the Proposed Project</Form.Label>
//               <Form.Control
//                 name="start_date"



//                 type="date"
//                 value={formData.start_date}
//                 onChange={handleChange}
//                 isInvalid={!!errors.start_date}
//               />
//               <Form.Control.Feedback type="invalid">{errors.start_date}</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} xs={12} md={6} controlId="formGridDuration">
//               <Form.Label>9. Duration of the Proposed Project</Form.Label>
//               <Form.Control
//                 name="duration"
//                 value={formData.duration}
//                 onChange={handleChange}
//                 isInvalid={!!errors.duration}
//               />
//               <Form.Control.Feedback type="invalid">{errors.duration}</Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Button variant="primary" type="submit" className='savebutton'>
//             Save
//           </Button>
//           <Button variant="primary" onClick={handleNext} className='nextbutton'>
//             Next
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Grant.css'; // Import the CSS file
import Navbar from '../../Components/Navbar';
import Navbar2 from '../../Components/Navbar2';
import Sidebar from '../../Components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { useForm } from './MainForm'; // Import useForm from your context

export default function Grant() {
  const { formData, handleFormDataChange, updateCompletionStatus  } = useForm(); // Use form context
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    handleFormDataChange({ [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error when user types
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.faculty) newErrors.faculty = 'Faculty is required';
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.position) newErrors.position = 'Position is required';
    if (!formData.degree) newErrors.degree = 'Degree is required';
    if (!formData.university) newErrors.university = 'University is required';
    if (!formData.year) newErrors.year = 'Year is required';
    if (!formData.field) newErrors.field = 'Field is required';
    if (!formData.start_date) newErrors.start_date = 'Start Date is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';

    setErrors(newErrors);
    
    // If no errors, return true, otherwise return false
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
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
          alert(response.data);
        } else {
          alert('Form submission failed. Please try again.');
        }
      } catch (error) {
        alert('There was an error submitting the form. Please try again.');
      }
    }
  };

  // const handleNext = (e) => {
  //   e.preventDefault();
    
  //   if (validateForm()) {
  //     navigate('/project'); // Navigate to the "project" page
  //   } else {
  //     alert('Missing Fields Required.');
  //   }
  // };
  const handleNext = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      updateCompletionStatus('profile', true); // Mark the profile section as completed
      navigate('/project'); // Navigate to the "project" page
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
        <Form onSubmit={handleSubmit} method="post">
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={4} controlId="formGridTitle">
              <Form.Label>1. Title</Form.Label>
              <Form.Select
                name="title"
                value={formData.title}
                onChange={handleChange}
                isInvalid={!!errors.title}
              >
                <option></option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Miss</option>
                <option>Rev</option>
                <option>Dr</option>
                <option>Prof</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group xs={12} md={8} controlId="formGridName">
              <Form.Label>2. Name</Form.Label>
               <Form.Control
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label>3. Affiliation</Form.Label>
            <Form.Group as={Col} xs={12} md={6} controlId="formGridFaculty">
              <Form.Label>Faculty</Form.Label>
              <Form.Select
                name="faculty"
                value={formData.faculty}
                onChange={handleChange}
                isInvalid={!!errors.faculty}
              >
                <option></option>
                <option>Faculty of Agriculture</option>
                <option>Faculty of Allied Health Sciences</option>
                <option>Faculty of Arts</option>
                <option>Faculty of Dental Sciences</option>
                <option>Faculty of Engineering</option>
                <option>Faculty of Medicine</option>
                <option>Faculty of Science</option>
                <option>Faculty of Veterinary Medicine and Animal Science</option>
                <option>Faculty of Management</option>
                
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.faculty}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} controlId="formGridDepartment">
              <Form.Label>Department</Form.Label>
              <Form.Select
                name="department"
                value={formData.department}
                onChange={handleChange}
                isInvalid={!!errors.department}
              >
                <option></option>
                <option>Department of Crop Science</option>
                

                

              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.department}</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label>4. Contacts</Form.Label>
            <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex: abc@gmail.com"
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridPosition">
              <Form.Label>5. Present Position/Designation</Form.Label>
              <Form.Control
                name="position"
                value={formData.position}
                onChange={handleChange}
                isInvalid={!!errors.position}
              />
              <Form.Control.Feedback type="invalid">{errors.position}</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label>6. Academic Highest Qualification</Form.Label>
            <Form.Group as={Col} xs={12} md={4} controlId="formGridDegree">
              <Form.Label>Degree</Form.Label>
              <Form.Control
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                isInvalid={!!errors.degree}
              />
              <Form.Control.Feedback type="invalid">{errors.degree}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} xs={12} md={4} controlId="formGridUniversity">
              <Form.Label>University</Form.Label>
              <Form.Control
                name="university"
                value={formData.university}
                onChange={handleChange}
                isInvalid={!!errors.university}
              />
              <Form.Control.Feedback type="invalid">{errors.university}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} xs={12} md={4} controlId="formGridYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                name="year"
                value={formData.year}
                onChange={handleChange}
                isInvalid={!!errors.year}
              />
              <Form.Control.Feedback type="invalid">{errors.year}</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridField">
              <Form.Label>7. Your Field of Specialization</Form.Label>
              <Form.Control
                name="field"
                value={formData.field}
                onChange={handleChange}
                isInvalid={!!errors.field}
              />
              <Form.Control.Feedback type="invalid">{errors.field}</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridStartDate">
              <Form.Label>8. Starting Date of the Proposed Project</Form.Label>
              <Form.Control
                name="start_date"



                type="date"
                value={formData.start_date}
                onChange={handleChange}
                isInvalid={!!errors.start_date}
              />
              <Form.Control.Feedback type="invalid">{errors.start_date}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} controlId="formGridDuration">
              <Form.Label>9. Duration of the Proposed Project</Form.Label>
              <Form.Control
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                isInvalid={!!errors.duration}
              />
              <Form.Control.Feedback type="invalid">{errors.duration}</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" className='savebutton'>
            Save
          </Button>
          <Button variant="primary" onClick={handleNext} className='nextbutton'>
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
}



