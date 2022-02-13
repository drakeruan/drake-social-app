import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './HeaderSub.css'

const HeaderSub = () => {
  const { auth, setAuth } = useAuth()
  const { user } = auth
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false);
  const dropdownRef = useRef()

  const handleClickOutSide = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      if (toggle) setToggle(false)

    }
  }

  const handleLogout = () => {
    navigate('/login')
    setAuth({})
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
        <img src={user.photoURL} alt="zawarudo" />
      </div>
      <ul className={`header__sub__dropdown__menu ${toggle ? 'd-block' : ''}`} >
        <li className="header__sub__dropdown__menu__item">Profile</li>
        <li className="header__sub__dropdown__menu__item">Setting</li>
        <li onClick={handleLogout} className="header__sub__dropdown__menu__item">Logout</li>
      </ul>
    </div>
  </div>
};

export default HeaderSub;
