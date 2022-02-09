import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TheHeader from '../TheHeader/TheHeader'
import Container from '../Container/Container'

import './thelayout.css'
import { Outlet } from 'react-router-dom';

const TheLayOut = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            navigate('/login', { replace: true })
        }
    }, [navigate])

    return <main className="App">
        <TheHeader />
        <Container />
        <Outlet />
    </main>;
};

export default TheLayOut;
