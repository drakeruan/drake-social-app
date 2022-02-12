import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = () => {
  const { auth, setAuth } = useAuth()
  const location = useLocation()
  
  useEffect(() => {
    const userId = localStorage.getItem('userId')
    setAuth({ userId })
  }, [setAuth]);

  return auth?.userId
    ? <Outlet />
    : <Navigate to={'/login'} state={{ from: location }} replace />
};

export default RequireAuth;
