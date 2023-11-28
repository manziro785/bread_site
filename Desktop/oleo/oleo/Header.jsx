import './Header_buttons.css'
import React from 'react';
import  './Header.css';

export default function Header() {
  return (
    <>
    <header>
      <div>
        <div className='navbar'>
          
            <img src="./фото/logo.png" alt="" className='logo'/>
    <div className='buttons'>
            <button className='header-button' id='homeBtn'> Home</button>
            <button className='header-button'> Cook</button>
            <button className='header-button'> Categories</button>
            <button className='header-button'> About us</button>
            <button className='header-button'> Comments</button>
            <img src='./фото/image 8person.png' className='person'></img>
            </div>
            <hr className="line2" />   
     <div className= 'rectangle' ></div>   
         
          
        </div>
      </div>
      <div className='presentation'> </div>
    </header>
    
    
    </>
  );
}
