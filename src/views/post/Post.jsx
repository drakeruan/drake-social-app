import React from 'react';

const Post = () => {
  return <div className='content-post'>
    <div className='content-post-profile'>
      <img src={require('../../assets/zawarudo.jpg')} alt='avatar' />
      <div className='content-post-profile-info'>
        <p className='content-post-profile-info-name'>Drake Ruan</p>
        <p className='content-post-profile-info-time'>2 days left</p>
      </div>
    </div>

    <div className='content-post-text'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </div>
    <div className='content-post-picture'>
      <img src={require('../../assets/awsome.jpg')} alt='content_picture' />
    </div>
    <div className='content-post-actions'>
      <ul>
        <li className='content-post-actions-item'>
          <i className='bx bx-show'></i>
          <span>{'100k'}</span>
        </li>
        <li className='content-post-actions-item'>
          <i className='bx bx-comment'></i>
          <span>{'5k'}</span>
        </li>
        <li className='content-post-actions-item'>
          <i className='bx bx-like'></i>
          <span>{'9k'}</span>
        </li>
      </ul>
    </div>

  </div>;
};

export default Post;
