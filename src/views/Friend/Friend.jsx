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
      <div className="friend-item-brief-actions">
        <button className="friend-item-brief-actions-btn">
          <i className='bx bx-dots-horizontal-rounded'></i>
        </button>
        <div className="friend-item-brief-actions-list">
          <ul>
            <li className="friend-item-brief-actions-list-item">Xem trang cá nhân</li>
            <li className="friend-item-brief-actions-list-item">Xóa bạn bè</li>
            <li className="friend-item-brief-actions-list-item">Nhắn tin</li>
          </ul>
        </div>
      </div>
    </div>
  </div>;
};

export default Friend;
