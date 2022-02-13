import React from 'react';

import './FeedPost.css'

const FeedPost = ({ key, displayName, timestamp, content, image, displayImage }) => {
  const time = new Date(timestamp?.seconds * 1000)
  return <div key={key} className='feed__post'>
    <div className='feed__post__header'>
      <img src={displayImage} alt="" />
      <div className='feed__post__header__info'>
        <p className='feed__post__header__info__name'>{displayName}</p>
        <p className='feed__post__header__info__time'>{time.toLocaleString()}</p>
      </div>
    </div>
    <div className='feed__post__content'>
      <div className='feed__post__content__text'>
        {content}
      </div>

      {image && <div className='feed__post__content_image'>
        <img src={image} alt="" />
      </div>}

    </div>
    <div className='feed__post__action'>
      <div className='feed__post__action__item'>
        <i className='bx bx-show'></i>
        {'3k'}
      </div>
      <div className='feed__post__action__item'>
        <i className='bx bx-comment'></i>
        {'3k'}
      </div>
      <div className='feed__post__action__item'>
        <i className='bx bx-like' ></i>
        {'3k'}
      </div>
    </div>
  </div>;
};

export default FeedPost;
