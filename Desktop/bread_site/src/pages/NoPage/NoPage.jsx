import React from 'react'
import './NoPage.css'
import { NavLink } from 'react-router-dom'

export  function NoPage() {
  return (
    <>
    <div className="no-page">
  <div className='left'>
    <div className="err-title">
      404
    </div>
    <div className="subt-err">
    Page not found
    </div>
    <div className="sub-sub-err">
    The link you followed probably broken <br/>
or the page may have been removed.
    </div>
    <a href='/' className="btn-back">
    Back to home
    </a>
  </div>
  <div className="right">
    <img src="./src/assets/pictures/bread_old.svg" alt="" />
  </div>
  </div>
    </>
  )
}
