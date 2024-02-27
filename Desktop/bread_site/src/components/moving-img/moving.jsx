import React, { useState, useEffect } from 'react';
import './moving.css'

export default function Moving() {
    useEffect(() => {
        const photoContainers1 = document.querySelectorAll('.photo-container1');
        const photoContainers2 = document.querySelectorAll('.photo-container2');
        // const photoContainers3 = document.querySelectorAll('.photo-container3');
        
        const checkBox = (elements) => {
          const trigger = window.innerHeight / 5 * 4;
    
          elements.forEach((element) => {
            const topOfBox = element.getBoundingClientRect().top;
    
            if (topOfBox < trigger) {
              element.classList.add('show');
            } else {
              element.classList.remove('show');
            }
          });
        };
    
        const handleScroll = () => {
          checkBox(photoContainers1);
          checkBox(photoContainers2);
        //   checkBox(photoContainers3);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Вызываем handleScroll сразу после загрузки страницы, чтобы определить положение
        handleScroll();
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    //   const photoStyle = {
    //     left: '-400px',
    //     marginTop: '70px',
    //   };

  return (
    <>
     <div className= 'photo-container1' >
      <img src="./src/assets/pictures/bread-moving.svg" alt="Your Photo" className="scroll-photo" />
    </div>
    <div className= 'photo-container2' >
      <img src="./src/assets/pictures/spoon.svg" alt="Your Photo" className="scroll-photo-right" />
    </div>
    <div className="title-moving">
        <div className="title-of-moving">
            <img src="./src/assets/pictures/logo (5).svg" alt="" />
            <div className="title-moves">
            Твоя любимая <br/>пекарня!

            </div>
        </div>
    </div>
  
    </>
  )
}
