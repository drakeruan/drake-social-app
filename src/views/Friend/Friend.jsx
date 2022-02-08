import React from 'react';

import './friend.css'

const Friend = () => {
  return <div className="friend-item">
    <img src={require('../../assets/zawarudo.jpg')} alt="abc" />

    <div className="friend-item-brief">
      <div className="friend-item-brief-info">
        <p className="friend-item-brief-info-name">Nguyễn Văn A</p>
        <p className="friend-item-brief-info-mutual">10 bạn chung</p>
      </div>
      <button className="friend-item-brief-info-btn">
        <i className='bx bx-dots-horizontal-rounded'></i>
      </button>
    </div>
  </div>;
};

export default Friend;