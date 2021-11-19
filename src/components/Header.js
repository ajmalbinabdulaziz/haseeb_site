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
        <strong>AQ events</strong>, A hallmark of 
        <br />
        class and royalty.
        <br />
        Great at event decor and food catering
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
