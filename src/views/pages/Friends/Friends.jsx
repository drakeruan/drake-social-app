import React from 'react';
import Friend from '../../Friend/Friend';

import './friends.css';

const Friends = () => {
    return <div className='friend-list'>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
    </div>;
};

export default Friends;
