import React from 'react';

import Post from '../../Post/Post'

const Home = () => {
  return (<>
    <div className='content-options'>
      <div className='content-options-item'>
        <div className='content-options-item-icon'>
          <i className='bx bx-pencil'></i>
        </div>
        <div className='content-options-item-text'>New Port</div>
      </div>
      <div className='content-options-item'>
        <div className='content-options-item-icon'>
          <i className='bx bx-image'></i>
        </div>
        <div className='content-options-item-text'>New Picture</div>
      </div>
      <div className='content-options-item'>
        <div className='content-options-item-icon'>
          <i className='bx bx-video'></i>
        </div>
        <div className='content-options-item-text'>New Video</div>
      </div>
    </div>
    <Post />
  </>
  )
};

export default Home;
