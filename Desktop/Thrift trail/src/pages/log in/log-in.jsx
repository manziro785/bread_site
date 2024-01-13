import React from 'react'
import { NavLink } from "react-router-dom";
import './log-in.css'


export  function LogIn() {
  return (
    <>
    <div className="login" style={{ overflowY: 'hidden' }}>
    <div className="login123">
      <div className="logo-log">
        <NavLink to='/'>
          <img src="./src/assets/photo/logo.svg" alt="" className='logo-login'/>
        </NavLink>
      </div>
      <div className="login-all">
      <div className="login-box">
<div className="title-login"> 
LOG IN
</div>
<div className="input-login">
   <input  type="text" name="username" placeholder="enter your e-mail"></input>
   <input  type="password" name="user-password" placeholder="enter your password"></input>
</div>
<div className="button-login">
  log in
</div>
<div className="dont-have-acc">
  <div className="dont-have">
  Don’t have an account ?
  </div>
  <div className="button-signup">
Sign up
  </div>
</div>
      </div>
      <div className="hand-login">
        <img src="./src/assets/photo/hand login (1).svg" alt="" />
      </div>
      
      </div>
      
    </div>
    <div className="money-log">
    <img src="./src/assets/photo/bg of log in.svg" alt="" className='money-login'/>
    </div>
    </div>
    </>
  )
}
