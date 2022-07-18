import React from 'react';
import './Form.css';
import Vector1 from '../Images/Vector2.png'
import Vector2 from '../Images/Vector1.png'

const LogIn = () => {
  return (
    <>
    <div className='image-div'>
      <img src={Vector1} alt='effect' className='back-image'/>
      <img src={Vector2} alt='effect' className='front-image'/>
    </div>
        <div className='login-div'>
            <h1>
                Welcome to Asterdio
            </h1>
            <form className='login-form'>
                <input type="text" className='input' placeholder='User-Name/email' />
                <input type="password" className='input' placeholder='Password' />
                <a className='forget-pass' href='ForgerPassword.js'>Forget your password ?</a>
                <input type="button" name="Log-In" value="Log-In" className='button'/>    
            </form>
            <p>Register if you are new<a href='signUp.js'>Sing Up?</a></p>
        </div>
    </>
    
  );
}

export default LogIn; 