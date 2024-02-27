import React from 'react'
import './header.css'

export default function Header() {

  const scrollToElement = (element, duration) => {
    if (element) {
      const start = window.pageYOffset;
      const end = element.getBoundingClientRect().top;
  
      let startTime = null;
  
      const scrollStep = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }
  
        const progress = timestamp - startTime;
        const easeInOutCubic = progress => progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  
        window.scrollTo(0, start + end * easeInOutCubic(progress / duration));
  
        if (progress < duration) {
          requestAnimationFrame(scrollStep);
        }
      };
  
      requestAnimationFrame(scrollStep);
    }
  };
  return (
    <>
     <div className="header">
      <button  className='about_us' onClick={() => scrollToElement(document.getElementById('about'), 1000)}>
      About us
      </button>

      <button className='about_us' onClick={() => scrollToElement(document.getElementById('contacts'), 1000)}>
      Contacts
      </button>

<div className="img-header">
  <img src="./src/assets/pictures/logo_bread (1).svg" alt="" width='300px'/>
</div>

      <button className='about_us' onClick={() => scrollToElement(document.getElementById('menu'), 1000)}>
      Menu
      </button> 

      <a href='/login' className='about_us-link'>
      Log in
      </a>
     </div>
     <div className="img-bg-head">
        <img src="./src/assets/pictures/bread (1).svg" alt=""className='img-bg-header' />
     </div>
    </>
  )
}
