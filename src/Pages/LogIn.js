<<<<<<< HEAD
import React,{useState} from 'react';
import './Form.css';
import Vector1 from '../Images/Vector2.svg'
import Vector2 from '../Images/Vector1.svg'
import { Link,useNavigate  } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import LogInAction from '../redux/actions/LogInAction';
import GetAllUserAction from '../redux/actions/GetAllUserAction';


const LogIn = () => {
  const navigate=useNavigate();
  const [email,setEmail] = useState("");
  const [pwd,setPwd] = useState("");
  const dispatch=useDispatch()
  const {loginState} = useSelector(state => state.logIn);
  

  const Verify=() =>{
    try{
      const abc={email:email,password:pwd}
      console.log(abc)
      dispatch(LogInAction(abc)); 
      console.log(loginState,"user asdasdasd sa")
      // navigate("/dashboard")
    }catch(err){
    console.log(err)
    }   
  }
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
            <form className='login-form'>
                <input type="text" className='input' placeholder='Username/Email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <input type="password" className='input' value={pwd} onChange={(e)=>setPwd(e.target.value)} placeholder='Password' />
                <a className='forget-pass' href='ForgerPassword.js'>Forget your password ?</a>
                <button type='button' value="" className='button' onClick={Verify} >Log-In</button> 
            </form>
            <p>Register if you are new  <Link exact to="/signup">Sign Up?</Link></p>
        </div>
=======
import React from "react";
import "./Form.css";
import Vector1 from "../Images/Vector2.svg";
import Vector2 from "../Images/Vector1.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LogIn = () => {
  const navigate = useNavigate();
  const Data = async () => {
    const data = await axios.get("http://localhost:3000/user/getall-users");
    console.log(data);
  };
  Data();
  return (
    <>
      <div className="image-div">
        <img src={Vector1} alt="effect" className="back-image" />
        <img src={Vector2} alt="effect" className="front-image" />
      </div>
      <div className="main-div">
        <h1 className="form-heading">Welcome to Asterdio</h1>
        <form className="login-form" method="post">
          <input
            type="text"
            className="input"
            placeholder="Username/Email"
            required
          />
          <input type="password" className="input" placeholder="Password" />
          <a className="forget-pass" href="ForgerPassword.js">
            Forget your password ?
          </a>
          <input
            type="submit"
            name="Log-In"
            value="Log-In"
            className="button"
            onClick={() => {
              navigate("/dashboard");
            }}
          />
        </form>
        <p>
          Register if you are new{" "}
          <Link exact to="/signup">
            Sing Up?
          </Link>
        </p>
      </div>
>>>>>>> e3ff3e19b11f843cb9a69c988f152ac444a3b445
    </>
  );
};

export default LogIn;
