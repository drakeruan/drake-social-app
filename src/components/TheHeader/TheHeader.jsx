import React from 'react';

import './theheader.css'
const TheHeader = () => {
  return <nav className="navbar-menubar">
    <div className="navbar-menubar-logo">
      <p>Drake</p>
    </div>
    <div className="navbar-menubar-searchbox">
      <input type="text" placeholder='Enter your text' />
      <button className="navbar-menubar-searchbox-btn">
        <i className='bx bx-search'></i>
      </button>
    </div>
    <div className="navbar-menubar-option">
      <ul className="navbar-menubar-option-list">
        <li className="navbar-menubar-option-item">
          <i className='bx bx-pencil'></i>
        </li>
        <li className="navbar-menubar-option-item">
          <i className='bx bx-bell'></i>
        </li>
      </ul>
      <div className="navbar-menubar-option-avatar">
        <img src={require("../../assets/zawarudo.jpg")} alt="zawarudo" />
      </div>
    </div>
  </nav>;
};

export default TheHeader;
