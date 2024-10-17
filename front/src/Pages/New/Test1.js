import React, { useState } from 'react';
import axios from 'axios';

export default function Test1() {
  const [rows, setRows] = useState([{ name: '', age: '' }]);
  const [test1Id, setTest1Id] = useState(null); // Store Test1ID

  const handleAddRow = () => {
    setRows([...rows, { name: '', age: '' }]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((row, i) => i !== index);
    setRows(updatedRows);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const handleSubmit = () => {
    // Send all rows to the backend at once
    axios.post('./From.php', { rows }, { headers: { 'Content-Type': 'application/json' } })
      .then(response => {
        // Assuming the PHP script will return the Test1ID in the response
        const newTest1Id = response.data.test1Id; // Ensure you send this from PHP
        setTest1Id(newTest1Id); // Store the Test1ID
        console.log("All rows submitted successfully with Test1ID:", newTest1Id);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Simple Form with Multiple Rows</h2>
      {rows.map((row, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={row.name}
            onChange={(e) => handleChange(index, e)}
            style={{ marginRight: '10px' }}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={row.age}
            onChange={(e) => handleChange(index, e)}
            style={{ marginRight: '10px' }}
          />
          <button type="button" onClick={() => handleRemoveRow(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddRow}>
        Add Row
      </button>

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
