import React from 'react'
import './Form.css';
import LogIn from './LogIn';
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
                <input type="text" className='input' placeholder='Password' />
                <input type="text" className='input' placeholder='Phone Number' />
                <select className='input'>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <input type="button" name="Log-In" value="Sign-Up" className='button' onClick={()=>{navigate("/")}} />    
            </form>
            <p>Already a User  <Link exact to="/">Log In</Link></p>
        </div>
    </>
  )
}

export default SignUp;