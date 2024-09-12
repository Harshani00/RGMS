
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../Components/Navbar';
// import Navbar2 from '../Components/Navbar2';
// import Sidebar from '../Components/Sidebar';
// import { useForm } from './MainForm';

// export default function Grant() {
//   const { formData, handleFormDataChange } = useForm(); // Destructure formData and handleFormDataChange from useForm
//   const [grantRows, setGrantRows] = useState([
//     { fundingSource: '', duration: '', currency: '', amount: '' },
//   ]);

//   const navigate = useNavigate(); // Initialize useNavigate

//   // Function to add a new row to the grant table
//   const handleAddRow = () => {
//     setGrantRows([...grantRows, { fundingSource: '', duration: '', currency: '', amount: '' }]);
//   };

//   // Function to handle input changes in the dynamic rows
//   const handleChange = (index, event) => {
//     const { name, value } = event.target;
//     const newGrantRows = grantRows.map((row, i) => {
//       if (i === index) {
//         return { ...row, [name]: value };
//       }
//       return row;
//     });
//     setGrantRows(newGrantRows);
//     handleFormDataChange({ [name]: value }); // Update the central form data
//   };

//   // Function to navigate to the next page
//   const handleNext = () => {
//     navigate('/supervisors'); // Navigate to Supervisors page
//   };

//   // Function to navigate to the previous page
//   const handlePrevious = () => {
//     navigate('/grant'); // Update this path to the correct previous page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />

//       <div className="form-container">
//         <Form>
//           <Row className="mb-3">
//             <Form.Label>1. Project Title</Form.Label>
//             <Form.Group as={Col} controlId="formGridTitle">
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder=""
//                 name="projectTitle"
//                 value={formData.projectTitle || ''}
//                 onChange={(e) => handleFormDataChange({ projectTitle: e.target.value })}
//               />
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Label>2. Please list any previous university or other grants you have received.</Form.Label>
//           </Row>

//           {/* Column headers */}
//           <Row className="mb-3">
//             <Col><Form.Label>Funding Source</Form.Label></Col>
//             <Col><Form.Label>Duration</Form.Label></Col>
//             <Col><Form.Label>Unit of Currency</Form.Label></Col>
//             <Col><Form.Label>Amount (Numbers only)</Form.Label></Col>
//           </Row>

//           {/* Dynamically generated rows */}
//           {grantRows.map((row, index) => (
//             <Row className="mb-3" key={index}>
//               <Col>
//                 <Form.Control
//                   name="fundingSource"
//                   value={row.fundingSource}
//                   onChange={(e) => handleChange(index, e)}
//                   placeholder=""
//                 />
//               </Col>
//               <Col>
//                 <Form.Control
//                   name="durationperiod"
//                   value={row.durationperiod}
//                   onChange={(e) => handleChange(index, e)}
//                   placeholder="Ex: 01/01/2012-31/12/2012"
//                 />
//               </Col>
//               <Col>
//                 <Form.Control
//                   name="currency"
//                   value={row.currency}
//                   onChange={(e) => handleChange(index, e)}
//                   placeholder=""
//                 />
//               </Col>
//               <Col>
//                 <Form.Control
//                   name="amount"
//                   value={row.amount}
//                   onChange={(e) => handleChange(index, e)}
//                   placeholder=""
//                 />
//               </Col>
//             </Row>
//           ))}

//           <Button variant="secondary" size="sm" onClick={handleAddRow} className="mb-3">
//             Add Row
//           </Button>

