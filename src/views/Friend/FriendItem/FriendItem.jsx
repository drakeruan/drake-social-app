import React from 'react'

import './FriendItem.css'

const FriendItem = () => {
  return (
    <div className='friend__card'>
      <div className='friend__card__img'>
        <img src={require('../../../assets/avatar.jpg')} alt='' />
      </div>
      <p className='friend__card__name'>Name</p>
      <div className='friend__card__action'>
        <button className='friend__card__action__btn'>View Profile</button>
        <button className='friend__card__action__btn'>Add Friend</button>
      </div >
    </div>
  )
}

export default FriendItem