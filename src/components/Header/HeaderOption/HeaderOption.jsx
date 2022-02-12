import React from 'react';
import HeaderOptionItem from './HeaderOptionItem';

import './HeaderOption.css'

const HeaderOption = () => {
  return <div className="header__option">
    <HeaderOptionItem icon={<i className='bx bx-home'></i>} />
    <HeaderOptionItem icon={<i className='bx bx-user'></i>} />
    <HeaderOptionItem icon={<i className='bx bx-search-alt-2'></i>} />
  </div>
};

export default HeaderOption;
