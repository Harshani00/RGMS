// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './Signup.css';
// import backgroundImage from '../../Assets/10.jpg';

// export default function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [userName, setUserName] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setErrors({ ...errors, [e.target.name]: '' });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.password) newErrors.password = 'Password is required';
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
//       const response = await axios.post('/Login.php', formData);
//       if (response.data.status) {
//         const { user_name, user_role, user_id } = response.data;
//         console.log('User Role from API:', user_role); // Check user role in console
//         console.log('User ID from API:', user_id); // Check user ID in console
  
//         setUserName(user_name);
//         localStorage.setItem('userName', user_name); // Store username in localStorage
//         localStorage.setItem('userRole', user_role); // Store user role in localStorage
//         localStorage.setItem('userID', user_id); // Save the user_id in local storage
  
//         alert(`Welcome ${user_name}!`);
//         navigate('/dashboard');
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       alert('There was an error submitting the form. Please try again.');
//     }
//   };
  

//   const handleSignupRedirect = () => {
//     navigate('/signup');
//   };

//   return (
//     <div className="access-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="access-container1">
//         <h2 className="access-title">Log In</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Email"
//               isInvalid={!!errors.email}
//             />
//             <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter Password"
//               isInvalid={!!errors.password}
//             />
//             <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="button1">
//             Sign In
//           </Button>
//         </Form>

//         <div className="bottom mt-3">
//           <Form.Check
//             type="checkbox"
//             label="Remember me"
//             defaultChecked
//             name="remember"
//             className="cbox"
//           />
//           <p className="mt-3">Don't have an Account? <Button variant="link" onClick={handleSignupRedirect}>Sign Up Here</Button></p>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signup.css'; // Assuming the CSS is in this file
import backgroundImage from '../../Assets/10.jpg';

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
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
      const response = await axios.post('/Login.php', formData);
      if (response.data.status) {
        const { user_name, user_role, user_id } = response.data;
        setUserName(user_name);
        localStorage.setItem('userName', user_name);
        localStorage.setItem('userRole', user_role);
        localStorage.setItem('userID', user_id);
        alert(`Welcome ${user_name}!`);
        navigate('/dashboard');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="access-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="access-container1">
        <h2 className="access-title">Log In</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
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
              placeholder="Enter Password"
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="button1">
            Sign In
          </Button>
        </Form>

        <div className="bottom mt-3">
          <Form.Check
            type="checkbox"
            label="Remember me"
            defaultChecked
            name="remember"
            className="cbox"
          />
          <p className="mt-3">Don't have an Account? <Button variant="link" onClick={handleSignupRedirect}>Sign Up Here</Button></p>
        </div>
      </div>
    </div>
  );
}