//           <Row className="mb-3">
//             <Form.Label>3. Are you currently involved in a project?</Form.Label>
//             <Form.Group as={Col} controlId="formGridProject">
//               <Row>
//                 <Col xs={6}>
//                   <Form.Check
//                     type="radio"
//                     label="Yes"
//                     name="projectInvolved"
//                     value="yes"
//                     checked={formData.projectInvolved === 'yes'}
//                     onChange={(e) => handleFormDataChange({ projectInvolved: e.target.value })}
//                   />
//                 </Col>
//                 <Col xs={6}>
//                   <Form.Check
//                     type="radio"
//                     label="No"
//                     name="projectInvolved"
//                     value="no"
//                     checked={formData.projectInvolved === 'no'}
//                     onChange={(e) => handleFormDataChange({ projectInvolved: e.target.value })}
//                   />
//                 </Col>
//               </Row>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Label>4. Please list 3 of your recent publications (provide links related to the publications).</Form.Label>
//             <Form.Group as={Col} controlId="formGridPublications">
//               <Form.Label>Link 1</Form.Label>
//               <Form.Control
//                 placeholder=""
//                 name="publication1"
//                 value={formData.publication1 || ''}
//                 onChange={(e) => handleFormDataChange({ publication1: e.target.value })}
//               />
//               <Form.Label>Link 2</Form.Label>
//               <Form.Control
//                 placeholder=""
//                 name="publication2"
//                 value={formData.publication2 || ''}
//                 onChange={(e) => handleFormDataChange({ publication2: e.target.value })}
//               />
//               <Form.Label>Link 3</Form.Label>
//               <Form.Control
//                 placeholder=""
//                 name="publication3"
//                 value={formData.publication3 || ''}
//                 onChange={(e) => handleFormDataChange({ publication3: e.target.value })}
//               />
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Label>5. Have received any grants from outside for this/similar project?</Form.Label>
//             <Form.Group as={Col} controlId="formGridProject">
//               <Row>
//                 <Col xs={6}>
//                   <Form.Check
//                     type="radio"
//                     label="Yes"
//                     name="outsidegrants"
//                     value="yes"
//                     checked={formData.outsidegrants === 'yes'}
//                     onChange={(e) => handleFormDataChange({ outsidegrants: e.target.value })}
//                   />
//                 </Col>
//                 <Col xs={6}>
//                   <Form.Check
//                     type="radio"
//                     label="No"
//                     name="outsidegrants"
//                     value="no"
//                     checked={formData.outsidegrants === 'no'}
//                     onChange={(e) => handleFormDataChange({ outsidegrants: e.target.value })}
//                   />
//                 </Col>
//               </Row>
//             </Form.Group>
//           </Row>

        
//           {/* Column headers */}
//           <Row className="mb-3">
//             <Col><Form.Label>Funding Organization</Form.Label></Col>
//             <Col><Form.Label>Amount</Form.Label></Col>
            
//           </Row>

//           {/* Dynamically generated rows */}
//           {grantRows.map((row, index) => (
//             <Row className="mb-3" key={index}>
//               <Col>
//                 <Form.Control
//                   name="fundingOrganization"
//                   value={row.fundingOrganization}
//                   onChange={(e) => handleChange(index, e)}
//                   placeholder=""
//                 />
//               </Col>
//               <Col>
//                 <Form.Control
//                   name="fundingAmount"
//                   value={row.fundingAmount}
//                   onChange={(e) => handleChange(index, e)}
//                   placeholder="LKR"
//                 />
//               </Col>
//             </Row>
//           ))}
//           <Row className="mb-3">
//             <Form.Label>6. List the equipment/resources/facilities available in your Department/Faculty for your research </Form.Label>
//             <Form.Group as={Col} controlId="formGridTitle">
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder=""
//                 name="researchFacilities"
//                 value={formData.researchFacilities || ''}
//                 onChange={(e) => handleFormDataChange({ researchFacilities: e.target.value })}
//               />
//             </Form.Group>
//           </Row>


//           <Button variant="primary" type="submit" className='savebutton'>
//             Save
//           </Button>
//           <Button variant="primary" onClick={handlePrevious} className='previousbutton'>Previous</Button>
//           <Button variant="primary" onClick={handleNext} className='nextbutton'>Next</Button>
//         </Form>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import axios from 'axios';
// import './Grant.css'; // Import the CSS file
// import Navbar from '../../Components/Navbar';
// import Navbar2 from '../../Components/Navbar2';
// import Sidebar from '../../Components/Sidebar';
// import { useForm } from './MainForm';

// export default function Grant() {
//   const { formData, handleFormDataChange, updateCompletionStatus } = useForm(); // Destructure formData and handleFormDataChange from useForm
//   const [grantRows, setGrantRows] = useState([
//     { fundingSource: '', duration: '', currency: '', amount: '' },
//   ]);
//   const [submitted, setSubmitted] = useState(false); // Track form submission
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Function to add a new row to the grant table
//   const handleAddRow = () => {
//     setGrantRows([...grantRows, { fundingSource: '', duration: '', currency: '', amount: '' }]);
//   };

