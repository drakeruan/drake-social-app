import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeaderOptionItem = ({ to, icon, text }) => {
  const location = useLocation()
  const { pathname } = location

  return (
    <Link to={to}>
      <div className={`header__option__item active ${pathname === to ? 'active__header' : ''}`}>
        <div className='header__option__item__icon'>
          {icon}
        </div>
      </div>
    </Link>
  )
};

export default HeaderOptionItem;
