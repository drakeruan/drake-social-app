import React from 'react';

import TheHeader from '../TheHeader/TheHeader'
import Container from '../Container/Container'

import './thelayout.css'
import { Outlet } from 'react-router-dom';

const TheLayOut = () => {
    return <main className="App">
        <TheHeader />
        <Container />
        <Outlet />
    </main>;
};

export default TheLayOut;
