import React from 'react'

const LoginBtn = ({ color, hanleClick, icon, text }) => {
  return (
    <button className='login__btn' onClick={hanleClick || null}
      style={{ backgroundColor: color }}>
      <div className='login__btn__icon'>
        {icon}
      </div>
      <div className='login__btn__text'>
        {text}
      </div>
    </button>
  )
}

export default LoginBtn