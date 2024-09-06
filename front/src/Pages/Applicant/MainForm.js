
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const MainForm = createContext();

// export function useForm() {
//   return useContext(MainForm);
// }

// export function FormProvider({ children }) {
//   // State to store form data
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

//   // State to store file URLs for preview
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

//   // Function to handle form data changes including files
//   const handleFormDataFilesChange = (event) => {
//     const { name, value, type, files } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'file' ? files[0] : value,
//     }));

//     // Update file URLs if a file is uploaded
//     if (type === 'file' && files.length > 0) {
//       const fileUrl = URL.createObjectURL(files[0]);
//       setFileUrls((prevUrls) => ({
//         ...prevUrls,
//         [name]: fileUrl,
//       }));
//     }
//   };

//   // Save form data and file URLs to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem('formData', JSON.stringify(formData));
//     localStorage.setItem('fileUrls', JSON.stringify(fileUrls));
//   }, [formData, fileUrls]);

//   // Function to handle form data changes
//   const handleFormDataChange = (newData) => {
//     setFormData((prevData) => ({ ...prevData, ...newData }));
//   };

//   // Function to reset form data
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
//   };

//   return (
//     <MainForm.Provider value={{ formData, handleFormDataChange, handleFormDataFilesChange, resetFormData, fileUrls }}>
//       {children}
//     </MainForm.Provider>
//   );
// }


import React, { createContext, useContext, useState, useEffect } from 'react';

const MainForm = createContext();

export function useForm() {
  return useContext(MainForm);
}

export function FormProvider({ children }) {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData
      ? JSON.parse(savedData)
      : {
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
          fundingSource: '',
          durationperiod: '',
          currency: '',
          amount: '',
          projectInvolved: '',
          publication1: '',
          publication2: '',
          publication3: '',
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

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('fileUrls', JSON.stringify(fileUrls));
  }, [fileUrls]);

  useEffect(() => {
    localStorage.setItem('completionStatus', JSON.stringify(completionStatus));
  }, [completionStatus]);

  const handleFormDataChange = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

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

  const updateCompletionStatus = (section, isCompleted) => {
    setCompletionStatus((prevStatus) => ({
      ...prevStatus,
      [section]: isCompleted,
    }));
  };

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
      fundingSource: '',
      durationperiod: '',
      currency: '',
      amount: '',
      projectInvolved: '',
      publication1: '',
      publication2: '',
      publication3: '',
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

  return (
    <MainForm.Provider
      value={{
        formData,
        handleFormDataChange,
        handleFormDataFilesChange,
        resetFormData,
        fileUrls,
        completionStatus,
        updateCompletionStatus,
      }}
    >
      {children}
    </MainForm.Provider>
  );
}
