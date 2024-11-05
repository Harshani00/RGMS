// import React from 'react';
// import CustomCard from '../Components/CustomCard'; // Import the reusable component
// import './Dashboard.css';
// import Navbar from '../Components/Navbar'; // Import the reusable component
// import Sidebar from '../Components/Sidebar';


// export default function Dashboard() {
//   return (
//     <div>
//       <Navbar />
//       <Sidebar />
     
      
      
//       <div className="dashboard-container">
//         <CustomCard title="Apply New Grant" buttonText="Apply" linkTo="/grant" />
//         <CustomCard title="Apply Budget Revision" buttonText="Apply" linkTo="/budget" />
//         <CustomCard title="Submit Progress Report" buttonText="Submit" linkTo="/progress" />
//         <CustomCard title="Submit Final Report" buttonText="Submit" linkTo="/report" />
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import CustomCard from '../Components/CustomCard'; // Import the reusable component
// import './Dashboard.css';
// import Navbar from '../Components/Navbar'; // Import the reusable component


// // Import images
// import grantImage from '../Assets/img12.jpg';
// import budgetImage from '../Assets/img13.jpg';
// import progressImage from '../Assets/img14.jpg';
// import reportImage from '../Assets/img10.jpg';

// export default function Dashboard() {
//   return (
//     <div>
//       <Navbar />
      
      
//       <div className="dashboard-container">
//         <CustomCard 
//           title="Apply New Grant" 
//           buttonText="Apply" 
//           linkTo="/grant" 
//           imageSrc={grantImage} // Pass the image URL
//         />
//         <CustomCard 
//           title="Apply Budget Revision" 
//           buttonText="Apply" 
//           linkTo="/budget" 
//           imageSrc={budgetImage} // Pass the image URL
//         />
//         <CustomCard 
//           title="Submit Progress Report" 
//           buttonText="Submit" 
//           linkTo="/progress" 
//           imageSrc={progressImage} // Pass the image URL
//         />
//         <CustomCard 
//           title="Submit Final Report" 
//           buttonText="Submit" 
//           linkTo="/report" 
//           imageSrc={reportImage} // Pass the image URL
//         />
//       </div>
//     </div>
//   );
// }




// import React from 'react';
// import CustomCard from '../Components/CustomCard'; // Import the reusable component
// import './Dashboard.css';
// import Navbar from '../Components/Navbar'; // Import the reusable component
// import { useLocation } from 'react-router-dom'; // Import useLocation


// // Import images
// import grantImage from '../Assets/img12.jpg';
// import budgetImage from '../Assets/img13.jpg';
// import progressImage from '../Assets/img14.jpg';
// import reportImage from '../Assets/img10.jpg';

// export default function Dashboard() {
//   const location = useLocation();
//   const userRole = location.state?.userRole;

//   return (
//     <div>
//       <Navbar />

//       <div className="dashboard-container">
//         {userRole === 'Applicant' ? (
//           <>
//             <CustomCard 
//               title="Apply New Grant" 
//               buttonText="Apply" 
//               linkTo="/grant" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="Apply Budget Revision" 
//               buttonText="Apply" 
//               linkTo="/budget" 
//               imageSrc={budgetImage} 
//             />
//             <CustomCard 
//               title="Submit Progress Report" 
//               buttonText="Submit" 
//               linkTo="/progress" 
//               imageSrc={progressImage} 
//             />
//             <CustomCard 
//               title="Submit Final Report" 
//               buttonText="Submit" 
//               linkTo="/report" 
//               imageSrc={reportImage} 
//             />
//           </>
//         ) : userRole === 'urc' ? (
//           <>
//             <CustomCard 
//               title="View Grant Applications" 
//               buttonText="View" 
//               linkTo="/view-grants" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="View Budget Revisions" 
//               buttonText="View" 
//               linkTo="/view-budget" 
//               imageSrc={budgetImage} 
//             />
//             <CustomCard 
//               title="View Progress Reports" 
//               buttonText="View" 
//               linkTo="/view-progress" 
//               imageSrc={progressImage} 
//             />
//             <CustomCard 
//               title="View Final Reports" 
//               buttonText="View" 
//               linkTo="/view-report" 
//               imageSrc={reportImage} 
//             />
//           </>
//         ) : (
//           <div>No dashboard available for this role.</div>
//         )}
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import CustomCard from '../Components/CustomCard'; // Import the reusable component
// import './Dashboard.css';
// import Navbar from '../Components/Navbar'; // Import the reusable component


