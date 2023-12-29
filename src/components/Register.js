import React, { useState } from 'react';
import axios from 'axios';
import api from './api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await api.post('/user/register', {
      username,
      password,
    });

    if (response.status === 200) {
      // Registration was successful
      localStorage.setItem('jwt', response.data.jwt);
      console.log('Registration successful');
    } else {
      // Registration failed
      console.log('Registration failed');
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Register;