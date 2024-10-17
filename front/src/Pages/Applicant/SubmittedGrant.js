

// import React, { useEffect, useState } from 'react';
// import Navbar from '../../Components/Navbar';
// import Table from 'react-bootstrap/Table';
// import axios from 'axios';
// import './SubmittedGrant.css'


// export default function SubmittedGrant() {
//   const [submittedGrants, setSubmittedGrants] = useState([]);

//   useEffect(() => {
//     const fetchSubmittedGrants = async () => {
//       try {
//         const response = await axios.get('/SubmittedGrants.php');
//         if (Array.isArray(response.data)) {
//           setSubmittedGrants(response.data);
//         } else {
//           console.error('Expected an array but received:', response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching submitted grants:', error);
//       }
//     };

//     fetchSubmittedGrants();
//   }, []);

//   const handleEdit = (grantId) => {
//     // Logic for handling the edit action
//     console.log(`Edit grant with ID: ${grantId}`);
//   };

//   const handleViewPDF = (grantId) => {
//     // Logic for handling viewing the PDF
//     console.log(`View PDF for grant with ID: ${grantId}`);
//   };

//   return (
//     <div>
//       <Navbar />
//       <Table
//         striped
//         bordered
//         hover
//         style={{ marginTop: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}
//       >
//         <thead>
//           <tr>
//             <th>Application Id</th>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>Status</th>
//             <th>Grant (Pdf)</th>
//             <th>Agreements</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submittedGrants.length > 0 ? (
//             submittedGrants.map((grant, index) => (
//               <tr key={`${grant.pID}-${index}`}>
//                 <td>{grant.Id}</td>
//                 <td>{grant.projectTitle}</td>
//                 <td>{new Date().toLocaleDateString()}</td> {/* Placeholder for submitted date */}
//                 <td>
//                   {/* Show status and "Edit" button if status is "Save" */}
//                   {grant.Status === 'Save' ? (
//                     <>
//                       <span>{grant.Status}</span>
//                       <button className=' Edit_Button'
//                         onClick={() => handleEdit(grant.Id)}
                       
//                       >
//                         Edit
//                       </button>
//                     </>
//                   ) : (
//                     <span>{grant.Status}</span>
//                   )}
//                 </td>
//                 <td>
//                   {/* Show "Not Available" if status is "Save", else show "View PDF" button */}
//                   {grant.Status === 'Save' ? (
//                     <span>Not Available</span>
//                   ) : (
//                     <button onClick={() => handleViewPDF(grant.Id)} className=' View_Button'>View</button>
//                   )}
//                 </td>
//                 <td>Not Available</td> {/* Placeholder for Agreements */}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" style={{ textAlign: 'center' }}>
//                 No submitted grants found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SubmittedGrant.css';

export default function SubmittedGrant() {
  const [submittedGrants, setSubmittedGrants] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchSubmittedGrants = async () => {
      try {
        const response = await axios.get('/SubmittedGrants.php');
        if (Array.isArray(response.data)) {
          setSubmittedGrants(response.data);
        } else {
          console.error('Expected an array but received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching submitted grants:', error);
      }
    };

    fetchSubmittedGrants();
  }, []);

  const handleEdit = (appId) => {
    // Navigate to the edit-grant page and pass the appId as state
    navigate('/editgrant', { state: { appId: appId } });
  //ass app_ID as a URL parameter i
  //navigate(`/editgrant/${appId}`);

  };

  const handleViewPDF = (grantId) => {
    // Logic for handling viewing the PDF
    console.log(`View PDF for grant with ID: ${grantId}`);
  };

  return (
    <div>
      <Navbar />
      <Table
        striped
        bordered
        hover
        style={{ marginTop: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}
      >
        <thead>
          <tr>
            <th>Application Id</th>
            <th>Project Title</th>
            <th>Submitted Date</th>
            <th>Status</th>
            <th>Grant (Pdf)</th>
            <th>Agreements</th>
          </tr>
        </thead>
        <tbody>
          {submittedGrants.length > 0 ? (
            submittedGrants.map((grant, index) => (
              <tr key={`${grant.pID}-${index}`}>
                <td>{grant.Id}</td>
                <td>{grant.projectTitle}</td>
                <td>{grant.submittedDate}</td> {/* Placeholder for submitted date */}
                <td>
                  {/* Show status and "Edit" button if status is "Save" */}
                  {grant.Status === 'Save' ? (
                    <>
                      <span>{grant.Status}</span>
                      <button
                        className='Edit_Button'
                        onClick={() => handleEdit(grant.Id)} // Call handleEdit with grant Id
                      >
                        Edit
                      </button>
                    </>
                  ) : (
                    <span>{grant.Status}</span>
                  )}
                </td>
                <td>
                  {/* Show "Not Available" if status is "Save", else show "View PDF" button */}
                  {grant.Status === 'Save' ? (
                    <span>Not Available</span>
                  ) : (
                    <button
                      onClick={() => handleViewPDF(grant.Id)}
                      className='View_Button'
                    >
                      View
                    </button>
                  )}
                </td>
                <td>Not Available</td> {/* Placeholder for Agreements */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>
                No submitted grants found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
