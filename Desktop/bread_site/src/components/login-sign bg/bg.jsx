import React from 'react';
import { NavLink } from 'react-router-dom';
import './bg.css';

export default function Bg() {
  return (

    <>
    <div className="login-box">
    <div className="header-img">
    <a href='/' className='logo-btn'>
<img src="./src/assets/pictures/logo_bread (1).svg" alt="" className='logo_login' />
    </a>
    <div className="bg-login-all">

   
    <div className="bg-move-left">
<img src="./src/assets/pictures/bg-login.svg" alt="" className='img-bg-login'/>
    </div>
<div className="bg-move-right">
<img src="./src/assets/pictures/psheno.svg" alt="" className='img-bg-login-right'/>

</div>
    </div>
    </div>
    </div>
    </>
  )
}
