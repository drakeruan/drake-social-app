import React from 'react';

import './container.css'

const Container = () => {
    return <div className="container">
        <div className="container-item sidebar">SideBar</div>
        <div className="container-item content">Content</div>
        <div className="container-item ads-and-other">Ads And Other</div>
    </div>;
};

export default Container;
