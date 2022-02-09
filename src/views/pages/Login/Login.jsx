import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
import data from '../../../data'

import './login.css'

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/'

  const [usename, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      navigate(from, { replace: true })
    }
  }, [from, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const user = data.users.find(u => u.username === usename && u.password === password)
      setAuth({ id: user.id })
      setUsername('')
      setPassword('')
      navigate(from, { replace: true })
    } catch (error) {
      // handle error message
    }

  }

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            text='text'
            id='username'
            value={usename}
            onChange={(e) => setUsername(e.target.value)}
            className='form-control'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-control'
            required
          />
        </div>
        <div className='form-group'>
          <button className='submit-btn' type='submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login