import React from 'react';

import HeaderOption from './HeaderOption/HeaderOption'
import HeaderSub from './HeaderSub/HeaderSub';

import './Header.css'
const TheHeader = () => {
  return <div className="header">
    <div className="header__logo">
      <p>Drake</p>
    </div>
    <HeaderOption />
    <HeaderSub />
  </div>;

};

export default TheHeader;
