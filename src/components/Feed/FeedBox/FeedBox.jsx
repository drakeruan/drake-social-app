import React from 'react';

import './FeedBox.css'

const FeedBox = () => {
  return <div className='feed__box'>
    <div className='feed__box__content'>
      <div className='feed__box__content__avatar'>
        <img src={require("../../../assets/zawarudo.jpg")} alt="zawarudo" />
      </div>
      <div className='feed__box__content__input'>
        <input placeholder={`What's on your mind?`} />
      </div>


    </div>
    <div className='feed__box__option'>
      <div className='feed__box__option__item'>
        <i className='bx bx-image-alt'></i>
      </div>
      <div className='feed__box__option__item'>
        <i className='bx bx-video'></i>
      </div>
      <div className='feed__box__option__item'>
        <i className='bx bxs-file-gif'></i>
      </div>
    </div>
  </div>;
};

export default FeedBox;