//   // Function to handle input changes in the dynamic rows
//   const handleChange = (index, event) => {
//     const { name, value } = event.target;
//     const newGrantRows = grantRows.map((row, i) => {
//       if (i === index) {
//         return { ...row, [name]: value };
//       }
//       return row;
//     });
//     setGrantRows(newGrantRows);
//     handleFormDataChange({ [`grantRow${index}_${name}`]: value }); // Update the central form data
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
//   const handleSubmit = async (event) => {
//     event.preventDefault();

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

//   // Function to navigate to the next page
 
//   const handleNext = () => {
//     if (validate()) {
//       updateCompletionStatus('project', true);
//       navigate('/supervisors'); // Update this path to the correct previous page
//     }else {
//       alert('Missing Fields Required.');
//     }
//   };
  

//   // Function to navigate to the previous page
//   const handlePrevious = () => {
//     navigate('/grant'); // Update this path to the correct previous page
//   };

//   return (
//     <div>
//       <Navbar />
//       <Navbar2 />
//       <Sidebar />

//       <div className="form-container">
//       {submitted && (
//           <div className="alert alert-success" role="alert">
//             Form submitted successfully!
//           </div>
//         )}
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Label>1. Project Title</Form.Label>
//             <Form.Group as={Col} controlId="formGridTitle">
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder=""
//                 name="projectTitle"
//                 value={formData.projectTitle || ''}
//                 onChange={(e) => handleFormDataChange({ projectTitle: e.target.value })}
//                 isInvalid={!!errors.projectTitle}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.projectTitle}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Label>2. Please list any previous university or other grants you have received.</Form.Label>
//           </Row>

//           {/* Column headers */}
//           <Row className="mb-3">
//             <Col><Form.Label>Funding Source</Form.Label></Col>
//             <Col><Form.Label>Duration</Form.Label></Col>
//             <Col><Form.Label>Unit of Currency</Form.Label></Col>
//             <Col><Form.Label>Amount (Numbers only)</Form.Label></Col>
//           </Row>

//           {/* Dynamically generated rows */}
//           {grantRows.map((row, index) => (
//             <Row className="mb-3" key={index}>
//               <Col>
//                 <Form.Control
//                   name="fundingSource"
//                   value={row.fundingSource || ''}
//                   onChange={(e) => handleChange(index, e)}
//                   placeholder=""
//                 />
//               </Col>
//               <Col>
//                 <Form.Control
//                   name="durationperiod"
//                   value={row.durationperiod || ''}
//                   onChange={(e) => handleChange(index, e)}
//                   placeholder="Ex: 01/01/2012-31/12/2012"
//                 />
//               </Col>
//               <Col>
//                 <Form.Control
//                   name="currency"
//                   value={row.currency || ''}
//                   onChange={(e) => handleChange(index, e)}
//                   placeholder=""
//                 />
//               </Col>
//               <Col>
//                 <Form.Control
//                   name="amount"
//                   value={row.amount || ''}
//                   onChange={(e) => handleChange(index, e)}
//                   placeholder=""
//                 />
//               </Col>
//             </Row>
//           ))}

