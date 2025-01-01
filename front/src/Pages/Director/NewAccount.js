
// import React, { useState } from 'react';
// import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// //import './Signup.css'; // Import the CSS file if needed
// import '../Applicant/Signup.css';
// import { useNavigate } from 'react-router-dom';
// import backgroundImage from '../../Assets/10.jpg';


// const NewAccount = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         role: '',
//         password: ''
//     });

//     const [errors, setErrors] = useState({});
//     const [submitted, setSubmitted] = useState(false);
//     const navigate = useNavigate(); // Use the navigate hoo

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//         setErrors({ ...errors, [e.target.name]: '' }); // Clear error when user types
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.firstName) newErrors.firstName = 'First Name is required';
//         if (!formData.lastName) newErrors.lastName = 'Last Name is required';
//         if (!formData.email) newErrors.email = 'Email is required';
//         if (!formData.role) newErrors.role = 'Role is required';
//         if (!formData.password) newErrors.password = 'Password is required';
//         return newErrors;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const validationErrors = validateForm();
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }
    
//         try {
//             const response = await axios.post('/NewAccount.php', formData, {
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                 },
//                 transformRequest: [(data) => {
//                     const params = new URLSearchParams();
//                     for (const key in data) {
//                         params.append(key, data[key]);
//                     }
//                     return params;
//                 }],
//             });
    
//             // Check the response to determine if signup was successful
//             if (response.data.includes('Welcome to Research Grant Management System')) {
//                 alert(response.data);
//                 setSubmitted(true);
//                 setFormData({
//                     firstName: '',
//                     lastName: '',
//                     email: '',
//                     role: '',
//                     password: ''
//                 });
//                alert('New Account Has been created successfully');
//             } else {
//                 // Handle server-side error messages
//                 alert(response.data);
//             }
//         } catch (error) {
//             alert('There was an error submitting the form. Please try again.');
//         }
//     };
    
   
//     return (
//         <div className="access-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
           
//             <div className="access-container1">
//             <h2 className="access-title">Create An Account</h2>
//                 {submitted && (
//                     <div className="alert alert-success" role="alert">
//                         Form submitted successfully!
//                     </div>
//                 )}
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group controlId="formFirstName">
//                         <Form.Label>First Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             placeholder="Enter your first name"
//                             isInvalid={!!errors.firstName}
//                         />
//                         <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group controlId="formLastName">
//                         <Form.Label>Last Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             placeholder="Enter your last name"
//                             isInvalid={!!errors.lastName}
//                         />
//                         <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group controlId="formRole">
//                     <Form.Label>Role</Form.Label>
//                      <Form.Select
//                         name="role"
//                         value={formData.role}
//                         onChange={handleChange}
//                         isInvalid={!!errors.role}
//                     >
//                         <option value="">Select Role</option>
                       
//                         <option value="Admin">Secretary (Admin) </option>
                        
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
//                 </Form.Group>


//                     <Form.Group controlId="formEmail">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Enter your email"
//                             isInvalid={!!errors.email}
//                         />
//                         <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group controlId="formPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             placeholder="Enter your password"
//                             isInvalid={!!errors.password}
//                         />
//                         <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
//                     </Form.Group>

//                     <Button variant="primary" type="submit" className='button1'>
//                         Sign Up
//                     </Button>
//                 </Form>

              
//             </div>
//         </div>
//     );
// };

// export default NewAccount;

import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../Applicant/Signup.css';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../Assets/Loginbackground.png';

const NewAccount = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.role) newErrors.role = 'Role is required';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
    
        try {
            const response = await axios.post('/NewAccount.php', formData, {
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
    
            const result = response.data;
            if (result.success) {
                setShowSuccessModal(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    role: '',
                    password: ''
                });
            } else {
                alert(result.message);
            }
        } catch (error) {
            alert('There was an error submitting the form. Please try again.');
        }
    };
    

    const handleModalClose = () => {
        setShowSuccessModal(false);
        navigate('/login'); // Navigate to login page
    };

    const handleNavigateToLogin = () => {
        setShowSuccessModal(false);
        navigate('/login'); // Navigate to login page
    };
    
    const handleNavigateToDashboard = () => {
        setShowSuccessModal(false);
        navigate('/dashboard'); // Navigate to dashboard page
    };

    return (
        <div className="access-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="access-container1">
                <h2 className="access-title">Create An Account</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                            isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
                            isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            isInvalid={!!errors.role}
                        >
                            <option value="">Select Role</option>
                            <option value="Admin">Secretary (Admin)</option>
                            <option value="urc">Director - URC </option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="button1">
                        Sign Up
                    </Button>
                </Form>
            </div>

           
<Modal show={showSuccessModal} centered>
    <Modal.Header >
        <Modal.Title>Account Created</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        New Account has been created successfully !
    </Modal.Body>
    <Modal.Footer>
        {/* <Button variant="primary" className='button1' onClick={handleNavigateToLogin}>
          Login
        </Button> */}
        <Button variant="primary" className='button1' onClick={handleNavigateToDashboard}>
            Dashboard
        </Button>
    </Modal.Footer>
</Modal>
        </div>
    );
};

export default NewAccount;
