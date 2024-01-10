import React from 'react'
import './comments.css'

export default function Comments() {
  return (
    <>
    <div className="comments">
        <div className="zagol-ab">
        <div className="zagol-about" >
            <div className="title00"id='about'>
                About us
            </div>
            <div className="subt00">
            find out more
            </div>
        </div>
        <div className="bg-of-about">
            <img src="./src/assets/photo/dollar1.svg" alt="" className='dollar-about-us' />
        </div>
        </div>
        <div className="mission">
            <div className="title-mission">
            Our mission
            </div>
            <div className="info-mission">
            Our mission is to inspire and enhance lives by providing innovative solutions and high-quality services. We aim to effect meaningful change, supporting our clients on their journey towards financial stability and well-being. Our goal is to be your trusted partner, opening doors to new possibilities and ensuring successful attainment of your objectives. 
            </div>
        </div>
        <div className="values">
            <div className="title-values">
            Our values
            </div>
            <div className="info-values">
            To be the catalyst for positive change, empowering individuals and businesses alike. We envision a future where our innovative solutions redefine standards and inspire lasting progress. By fostering a culture of continuous improvement, propelling our clients towards unprecedented success. Our vision is to create a world where every endeavor is met with unwavering support and boundless opportunities.
            </div>
        </div>
    </div>
    </>
  )
}
