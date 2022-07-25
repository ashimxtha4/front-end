import React from 'react'
import './Form.css';
import Vector1 from '../Images/Vector2.svg'
import Vector2 from '../Images/Vector1.svg'
import { Link,useNavigate  } from 'react-router-dom';

function SignUp() {
  const navigate=useNavigate();
  return (
    <>
    <div className='image-div'>
      <img src={Vector1} alt='effect' className='back-image'/>
      <img src={Vector2} alt='effect' className='front-image'/>
    </div>
    <div className='main-div'>
            <h1 className='form-heading'>
                Welcome to Asterdio
            </h1>
            <form className='signup-form'>
                <input type="text" className='input' placeholder='First Name' />
                <input type="text" className='input' placeholder='Last Name' />
                <input type="text" className='input' placeholder='Email' />
                <input type="password" className='input' placeholder='Password' />
                <input type="text" className='input' placeholder='Phone Number' />
                <input list="browsers" name="browser" id="designatio" className='input' placeholder='Designation' />
                    <datalist id="browsers">
                      <option value="Front-End Developer" />
                      <option value="Back-End Developer" />
                      <option value="QA Engineer" />
                      <option value="Designer" />
                      <option value="Finance" />
                    </datalist>

                <input type="submit" name="Log-In" value="Sign-Up" className='button' onClick={()=>{navigate("/")}} />    
            </form>
            <p>Already a User  <Link exact to="/">Log In</Link></p>
        </div>
    </>
  )
}

export default SignUp;