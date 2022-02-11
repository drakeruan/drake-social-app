import React from 'react'
import { Link } from 'react-router-dom'

import './SidebarOption.css'

const SidebarOption = ({ to, text, icon }) => {
  return (
    <Link to={to}>
    <div className='sidebar__option'>
      <div className='sidebar__option__icon'>
        {icon}
      </div>
      <div className="sidebar__option__text">{text}</div>
    </div>
    </Link>
  )

}

export default SidebarOption