import React from 'react';

import './FeedPost.css'

const FeedPost = () => {
  return <div className='feed__post'>
    <div className='feed__post__header'>
      <img src={require("../../../assets/zawarudo.jpg")} alt="" />
      <div className='feed__post__header__info'>
        <p className='feed__post__header__info__name'>Name</p>
        <p className='feed__post__header__info__time'>Time</p>
      </div>
    </div>
    <div className='feed__post__content'>
      <div className='feed__post__content__text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </div>
      <div className='feed__post__content_image'>
        <img src={require("../../../assets/awesome.jpg")} alt="" />
      </div>
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