// // Import images
// import grantImage from '../Assets/img12.jpg';
// import budgetImage from '../Assets/img13.jpg';
// import progressImage from '../Assets/img14.jpg';
// import reportImage from '../Assets/img10.jpg';

// export default function Dashboard() {
//   return (
//     <div>
//       <Navbar />
      
      
//       <div className="dashboard-container">
//         <CustomCard 
//           title="Apply New Grant" 
//           buttonText="Apply" 
//           linkTo="/grant" 
//           imageSrc={grantImage} // Pass the image URL
//         />
//         <CustomCard 
//           title="Apply Budget Revision" 
//           buttonText="Apply" 
//           linkTo="/budget" 
//           imageSrc={budgetImage} // Pass the image URL
//         />
//         <CustomCard 
//           title="Submit Progress Report" 
//           buttonText="Submit" 
//           linkTo="/progress" 
//           imageSrc={progressImage} // Pass the image URL
//         />
//         <CustomCard 
//           title="Submit Final Report" 
//           buttonText="Submit" 
//           linkTo="/report" 
//           imageSrc={reportImage} // Pass the image URL
//         />
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import CustomCard from '../Components/CustomCard'; // Import the reusable component
// import './Dashboard.css';
// import Navbar from '../Components/Navbar'; // Import the reusable component
// import grantImage from '../Assets/img12.jpg';
// import budgetImage from '../Assets/img13.jpg';
// import progressImage from '../Assets/img14.jpg';
// //import reportImage from '../Assets/img10.jpg';
// import ApplicationImage from '../Assets/img4.png';
// import progressImage1 from '../Assets/img7.png';
// import FinalReport from '../Assets/img8.png';
// import ApproveBudget from '../Assets/img9.png';

// export default function Dashboard() {
  
//   const userRole = localStorage.getItem('userRole'); // Get user role from localStorage

//   console.log('User Role:', userRole); // Debugging line to check the value

//   // Render different content based on user role
//   const renderCards = () => {
//     switch (userRole) {
//       case 'urc':
//         return (
//           <>
//             <CustomCard 
//               title="View Grants" 
//               buttonText="View" 
//               linkTo="/view-grants" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="View Budget" 
//               buttonText="View" 
//               linkTo="/view-budget" 
//               imageSrc={budgetImage} 
//             />
//             <CustomCard 
//               title="View Progress Reports & Final Reports"  
//               buttonText="View" 
//               linkTo="/view-progress-reports" 
//               imageSrc={progressImage} 
//             />
          
//           </>
//         );
//       case 'Applicant':
//         return (
//           <>
//             <CustomCard 
//               title="Apply New Grant" 
//               buttonText="Apply" 
//               linkTo="/grant" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="Apply Budget Revision" 
//               buttonText="Apply" 
//               linkTo="/budget" 
//               imageSrc={budgetImage} 
//             />
//             <CustomCard 
//               title="Submit Progress Report & Final Report" 
//               buttonText="Submit" 
//               linkTo="/progress" 
//               imageSrc={progressImage} 
//             />
           
//           </>
//         );
//         case 'Admin':
//           return (
//             <>
//               <CustomCard 
//                 title="Veiw Applications" 
//                 buttonText="View" 
//                 linkTo="/view-grants" 
//                 imageSrc={grantImage} 
//               />
//               <CustomCard 
//                 title="Veiw Shortlist Applications" 
//                 buttonText="View" 
//                 linkTo="/view-budget" 
//                 imageSrc={budgetImage} 
//               />
//               <CustomCard 
//                 title="Customize Review Criteria (Criteria , Weight , Marks)"  
//                 buttonText="View" 
//                 linkTo="/view-progress-reports" 
//                 imageSrc={progressImage} 
//               />
//               <CustomCard 
//                 title="Order Applications and View" 
//                 buttonText="View" 
//                 linkTo="/view-final-reports" 
//                 imageSrc={ApplicationImage} 
//               />

