import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [courseId, setCourseId] = useState('');
  const [programId, setProgramId] = useState('');
  const [type, setType] = useState('');
  const [filePath, setfilePath] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }
    const headers = {
      'Content-Type': 'multipart/form-data',
    };
    const formData = new FormData();
    formData.append('file', file);
    formData.append('courseId', courseId);
    formData.append('programId', programId);
    formData.append('type', type);
    formData.append('filePath', filePath);
     // Log the keys and values in the FormData
  for (const [key, value] of formData.entries()) {
    console.log(`****${key}:`, value);
  }
    await axios
      .post('http://localhost:8000/api/image', formData, { headers })
      .then((response) => {
        console.log(response.data);
        // Handle successful upload
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Program ID"
        value={programId}
        onChange={(e) => setProgramId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Directory Path"
        value={filePath}
        onChange={(e) => setfilePath(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadImage;
