

// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Create a context to manage form data
// const FormContext = createContext();

// export function useForm() {
//   return useContext(FormContext);
// }

// export function FormProvider({ children }) {
//   // Manage form data
//   const [formData, setFormData] = useState(() => {
//     const savedData = localStorage.getItem('formData');
//     return savedData
//       ? JSON.parse(savedData)
//       : {
//           title: '',
//           name: '',
//           faculty: '',
//           department: '',
//           email: '',
//           phone: '',
//           position: '',
//           degree: '',
//           university: '',
//           year: '',
//           field: '',
//           start_date: '',
//           duration: '',
//           projectTitle: '',
//           fundingSource: '',
//           durationperiod: '',
//           currency: '',
//           amount: '',
//           projectInvolved: '',
//           publication1: '',
//           publication2: '',
//           publication3: '',
//           co_investigators: '',
//           co_investigator_departmentUniversity: '',
//           foreign_collaborators: '',
//           foreign_collaborator_departmentUniversity: '',
//           reviewer1Name: '',
//           reviewer2Name: '',
//           reviewer3Name: '',
//           reviewer1Email: '',
//           reviewer2Email: '',
//           reviewer3Email: '',
//           reviewer1Affiliation: '',
//           reviewer2Affiliation: '',
//           reviewer3Affiliation: '',
          
//         };
//   });

//   // Manage file URLs
//   const [fileUrls, setFileUrls] = useState(() => {
//     const savedFileUrls = localStorage.getItem('fileUrls');
//     return savedFileUrls
//       ? JSON.parse(savedFileUrls)
//       : {
//           projectProposal: '',
//           projectBudget: '',
//           projectCV: '',
//           coInvestigatorsCVs: '',
//         };
//   });

//   // Manage completion status
//   const [completionStatus, setCompletionStatus] = useState(() => {
//     const savedStatus = localStorage.getItem('completionStatus');
//     return savedStatus
//       ? JSON.parse(savedStatus)
//       : {
//           profile: false,
//           project: false,
//           supervisor: false,
//           uploads: false,
//           reviewers: false,
//         };
//   });

//   // Update localStorage when data changes
//   useEffect(() => {
//     localStorage.setItem('formData', JSON.stringify(formData));
//   }, [formData]);

//   useEffect(() => {
//     localStorage.setItem('fileUrls', JSON.stringify(fileUrls));
//   }, [fileUrls]);

//   useEffect(() => {
//     localStorage.setItem('completionStatus', JSON.stringify(completionStatus));
//   }, [completionStatus]);

//   // Handle form data changes
//   const handleFormDataChange = (newData) => {
//     setFormData((prevData) => ({ ...prevData, ...newData }));
//   };

//   // Handle file input changes
//   const handleFormDataFilesChange = (event) => {
//     const { name, value, type, files } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'file' ? files[0] : value,
//     }));

//     if (type === 'file' && files.length > 0) {
//       const fileUrl = URL.createObjectURL(files[0]);
//       setFileUrls((prevUrls) => ({
//         ...prevUrls,
//         [name]: fileUrl,
//       }));
//     }
//   };

//   // Update completion status for sections
//   const updateCompletionStatus = (section, isCompleted) => {
//     setCompletionStatus((prevStatus) => ({
//       ...prevStatus,
//       [section]: isCompleted,
//     }));
//   };

//   // Reset form data, file URLs, and completion status
//   const resetFormData = () => {
//     setFormData({
//       title: '',
//       name: '',
//       faculty: '',
//       department: '',
//       email: '',
//       phone: '',
//       position: '',
//       degree: '',
//       university: '',
//       year: '',
//       field: '',
//       start_date: '',
//       duration: '',
//       projectTitle: '',
//       fundingSource: '',
//       durationperiod: '',
//       currency: '',
//       amount: '',
//       projectInvolved: '',
//       publication1: '',
//       publication2: '',
//       publication3: '',
//       co_investigators: '',
//       co_investigator_departmentUniversity: '',
//       foreign_collaborators: '',
//       foreign_collaborator_departmentUniversity: '',
//       reviewer1Name: '',
//       reviewer2Name: '',
//       reviewer3Name: '',
//       reviewer1Email: '',
//       reviewer2Email: '',
//       reviewer3Email: '',
//       reviewer1Affiliation: '',
//       reviewer2Affiliation: '',
//       reviewer3Affiliation: '',
//     });

//     setFileUrls({
//       projectProposal: '',
//       projectBudget: '',
//       projectCV: '',
//       coInvestigatorsCVs: '',
//     });

//     setCompletionStatus({
//       profile: false,
//       project: false,
//       supervisor: false,
//       uploads: false,
//       reviewers: false,
//     });

//     localStorage.removeItem('formData');
//     localStorage.removeItem('fileUrls');
//     localStorage.removeItem('completionStatus');
//   };

//   return (
//     <FormContext.Provider
//       value={{
//         formData,
//         handleFormDataChange,
//         handleFormDataFilesChange,
//         resetFormData,
//         fileUrls,
//         completionStatus,
//         updateCompletionStatus,
//       }}
//     >
//       {children}
//     </FormContext.Provider>
//   );
// }


import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context to manage form data
const FormContext = createContext();

export function useForm() {
  return useContext(FormContext);
}

