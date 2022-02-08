import React from 'react';

import './content.css'
import ContentPost from './ContentPost';

const Content = () => {
  return <div className='content'>
    <div className='content-options'>
      <div className='content-options-item'>
        <div className='content-options-item-icon'>
          <i class='bx bx-pencil'></i>
        </div>
        <div className='content-options-item-text'>New Port</div>
      </div>
      <div className='content-options-item'>
        <div className='content-options-item-icon'>
          <i class='bx bx-image'></i>
        </div>
        <div className='content-options-item-text'>New Picture</div>
      </div>
      <div className='content-options-item'>
        <div className='content-options-item-icon'>
          <i class='bx bx-video'></i>
        </div>
        <div className='content-options-item-text'>New Video</div>
      </div>
    </div>
    <ContentPost />
  </div>;
};

export default Content;
