import React, { useState } from 'react';

import { db } from '../../../firebase/firebase'

import { collection, addDoc, Timestamp } from 'firebase/firestore'

import useAuth from '../../../hooks/useAuth'
import './FeedBox.css'

const FeedBox = () => {
  const { auth } = useAuth()
  const { user } = auth
  const [textContent, setTextContent] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      displayName: user.displayName,
      timestamp: Timestamp.now(),
      content: textContent,
      displayImage: user.photoURL
    }
    setTextContent('')
    await addDoc(collection(db, 'posts'), data)
  }


  return <div className='feed__box'>
    <form onSubmit={handleSubmit} className='feed__box__content'>
      <div className='feed__box__content__avatar'>
        <img src={user.photoURL} alt="zawarudo" />
      </div>
      <input
        className='feed__box__content__input'
        value={textContent}
        onChange={e => setTextContent(e.target.value)}
        placeholder={`What's on your mind?`}
      />
      <button type='submit' className='feed__box__content__btn'>Post</button>
    </form>

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