//               <CustomCard 
//                 title="Request Mid Year Progress / End Year Progress"  
//                 buttonText="View" 
//                 linkTo="/view-final-reports" 
//                 imageSrc={progressImage1} 
//               />   

//               <CustomCard 
//                 title="Request Final Reports"   
//                 buttonText="View" 
//                 linkTo="/view-final-reports" 
//                 imageSrc={FinalReport}
//               />   

//               <CustomCard 
//                 title="Approve Budget Revision"  
//                 buttonText="View" 
//                 linkTo="/view-final-reports" 
//                 imageSrc={ApproveBudget} 
//               />        
//             </>
//           );

//       default:
//         return <p>No dashboard available for your role.</p>;
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="dashboard-container">
//         {renderCards()}
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import CustomCard from '../../Components/CustomCard';

// import './Dashboard.css';
// import Navbar from '../../Components/Navbar';
// import grantImage from '../../Assets/img12.jpg';
// import budgetImage from '../../Assets/img13.jpg';
// import progressImage from '../../Assets/img14.jpg';
// import AgreementImage from '../../Assets/img16.jpg';
// import CriteriaImage from '../../Assets/img17.jpg';
// import progressImage1 from '../../Assets/img7.png';
// import FinalReport from '../../Assets/img8.png';
// import ApproveBudget from '../../Assets/img9.png';
// import SubmittedGrant from '../../Assets/img10.jpg';
// import { useNavigate } from 'react-router-dom';
// import backgroundImage from '../../Assets/10.jpg';


// export default function Dashboard() {
  
//   const userRole = localStorage.getItem('userRole');
  
//   // Example usage to avoid warning

//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const renderCards = () => {
//     switch (userRole) {
//       case 'urc':
//         return (
//           <>
//             <CustomCard 
//               title="View Applications " 
//               linkTo="/viewapplicationd" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="View Criteria" 
//               linkTo="/reviewcriteriad" 
//               imageSrc={CriteriaImage} 
//             />
//             <CustomCard 
//               title="Request Progress Report" 
//               linkTo="/progressreportd"  
//               imageSrc={progressImage}
//             >
//             </CustomCard>

//             <CustomCard 
//               title="Approve Budget Revision" 
//               linkTo="/approvebudgetd" 
//               imageSrc={budgetImage} 
//             />

//               <CustomCard 
//               title="Request Approvals" 
//               linkTo="/requestapproval" 
//               imageSrc={budgetImage} 
//             />   

//              <CustomCard 
//               title="Send Reviewers" 
//               linkTo="/sendreviewers" 
//               imageSrc={budgetImage} 
//             />  
            
//             <CustomCard 
//               title="Request Agreements" 
//               linkTo="/requestagreement" 
//               imageSrc={AgreementImage} 
//             />   
//           </>
//         );
//       case 'Applicant':
//         return (
//           <>
//             <CustomCard 
//               title="Apply New Grant" 
//               linkTo="/grant" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="Apply Budget Revision" 
//               linkTo="/budget" 
//               imageSrc={budgetImage} 
//             />
//             <CustomCard 
//               title="Submit Progress Report" 
//               imageSrc={progressImage}
//               linkTo="/progressreport" 
//             >
              
              
//             </CustomCard>

//             <CustomCard 
//               title="View Applyed Grants" 
//               linkTo="/submittedgrant" 
//               imageSrc={SubmittedGrant} 
//             />
//           </>
//         );
//       case 'Admin':
//         return (
//           <>
//             <CustomCard 
//               title="View Applications" 
//               linkTo="/viewapplication" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="Customize Review Criteria (Criteria, Weight, Marks)"  
//               linkTo="/reviewcriteria" 
//               imageSrc={CriteriaImage} 
//             />
//             <CustomCard 
//               title="Order Applications and View" 
//               linkTo="/orderapplication" 
//               imageSrc={SubmittedGrant} 
//             />

            
//              <CustomCard 
//                 title="Request Progress Report"  
//                 buttonText="View" 
//                 linkTo="/requestreport" 
//                 imageSrc={FinalReport} 
//               />   

             

