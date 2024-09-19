
import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

export default function SubmittedGrant() {
  const [submittedGrants, setSubmittedGrants] = useState([]);

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
            <th>No.</th>
            <th>Project Title</th>
            <th>Submitted Date</th>
            <th>Status</th>
            <th>Grant (Pdf)</th>
            <th>Agreements</th>
          </tr>
        </thead>
        <tbody>
          {submittedGrants.length > 0 ? (
            submittedGrants.map((profile, index) => (
              <tr key={`${profile.uid}-${index}`}>
                <td>{index + 1}</td>
                <td>{profile.projectTitle}</td>
                <td>{new Date().toLocaleDateString()}</td> {/* Placeholder for submitted date */}
                <td>
                  {profile.status === 'submitted' ? (
                    <button className="btn btn-success">Submitted</button>
                  ) : (
                    'Pending'
                  )}
                </td>
                <td>Not Available</td> {/* Placeholder for PDF link */}
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
// import React, { useEffect, useState } from 'react';
// import Navbar from '../../Components/Navbar';
// import Table from 'react-bootstrap/Table';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate

// export default function SubmittedGrant() {
//   const [submittedGrants, setSubmittedGrants] = useState([]);
//   const navigate = useNavigate();  // Define navigate

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
//             <th>No.</th>
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
//               <tr key={`${grant.uid}-${index}`}>
//                 <td>{index + 1}</td>
//                 <td>{grant.ID}</td>
//                 <td>{grant.submittedDate}</td>
//                 <td>
//                   {grant.status === 'Saved' ? (
//                     <button onClick={() => navigate(`/EditGrant/${grant.uid}`)}>Edit</button>
//                   ) : (
//                     grant.status
//                   )}
//                 </td>
//                 <td>
//                   {/* Add grant PDF links or placeholders */}
//                 </td>
//                 <td>
//                   {/* Add agreement links or placeholders */}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6">No grants submitted yet.</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
