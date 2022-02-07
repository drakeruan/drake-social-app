import React from 'react';

const ContentPost = () => {
  return <div className='content-post'>
    <div className='content-post-profile'>
      <img src='' alt='avatar' />
      <div className='content-post-profile-info'>
        <p className='content-post-profile-info-name'>Drake Ruan</p>
        <p className='conent-post-profile-info-time'>2 days left</p>
      </div>
    </div>
    <div className='content-post-title'>
      Title post
    </div>
    <div className='content-post-text'>
      Text post
    </div>
    <div className='content-post-picture'>
      <img src='' alt='contentpicture' />
    </div>
    <div className='content-post-action'>
      <ul>
        <li><i class='bx bx-show'></i></li>
        <li><i class='bx bx-comment'></i></li>
        <li><i class='bx bx-like'></i></li>
      </ul>
    </div>

  </div>;
};

export default ContentPost;
