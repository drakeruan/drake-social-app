import React from 'react';

import './container.css'

import TheSideBar from '../TheSideBar/TheSideBar';
import Content from '../Content/Content';

const Container = () => {
    return <div className="container">
        <div className="container-sidebar">
            <TheSideBar />
        </div>
        <div className='container-content'>
            <div className="container-content-item" >
                <Content />
            </div>
            {/* <div className="container-content-item">Ads And Other</div> */}
        </div>

    </div>;
};

export default Container;
