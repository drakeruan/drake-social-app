import React, { useState, useRef, useEffect } from 'react';

import './HeaderSub.css'

const HeaderSub = () => {
  const [toggle, setToggle] = useState(false);
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

  return <div className="header__sub">
    <div className="header__sub__option">
      <div className="header__sub__option__item">
        <i className='bx bx-bell'></i>
      </div>
    </div>
    <div className="header__sub__dropdown" ref={dropdownRef} >
      <div onClick={() => setToggle(!toggle)} className="header__sub__dropdown__avatar">
        <img src={require("../../../assets/zawarudo.jpg")} alt="zawarudo" />
      </div>
      <ul className={`header__sub__dropdown__menu ${toggle ? 'd-block' : ''}`} >
        <li className="header__sub__dropdown__menu__item">Profile</li>
        <li className="header__sub__dropdown__menu__item">Setting</li>
        <li className="header__sub__dropdown__menu__item">Logout</li>
      </ul>
    </div>
  </div>
};

export default HeaderSub;
