import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminDashboard from './pages/Admin';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/admindash" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
