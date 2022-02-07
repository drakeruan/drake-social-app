import React from 'react';

import './content.css'
import ContentPost from './ContentPost';

const Content = () => {
  return <div className='content'>
    <div className='content-options'>
      <div>New Post</div>
      <div>New Picture</div>
      <div>New Video</div>
    </div>
    <ContentPost />
  </div>;
};

export default Content;