//               <CustomCard 
//                 title="Approve Budget Revision"  
//                 buttonText="View" 
//                 linkTo="/aprovebudget" 
//                 imageSrc={budgetImage} 
//               />        
//           </>
//         );
//       default:
//         return <p>No dashboard available for your role.</p>;
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="dashboard-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//         {renderCards()}
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import CustomCard from '../../Components/CustomCard';
// import './Dashboard.css';
// import Navbar from '../../Components/Navbar';
// import grantImage from '../../Assets/img12.jpg';
// import budgetImage from '../../Assets/img13.jpg';
// import progressImage from '../../Assets/img14.jpg';
// import AgreementImage from '../../Assets/img16.jpg';
// import CriteriaImage from '../../Assets/img17.jpg';
// import progressImage1 from '../../Assets/img7.png';
// import FinalReport from '../../Assets/img8.png';
// import ApproveBudget from '../../Assets/img9.png';
// import SubmittedGrant from '../../Assets/img10.jpg';
// import { useNavigate } from 'react-router-dom';
// import backgroundImage from '../../Assets/10.jpg';

// export default function Dashboard() {
  
//   const userRole = localStorage.getItem('userRole');
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const renderCards = () => {
//     switch (userRole) {
//       case 'urc':
//         return (
//           <>
//             <CustomCard 
//               title="View Applications " 
//               linkTo="/viewapplicationd" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="View Criteria" 
//               linkTo="/reviewcriteriad" 
//               imageSrc={CriteriaImage} 
//             />
//             <CustomCard 
//               title="Request Progress Report" 
//               linkTo="/progressreportd"  
//               imageSrc={progressImage}
//             />
//             <CustomCard 
//               title="Approve Budget Revision" 
//               linkTo="/approvebudgetd" 
//               imageSrc={budgetImage} 
//             />
//             <CustomCard 
//               title="Request Approvals" 
//               linkTo="/requestapproval" 
//               imageSrc={budgetImage} 
//             />   
//             <CustomCard 
//               title="Send Reviewers" 
//               linkTo="/sendreviewers" 
//               imageSrc={budgetImage} 
//             />  
//             <CustomCard 
//               title="Request Agreements" 
//               linkTo="/requestagreement" 
//               imageSrc={AgreementImage} 
//             />   
//           </>
//         );
//       case 'Applicant':
//         return (
//           <>
//             <CustomCard 
//               title="Apply New Grant" 
//               linkTo="/grant" 
//              // imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="Apply Budget Revision" 
//               linkTo="/budget" 
//              // imageSrc={budgetImage} 
//             />
//             <CustomCard 
//               title="Submit Progress Report" 
//               //imageSrc={progressImage}
//               linkTo="/progressreport" 
//             />
//             <CustomCard 
//               title="View Applied Grants" 
//               linkTo="/submittedgrant" 
//               //imageSrc={SubmittedGrant} 
//             />
//           </>
//         );
//       case 'Admin':
//         return (
//           <>
//             <CustomCard 
//               title="View Applications" 
//               linkTo="/viewapplication" 
//               imageSrc={grantImage} 
//             />
//             <CustomCard 
//               title="Customize Review Criteria (Criteria, Weight, Marks)"  
//               linkTo="/reviewcriteria" 
//               imageSrc={CriteriaImage} 
//             />
//             <CustomCard 
//               title="Order Applications and View" 
//               linkTo="/orderapplication" 
//               imageSrc={SubmittedGrant} 
//             />
//             <CustomCard 
//               title="Request Progress Report"  
//               linkTo="/requestreport" 
//               imageSrc={FinalReport} 
//             />
//             <CustomCard 
//               title="Approve Budget Revision"  
//               linkTo="/approvebudget" 
//               imageSrc={budgetImage} 
//             />        
//           </>
//         );
//       default:
//         return <p>No dashboard available for your role.</p>;
//     }
//   };

//   return (
//     <div className="dashboard-background" style={{ backgroundImage: `url(${backgroundImage})` }}> {/* Add this wrapper */}
//       <Navbar />
//       <div className="dashboard-container">
//         {renderCards()}
//       </div>
//     </div>
//   );
// }


import React from 'react';
import CustomCard from '../../Components/CustomCard';
import './Dashboard.css';
import Navbar from '../../Components/Navbar';
// import grantImage from '../../Assets/img12.jpg';
// import budgetImage from '../../Assets/img13.jpg';
// import progressImage from '../../Assets/img14.jpg';
// import AgreementImage from '../../Assets/img16.jpg';
// import CriteriaImage from '../../Assets/img17.jpg';
// import progressImage1 from '../../Assets/img7.png';
// import FinalReport from '../../Assets/img8.png';
// import ApproveBudget from '../../Assets/img9.png';
// import SubmittedGrant from '../../Assets/img10.jpg';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../Assets/10.jpg';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MoneyIcon from '@mui/icons-material/Money';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function Dashboard() {
  
  const userRole = localStorage.getItem('userRole');
  const navigate = useNavigate();

  const renderCards = () => {
    switch (userRole) {
      case 'urc':
        return (
          <>
            <CustomCard 
              title="View Applications" 
              linkTo="/viewapplicationd" 
              //imageSrc={grantImage} 
            />
            <CustomCard 
              title="View Criteria" 
              linkTo="/reviewcriteriad" 
              //imageSrc={CriteriaImage} 
            />
            <CustomCard 
              title="Request Progress Report" 
              linkTo="/progressreportd"  
              //imageSrc={progressImage}
            />
            <CustomCard 
              title="Approve Budget Revision" 
              linkTo="/approvebudgetd" 
              //imageSrc={budgetImage} 
            />
            <CustomCard 
              title="Request Approvals" 
              linkTo="/requestapproval" 
              //imageSrc={budgetImage} 
            />   
            <CustomCard 
              title="Send Reviewers" 
              linkTo="/sendreviewers" 
              //imageSrc={budgetImage} 
            />  
            <CustomCard 
              title="Request Agreements" 
              linkTo="/requestagreement" 
              //imageSrc={AgreementImage} 
            /> 
             <CustomCard 
              title="Shortlisted Applications"   
              linkTo="/shortlistedapplicationd" 
              //imageSrc={FinalReport} 
              //className="transparent-image" 
            />     
          </>
        );
      case 'Applicant':
        return (
          <>
              <CustomCard 
              title="Apply New Grant" 
              linkTo="/grant"
              icon={<LibraryBooksIcon />}  // Render icon as a JSX element
              // imageSrc={grantImage} 
            />
            <CustomCard 
              title="Apply Budget Revision" 
              linkTo="/budget" 
              icon={<MoneyIcon/>}
              // imageSrc={budgetImage} 
            />
            <CustomCard 
              title="Submit Progress Report" 
              linkTo="/progressreport" 
              icon={<AssessmentIcon/>}
              // imageSrc={progressImage} 
            />
            <CustomCard 
              title="View Applied Grants" 
              linkTo="/submittedgrant" 
              icon={<MenuBookIcon/>}
             // imageSrc={SubmittedGrant} 
            />
          </>
        );
      case 'Admin':
        return (
          <>
            <CustomCard 
              title="View Applications" 
              linkTo="/viewapplication" 
              //imageSrc={grantImage}
              //className="transparent-image"  
            />
            <CustomCard 
              title="Customize Review Criteria (Criteria, Weight, Marks)"  
              linkTo="/reviewcriteria" 
              //imageSrc={CriteriaImage} 
              //className="transparent-image" 
            />
            <CustomCard 
              title="Order Applications and View" 
              linkTo="/orderapplication" 
              //imageSrc={SubmittedGrant} 
              //className="transparent-image" 
            />
            <CustomCard 
              title="Request Progress Report"  
              linkTo="/requestreport" 
              //imageSrc={FinalReport} 
              //className="transparent-image" 
            />
            <CustomCard 
              title="Approve Budget Revision"  
              linkTo="/approvebudget" 
              //imageSrc={budgetImage}
              //className="transparent-image"  
            />   
             <CustomCard 
              title="Shortlisted Applications"   
              linkTo="/shortlistedapplication" 
              //imageSrc={FinalReport} 
              //className="transparent-image" 
            />     
          </>
        );
      default:
        return <p>No dashboard available for your role.</p>;
    }
  };

  return (
    <div className="dashboard-background" style={{ backgroundImage: `url(${backgroundImage})` }}> {/* Add this wrapper */}
      <Navbar />
      <div className="dashboard-container">
        {renderCards()}
      </div>
    </div>
  );
}

