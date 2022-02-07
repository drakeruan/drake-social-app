import React from 'react';

import './theheader.css'

const TheHeader = () => {
  return <nav className="navbar-menubar">
    <div className="navbar-menubar-logo">
      <h3>Drake</h3>
    </div>
    <div className="navbar-menubar-search-bar">
      <input />
    </div>
    <div className="navbar-menubar-option">
      <ul className="navbar-menubar-option-list">
        <li className="navbar-menubar-option-item">A</li>
        <li className="navbar-menubar-option-item">B</li>
        <li className="navbar-menubar-option-item">C</li>
      </ul>
      <div className="navbar-menubar-option-profile-avatar">
        <img src="abc.png" alt="abc" />
      </div>
    </div>
  </nav>;
};

export default TheHeader;
