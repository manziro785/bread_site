
import React from 'react'
import './Header.css'


export default function Header() {
  function register() {
    alert('Регистрация');
}

function login() {
    alert('Войти');
}

// function scrollToTop(e) {
//   e.preventDefault(); // Отмена дефолтного поведения
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// }
function scrollToTop() {
  const duration = 11100; 
  const scrollStep = -window.scrollY / (duration / 15);

  function scroll() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}
  return (
    <>
    <div className="header">
<div>
  <div className="logo">
    <img src="./src/assets/фото/logo.png" alt="" className='main-logo' />
  </div>
  <div className="navbar">
  <a href="#" onClick={scrollToTop} className='header-button'>Home</a>

    {/* <button  id="scrollToTop" onClick={scrollToTop} className='header-button'>Home</button> */}
    <a href="" className='header-button'>Cook</a>
    <a href="" className='header-button'>Categories</a>
    <a href="" className='header-button'>About us</a>
    <a href="" className='header-button'>Comments</a>
     <div className="custom-tooltip">
            <img src="../src/assets/фото/image 8person.png" alt="Mini Photo" className="mini-photo" id="person" />
            <div className="tooltiptext">
              <a href='' className='sign-up'onClick={register}>sign up</a>
              <a href='' className='log-in'onClick={login}>log in</a>
            </div>
          </div>
     </div>


</div>
    <div className="expand"></div>
    <div className="menu">
      <img src="../src/assets/фото/menu.png" alt="" className="menu-photo" id="menu" />
      <div className="menutext">
      <a href="#" onClick={scrollToTop} className='header-button'>Home</a>

<a href="" className='header-button'>Cook</a>
<a href="" className='header-button'>Categories</a>
<a href="" className='header-button'>About us</a>
<a href="" className='header-button'>Comments</a>            </div>
    </div>
</div>
    </>
  )
}



