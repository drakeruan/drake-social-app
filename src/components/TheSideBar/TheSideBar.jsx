import React from 'react'

import './thesidebar.css'

const TheSideBar = () => {
  return <div className='sidebar'>
    <ul className='sidebar-list'>
      <li className='sidebar-list-item'>
        <div className='sidebar-list-item-icon'>
          <i class='bx bx-home-circle'></i>
        </div>
        <div className="sidebar-list-item-label">Home</div>
      </li>
      <li className='sidebar-list-item'>
        <div className='sidebar-list-item-icon'>
          <i class='bx bx-happy-heart-eyes'></i>
        </div>
        <div className="sidebar-list-item-label">Follows</div>
      </li>
      <li className='sidebar-list-item'>
        <div className='sidebar-list-item-icon'>
          <i class='bx bx-message-dots'> </i>
        </div>
        <div className="sidebar-list-item-label">Messages</div>

      </li>
    </ul>
  </div>;
};

export default TheSideBar;
