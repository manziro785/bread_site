import React from 'react'
import './header.css'

export default function Header() {

  return (
    
    <>
    <div className="header">
      <div>
       <div className="logo">
      <img src="./src/assets/photo/logo.svg" alt="" className='main-logo'/>
    </div>

    <div className="navbar">
    <button id="scrollToTop"  className="header-button">
              Home
            </button>
            <button className = "header-button">
              Manage
            </button>

            <button className="header-button" >
              About us
            </button>
            <button  className="header-button">
              Comments
            </button>
            
            <div className="custom-tooltip">
              <img src="../src/assets/photo/image 8person.svg" alt="Mini Photo" className="mini-photo" id="person" />
              {/* {user ? (
                <div className="tooltiptext">
                  <div className="sign-up">
                    log out
                  </div>
                </div>
              ) : ( */}
                <div className="tooltiptext">
                  <div className="sign-up">
                    sign up
                  </div>
                  <div className="log-in">
                    log in
                  </div>
                </div>
          </div>
          </div>
          </div>
          </div>
    </>
  )
}
