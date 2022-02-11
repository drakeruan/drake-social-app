import React from 'react';

import './Layout.css'
import TheSideBar from '../Sidebar/Sidebar';
import Content from '../Content/Content';

const TheLayOut = () => {
    return <div className="app">
        <TheSideBar />
        <Content />
    </div>
};

export default TheLayOut;
