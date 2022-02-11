import React from 'react'
import SidebarOption from '../SidebarOption/SidebarOption';

import './Sidebar.css'

const TheSideBar = () => {
  return <div className='sidebar'>
    <SidebarOption to='/' text='Home' icon={<i className='bx bx-home-circle'></i>} />
    <SidebarOption to='/friends' text='Friends' icon={<i className='bx bx-happy-heart-eyes'></i>} />
    <SidebarOption to='/follows' text='Follows' icon={<i className='bx bx-message-dots'> </i>} />
  </div>;
};

export default TheSideBar;
