// // import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// // import React, { Component } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // import Dashboard from "./Pages/Dashboard";
// // import Grant from './Pages/Grant';
// //  import Project from './Pages/Project';
// // import Login from './Pages/Login';  
// // import Signup from './Pages/Signup';
// // import Sidebar from './Components/Sidebar';
// // import Supervisors from  './Pages/Supervisors';
// // import Uploads from './Pages/Uploads';
// // import Reviewers from './Pages/Reviewers';
// // import Budget from './Pages/Budget';
// // import Progress from './Pages/Progress';
// // import Report from './Pages/Report';
// // //import FormContext from './FormComponents/FormContext';



// // class App extends Component {
// //   render() {
// //     return (
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path="/" element={<Navigate to="/home" />} />
// //           <Route path="/dashboard" element={<Dashboard />} />
// //           <Route path="/grant" element={<Grant/>} />
// //           <Route path="/project" element={<Project/>} />
// //           <Route path="/supervisors" element={<Supervisors/>} />
// //           <Route path="/uploads" element={<Uploads/>} />
// //           <Route path="/reviewers" element={<Reviewers/>} />
// //           <Route path="/login" element={<Login/>} />
// //           <Route path="/signup" element={<Signup/>} />
// //           <Route path="/sidebar" element={<Sidebar/>} />
// //           <Route path="/budget" element={<Budget/>} />
// //           <Route path="/progress" element={<Progress/>} />
// //           <Route path="/report" element={<Report/>} />
// //           {/* <Route path="/formcontext" element={<FormContext/>} /> */}
         


          
// //         </Routes>
// //       </BrowserRouter>
// //     );
// //   }
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FormProvider } from './Pages/Applicant/MainForm'; // Import FormProvide
// //import { FormProvider } from './Pages/Applicant_EditForm/MainFormEdit'; // Import FormProvide


// import Profile from './Pages/AllUsers/Profile';
// import Footer from './Components/Footer';


//  // Applicante Pages
// import Dashboard from "./Pages/Applicant/Dashboard";
// import Grant from './Pages/Applicant/Grant';
// import Project from './Pages/Applicant/Project';
// import Login from './Pages/Applicant/Login';  
// import Signup from './Pages/Applicant/Signup';
// import Sidebar from './Components/Sidebar';
// import Supervisors from  './Pages/Applicant/Supervisors';
// import Uploads from './Pages/Applicant/Uploads';
// import Reviewers from './Pages/Applicant/Reviewers';
// import Budget from './Pages/Applicant/Budget';
// import Home from './Pages/Applicant/Home';
// import SubmittedGrant from './Pages/Applicant/SubmittedGrant';
// import ProgressReport from './Pages/Applicant/ProgressReport';
// import EditGrant from './Pages/Applicant_EditForm/EditGrant';
// import EditProject from './Pages/Applicant_EditForm/EditProject';






// // URC Secretary Pages
// import ViewApplication from './Pages/Secretary/ViewApplication';
// import ReviewCriteria from './Pages/Secretary/ReviewCriteria';
// import RequestReport from './Pages/Secretary/RequestReport';
// import ApproveBudget from './Pages/Secretary/ApproveBudget';
// import OrderApplication from './Pages/Secretary/OrderApplication';

// // URC Director Pages
// import RequestAgreement from './Pages/Director/RequestAgreement';
// import ViewApplicationD from './Pages/Director/ViewApplicationD';
// import ProgressReportD from './Pages/Director/ProgressReportD';
// import ApproveBudgetD from './Pages/Director/ApproveBudgetD';
// import SendReviewers from './Pages/Director/SendReviewers';
// import RequestApproval from './Pages/Director/RequestApproval';
// import ReviewCriteriaD from './Pages/Director/ReviewCriteriaD';


// import ShortlistedApplication from './Pages/New/ShortlistedApplication'; 
// import Test1 from './Pages/New/Test1';






// class App extends React.Component {
//   render() {
//     return (
     
//       <FormProvider>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/profile" element={<Profile />} /> 


//             <Route path="/" element={<Navigate to="/Home" />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/grant" element={<Grant />} />
//             <Route path="/project" element={<Project />} />
//             <Route path="/supervisors" element={<Supervisors />} />
//             <Route path="/uploads" element={<Uploads />} />
//             <Route path="/reviewers" element={<Reviewers />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/sidebar" element={<Sidebar />} />
//             <Route path="/budget" element={<Budget />} />
//             <Route path="/submittedgrant" element={<SubmittedGrant />} />
//             <Route path="/progressreport" element={<ProgressReport />} />
//             <Route path="/editgrant" element={<EditGrant/>} />
//             <Route path="/editproject" element={<EditProject/>} />
            
          

//             <Route path="/viewapplication" element={<ViewApplication />} />
//             <Route path="/reviewcriteria" element={<ReviewCriteria />} />
//             <Route path="/requestreport" element={<RequestReport />} />
//             <Route path="/aprovebudget" element={<ApproveBudget />}/>
//             <Route path="/orderapplication" element={<OrderApplication />}/>

