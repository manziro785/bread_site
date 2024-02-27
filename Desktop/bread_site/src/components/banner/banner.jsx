import React from 'react'
import Header from '../../components/header/header.jsx'
import './banner.css'


export default function Banner() {

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
    <Header/>
    <div className="zagol-banner">  
    <div className="banner-title">
    Выпечка по лучшим <br/>рецептам с любовью!
    </div>
    <div className="banner-subt">
    Производство только из натуральных  <br/>продуктов
    </div>
   
      <div className="btn-delivery">
      <div className='btn-deliv' onClick={() => scrollToElement(document.getElementById('delivery'), 1000)}>
      <img src="./src/assets/pictures/кнопка (1).svg" alt=""  className='img-btn'/>
      </div>
      </div>
   

    </div>
    </>
  )
}
