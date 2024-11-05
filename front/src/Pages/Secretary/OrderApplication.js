// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import './Table.css';

// export default function OrderApplication() {
//   const [selectedStatus, setSelectedStatus] = useState('');
//   const [applications, setApplications] = useState([]);
//   const [filteredApplications, setFilteredApplications] = useState([]);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get('/ViewApplication.php'); // Adjust endpoint as needed
//         setApplications(response.data);
//         setFilteredApplications(response.data); // Initialize with all data
//       } catch (error) {
//         console.error('Error fetching applications:', error);
//       }
//     };

//     fetchApplications();
//   }, []);

//   useEffect(() => {
//     if (selectedStatus) {
//       setFilteredApplications(
//         applications.filter((app) => app.status === selectedStatus)
//       );
//     } else {
//       setFilteredApplications(applications); // Show all if no filter
//     }
//   }, [selectedStatus, applications]);

//   const handleStatusChange = (e) => {
//     setSelectedStatus(e.target.value);
//   };

//   const handleViewClick = (id) => {
//     navigate(`/view-application/${id}`); // Navigate to the detailed view page
//   };

//   const handleSelect = (id) => {
//     // Add your select logic here
//     console.log(`Selected application ID: ${id}`);
//   };

//   const handleUnselect = (id) => {
//     // Add your unselect logic here
//     console.log(`Unselected application ID: ${id}`);
//   };

//   return (
//     <div>
//       <Navbar />
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th colSpan={5} className="dropdown-row">
//               <label htmlFor="application">ALL Applications </label>
//             </th>
//           </tr>
//           <tr>
//             <th>ID</th>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>View Grant (PDF)</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredApplications.map((app) => (
//             <tr key={app.app_ID}>
//               <td>{app.app_ID}</td>
//               <td>{app.projectTitle}</td>
//               <td>{app.submittedDate}</td>
//               <td>
//                 <button 
//                   className="view-button" // Add your custom class name for styling
//                   onClick={() => handleViewClick(app.id)} // Handle button click
//                 >
//                   View
//                 </button>
//               </td>
//               <td>
//                 <button 
//                   className="select-button" // Add your custom class name for styling
//                   onClick={() => handleSelect(app.id)} // Handle select button click
//                 >
//                   Select
//                 </button>
//                 <button 
//                   className="unselect-button" // Add your custom class name for styling
//                   onClick={() => handleUnselect(app.id)} // Handle unselect button click
//                 >
//                   Unselect
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import './Table.css';

// export default function OrderApplication() {
//   const [applications, setApplications] = useState([]);
//   const [filteredApplications, setFilteredApplications] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState({}); // Track the status of each application

//   const navigate = useNavigate(); // Initialize useNavigate hook

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get('/ViewApplication_DS.php');
//         console.log(response.data); // Check if the right data is coming from backend
//         setApplications(response.data);
//         setFilteredApplications(response.data);
//       } catch (error) {
//         console.error('Error fetching applications:', error);
//       }
//     };
  
//     fetchApplications();
//   }, []);

//   const handleToggleSelect = (app_ID) => {
//     const newStatus = selectedStatus[app_ID] === 'selected' ? 2.2 : 2.1; // Shortlisted = 2.1, Rejected = 2.2
  
//     // Update the status in the database via an API call
//     axios.post('/UpdateOrderApplicationStatus.php', {
//       app_ID: app_ID,
//       status: newStatus
//     })
//     .then(response => {
//       if (response.data.status === 'success') {
//         setSelectedStatus((prevStatus) => ({
//           ...prevStatus,
//           [app_ID]: prevStatus[app_ID] === 'selected' ? 'unselected' : 'selected',
//         }));
//       } else {
//         console.error('Error updating status:', response.data.message);
//       }
//     })
//     .catch(error => {
//       console.error('Error updating status:', error);
//     });
//   };
  

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Order Applications and View</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th colSpan={5} className="dropdown-row">
//               <label htmlFor="application">ALL Applications </label>
//             </th>
//           </tr>
//           <tr>
//             <th>ID</th>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>View Grant (PDF)</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredApplications.map((app) => (
//             <tr key={app.app_ID}>
//               <td>{app.app_ID}</td>
//               <td>{app.projectTitle}</td>
//               <td>{app.submittedDate}</td>
//               <td>
//                 <button 
//                   className="view-button" 
//                   onClick={() => navigate(`/view-application/${app.app_ID}`)}
//                 >
//                   View
//                 </button>
//               </td>
//               <td>
//                 <button
//                   className="select-button"
//                   onClick={() => handleToggleSelect(app.app_ID)}
//                 >
//                   {selectedStatus[app.app_ID] === 'selected' ? 'Unselect' : 'Select'}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Table.css';

