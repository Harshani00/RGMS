// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Form, Col, Row } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../../Components/Navbar';
// import Navbar2 from '../../Components/Navbar2';
// import Sidebar from '../../Components/Sidebar';
// import { useForm } from './MainForm'; // Import useForm from your context
// import './Grant.css'; // Import the CSS file


// export default function Grant()  {
//   const { formData, handleFormDataChange, updateCompletionStatus } = useForm(); // Use form context
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [faculties, setFaculties] = useState([]);
//   const [departments, setDepartments] = useState([]);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//    // Fetch faculties when the component mounts
//    useEffect(() => {
//     axios.get('/FacultyDepartment.php')
//       .then(response => {
//         setFaculties(response.data.faculties || []);
//       })
//       .catch(error => {
//         console.error("Error fetching faculties:", error);
//       });
//   }, []);
  
//   const handleFacultyChange = (e) => {
//     const facultyId = e.target.value;
//     // Update formData.faculty to reflect the selected faculty
//     handleFormDataChange({ faculty: facultyId });
  
//     // Fetch departments for the selected faculty
//     axios.post('/FacultyDepartment.php', { fid: facultyId })
//       .then(response => {
//         setDepartments(response.data.departments || []);
//       })
//       .catch(error => {
//         console.error("Error fetching departments:", error);
//       });
//   };


// // Handle department change
// const handleDepartmentChange = (e) => {
//   const departmentId = e.target.value;

//   // Update formData with the selected department ID (did)
//   handleFormDataChange({ department: departmentId });
// };



//   const handleChange = (e) => {
//     handleFormDataChange({ [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' }); // Clear error when user types
//   };

//   const validateForm = () => {
//     const newErrors = {};

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
//     if (!formData.Leave_Get) newErrors.Leave_Get = 'Leave Get is required';
//     if (!formData.Leave_Date) newErrors.Leave_Date = 'Leave Date is required';
//     if (!formData.Leave_Duration) newErrors.Leave_Duration = 'Leave Duration is required';

//     setErrors(newErrors);

