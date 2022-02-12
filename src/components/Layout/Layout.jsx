import React from 'react';

import './Layout.css'
import Header from '../Header/Header';
import Feed from '../Feed/Feed';

const TheLayOut = () => {
    return <div className="app">
        <Header />
        <Feed />
    </div>
};

export default TheLayOut;
