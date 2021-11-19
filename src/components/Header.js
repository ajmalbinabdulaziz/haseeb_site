import React from 'react'

import Footer from './Footer'
import logo from '../assets/images/logo.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={logo} alt="" />
      </a>
      <h1>
        <strong>I am Strata</strong>, a super simple
        <br />
        responsive site template freebie
        <br />
        crafted by <a href="http://html5up.net">HTML5 UP</a>.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
