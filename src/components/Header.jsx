import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Header.css';
import logo from './images/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Ink and Imagination Logo" />
        <h1>Ink and Imagination</h1>
      </div>
      <Link to="/admin" ><button className="adminbtn">Admin</button></Link>
    </header>
  );
};

export default Header;
