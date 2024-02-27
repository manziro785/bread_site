import React from 'react'
import './loginPage.css'
import Bg from '../../components/login-sign bg/bg.jsx'

export  function LoginPage() {
  return (
    <>
    <Bg/>
    <div className="box-login">
      <div className="title-box">
      Login
      </div>
      <form className='form-login'>
        <input type='text' placeholder='Input your name' className='input-name' />
        <input type='password' placeholder='Input your password' className='input-password' />
        <input type='submit' value='Login' className='btn-login' />
      </form>
      <div className="enjoy">
      Enjoy your bite!
      </div>
      <div className="dont-have">
        <div className="subt-dont">
        Don’t have account ?
        </div>
        <a href='/registration' className='btn-link-sign'>
        Sign Up
        </a>
      </div>
    </div>
    </>
  )
}