//             <Route path="/viewapplicationd" element={<ViewApplicationD />} />
//             <Route path="/progressreportd" element={<ProgressReportD />} />
//             <Route path="/approvebudgetd" element={<ApproveBudgetD />} />
//             <Route path="/requestagreement" element={<RequestAgreement />} />
//             <Route path="/sendreviewers" element={<SendReviewers />} />
//             <Route path="/requestapproval" element={<RequestApproval />} />
//             <Route path="/reviewcriteriad" element={<ReviewCriteriaD />} />


//             <Route path="/shortlistedapplication" element={<ShortlistedApplication />} />
//             <Route path="/test1" element={<Test1 />} />
//             <Route path="/footer" element={<Footer />} />

     
            


            

            

            
            
//           </Routes>
//         </BrowserRouter>
//       </FormProvider>
      
//     );
  
//   }
// }

// export default App;
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormProvider } from './Pages/Applicant/MainForm'; // Import FormProvider

import Profile from './Pages/AllUsers/Profile';
import Footer from './Components/Footer'; // Import Footer

// Applicant Pages
import Dashboard from "./Pages/Applicant/Dashboard";
import Grant from './Pages/Applicant/Grant';
import Project from './Pages/Applicant/Project';
import Login from './Pages/Applicant/Login';  
import Signup from './Pages/Applicant/Signup';
import Sidebar from './Components/Sidebar';
import Supervisors from  './Pages/Applicant/Supervisors';
import Uploads from './Pages/Applicant/Uploads';
import Reviewers from './Pages/Applicant/Reviewers';
import Budget from './Pages/Applicant/Budget';
import Home from './Pages/Applicant/Home';
import SubmittedGrant from './Pages/Applicant/SubmittedGrant';
import ProgressReport from './Pages/Applicant/ProgressReport';
import EditGrant from './Pages/Applicant_EditForm/EditGrant';
import EditProject from './Pages/Applicant_EditForm/EditProject';

// URC Secretary Pages
import ViewApplication from './Pages/Secretary/ViewApplication';
import ReviewCriteria from './Pages/Secretary/ReviewCriteria';
import RequestReport from './Pages/Secretary/RequestReport';
import ApproveBudget from './Pages/Secretary/ApproveBudget';
import OrderApplication from './Pages/Secretary/OrderApplication';
import ShortlistedApplication from './Pages/Secretary/ShortlistedApplication'; 

// URC Director Pages
import RequestAgreement from './Pages/Director/RequestAgreement';
import ViewApplicationD from './Pages/Director/ViewApplicationD';
import ProgressReportD from './Pages/Director/ProgressReportD';
import ApproveBudgetD from './Pages/Director/ApproveBudgetD';
import SendReviewers from './Pages/Director/SendReviewers';
import RequestApproval from './Pages/Director/RequestApproval';
import ReviewCriteriaD from './Pages/Director/ReviewCriteriaD';
import ShortlistedApplicationD from './Pages/Director/ShortlistedApplicationD';

// Reviewer Pages

import Dean from './Pages/Dean/HOD/Dean';
import HOD from './Pages/Dean/HOD/HOD';
import Reviewer1 from './Pages/Reviewer/Reviewer1';
import Reviewer2 from './Pages/Reviewer/Reviewer2';

import Email from './Pages/Dean/HOD/Email';



class App extends React.Component {
  render() {
    return (
      <FormProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/grant" element={<Grant />} />
            <Route path="/project" element={<Project />} />
            <Route path="/supervisors" element={<Supervisors />} />
            <Route path="/uploads" element={<Uploads />} />
            <Route path="/reviewers" element={<Reviewers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/submittedgrant" element={<SubmittedGrant />} />
            <Route path="/progressreport" element={<ProgressReport />} />
            <Route path="/editgrant" element={<EditGrant />} />
            <Route path="/editproject" element={<EditProject />} />
            
            <Route path="/viewapplication" element={<ViewApplication />} />
            <Route path="/reviewcriteria" element={<ReviewCriteria />} />
            <Route path="/requestreport" element={<RequestReport />} />
            <Route path="/approvebudget" element={<ApproveBudget />} />
            <Route path="/orderapplication" element={<OrderApplication />} />
            <Route path="/shortlistedapplication" element={<ShortlistedApplication />} />

            <Route path="/viewapplicationd" element={<ViewApplicationD />} />
            <Route path="/progressreportd" element={<ProgressReportD />} />
            <Route path="/approvebudgetd" element={<ApproveBudgetD />} />
            <Route path="/requestagreement" element={<RequestAgreement />} />
            <Route path="/sendreviewers" element={<SendReviewers />} />
            <Route path="/requestapproval" element={<RequestApproval />} />
            <Route path="/reviewcriteriad" element={<ReviewCriteriaD />} />
            <Route path="/shortlistedapplicationd" element={<ShortlistedApplicationD />} />

            <Route path="/reviewer1" element={<Reviewer1 />} />
            <Route path="/reviewer2" element={<Reviewer2/>}/>
           
            <Route path="dean" element={<Dean/>} />
            <Route path="hod" element={<HOD/>} />

            <Route path="email" element={<Email/>} />
           
          </Routes>

          <Footer />
        </BrowserRouter>
        
      </FormProvider>
      
    );
    
  }
}

export default App;
