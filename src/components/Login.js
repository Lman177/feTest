import React, { useState } from 'react';
import api from './api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const response = await api.post('/user/login', {
      username,
      password,
    });
  
    if (response.status === 200) {
      // Login was successful
      localStorage.setItem('token', response.data.token);
      console.log('JWT:', localStorage.getItem('token'));
    } else {
      // Login failed
      console.log('Login failed');
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

export default Login;