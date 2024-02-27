import React from 'react'
import './deliv.css'

export default function Deliv() {

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
        <div className="deliv-container" id='delivery'>
            <div className="title-del">
            Доставка
            </div>
            <img src="./src/assets/pictures/Frame 1.svg" alt="" />
            <img src="./src/assets/pictures/bread-deliv.svg" alt="" className='bread-del'/>
            <div className='btn-to-menu' onClick={() => scrollToElement(document.getElementById('menu'), 1000)} >
                <img src="./src/assets/pictures/Frame 2.svg"  alt="" />
                </div>
        </div>
    </>
  )
}
