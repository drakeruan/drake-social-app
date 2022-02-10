import React, { useEffect, useState } from 'react';

import Post from '../../Post/Post'
import data from '../../../data'

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const lastPost = data.posts.slice(-10)
    setPosts(lastPost)
  }, [])
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
    {posts.map((post) => <Post key={post.id} {...post} />)}
    {/* <Post /> */}
  </>
  )
};

export default Home;
