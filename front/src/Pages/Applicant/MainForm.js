




// import React, { createContext, useContext, useState, useEffect } from 'react';

// const MainForm = createContext();

// export function useForm() {
//   return useContext(MainForm);
// }

// export function FormProvider({ children }) {
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

//   const [fileNames, setFileNames] = useState(() => {
//     const savedFileNames = localStorage.getItem('fileNames');
//     return savedFileNames
//       ? JSON.parse(savedFileNames)
//       : {
//           projectProposal: '',
//           projectBudget: '',
//           projectCV: '',
//           coInvestigatorsCVs: '',
//         };
//   });

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

//   useEffect(() => {
//     localStorage.setItem('formData', JSON.stringify(formData));
//   }, [formData]);

//   useEffect(() => {
//     localStorage.setItem('fileNames', JSON.stringify(fileNames));
//   }, [fileNames]);

//   useEffect(() => {
//     localStorage.setItem('completionStatus', JSON.stringify(completionStatus));
//   }, [completionStatus]);

//   const handleFormDataChange = (newData) => {
//     setFormData((prevData) => ({ ...prevData, ...newData }));
//   };

//   const handleFormDataFilesChange = (event) => {
//     const { name, files } = event.target;
//     if (files.length > 0) {
//       const fileName = files[0].name; // Extract the file name
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: fileName,
//       }));

//       setFileNames((prevNames) => ({
//         ...prevNames,
//         [name]: fileName,
//       }));
//     }
//   };

//   const updateCompletionStatus = (section, isCompleted) => {
//     setCompletionStatus((prevStatus) => ({
//       ...prevStatus,
//       [section]: isCompleted,
//     }));
//   };

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

//     setFileNames({
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
//     localStorage.removeItem('fileNames');
//     localStorage.removeItem('completionStatus');
//   };

//   return (
//     <MainForm.Provider
//       value={{
//         formData,
//         handleFormDataChange,
//         handleFormDataFilesChange,
//         resetFormData,
//         fileNames,
//         completionStatus,
//         updateCompletionStatus,
//       }}
//     >
//       {children}
//     </MainForm.Provider>
//   );
// }


// import React, { createContext, useContext, useState, useEffect } from 'react';

// const MainForm = createContext();

// export function useForm() {
//   return useContext(MainForm);
// }

// export function FormProvider({ children }) {
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

//   const [completionStatus, setCompletionStatus] = useState(() => {
//     const savedStatus = localStorage.getItem('completionStatus');
//     return savedStatus
//       ? JSON.parse(savedStatus)
//       : {
//           profile: false,
//           project: false,
//           supervisor: false,
//           reviewers: false,
//           uploads: false,
//         };
//   });

//   useEffect(() => {
//     localStorage.setItem('formData', JSON.stringify(formData));
//   }, [formData]);

//   useEffect(() => {
//     localStorage.setItem('completionStatus', JSON.stringify(completionStatus));
//   }, [completionStatus]);

//   const handleFormDataChange = (newData) => {
//     setFormData((prevData) => ({ ...prevData, ...newData }));
//   };

//   const updateCompletionStatus = (section, isCompleted) => {
//     setCompletionStatus((prevStatus) => ({
//       ...prevStatus,
//       [section]: isCompleted,
//     }));
//   };

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

//     setCompletionStatus({
//       profile: false,
//       project: false,
//       supervisor: false,
//       reviewers: false,
//       uploads: false,
//     });

//     localStorage.removeItem('formData');
//     localStorage.removeItem('completionStatus');
//   };

//   return (
//     <MainForm.Provider
//       value={{
//         formData,
//         handleFormDataChange,
//         resetFormData,
//         completionStatus,
//         updateCompletionStatus,
//       }}
//     >
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