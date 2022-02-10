import React from 'react';
import { Routes, Route } from 'react-router-dom'

import './container.css'

import TheSideBar from '../TheSideBar/TheSideBar';
import Content from '../Content/Content';
import Home from '../../views/pages/Home/Home';
import Friends from '../../views/pages/Friends/Friends';
import Follows from '../../views/pages/Follows/Follows';
import Missing from '../../views/Missing/Missing';

const Container = () => {
  return <div className="container">
    <div className="container-sidebar">
      <TheSideBar />
    </div>
    <div className='container-content'>
      <div className="container-content-item" >
        <Routes>
          <Route path="/" element={<Content />}>
            <Route path="/" element={<Home />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/follows" element={<Follows />} />
            <Route path="/*" element={<Missing />} />
          </Route>
        </Routes>
      </div>
    </div>
  </div>;
};

export default Container;
