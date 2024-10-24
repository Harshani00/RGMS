// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignupForm = () => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [userName, setUserName] = useState('');
//     const [email, setEmail] = useState('');
//     const [role, setRole] = useState('');
//     const [password, setPassword] = useState('');
//     const [submitted, setSubmitted] = useState(false);
//     const navigate = useNavigate();

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         alert(firstName);
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/test/Signup.php', {
//                 firstName
                
//             });
//             alert(response.data);
            
//             // Optionally navigate to another page
//             //navigate('/login'); // Replace '/login' with the path to your login page
//         } catch (error) {
//             alert('There was an error submitting the form. Please try again.');
//         }
//     };

//     // Handle navigation to the login page
//     const handleLoginClick = () => {
//         //navigate('/login'); // Replace '/login' with the path to your login page
//     };

//     return (
//         <div className="signup">
//             <h1>Sign Up</h1>
//             <h4>Welcome! Create Your Account.</h4>
//             <form onSubmit={handleSubmit}>
//                 <label>First Name</label>
//                 <input
//                     type="text"
//                     value={firstName}
                    
//                     onChange={(e) => setFirstName(e.target.value)}
//                     required
//                 />
//                 <label>Last Name</label>
//                 <input
//                     type="text"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     required
//                 />
//                 <label>User Name</label>
//                 <input
//                     type="text"
//                     value={userName}
//                     onChange={(e) => setUserName(e.target.value)}
//                     required
//                 />
//                 <label>Role</label>
//                 <input
//                     type="text"
//                     value={role}
//                     onChange={(e) => setRole(e.target.value)}
//                     required
//                 />
//                 <label>Email</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <label>Password</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <input type="submit" value="Submit" />
//             </form>
            
//             <p>Already have an account? <button onClick={handleLoginClick}>Login Here</button></p>
//         </div>
//     );
// };

// export default SignupForm;



import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signup.css'; // Import the CSS file if needed
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../Assets/10.jpg';


const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        role: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate(); // Use the navigate hoo

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Clear error when user types
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.userName) newErrors.userName = 'User Name is required';
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
            const response = await axios.post('/Signup.php', formData, {
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
            setSubmitted(true);
            setFormData({
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                role: '',
                password: ''
            });
            navigate('/login'); // Navigate to the login page after successful signup
             } 
             
             catch (error) {
            alert('There was an error submitting the form. Please try again.');
        }
        

        
    };
    const handleLoginRedirect = () => {
        navigate('/login'); // Navigate to the login page
    };
    return (
        <div className="access-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
           
            <div className="access-container1">
            <h2 className="access-title">Sign Up</h2>
                {submitted && (
                    <div className="alert alert-success" role="alert">
                        Form submitted successfully!
                    </div>
                )}
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

                    <Form.Group controlId="formUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            placeholder="Enter your user name"
                            isInvalid={!!errors.userName}
                        />
                        <Form.Control.Feedback type="invalid">{errors.userName}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formRole">
                    <Form.Label>Role</Form.Label>
                     <Form.Select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        isInvalid={!!errors.role}
                    >
                        <option value="">Select your role</option>
                        <option value="urc">Director - URC </option>
                        <option value="Dean">Dean</option>
                        <option value="HOD">Head of the Department</option>
                        <option value="reviewer">Reviewer</option>
                        <option value="Applicant">Applicant</option>
                        <option value="Admin">Admin</option>
                        
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

                    <Button variant="primary" type="submit" className='button1'>
                        Sign Up
                    </Button>
                </Form>

                <p className="account">Already have an account? <Button variant="link" className="signuphyperlink" onClick={handleLoginRedirect} >Login Here</Button></p>
            </div>
        </div>
    );
};

export default SignupForm;
