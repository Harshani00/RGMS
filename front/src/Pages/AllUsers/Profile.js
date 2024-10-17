import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Profile.css'; // Import the CSS file for styling

const Profile = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        role: '',
        password: ''
    });
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate();

    // Get userId from sessionStorage (assuming it's saved there during login)
    const uid = sessionStorage.getItem('uid');

    useEffect(() => {
        // Fetch user data based on user_id when the component mounts
        axios.get('/GetProfileData.php')
            .then((response) => {
                setFormData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching profile data:', error);
            });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEditToggle = () => {
        setEditing(!editing);
    };

    const handleSave = () => {
        axios.post('/updateProfile.php', formData)
            .then((response) => {
                alert('Profile updated successfully');
                setEditing(false);
            })
            .catch((error) => {
                console.error('Error saving profile data:', error);
            });
    };

    const handleLogout = () => {
        sessionStorage.removeItem('uid'); // Remove userId from session storage on logout
        navigate('/login'); // Redirect to login
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-body">
                    <h3>Profile Information</h3>
                    <Form>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                disabled={!editing}
                                placeholder="First Name"
                            />
                        </Form.Group>

                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                disabled={!editing}
                                placeholder="Last Name"
                            />
                        </Form.Group>

                        <Form.Group controlId="formUserName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="userName"
                                value={formData.userName}
                                onChange={handleChange}
                                disabled={!editing}
                                placeholder="User Name"
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={!editing}
                                placeholder="Email"
                            />
                        </Form.Group>

                        <Form.Group controlId="formRole">
                            <Form.Label>Role</Form.Label>
                            <Form.Select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                disabled={!editing}
                            >
                                <option value="urc">Director - URC</option>
                                <option value="Dean">Dean</option>
                                <option value="HOD">Head of the Department</option>
                                <option value="reviewer">Reviewer</option>
                                <option value="Applicant">Applicant</option>
                                <option value="Admin">Admin</option>
                            </Form.Select>
                        </Form.Group>

                        {editing && (
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="New Password"
                                />
                            </Form.Group>
                        )}

                        <div className="profile-actions">
                            {editing ? (
                                <Button variant="success" onClick={handleSave} className="profilebuttons">
                                    Save Changes
                                </Button>
                            ) : (
                                <Button variant="primary" onClick={handleEditToggle} className="profilebuttons">
                                    Edit Profile
                                </Button>
                            )}
                        </div>
                    </Form>
                </div>
                <Button variant="danger" onClick={handleLogout} className="profilebuttons">
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default Profile;
