import React, { useState } from 'react';
import axios from 'axios';
import api from './api';

const UploadFiles = () => {
  const [imgFile, setImgFile] = useState(null);
  const [hdrFile, setHdrFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const token = localStorage.getItem('token');
    console.log('Token:', token);
  
    const formData = new FormData();
    formData.append('img', imgFile);
    formData.append('hdr', hdrFile);
  
    const response = await api.post('/file/upload', formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
  
    if (response.status === 200) {
      // Upload was successful
      console.log('Upload successful');
    } else {
      // Upload failed
      console.log('Upload failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Img File:
        <input type="file" onChange={(e) => setImgFile(e.target.files[0])} />
      </label>
      <label>
        Hdr File:
        <input type="file" onChange={(e) => setHdrFile(e.target.files[0])} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UploadFiles;