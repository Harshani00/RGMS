import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from '../../Components/Navbar';
import '../Secretary/Table.css';

export default function ApproveBudgetD() {
  // Applications data with default decision values
  const [applications, setApplications] = useState([
    {
      id: 1,
      projectTitle: 'Project Alpha',
      requestDate: '2024-08-01',
      previousBudget: '$5000',
      newBudget: '$5500',
      decision: 'Pending', // Default decision
    },
    {
      id: 2,
      projectTitle: 'Project Beta',
      requestDate: '2024-07-15',
      previousBudget: '$4000',
      newBudget: '$4500',
      decision: 'Pending', // Default decision
    }
  ]);

  // Handle the decision change
  const handleDecisionChange = (id, newDecision) => {
    const updatedApplications = applications.map((app) =>
      app.id === id ? { ...app, decision: newDecision } : app
    );
    setApplications(updatedApplications);
  };

  // Save decision for the given application id
  const saveDecision = (id) => {
    const app = applications.find(app => app.id === id);
    console.log(`Saving decision "${app.decision}" for application ${id}`);
    // Add logic here to save the decision, e.g., API call
  };

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Approve Budget Revision</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Project Title</th>
            <th>Request Date</th>
            <th>Previous Budget</th>
            <th>New Budget</th>
            <th>Decision</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.length > 0 ? (
            applications.map((app) => (
              <tr key={app.id}>
                <td>{app.projectTitle}</td>
                <td>{app.requestDate}</td>
                <td>
                  <button className="view-button" onClick={() => handleView(app.id, 'previous')}>
                    View
                  </button>
                </td>
                <td>
                  <button className="view-button" onClick={() => handleView(app.id, 'new')}>
                    View
                  </button>
                </td>
                <td>
                  <select
                    value={app.decision}
                    onChange={(e) => handleDecisionChange(app.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
                <td>
                  <button 
                    className="view-button" 
                    onClick={() => saveDecision(app.id)}
                  >
                    Save
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No applications available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

// Handle the view button action
const handleView = (id, reportType) => {
  console.log(`Viewing ${reportType} report for application ${id}`);
  // Add logic to view the specific report or show a placeholder PDF
};

// Handle the send email button action
const handleSendEmail = (id) => {
  console.log(`Sending email for application ${id}`);
  // Add logic to simulate sending an email or trigger an alert
};
