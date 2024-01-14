import React from 'react'
import './manage.css'
import { NavLink } from 'react-router-dom'
import { Autoriz } from '../main-page/autoriz/autoriz.jsx'

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
         <Autoriz/>
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
