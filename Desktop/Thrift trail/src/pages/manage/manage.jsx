import React from 'react'
import './manage.css'
import { NavLink } from 'react-router-dom'

export function Manage() {
  return (
    <>
      <div className="header-manage">
        <div className="logo-manage">
          <NavLink to='/'>
            <img src="./src/assets/photo/logo.svg" alt="" />
          </NavLink>
        </div>
        <div className="login-signup">
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
        </div>
      </div>

      <div className="money">
        <div className="balance">
          <div className="title-balance">
            Balance
          </div>
          <div className="fin">
            <div className="finance" id='balance'>
              0
            </div>
            <div className="valute">
              KGS
            </div>

          </div>
        </div>
      </div>

      <div className="incomes-box">
        <div className="incomes">
          <div className="title-incomes">
            Incomes
          </div>
          <div className="btn-add">
            Add
          </div>
        </div>
      </div>

      <div className="expendes-box">
        <div className="expendes">
          <div className="title-expendes">
            Expenses
          </div>
          <div className="btn-add1">
            Add
          </div>
        </div>
      </div>

      <div className="check">
        <div className="check-box">
          <div className="check-text">
            We will help you calculate <br></br>
            and give advice !
          </div>
          <div className="btn-calc">
            <NavLink to='/check' className='btn-calculation'>
              Make a calculation
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