//     // If no errors, return true, otherwise return false
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (validateForm()) {
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

//         if (response.data === "Form submitted successfully!") {
//           setSubmitted(true); // Set form as submitted only on success
//           alert(response.data);
//         } else {
//           alert('Form submission failed. Please try again.');
//         }
//       } catch (error) {
//         alert('There was an error submitting the form. Please try again.');
//       }
//     }
//   };

//   const handleNext = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       updateCompletionStatus('profile', true); // Mark the profile section as completed
//       navigate('/project'); // Navigate to the "project" page
//     } else {
//       alert('Missing Fields Required.');
//     }
//   };
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Navbar2 from '../../Components/Navbar2';
import Sidebar from '../../Components/Sidebar';
import { useForm } from './MainForm'; // Import useForm from your context
import './Grant.css'; // Import the CSS file

export default function Grant()  {
  const { formData, handleFormDataChange, updateCompletionStatus } = useForm(); // Use form context
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [faculties, setFaculties] = useState([]);
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Log formData to the console on component load
  useEffect(() => {
    console.log("Form data on load:", formData);
  }, [formData]);

  // Fetch faculties when the component mounts
  useEffect(() => {
    axios.get('/FacultyDepartment.php')
      .then(response => {
        setFaculties(response.data.faculties || []);
      })
      .catch(error => {
        console.error("Error fetching faculties:", error);
      });
  }, []);
  
  const handleFacultyChange = (e) => {
    const facultyId = e.target.value;
    handleFormDataChange({ faculty: facultyId });
  
    // Fetch departments for the selected faculty
    axios.post('/FacultyDepartment.php', { fid: facultyId })
      .then(response => {
        setDepartments(response.data.departments || []);
      })
      .catch(error => {
        console.error("Error fetching departments:", error);
      });
  };

  const handleDepartmentChange = (e) => {
    const departmentId = e.target.value;
    handleFormDataChange({ department: departmentId });
  };

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
    if (!formData.Leave_Get) newErrors.Leave_Get = 'Leave Get is required';
    if (!formData.Leave_Date) newErrors.Leave_Date = 'Leave Date is required';
    if (!formData.Leave_Duration) newErrors.Leave_Duration = 'Leave Duration is required';

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
    <div >
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
              <Form.Label>1. Title  <span className="text-danger">*</span></Form.Label>
              <Form.Select
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="required"
                isInvalid={!!errors.title}
                // Add class for red asterisk
              >
                <option value="">Select Title</option>
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
              <Form.Label>2. Name <span className="text-danger">*</span></Form.Label>
              <Form.Control
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                className="required" // Add class for red asterisk
                isInvalid={!!errors.name}
               
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Label>3. Affiliation <span className="text-danger">*</span></Form.Label>
            <Form.Group as={Col} xs={12} md={6} controlId="formGridFaculty">
            <Form.Label>Faculty</Form.Label>
            <Form.Select
                name="faculty"
                value={formData.faculty}
                onChange={handleFacultyChange}
                isInvalid={!!errors.faculty}
                // className="required" // Add class for red asterisk
              >
              <option value="">Select Faculty</option>
              {faculties.map(faculty => (
                <option key={faculty.fid} value={faculty.fid}>
                  {faculty.faculty}
                </option>
              ))}
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} controlId="formGridDepartment">
            <Form.Label>Department</Form.Label>
            <Form.Select
                name="department"
                value={formData.department}
                onChange={handleDepartmentChange}
                // onChange={handleChange}
                isInvalid={!!errors.department}
                // className="required" // Add class for red asterisk
              >
                  <option value="">Select Department</option>
                    {departments.length > 0 ? (
                      departments.map(department => (
                        <option key={department.did} value={department.did}>
                          {department.department}
                    </option>
             
                ))
              ) : (
                <option disabled>No departments available</option>
              )}
            </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label>4. Contacts <span className="text-danger">*</span></Form.Label>
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
              <Form.Label>Phone Number </Form.Label>
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
              <Form.Label>5. Present Position/Designation <span className="text-danger">*</span></Form.Label>
              <Form.Control
                name="position"
                value={formData.position}
                onChange={handleChange}
                isInvalid={!!errors.position}
                className="required" // Add class for red asterisk
              />
              <Form.Control.Feedback type="invalid">{errors.position}</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label>6. Academic Highest Qualification <span className="text-danger">*</span></Form.Label>
            <Form.Group as={Col} xs={12} md={4} controlId="formGridDegree">
              <Form.Label>Degree</Form.Label>
              <Form.Control
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                isInvalid={!!errors.degree}
                className="required" // Add class for red asterisk
              />
              <Form.Control.Feedback type="invalid">{errors.degree}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} xs={12} md={4} controlId="formGridUniversity">
              <Form.Label>University </Form.Label>
              <Form.Control
                name="university"
                value={formData.university}
                onChange={handleChange}
                isInvalid={!!errors.university}
                className="required" // Add class for red asterisk
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
                className="required" // Add class for red asterisk
              />
              <Form.Control.Feedback type="invalid">{errors.year}</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridField">
              <Form.Label>7. Your Field of Specialization <span className="text-danger">*</span> </Form.Label>
              <Form.Control
                name="field"
                value={formData.field}
                onChange={handleChange}
                isInvalid={!!errors.field}
                className="required" // Add class for red asterisk
              />
              <Form.Control.Feedback type="invalid">{errors.field}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Label>8. Are you due for sabbatical leave/short term leave during the next 2 years <span className="text-danger">*</span> </Form.Label>
            <Form.Group as={Col} controlId="formGridLeaveGet">
              <Row>
                <Col xs={6}>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="Leave_Get"
                    value="yes"
                    checked={formData.Leave_Get === 'yes'}
                    onChange={(e) => handleFormDataChange({ Leave_Get: e.target.value })}
                    isInvalid={!!errors.Leave_Get}
                  // Add class for red asterisk
                  />
                </Col>
                <Col xs={6}>
                  <Form.Check
                    type="radio"
                    label="No"
                    name="Leave_Get"
                    value="no"
                    checked={formData.Leave_Get === 'no'}
                    onChange={(e) => handleFormDataChange({ Leave_Get: e.target.value })}
                    isInvalid={!!errors.Leave_Get}
                     // Add class for red asterisk
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                {errors.Leave_Get}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridLeaveDate">
              <Form.Label>Starting Date <span className="text-danger">*</span> </Form.Label>
              <Form.Control
                name="Leave_Date"
                type="date"
                value={formData.Leave_Date}
                onChange={handleChange}
                isInvalid={!!errors.Leave_Date}
                className="required" // Add class for red asterisk
              />
              <Form.Control.Feedback type="invalid">{errors.Leave_Date}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} controlId="formGridLeaveDuration">
              <Form.Label>Duration (Months) <span className="text-danger">*</span> </Form.Label>
              <Form.Control
                name="Leave_Duration"
                value={formData.Leave_Duration}
                onChange={handleChange}
                isInvalid={!!errors.Leave_Duration}
                className="required" // Add class for red asterisk
              />
              <Form.Control.Feedback type="invalid">{errors.Leave_Duration}</Form.Control.Feedback>
            </Form.Group>
          </Row>

          
          <Button variant="primary" onClick={handleNext} className='nextbutton'>
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
}
