import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './Layout.css'
import Header from '../Header/Header';
import Feed from '../Feed/Feed';
import Friend from '../../views/Friend/Friend';

const TheLayOut = () => {
    return <div className="app">
        <Header />
        <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/friend' element={<Friend />} />
        </Routes>
    </div>
};

export default TheLayOut;
