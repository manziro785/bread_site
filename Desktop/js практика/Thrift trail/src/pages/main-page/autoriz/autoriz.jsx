import React from 'react'
import './autoriz.css'
import { NavLink } from 'react-router-dom'

export function Autoriz() {
  return (
    <>
    <div className="custom-tooltip">
              <img src="../src/assets/photo/image 8person.svg" alt="Mini Photo" className="mini-photo" id="person" />
                <div className="tooltiptext">
                 <NavLink to='registration'>
                  <button className="sign-up">
                    sign up
                  </button>
                  </NavLink>
                  <NavLink to='login'>
                  <button className="log-in">
                    log in
                  </button>
                  </NavLink>
                </div>
          </div>
    </>
  )
}
