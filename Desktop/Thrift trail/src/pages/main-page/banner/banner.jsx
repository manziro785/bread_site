import React from 'react'
import './banner.css'
import { NavLink } from 'react-router-dom'

export default function Banner() {
  return (
    <>
    <div className="banner">
    <div className="left">
        <div className="zagol">
<div className="subt">
Shape Your Wealth Path
</div>
<div className="title">
Craft Your <span>Success</span>
</div>
</div>
<NavLink to= 'manage' >
<div className="button-man">
    <button className='button-manage'>Manage money</button>
</div>
</NavLink>
    </div>
    <div className="right">
<div className="hand">
    <img src="./src/assets/photo/hand-removebg-preview.png" alt="" className='hand-photo'/>

</div>
<img src="./src/assets/photo/Polygon 1.svg" alt="" className='hand-bg' />
    </div>
    <div className="bg-money">
        <img src="./src/assets/photo/dollars.svg" alt="" className='bg-of-money'/>
    </div>
    </div>
    </>
  )
}
