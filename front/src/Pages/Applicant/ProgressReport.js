// import React, { useState } from 'react';
// import Navbar from '../Components/Navbar';
// import ReportProgress from '../Components/ReportProgress';
// import './UploadFiles.css';

// export default function ProgressReport() {
//   const [selectedReport, setSelectedReport] = useState('');

//   const handleReportChange = (event) => {
//     setSelectedReport(event.target.value);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//         <label htmlFor="report-select" className="label-container">Select Report Type:</label>
//         <select
//           id="report-select"
//           value={selectedReport}
//           onChange={handleReportChange}
//           className="select-dropdown"
//         >
//           <option value="">--Please choose an option--</option>
//           <option value="mid-year">Mid Year Report</option>
//           <option value="end-year">End Year Report</option>
//           <option value="final">Final Report</option>
//         </select>
//       </div>
//       <div>
//         {selectedReport && <ReportProgress reportType={selectedReport} />}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import Navbar from '../../Components/Navbar';
// import ReportProgress from '../../Components/ReportProgress';
// import './UploadFiles.css';

// export default function ProgressReport() {
//   const [selectedReport, setSelectedReport] = useState('mid-year'); // Set default to "Mid Year Report"

//   const handleReportChange = (event) => {
//     setSelectedReport(event.target.value);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//         <label htmlFor="report-select" className="label-container">Select Report Type:</label>
//         <select
//           id="report-select"
//           value={selectedReport}
//           onChange={handleReportChange}
//           className="select-dropdown"
//         >
//           <option value="mid-year">Mid Year Report</option> {/* Mid Year as default */}
//           <option value="end-year">End Year Report</option>
//           <option value="final">Final Report</option>
//         </select>
//       </div>
//       <div>
//         {selectedReport && <ReportProgress reportType={selectedReport} />}
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import ReportProgress from '../../Components/ReportProgress';
import './UploadFiles.css';

export default function ProgressReport() {
  const [selectedReport, setSelectedReport] = useState('mid-year'); // Set default to "Mid Year Report"

  const handleReportChange = (event) => {
    setSelectedReport(event.target.value);
  };

  return (
    <div>
      <Navbar />
      
     
      <div className="container">
        <label htmlFor="report-select" className="label-container">Select Report Type:</label>
        <select
          id="report-select"
          value={selectedReport}
          onChange={handleReportChange}
          className="select-dropdown"
        >
          <option value="mid-year">Mid Year Report</option> {/* Mid Year as default */}
          <option value="end-year">End Year Report</option>
          <option value="final">Final Report</option>
        </select>
      </div>
      <div>
        {selectedReport && <ReportProgress reportType={selectedReport} />}
      </div>
    </div>
  );
}