// export default function OrderApplication() {
//   const [applications, setApplications] = useState([]);
//   const [filteredApplications, setFilteredApplications] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState({});

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get('/ViewApplication_DS.php');
//         console.log(response.data);
//         setApplications(response.data);
//         setFilteredApplications(response.data);

//         // Initialize selectedStatus based on the application's current status
//         const initialStatus = {};
//         response.data.forEach(app => {
//           initialStatus[app.app_ID] = app.status === 2.1 ? 'selected' : 'unselected';
//         });
//         setSelectedStatus(initialStatus);
//       } catch (error) {
//         console.error('Error fetching applications:', error);
//       }
//     };
  
//     fetchApplications();
//   }, []);

//   const handleToggleSelect = (app_ID) => {
//     const newStatus = selectedStatus[app_ID] === 'selected' ? 2.2 : 2.1;

//     // Update the status in the database via an API call
//     axios.post('/UpdateOrderApplicationStatus.php', {
//       app_ID: app_ID,
//       status: newStatus
//     })
//     .then(response => {
//       if (response.data.status === 'success') {
//         setSelectedStatus((prevStatus) => ({
//           ...prevStatus,
//           [app_ID]: prevStatus[app_ID] === 'selected' ? 'unselected' : 'selected',
//         }));
//       } else {
//         console.error('Error updating status:', response.data.message);
//       }
//     })
//     .catch(error => {
//       console.error('Error updating status:', error);
//     });
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Order Applications and View</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th colSpan={5} className="dropdown-row">
//               <label htmlFor="application">ALL Applications </label>
//             </th>
//           </tr>
//           <tr>
//             <th>ID</th>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>View Grant (PDF)</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredApplications.map((app) => (
//             <tr key={app.app_ID}>
//               <td>{app.app_ID}</td>
//               <td>{app.projectTitle}</td>
//               <td>{app.submittedDate}</td>
//               <td>
//                 <button 
//                   className="view-button" 
//                   onClick={() => navigate(`/view-application/${app.app_ID}`)}
//                 >
//                   View
//                 </button>
//               </td>
//               <td>
//                 <button
//                   className="select-button"
//                   onClick={() => handleToggleSelect(app.app_ID)}
//                 >
//                   {selectedStatus[app.app_ID] === 'selected' ? 'Unselect' : 'Select'}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from '../../Components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Table.css';

