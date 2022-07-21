import React from 'react'
import './Form.css';
import LogIn from './LogIn';
import Vector1 from '../Images/Vector2.svg'
import Vector2 from '../Images/Vector1.svg'

function SignUp() {
  return (
    <>
    <div className='image-div'>
      <img src={Vector1} alt='effect' className='back-image'/>
      <img src={Vector2} alt='effect' className='front-image'/>
    </div>
    <div className='main-div'>
            <h1>
                Welcome to Asterdio
            </h1>
            <form className='signup-form'>
                <input type="text" className='input' placeholder='User-Name/email' />
                <input type="text" className='input' placeholder='User-Name/email' />
                <input type="text" className='input' placeholder='User-Name/email' />
                <input type="text" className='input' placeholder='User-Name/email' />
                <input type="text" className='input' placeholder='User-Name/email' />
                <input type="password" className='input' placeholder='Password' />
                <a className='forget-pass' href='ForgerPassword.js'>Forget your password ?</a>
                <input type="button" name="Log-In" value="Sign-Up" className='button'/>    
            </form>
            <p>Already a User</p>
        </div>
    </>
  )
}

export default SignUp;