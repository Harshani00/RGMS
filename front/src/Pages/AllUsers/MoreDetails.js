// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Table from 'react-bootstrap/Table'; // Import Bootstrap Table
// import Navbar from '../../Components/Navbar';
// import './MoreDetails.css'; // Import custom CSS

// function MoreDetails() {
//   return (
//     <div>
//       <Navbar />
//       <div className="d-flex justify-content-start align-items-start mt-5">
//         <div className="form-box">
//           <label className='moredetailstitle'>More Details about the Application No:</label>
//           <Form>
//             <Form.Group className="mb-3" controlId="formBasicName">
//               <Form.Label>Applicant Name:</Form.Label>
//               <Form.Control type="text" placeholder="Enter Name" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicDate">
//               <Form.Label>Submitted Date:</Form.Label>
//               <Form.Control type="text" placeholder="Submitted Date" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicStatus">
//               <Form.Label>Status:</Form.Label>
//               <Form.Control type="text" placeholder="Status" />
//             </Form.Group>

//             <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicProposal">
//             <Form.Label className="me-2">Project Proposal:</Form.Label>
//             <Button>Download</Button>
//           </Form.Group>

//           <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicCvPI">
//             <Form.Label className="me-3">CV of the Principal Investigator:</Form.Label>
//             <Button>Download</Button>
//           </Form.Group>

//           <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicCvCoInvestigators">
//             <Form.Label className="me-3">CVs of all the co-investigators:</Form.Label>
//             <Button>Download</Button>
//           </Form.Group>



           
//           </Form>

//           <Form.Label>HOD / Dean Decisions:</Form.Label>
//           {/* Table Section */}
//           <Table striped bordered hover className="mt-4">
//             <thead>
//               <tr>
//                 <th></th>
//                 <th>HOD</th>
//                 <th>Dean</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Decision</td>
//                 <td>
//                   <Form.Control type="text" placeholder="Enter Decision" />
//                 </td>
//                 <td>
//                   <Form.Control type="text" placeholder="Enter Decision" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Remarks</td>
//                 <td>
//                   <Form.Control type="text" placeholder="Enter Remarks" />
//                 </td>
//                 <td>
//                   <Form.Control type="text" placeholder="Enter Remarks" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Date</td>
//                 <td>
//                   <Form.Control type="Decision_Date" />
//                 </td>
//                 <td>
//                   <Form.Control type="Decision_Date" />
//                 </td>
//               </tr>
//             </tbody>
//           </Table>

//           <Form.Label>Reviewer Decisions:</Form.Label>
//           {/* Reviewer Decisions Table */}
//           <Table striped bordered hover className="mt-4">
//             <thead>
//               <tr>
//                 <th></th>
//                 <th>Reviewer One</th>
//                 <th>Reviewer Two</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Marks</td>
//                 <td>
//                   <Form.Control type="text" placeholder="Enter Marks" />
//                 </td>
//                 <td>
//                   <Form.Control type="text" placeholder="Enter Marks" />
//                 </td>
//               </tr>
              // <tr>
              //   <td>Evaluation Report</td>
                // <td>
                //   <Button>Download</Button>
                // </td>
                // <td>
                //   <Button>Download</Button>
                // </td>
              // </tr>
              // <tr>
//                 <td>Date</td>
//                 <td>
//                   <Form.Control type="Decision_Date" />
//                 </td>
//                 <td>
//                   <Form.Control type="Decision_Date" />
//                 </td>
//               </tr>
//             </tbody>
//           </Table>

//           <Form.Group className="mb-3" controlId="formBasicStartDate">
//               <Form.Label>Project Starting Date:</Form.Label>
//               <Form.Control type=" startDate " />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicApprovedAmount">
//               <Form.Label>Approved Amount:</Form.Label>
//               <Form.Control type="text" placeholder="Enter Approved Amount" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicProjectDuration">
//               <Form.Label>Project Duration:</Form.Label>
//               <Form.Control type="text" placeholder="Enter Project Duration (e.g., 12 months)" />
//             </Form.Group>

          //   <Form.Label>Progress Reports:</Form.Label>
          // {/* Reviewer Decisions Table */}
          // <Table striped bordered hover className="mt-4">
          //   <thead>
          //     <tr>
          //       <th>Progress Report</th>
              
          //     </tr>
          //   </thead>
          //   <tbody>
          //     <tr>
          //       <td>Mid Year</td>
          //       <td>
          //       <td>
          //         <Button>Download</Button>
          //       </td>
          //       </td>
                
          //     </tr>
          //     <tr>
          //       <td>Year End</td>
          //       <td>
          //         <Button>Download</Button>
          //       </td>
                
          //     </tr>
          //     <tr>
          //       <td>Final</td>
          //       <td>
          //       <td>
          //         <Button>Download</Button>
          //       </td>
          //       </td>
               
          //     </tr>
          //   </tbody>
          // </Table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MoreDetails;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Navbar from '../../Components/Navbar';
import axios from 'axios';
import './MoreDetails.css';