//           <Button variant="secondary" size="sm" onClick={handleAddRow} className="mb-3">
//             Add Row
//           </Button>

          // <Row className="mb-3">
          //   <Form.Label>3. Are you currently involved in a project?</Form.Label>
          //   <Form.Group as={Col} controlId="formGridProject">
          //     <Row>
          //       <Col xs={6}>
          //         <Form.Check
          //           type="radio"
          //           label="Yes"
          //           name="projectInvolved"
          //           value="yes"
          //           checked={formData.projectInvolved === 'yes'}
          //           onChange={(e) => handleFormDataChange({ projectInvolved: e.target.value })}
          //           isInvalid={!!errors.projectInvolved}
          //         />
          //       </Col>
          //       <Col xs={6}>
          //         <Form.Check
          //           type="radio"
          //           label="No"
          //           name="projectInvolved"
          //           value="no"
          //           checked={formData.projectInvolved === 'no'}
          //           onChange={(e) => handleFormDataChange({ projectInvolved: e.target.value })}
          //           isInvalid={!!errors.projectInvolved}
          //         />
          //       </Col>
          //     </Row>
          //     <Form.Control.Feedback type="invalid">
          //       {errors.projectInvolved}
          //     </Form.Control.Feedback>
          //   </Form.Group>
          // </Row>

          // <Row className="mb-3">
          //   <Form.Label>4. Please list 3 of your recent publications (provide links related to the publications).</Form.Label>
          //   <Form.Group as={Col} controlId="formGridPublications">
          //     <Form.Label>Link 1</Form.Label>
          //     <Form.Control
          //       placeholder=""
          //       name="publication1"
          //       value={formData.publication1 || ''}
          //       onChange={(e) => handleFormDataChange({ publication1: e.target.value })}
          //     />
          //     <Form.Label>Link 2</Form.Label>
          //     <Form.Control
          //       placeholder=""
          //       name="publication2"
          //       value={formData.publication2 || ''}
          //       onChange={(e) => handleFormDataChange({ publication2: e.target.value })}
          //     />
          //     <Form.Label>Link 3</Form.Label>
          //     <Form.Control
          //       placeholder=""
          //       name="publication3"
          //       value={formData.publication3 || ''}
          //       onChange={(e) => handleFormDataChange({ publication3: e.target.value })}
          //     />
          //   </Form.Group>
          // </Row>

          // <Row className="mb-3">
          //   <Form.Label>5. Have you received any grants from outside for this/similar project?</Form.Label>
          //   <Form.Group as={Col} controlId="formGridProject">
          //     <Row>
          //       <Col xs={6}>
          //         <Form.Check
          //           type="radio"
          //           label="Yes"
          //           name="outsidegrants"
          //           value="yes"
          //           checked={formData.outsidegrants === 'yes'}
          //           onChange={(e) => handleFormDataChange({ outsidegrants: e.target.value })}
          //           isInvalid={!!errors.outsidegrants}
          //         />
          //       </Col>
          //       <Col xs={6}>
          //         <Form.Check
          //           type="radio"
          //           label="No"
          //           name="outsidegrants"
          //           value="no"
          //           checked={formData.outsidegrants === 'no'}
          //           onChange={(e) => handleFormDataChange({ outsidegrants: e.target.value })}
          //           isInvalid={!!errors.outsidegrants}
          //         />
          //       </Col>
          //       </Row>
//             </Form.Group>
//           </Row>

        
//           {/* Dynamically generated funding rows */}
//           <Row className="mb-3">
//             <Form.Label>5. Have you received any grants from outside for this/similar project?</Form.Label>
//           </Row>
//           <Row className="mb-3">
//             <Col><Form.Label>Funding Organization</Form.Label></Col>
//             <Col><Form.Label>Amount</Form.Label></Col>
//           </Row>
//           {fundingRows.map((row, index) => (
//             <Row className="mb-3" key={index}>
//               <Col>
//                 <Form.Control
//                   name="fundingOrganization"
//                   value={row.fundingOrganization || ''}
//                   onChange={(e) => handleFundingChange(index, e)}
//                   placeholder=""
//                 />
//               </Col>
//               <Col>
//                 <Form.Control
//                   name="fundingAmount"
//                   value={row.fundingAmount || ''}
//                   onChange={(e) => handleFundingChange(index, e)}
//                   placeholder="LKR"
//                 />
//               </Col>
//             </Row>
//           ))}
//           <Button variant="secondary" size="sm" onClick={handleAddFundingRow} className="mb-3">
//             Add Funding Row
//           </Button>
//           <Row className="mb-3">
//             <Form.Label>6. List the equipment/resources/facilities available in your Department/Faculty for your research </Form.Label>
//             <Form.Group as={Col} controlId="formGridTitle">
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder=""
//                 name="researchFacilities"
//                 value={formData.researchFacilities || ''}
//                 onChange={(e) => handleFormDataChange({ researchFacilities: e.target.value })}
//                 isInvalid={!!errors.researchFacilities}
//               />
//             </Form.Group>
//           </Row>


//           <Button variant="primary" type="submit" className='savebutton'>
//             Save
//           </Button>
//           <Button variant="primary" onClick={handlePrevious} className='previousbutton'>Previous</Button>
//           <Button variant="primary" onClick={handleNext} className='nextbutton'>Next</Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import './Grant.css'; // Import the CSS file
import Navbar from '../../Components/Navbar';
import Navbar2 from '../../Components/Navbar2';
import Sidebar from '../../Components/Sidebar';
import { useForm } from './MainForm';