export default function OrderApplication() {
  const [applications, setApplications] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/ViewApplication_DS.php');
        const applications = response.data;

        // Set applications data
        setApplications(applications);

        // Initialize the selected status based on the fetched applications
        const initialStatus = {};
        applications.forEach(app => {
          initialStatus[app.app_ID] = app.Status === 2.1 ? 'selected' : 'unselected';
        });
        setSelectedStatus(initialStatus);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };
  
    fetchApplications();
  }, []);

  const handleToggleSelect = (app_ID) => {
    const newStatus = selectedStatus[app_ID] === 'selected' ? 2.2 : 2.1;

    axios.post('/UpdateOrderApplicationStatus.php', { app_ID, status: newStatus })
      .then(response => {
        if (response.data.status === 'success') {
          setSelectedStatus(prevStatus => ({
            ...prevStatus,
            [app_ID]: prevStatus[app_ID] === 'selected' ? 'unselected' : 'selected',
          }));
        } else {
          console.error('Error updating status:', response.data.message);
        }
      })
      .catch(error => {
        console.error('Error updating status:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Order Applications and View</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Project Title</th>
            <th>Submitted Date</th>
            <th>View Grant (PDF)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.app_ID}>
              <td>{app.app_ID}</td>
              <td>{app.projectTitle}</td>
              <td>{app.submittedDate}</td>
              <td>
                <button 
                  className="view-button" 
                  onClick={() => navigate(`/view-application/${app.app_ID}`)}
                >
                  View
                </button>
              </td>
              <td>
                <button
                  className="select-button"
                  onClick={() => handleToggleSelect(app.app_ID)}
                >
                  {selectedStatus[app.app_ID] === 'selected' ? 'Unselect' : 'Select'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Table.css';

// export default function OrderApplication() {
//   const [applications, setApplications] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get('/ViewApplication_DS.php');
//         const applications = response.data;

//         // Set applications data
//         setApplications(applications);

//         // Initialize the selected status based on fetched applications
//         const initialStatus = {};
//         applications.forEach(app => {
//           initialStatus[app.app_ID] = app.Status;
//         });
//         setSelectedStatus(initialStatus);
//       } catch (error) {
//         console.error('Error fetching applications:', error);
//       }
//     };

//     fetchApplications();
//   }, []);

//   const handleToggleSelect = (app_ID) => {
//     // Toggle status between 2.1 and 2.2
//     const newStatus = selectedStatus[app_ID] === 2.1 ? 2.2 : 2.1;

//     axios.post('/UpdateOrderApplicationStatus.php', { app_ID, status: newStatus })
//       .then(response => {
//         if (response.data.status === 'success') {
//           setSelectedStatus(prevStatus => ({
//             ...prevStatus,
//             [app_ID]: newStatus,
//           }));
//         } else {
//           console.error('Error updating status:', response.data.message);
//         }
//       })
//       .catch(error => {
//         console.error('Error updating status:', error);
//       });
//   };

//   // Function to determine button style based on status
//   const getButtonStyle = (status) => {
//     if (status === 1) return { color: 'white', backgroundColor: 'blue' };
//     if (status === 2.1) return { color: 'white', backgroundColor: 'green' };
//     if (status === 2.2) return { color: 'white', backgroundColor: 'red' };
//     return {}; // Default style
//   };

//   // Function to determine button label based on status
//   const getButtonLabel = (status) => {
//     if (status === 1 || status === 2.1) return 'Select';
//     if (status === 2.2) return 'Unselect';
//     return ''; // Default label
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Order Applications and View</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>View Grant (PDF)</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((app) => (
//             <tr key={app.app_ID}>
//               <td>{app.app_ID}</td>
//               <td>{app.projectTitle}</td>
//               <td>{app.submittedDate}</td>
//               <td>
//                 <button 
//                   className="view-button" 
//                   onClick={() => navigate(`/view-application/${app.app_ID}`)}
//                 >
//                   View
//                 </button>
//               </td>
//               <td>
//                 <button
//                   style={getButtonStyle(selectedStatus[app.app_ID])} // Apply style based on status
//                   onClick={() => handleToggleSelect(app.app_ID)}
//                 >
//                   {getButtonLabel(selectedStatus[app.app_ID])}  {/* Set label based on status */}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Table.css';

// export default function OrderApplication() {
//   const [applications, setApplications] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get('/ViewApplication_DS.php');
//         const applications = response.data;

//         setApplications(applications);

//         // Initialize the selected status based on fetched applications
//         const initialStatus = {};
//         applications.forEach(app => {
//           initialStatus[app.app_ID] = app.Status;
//         });
//         setSelectedStatus(initialStatus);
//       } catch (error) {
//         console.error('Error fetching applications:', error);
//       }
//     };

//     fetchApplications();
//   }, []);

//   const handleToggleSelect = (app_ID) => {
//     const newStatus = selectedStatus[app_ID] === 2.1 ? 2.2 : 2.1;

//     axios.post('/UpdateOrderApplicationStatus.php', { app_ID, status: newStatus })
//       .then(response => {
//         if (response.data.status === 'success') {
//           setSelectedStatus(prevStatus => ({
//             ...prevStatus,
//             [app_ID]: newStatus,
//           }));
//         } else {
//           console.error('Error updating status:', response.data.message);
//         }
//       })
//       .catch(error => {
//         console.error('Error updating status:', error);
//       });
//   };

//   // Define button style based on status
//   const getButtonStyle = (status) => {
//     if (status === 1) return { color: 'blue', backgroundColor: 'blue' };
//     if (status === 2.1) return { color: 'white', backgroundColor: 'green' };
//     if (status === 2.2) return { color: 'white', backgroundColor: 'red' };
//     return {}; // Default style
//   };

//   // Define button label based on status
//   const getButtonLabel = (status) => {
//     if (status === 1 || status === 2.1) return 'Select';
//     if (status === 2.2) return 'Unselect';
//     return ''; // Default label
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1 className="page-title">Order Applications and View</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Project Title</th>
//             <th>Submitted Date</th>
//             <th>View Grant (PDF)</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((app) => (
//             <tr key={app.app_ID}>
//               <td>{app.app_ID}</td>
//               <td>{app.projectTitle}</td>
//               <td>{app.submittedDate}</td>
//               <td>
//                 <button 
//                   className="view-button" 
//                   onClick={() => navigate(`/view-application/${app.app_ID}`)}
//                 >
//                   View
//                 </button>
//               </td>
//               <td>
//                 <button
//                   style={getButtonStyle(selectedStatus[app.app_ID])} // Apply style based on status
//                   onClick={() => handleToggleSelect(app.app_ID)}
//                 >
//                   {getButtonLabel(selectedStatus[app.app_ID])}  {/* Set label based on status */}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
