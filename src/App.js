// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Upload from './components/Upload.js';
import DisplayImage from './components/displayImage.js';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/displayImage">Display Image</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/displayImage" element={<DisplayImage />} />
      </Routes>
    </Router>
  );
}

export default App;