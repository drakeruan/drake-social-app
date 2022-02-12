import React from 'react';
import FeedBox from './FeedBox/FeedBox';
import FeedPost from './FeedPost/FeedPost';

import './Feed.css'

const Content = () => {
  return <div className='feed'>
    <FeedBox />
    <FeedPost />
    <FeedPost />
  </div>
};

export default Content;
