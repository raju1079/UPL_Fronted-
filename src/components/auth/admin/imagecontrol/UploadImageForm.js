import React, { useState } from 'react';
import axios from 'axios';

const UploadImageForm = () => {
  const [file, setFile] = useState(null);
  const [courseId, setCourseId] = useState('');
  const [programId, setProgramId] = useState('');
  const [type, setType] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('courseId', courseId);
    formData.append('programId', programId);
    formData.append('type', type);

    axios
      .post('http://localhost:8000/api/image', formData)
      .then((response) => {
        console.log(response.data);
        // Handle successful upload
        setCourseId('')
        setProgramId('')
        setType('')
        setFile('')
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
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadImageForm;