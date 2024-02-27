import React from 'react'
import './SignUp.css'
import Bg from '../../components/login-sign bg/bg.jsx' 

export  function SignUp() {
  return (
    <>
    <Bg/>
    <div className="box-login2">
      <div className="title-box2">
      Sign up
      </div>
      <form className='form-login2'>
        <input type='text' placeholder='your name' className='input-name2' />
        <input type='text' placeholder='your email' className='input-name2' />
        <input type='password' placeholder='create password' className='input-password2' />
        <input type='password' placeholder='confirm password' className='input-password2' />
        <input type='submit' value='Sign up' className='btn-login2' />
      </form>
      <div className="enjoy">
      Enjoy your bite!
      </div>
      <div className="dont-have3">
        <div className="subt-dont">
        Already have account ?
        </div>
        <a href='/login' className='btn-link-sign'>
        Log in
        </a>
      </div>
    </div>
    </>
  )
}
