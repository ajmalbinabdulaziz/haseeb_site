import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'AQ Events'
  const siteDescription = 'Event Decor and Food Catering'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Event planning, design and production within 
              time limits. Working with clients to identify their needs 
              and ensure customer satisfaction.
            </h2>
          </header>
          <p>
            We listen to what you want and deliver on what we promise!
            Yes, we care and no, we won't ever compromise on the quality
            we deliver.
            We offer ravishing decors for all your event needs. We don't
            mind if it's an adult's rung party or a themed birthday for 
            your precious angels, a big fat wedding or a simple get together, 
            a beaming bride's bridal shower or a sleepy baby's baby shower, 
            our only target is a happy customer with raving reviews.
          </p>
          <ul className="actions">
            <li>
              <a href="https://www.justdial.com/Alappuzha/AQ-Events-Wedding-Planner-Near-Substation-Alleppey/0477PX477-X477-191125163048-H6R6_BZDET" target="_blank" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            Please scroll to the top for the social media icons, contact details are listed below. 
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Punnapra south, near KSEB power station
                  <br />
                  Alleppey, Kerala
                  <br />
                  India
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  +91-9995045599 <br /> +91-9995203399
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto: aqevents007@gmail.com">aqevents007@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
