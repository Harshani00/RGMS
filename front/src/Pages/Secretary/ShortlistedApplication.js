// import React, { useEffect, useState } from 'react';
// import Navbar from '../../Components/Navbar';
// import Table from 'react-bootstrap/Table';
// import { useNavigate } from 'react-router-dom';
// import './Table.css';

// export default function ShortlistedApplication() {
//   const [submittedGrants, setSubmittedGrants] = useState([]);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   // Dummy data to simulate grants (since backend connections are removed)
//   useEffect(() => {
//     const dummyData = [
//       { Id: 1, projectTitle: 'Project 1', submittedDate: '2024-10-01', Status: 'Save', selected: false },
//       { Id: 2, projectTitle: 'Project 2', submittedDate: '2024-09-25', Status: 'Submitted', selected: false },
//       { Id: 3, projectTitle: 'Project 3', submittedDate: '2024-09-20', Status: 'Save', selected: false },
//     ];
//     setSubmittedGrants(dummyData);
//   }, []);

//   const handleToggleSelect = (grantId) => {
//     // Toggle the 'selected' status for the grant with the given Id
//     setSubmittedGrants((prevGrants) =>
//       prevGrants.map((grant) =>
//         grant.Id === grantId ? { ...grant, selected: !grant.selected } : grant
//       )
//     );
//   };

//   const handleEdit = (appId) => {
//     // Navigate to the edit-grant page and pass the appId as state
//     navigate('/editgrant', { state: { appId: appId } });
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
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>Reviewer 1</th>
//             <th>Reviewer 2</th>
//             <th>HOD</th>
//             <th>Dean</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submittedGrants.length > 0 ? (
//             submittedGrants.map((grant, index) => (
//               <tr key={`${grant.Id}-${index}`}>
//                 <td>{grant.projectTitle}</td>
//                 <td>{grant.submittedDate}</td>
//                 <td>Reviewer 1</td> {/* Placeholder for Reviewer 1 */}
//                 <td>Reviewer 2</td> {/* Placeholder for Reviewer 2 */}
//                 <td>HOD</td> {/* Placeholder for HOD */}
//                 <td>Dean</td> {/* Placeholder for Dean */}
//                 <td>
//                   <button
//                     className='select-button'
//                     onClick={() => handleToggleSelect(grant.Id)}
//                   >
//                     {grant.selected ? 'Unselect' : 'Select'}
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" style={{ textAlign: 'center' }}>
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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Secretary/Table.css';

export default function ShortlistedApplicationD() {
  const [submittedGrants, setSubmittedGrants] = useState([]);
  const navigate = useNavigate();

  // Fetch data on component mount
  useEffect(() => {
    const fetchSubmittedGrants = async () => {
      try {
        const response = await axios.get('ApprovedApplications.php');
        console.log('Response Data:', response.data); // Debugging response
        const grants = Array.isArray(response.data) ? response.data : [];
        setSubmittedGrants(grants);
      } catch (error) {
        console.error('Error fetching data:', error); // Handle fetch error
      }
    };

    fetchSubmittedGrants();
  }, []);

  // Toggle select status for a grant
  const handleToggleSelect = async (grantId) => {
    try {
      const grant = submittedGrants.find((g) => g.Id === grantId);
      const newStatus = grant.selected ? '5.2' : '5.1';

      await axios.post('ApplicationStatus_Granted.php', {
        appId: grantId,
        status: newStatus,
      });

      // Update state after successful status update
      setSubmittedGrants((prevGrants) =>
        prevGrants.map((grant) =>
          grant.Id === grantId ? { ...grant, selected: !grant.selected } : grant
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // Navigate to edit page
  const handleEdit = (appId) => {
    navigate('/editgrant', { state: { appId: appId } });
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
            <th>Reviewer 1</th>
            <th>Reviewer 2</th>
            <th>HOD</th>
            <th>Dean</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {submittedGrants.length > 0 ? (
            submittedGrants.map((grant, index) => (
              <tr key={index}>
                <td>{grant.Id}</td>
                <td>{grant.projectTitle}</td>
                <td>{grant.submittedDate}</td>
                <td>{grant.reviewer1_mark || 'Not Rated'}</td>
                <td>{grant.reviewer2_mark || 'Not Rated'}</td>
                <td>{grant.hod_decision || 'Not Decided'}</td>
                <td>{grant.dean_decision || 'Not Decided'}</td>
                <td>
                  {console.log('Grant Status:', grant.Status)} {/* Debugging status */}
                  {grant.Status === '5.1' ? (
                    <button className="granted-button">Granted</button>
                  ) : grant.Status === '5.2' ? (
                    <button className="not-granted-button">Not Granted</button>
                  ) : grant.Status === '3.1' ? (
                    <button
                      className="select-unselect-button"
                      onClick={() => handleToggleSelect(grant.Id)}
                    >
                      {grant.selected ? 'Unselect' : 'Select'}
                    </button>
                  ) : (
                    'No Action'
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center' }}>
                No submitted grants found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}