export function FormProvider({ children }) {
  // Manage form data
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData
      ? JSON.parse(savedData)
      : {
          // Existing fields
          title: '',
          name: '',
          faculty: '',
          department: '',
          email: '',
          phone: '',
          position: '',
          degree: '',
          university: '',
          year: '',
          field: '',
          start_date: '',
          duration: '',
          projectTitle: '',
          projectInvolved: '',
          publication1: '',
          publication2: '',
          publication3: '',
          
          // Grant and Funding dynamic rows
          grantRows: [{ fundingSource: '', durationperiod: '', currency: '', amount: '' }],
          fundingRows: [{ fundingOrganization: '', fundingAmount: '' }],
          
          // Other fields...
          co_investigators: '',
          co_investigator_departmentUniversity: '',
          foreign_collaborators: '',
          foreign_collaborator_departmentUniversity: '',
          reviewer1Name: '',
          reviewer2Name: '',
          reviewer3Name: '',
          reviewer1Email: '',
          reviewer2Email: '',
          reviewer3Email: '',
          reviewer1Affiliation: '',
          reviewer2Affiliation: '',
          reviewer3Affiliation: '',
        };
  });

  // Manage file URLs
  const [fileUrls, setFileUrls] = useState(() => {
    const savedFileUrls = localStorage.getItem('fileUrls');
    return savedFileUrls
      ? JSON.parse(savedFileUrls)
      : {
          projectProposal: '',
          projectBudget: '',
          projectCV: '',
          coInvestigatorsCVs: '',
        };
  });

  // Manage completion status
  const [completionStatus, setCompletionStatus] = useState(() => {
    const savedStatus = localStorage.getItem('completionStatus');
    return savedStatus
      ? JSON.parse(savedStatus)
      : {
          profile: false,
          project: false,
          supervisor: false,
          uploads: false,
          reviewers: false,
        };
  });

  // Update localStorage when data changes
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('fileUrls', JSON.stringify(fileUrls));
  }, [fileUrls]);

  useEffect(() => {
    localStorage.setItem('completionStatus', JSON.stringify(completionStatus));
  }, [completionStatus]);

  // Handle form data changes
  const handleFormDataChange = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  // Handle file input changes
  const handleFormDataFilesChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));

    if (type === 'file' && files.length > 0) {
      const fileUrl = URL.createObjectURL(files[0]);
      setFileUrls((prevUrls) => ({
        ...prevUrls,
        [name]: fileUrl,
      }));
    }
  };

  // Update completion status for sections
  const updateCompletionStatus = (section, isCompleted) => {
    setCompletionStatus((prevStatus) => ({
      ...prevStatus,
      [section]: isCompleted,
    }));
  };

  // Reset form data, file URLs, and completion status
  const resetFormData = () => {
    setFormData({
      title: '',
      name: '',
      faculty: '',
      department: '',
      email: '',
      phone: '',
      position: '',
      degree: '',
      university: '',
      year: '',
      field: '',
      start_date: '',
      duration: '',
      projectTitle: '',
      projectInvolved: '',
      publication1: '',
      publication2: '',
      publication3: '',
      
      // Grant and Funding dynamic rows
      grantRows: [{ fundingSource: '', durationperiod: '', currency: '', amount: '' }],
      fundingRows: [{ fundingOrganization: '', fundingAmount: '' }],
      
      // Other fields...
      co_investigators: '',
      co_investigator_departmentUniversity: '',
      foreign_collaborators: '',
      foreign_collaborator_departmentUniversity: '',
      reviewer1Name: '',
      reviewer2Name: '',
      reviewer3Name: '',
      reviewer1Email: '',
      reviewer2Email: '',
      reviewer3Email: '',
      reviewer1Affiliation: '',
      reviewer2Affiliation: '',
      reviewer3Affiliation: '',
    });

    setFileUrls({
      projectProposal: '',
      projectBudget: '',
      projectCV: '',
      coInvestigatorsCVs: '',
    });

    setCompletionStatus({
      profile: false,
      project: false,
      supervisor: false,
      uploads: false,
      reviewers: false,
    });

    localStorage.removeItem('formData');
    localStorage.removeItem('fileUrls');
    localStorage.removeItem('completionStatus');
  };

  // Handle dynamic row changes for grants
  const handleGrantChange = (index, event) => {
    const { name, value } = event.target;
    const updatedGrantRows = [...formData.grantRows];
    updatedGrantRows[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      grantRows: updatedGrantRows,
    }));
  };

  // Handle dynamic row changes for funding organizations
  const handleFundingChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFundingRows = [...formData.fundingRows];
    updatedFundingRows[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      fundingRows: updatedFundingRows,
    }));
  };

  // Add new row for grants
  const handleAddGrantRow = () => {
    setFormData((prevData) => ({
      ...prevData,
      grantRows: [
        ...prevData.grantRows,
        { fundingSource: '', durationperiod: '', currency: '', amount: '' },
      ],
    }));
  };

  // Remove a specific row for grants
  const handleRemoveGrantRow = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      grantRows: prevData.grantRows.filter((_, i) => i !== index),
    }));
  };

  // Add new row for funding organizations
  const handleAddFundingRow = () => {
    setFormData((prevData) => ({
      ...prevData,
      fundingRows: [
        ...prevData.fundingRows,
        { fundingOrganization: '', fundingAmount: '' },
      ],
    }));
  };

  // Remove a specific row for funding organizations
  const handleRemoveFundingRow = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      fundingRows: prevData.fundingRows.filter((_, i) => i !== index),
    }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        handleFormDataChange,
        handleFormDataFilesChange,
        resetFormData,
        handleGrantChange,
        handleFundingChange,
        handleAddGrantRow,
        handleRemoveGrantRow,
        handleAddFundingRow,
        handleRemoveFundingRow,
        fileUrls,
        completionStatus,
        updateCompletionStatus,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
