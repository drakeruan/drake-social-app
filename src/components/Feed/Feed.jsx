import React, { useState, useEffect, Fragment } from 'react';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"

import FeedBox from './FeedBox/FeedBox';
import FeedPost from './FeedPost/FeedPost';
import { db } from '../../firebase/firebase'

import './Feed.css'

const Content = () => {
  const [posts, setPosts] = useState([])
  console.log(posts)
  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])


  return <div className='feed'>
    <FeedBox />
    {posts.map(({ id, data }, index) =>
      <Fragment key={index} >
        <FeedPost {...data} />
      </Fragment>
    )}
  </div>
};

export default Content;
