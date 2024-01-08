import React from 'react'
import './main-page.css'
import Header from './header/header.jsx'
import Banner from './banner/banner.jsx'
import Cards from './cards/cards.jsx'
import Comments from './comments/comments.jsx'

export default function MainPage() {
  return (
     <>
     <Header/>
     <Banner/>
     <Cards/>
     <Comments/>
     </>
    
  )
}
