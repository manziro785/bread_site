import React from 'react'
import'./sign-up.css'

export function SignUp() {
  return (
    <>
<div className="login" > 
    <div className="login123">
    <a href='/'>
      <div className="logo-log">
        
          <img src="./src/assets/photo/logo.svg" alt="" className='logo-login'/>
          
      </div>
      </a>
      <div className="login-all">
      <div className="login-box1">
<div className="title-login1">
SIGN UP
</div>
<div className="input-login">
   <input  type="text" name="name" placeholder="your name" className='input-sign'></input>
   <input  type="email" name="email" placeholder="enter your e-mail" className='input-sign'></input>
   <input  type="password" name="user-password" placeholder="create password" className='input-sign'></input>
   <input  type="password" name="config" placeholder="confirm password" className='input-sign'></input>
</div>
<div className="button-login1">
  Sign Up
</div>
<div className="dont-have-acc">
  <div className="dont-have">
  Already have account ?
  </div>
  <div className="button-signup">
  Log in
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
