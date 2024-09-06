// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Navbar from '../../Components/Navbar';
// import '../Secretary/Table.css';


// export default function ReviewCriteriaD() {
//   const [inputValue, setInputValue] = useState('');
//   const [entries, setEntries] = useState([]);

//   // Function to handle adding new entry
//   const handleAdd = () => {
//     if (inputValue.trim()) {
//       setEntries([...entries, inputValue]);
//       setInputValue(''); // Clear the input after adding
//     }
//   };

//   // Function to handle removing an entry
//   const handleRemove = (index) => {
//     setEntries(entries.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <Navbar />
//       <Table className="review_t1 " striped bordered hover>
//         <tr>
//             <th>
//             <td>
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 placeholder="Enter Review Criteria"
//                 className="textbox1"
//               />
//               <button onClick={handleAdd} className="btn_add">
//                 Add
//               </button>
//             </td>
//             </th>
//             <td colSpan="2"> {/* This cell spans the remaining columns */}
//               <Table striped bordered hover>
//                 <tbody>
//                   {entries.map((entry, index) => (
//                     <tr key={index}>
//                       <td>{entry}</td>
//                       <td>
//                         <button
//                           onClick={() => handleRemove(index)}
//                           className="btn_remove"
//                         >
//                           Remove
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </td>
//           </tr>
//       </Table>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from '../../Components/Navbar';
import '../Secretary/Table.css';

export default function ReviewCriteria() {
  const [inputValue, setInputValue] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('/Criteria.php') // Update the path as needed
      .then(response => response.json())
      .then(data => setEntries(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleAdd = () => {
    if (inputValue.trim()) {
      fetch('/Criteria.php', { // Update the path as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'criteria': inputValue,
        }),
      })
      .then(response => response.json())
      .then(newEntry => {
        setEntries([...entries, newEntry]);
        setInputValue('');
      })
      .catch(error => console.error('Error:', error));
    }
  };
  
  const handleRemove = (id) => {
    fetch('/Criteria.php', { // Update the path as needed
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'C_Id': id,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setEntries(entries.filter(entry => entry.C_Id !== id));
      } else {
        console.error('Error:', data.error);
      }
    })
    .catch(error => console.error('Error:', error));
  };
  

  return (
    <div>
      <Navbar />
      <Table className="review_t1" striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Add Criteria</th>
            <th style={{ width: '60%' }}>Criteria Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter Review Criteria"
                className="textbox1"
              />
              <button onClick={handleAdd} className="btn_add">
                Add
              </button>
            </td>
            <td>
              <Table striped bordered hover>
                <tbody>
                  {entries.map((entry) => (
                    <tr key={entry.C_Id}>
                      <td>{entry.criteria}</td>
                      <td>
                        <button
                          onClick={() => handleRemove(entry.C_Id)}
                          className="btn_remove"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
