import React from 'react'

function SignUp() {
  return (
    <>
      <div className='signin-div'>
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
  )
}

export default SignUp;