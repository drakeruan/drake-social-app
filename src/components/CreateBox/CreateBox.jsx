import React from 'react'
import './CreateBox.css'
const CreateBox = () => {
  return (
    <div class='createbox'>
      <form>
        <div class='createbox__input'>
          <div class='createbox__input__avatar'>
            <img src={require('../../assets/zawarudo.jpg')} alt="" />
          </div>
          <input type='text' class='createbox__input__control' placeholder={`What's on your mind?`} />
        </div>
        <button type='submit' class='createbox__input__btn'>Post</button>
      </form>
    </div>
  )
}

export default CreateBox