import { useState } from 'react'

import './login.css'

const Login = () => {
  const [usename, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsername('')
    setPassword('')
  }
  return (
    <div class="login-container">
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
          />
          <small></small>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-control'
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