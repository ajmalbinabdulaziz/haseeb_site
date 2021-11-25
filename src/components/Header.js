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
        <strong>AQ events, A hallmark of
        class and royalty.
        Great at event decor and food catering.
        </strong>
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
