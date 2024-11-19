// import React, { useState } from 'react';

// function EmailForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Create email format
//     const emailContent = `
//       Email: ${email}
//       Name: ${name}
//       Subject: ${subject}
//       Body: ${body}
//     `;
//     console.log('Email:', emailContent);
//     // Reset form fields after submission
//     setName('');
//     setEmail('');
//     setSubject('');
//     setBody('');
//   };

//   return (
//     <div>
//       <h2>Send Email</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input 
//             type="text" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Email Address:</label>
//           <input 
//             type="email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Subject:</label>
//           <input 
//             type="text" 
//             value={subject} 
//             onChange={(e) => setSubject(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Body:</label>
//           <textarea 
//             value={body} 
//             onChange={(e) => setBody(e.target.value)} 
//             required 
//           ></textarea>
//         </div>
//         <button type="submit">Send Email</button>
//       </form>
//     </div>
//   );
// }

// export default EmailForm;
import React, { useState } from 'react';
import axios from 'axios';

function EmailForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const emailData = {
      email: email,
      subject: subject,
      message: body,
    };

    // Send the form data to the PHP script using Axios
    axios.post('Email.php', emailData)
      .then(response => {
        if (response.data.status === 'success') {
          setStatus('Email sent successfully!');
        } else {
          setStatus('Failed to send email.');
        }
        // Reset form fields after submission
        setName('');
        setEmail('');
        setSubject('');
        setBody('');
      })
      .catch(error => {
        setStatus('Error: ' + error.message);
      });
  };

  return (
    <div>
      <h2>Send Email</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email Address:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Subject:</label>
          <input 
            type="text" 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea 
            value={body} 
            onChange={(e) => setBody(e.target.value)} 
            required 
          ></textarea>
        </div>
        <button type="submit">Send Email</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default EmailForm;