function MoreDetails() {
  const { app_ID } = useParams(); // Get app_ID from URL params // Ex : http://localhost:3000/moredetails/567
  const [applicationDetails, setApplicationDetails] = useState(null);

   // Status mappings
   const statusMapping = {
    1: 'Submitted',
    2.1: 'Shortlisted',
    2.2: 'Rejected',
    3.1: 'Approved',
    3.2: 'Rejected',
    5.1: 'Granted',
    5.2: 'Deny',
  };

  // Decision mappings
  const decisionMapping = {
    3.1: 'Approved',
    3.2: 'Rejected',
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`/MoreDetails.php?app_ID=${app_ID}`);
        setApplicationDetails(response.data);
      } catch (error) {
        console.error('Error fetching application details:', error);
      }
    };
  
    fetchDetails();
  }, [app_ID]); // Fetch data whenever app_ID changes
  if (!applicationDetails) {
    return <div>Loading...</div>;
  }

  const {
    name,
    submittedDate,
    Status,
    hod_decision,
    hod_remarks,
    hod_date,
    dean_decision,
    dean_remarks,
    dean_date,
    reviewer1_marks,
    reviewer1_date,
    reviewer2_marks,
    reviewer2_date,
    startDate,
    period,
    amount,
    budget_uploaded_at,
  } = applicationDetails;

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-start align-items-start mt-5">
        <div className="form-box">
          <label className="moredetailstitle">More Details about the Application No: {app_ID}</label>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Applicant Name:</Form.Label>
              <Form.Control type="text" readOnly value={name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Submitted Date:</Form.Label>
              <Form.Control type="text" readOnly value={submittedDate} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStatus">
              <Form.Label>Status:</Form.Label>
              <Form.Control type="text" readOnly value={statusMapping[Status] || 'Unknown'} />
            </Form.Group>

            
            <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicProposal">
            <Form.Label className="me-2">Project Proposal:</Form.Label>
            <Button className='dowloadbutton'>Download</Button>
          </Form.Group>

          <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicCvPI">
            <Form.Label className="me-3">CV of the Principal Investigator:</Form.Label>
            <Button className='dowloadbutton'>Download</Button>
          </Form.Group>

          <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicCvCoInvestigators">
            <Form.Label className="me-3">CVs of all the co-investigators:</Form.Label>
            <Button className='dowloadbutton'>Download</Button>
          </Form.Group>


            <Form.Label>HOD / Dean Decisions:</Form.Label>
            <Table striped bordered hover className="mt-4">
              <thead>
                <tr>
                  <th></th>
                  <th>HOD</th>
                  <th>Dean</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Decision</td>
                  <td>
                    <Form.Control type="text" readOnly value={decisionMapping[hod_decision] || 'Pending'}  />
                  </td>
                  <td>
                    <Form.Control type="text" readOnly value={decisionMapping[dean_decision] || 'Pending'}  />
                  </td>
                </tr>
                <tr>
                  <td>Remarks</td>
                  <td>
                    <Form.Control type="text" readOnly value={hod_remarks} />
                  </td>
                  <td>
                    <Form.Control type="text" readOnly value={dean_remarks} />
                  </td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>
                    <Form.Control type="text" readOnly value={hod_date} />
                  </td>
                  <td>
                    <Form.Control type="text" readOnly value={dean_date} />
                  </td>
                </tr>
              </tbody>
            </Table>

            <Form.Label>Reviewer Decisions:</Form.Label>
            <Table striped bordered hover className="mt-4">
              <thead>
                <tr>
                  <th></th>
                  <th>Reviewer One</th>
                  <th>Reviewer Two</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Marks</td>
                  <td>
                    <Form.Control type="text" readOnly value={reviewer1_marks} />
                  </td>
                  <td>
                    <Form.Control type="text" readOnly value={reviewer2_marks} />
                  </td>
                </tr>
                <tr>
                  <td>Evaluation Report</td>
                  <td>
                  <Button className='dowloadbutton'>Download</Button>
                </td>
                <td>
                  <Button className='dowloadbutton'>Download</Button>
                </td>
                </tr>
                <tr>
                  <td>Date</td>
          
                  <td>
                    <Form.Control type="text" readOnly value={reviewer1_date} />
                  </td>
                  <td>
                    <Form.Control type="text" readOnly value={reviewer2_date} />
                  </td>
                </tr>
              </tbody>
            </Table>

            <Form.Group className="mb-3" controlId="formBasicStartDate">
              <Form.Label>Project Starting Date:</Form.Label>
              <Form.Control type="text" readOnly value={startDate} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicProjectDuration">
              <Form.Label>Project Duration:</Form.Label>
              <Form.Control type="text" readOnly value={period} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicApprovedAmount">
              <Form.Label>Approved Amount (LKR) :</Form.Label>
              <Form.Control type="text" readOnly value={amount} />
            </Form.Group>
          </Form>

          <Form.Label>Progress Reports:</Form.Label>
          {/* Reviewer Decisions Table */}
          <Table striped bordered hover className="mt-4">
            <thead>
              <tr>
                <th>Progress Report</th>
              
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mid Year</td>
                <td>
                <td>
                  <Button className='dowloadbutton'>Download</Button>
                </td>
                </td>
                
              </tr>
              <tr>
                <td>Year End</td>
                <td>
                  <Button className='dowloadbutton'>Download</Button>
                </td>
                
              </tr>
              <tr>
                <td>Final</td>
                <td>
                <td>
                  <Button className='dowloadbutton'>Download</Button>
                </td>
                </td>
               
              </tr>
            </tbody>
          </Table>

          <Form.Label>Budget:</Form.Label>
          {/* Reviewer Decisions Table */}
          <Table striped bordered hover className="mt-4">
            <thead>
              <tr>
                <th>Budget</th>
              
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Request Date</td>
                <td>
                <Form.Control type="text" readOnly value={ budget_uploaded_at} />
                </td>
                
              </tr>
              <tr>
                <td>New Budget</td>
                <td>
                  <Button className='dowloadbutton'>Download</Button>
                </td>
                
              </tr>
              <tr>
                <td>Submitted Date</td>
                <td>
                <td>
                  check it
                </td>
                </td>
               
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default MoreDetails;
