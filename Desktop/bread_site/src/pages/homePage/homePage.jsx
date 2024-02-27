import React from 'react'
import './homePage.css'
import Banner from '../../components/banner/banner.jsx'
import AboutUs from '../../components/about_us/aboutUs.jsx'
import Moving from '../../components/moving-img/moving.jsx'
import Taste from '../../components/taste/taste.jsx'
import Menu from '../../components/menu/menu.jsx'
import Contacts from '../../components/contacts/contacts.jsx'
import Deliv from '../../components/deliv/deliv.jsx'


export  function HomePage() {
  return (
    <>
<Banner/>
<AboutUs/>
<Moving/>
<Taste/>
<Menu/>
<Contacts/>
<Deliv/>
    </>
  )
}
