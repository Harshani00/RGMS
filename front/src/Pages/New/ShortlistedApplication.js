import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import '../Secretary/Table.css';

export default function ShortlistedApplication() {
  const [submittedGrants, setSubmittedGrants] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Dummy data to simulate grants (since backend connections are removed)
  useEffect(() => {
    const dummyData = [
      { Id: 1, projectTitle: 'Project 1', submittedDate: '2024-10-01', Status: 'Save', selected: false },
      { Id: 2, projectTitle: 'Project 2', submittedDate: '2024-09-25', Status: 'Submitted', selected: false },
      { Id: 3, projectTitle: 'Project 3', submittedDate: '2024-09-20', Status: 'Save', selected: false },
    ];
    setSubmittedGrants(dummyData);
  }, []);

  const handleToggleSelect = (grantId) => {
    // Toggle the 'selected' status for the grant with the given Id
    setSubmittedGrants((prevGrants) =>
      prevGrants.map((grant) =>
        grant.Id === grantId ? { ...grant, selected: !grant.selected } : grant
      )
    );
  };

  const handleEdit = (appId) => {
    // Navigate to the edit-grant page and pass the appId as state
    navigate('/editgrant', { state: { appId: appId } });
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
              <tr key={`${grant.Id}-${index}`}>
                <td>{grant.projectTitle}</td>
                <td>{grant.submittedDate}</td>
                <td>Reviewer 1</td> {/* Placeholder for Reviewer 1 */}
                <td>Reviewer 2</td> {/* Placeholder for Reviewer 2 */}
                <td>HOD</td> {/* Placeholder for HOD */}
                <td>Dean</td> {/* Placeholder for Dean */}
                <td>
                  <button
                    className='select-button'
                    onClick={() => handleToggleSelect(grant.Id)}
                  >
                    {grant.selected ? 'Unselect' : 'Select'}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                No submitted grants found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
