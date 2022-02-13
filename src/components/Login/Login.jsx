import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import { authentication } from '../../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import './login.css'
import LoginBtn from './LoginBtn/LoginBtn';

const Login = () => {
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(authentication, provider)
      .then(res => {
        const { user } = res;
        setAuth({ user })
        navigate('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='container'>
      <div className='login'>
        <div className='login__title'>
          Sign In With
        </div>
        <LoginBtn color='#cf4332' hanleClick={signInWithGoogle} icon={<i className='bx bxl-google'></i>} text='Sign in with Google' />
        <LoginBtn color='#483330' icon={<i className='bx bxl-github'></i>} text='Sign in with Github' />
        <LoginBtn color='#1d9bf0' icon={<i className='bx bxl-twitter'></i>} text='Sign in with Twiiter' />

      </div>
    </div>


  )
}

export default Login