export default function Grant() {
  const { formData, handleFormDataChange, updateCompletionStatus } = useForm(); // Destructure formData and handleFormDataChange from useForm
  const [grantRows, setGrantRows] = useState([
    { fundingSource: '', duration: '', currency: '', amount: '' },
  ]);
  const [fundingRows, setFundingRows] = useState([
    { fundingOrganization: '', fundingAmount: '' },
  ]); // Separate state for funding organization rows
  const [submitted, setSubmitted] = useState(false); // Track form submission
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to add a new row to the grant table
  const handleAddGrantRow = () => {
    setGrantRows([...grantRows, { fundingSource: '', duration: '', currency: '', amount: '' }]);
  };

  // Function to handle input changes in the dynamic grant rows
  const handleGrantChange = (index, event) => {
    const { name, value } = event.target;
    const newGrantRows = grantRows.map((row, i) => {
      if (i === index) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setGrantRows(newGrantRows);
    handleFormDataChange({ [`grantRow${index}_${name}`]: value }); // Update the central form data
  };

  // Function to add a new row to the funding table
  const handleAddFundingRow = () => {
    setFundingRows([...fundingRows, { fundingOrganization: '', fundingAmount: '' }]);
  };

  // Function to handle input changes in the dynamic funding rows
  const handleFundingChange = (index, event) => {
    const { name, value } = event.target;
    const newFundingRows = fundingRows.map((row, i) => {
      if (i === index) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setFundingRows(newFundingRows);
    handleFormDataChange({ [`fundingRow${index}_${name}`]: value }); // Update the central form data
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

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

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

  // Function to navigate to the next page
  const handleNext = () => {
    if (validate()) {
      updateCompletionStatus('project', true);
      navigate('/supervisors'); // Update this path to the correct previous page
    } else {
      alert('Missing Fields Required.');
    }
  };

  // Function to navigate to the previous page
  const handlePrevious = () => {
    navigate('/grant'); // Update this path to the correct previous page
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
            <Form.Label>1. Project Title</Form.Label>
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder=""
                name="projectTitle"
                value={formData.projectTitle || ''}
                onChange={(e) => handleFormDataChange({ projectTitle: e.target.value })}
                isInvalid={!!errors.projectTitle}
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
                  value={row.fundingSource || ''}
                  onChange={(e) => handleGrantChange(index, e)}
                  placeholder=""
                />
              </Col>
              <Col>
                <Form.Control
                  name="durationperiod"
                  value={row.durationperiod || ''}
                  onChange={(e) => handleGrantChange(index, e)}
                  placeholder="Ex: 01/01/2012-31/12/2012"
                />
              </Col>
              <Col>
                <Form.Control
                  name="currency"
                  value={row.currency || ''}
                  onChange={(e) => handleGrantChange(index, e)}
                  placeholder=""
                />
              </Col>
              <Col>
                <Form.Control
                  name="amount"
                  value={row.amount || ''}
                  onChange={(e) => handleGrantChange(index, e)}
                  placeholder=""
                />
              </Col>
            </Row>
          ))}
          <Button variant="secondary" size="sm" onClick={handleAddGrantRow} className="mb-3">
            Add Grant Row
          </Button>
          <Row className="mb-3">
            <Form.Label>3. Are you currently involved in a project?</Form.Label>
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
          <Form.Label>5. Have you received any grants from outside for this/similar project?</Form.Label>
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
          <Row className="mb-3">
            <Col><Form.Label>Funding Organization</Form.Label></Col>
            <Col><Form.Label>Amount</Form.Label></Col>
          </Row>
          {fundingRows.map((row, index) => (
            <Row className="mb-3" key={index}>
              <Col>
                <Form.Control
                  name="fundingOrganization"
                  value={row.fundingOrganization || ''}
                  onChange={(e) => handleFundingChange(index, e)}
                  placeholder=""
                />
              </Col>
              <Col>
                <Form.Control
                  name="fundingAmount"
                  value={row.fundingAmount || ''}
                  onChange={(e) => handleFundingChange(index, e)}
                  placeholder="LKR"
                />
              </Col>
            </Row>
          ))}
          <Button variant="secondary" size="sm" onClick={handleAddFundingRow} className="mb-3">
            Add Funding Row
          </Button>
          <Row className="mb-3">
            <Form.Label>6. List the equipment/resources/facilities available in your Department/Faculty for your research </Form.Label>
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

          <Button variant="primary" type="submit" className="savebutton">
            Save
          </Button>
          <Button variant="primary" onClick={handlePrevious} className="previousbutton">
            Previous
          </Button>
          <Button variant="primary" onClick={handleNext} className="nextbutton">
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
}
