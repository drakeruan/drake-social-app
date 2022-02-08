import React from 'react'
import { Link } from 'react-router-dom';

import './thesidebar.css'

const TheSideBar = () => {
  return <div className='sidebar'>
    <ul className='sidebar-list'>
      <Link to='/'>
        <li className='sidebar-list-item'>
          <div className='sidebar-list-item-icon'>
            <i className='bx bx-home-circle'></i>
          </div>
          <div className="sidebar-list-item-label">Home</div>
        </li>
      </Link>
      <Link to='/friends'>
        <li className='sidebar-list-item'>
          <div className='sidebar-list-item-icon'>
            <i className='bx bx-happy-heart-eyes'></i>
          </div>
          <div className="sidebar-list-item-label">Friends</div>
        </li>
      </Link >
      <Link to='/follows' >
        <li className='sidebar-list-item'>
          <div className='sidebar-list-item-icon'>
            <i className='bx bx-message-dots'> </i>
          </div>
          <div className="sidebar-list-item-label">Follows</div>
        </li>
      </Link >
    </ul>
  </div>;
};

export default TheSideBar;
