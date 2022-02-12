import React from 'react';

const HeaderOptionItem = ({ icon, text }) => {
  return <div className='header__option__item'>
    <div className='header__option__item__icon'>
      {icon}
    </div>
  </div>;
};

export default HeaderOptionItem;
