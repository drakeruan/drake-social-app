import React, { useRef, useState, useEffect } from 'react';

import './theheader.css'
const TheHeader = () => {
  const [toggle, setToggle] = useState(false)
  const dropdownRef = useRef()

  const handleClickOutSide = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      if (toggle) setToggle(false)

    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide)
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide)
    }
  })

  return <nav className="topnav">
    <div className="topnav-logo">
      <p>Drake</p>
    </div>
    <div className="topnav-searchbox">
      <input type="text" placeholder='Enter your text' />
      <button className="topnav-searchbox-btn">
        <i className='bx bx-search'></i>
      </button>
    </div>
    <div className="topnav-sub">
      <div className="topnav-sub-option">
        <div className="topnav-sub-option-item">
          <i className='bx bx-bell'></i>
        </div>
      </div>
      <div className="topnav-sub-dropdown" ref={dropdownRef} >
        <div onClick={() => setToggle(!toggle)} className="topnav-sub-dropdown-avatar">
          <img src={require("../../assets/zawarudo.jpg")} alt="zawarudo" />
        </div>
        <ul className={`topnav-sub-dropdown-menu ${toggle ? 'd-block' : ''}`} >
          <li className="topnav-sub-dropdown-menu-item">Profile</li>
          <li className="topnav-sub-dropdown-menu-item">Setting</li>
          <li className="topnav-sub-dropdown-menu-item">Logout</li>
        </ul>
      </div>
    </div>
  </nav>;

};

export default TheHeader;
