import React from 'react';

const Post = ({ content, views, likes }) => {
  return <div className='content-post'>
    <div className='content-post-profile'>
      <img src={require('../../assets/zawarudo.jpg')} alt='avatar' />
      <div className='content-post-profile-info'>
        <p className='content-post-profile-info-name'>Drake Ruan</p>
        <p className='content-post-profile-info-time'>2 days left</p>
      </div>
    </div>

    <p className='content-post-text'>
      {content}
    </p>
    <div className='content-post-picture'>
      <img src={require('../../assets/awsome.jpg')} alt='content_picture' />
    </div>
    <div className='content-post-actions'>
      <ul>
        <li className='content-post-actions-item'>
          <i className='bx bx-show'></i>
          <span>{views?.length}</span>
        </li>
        <li className='content-post-actions-item'>
          <i className='bx bx-comment'></i>
          <span>{'5k'}</span>
        </li>
        <li className='content-post-actions-item'>
          <i className='bx bx-like'></i>
          <span>{likes?.length}</span>
        </li>
      </ul>
    </div>

  </div>;
};

export default Post;
