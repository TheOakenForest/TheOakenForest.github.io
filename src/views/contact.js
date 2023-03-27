import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarContainer from '../components/navbar-container'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - TheOakenForest</title>
        <meta property="og:title" content="Contact - TheOakenForest" />
      </Helmet>
      <NavbarContainer></NavbarContainer>
      <div className="contact-section-separator"></div>
      <div className="contact-section-separator1"></div>
      <div className="contact-container1">
        <div className="contact-hero">
          <div className="contact-hero-text-container">
            <h1 className="contact-heading">
              It&apos;s dangerous to go alone...
            </h1>
            <span className="contact-text">
              If you&apos;d like to hire to me to consult on one of your
              projects, of if you have any questions, you can contact me at
              oak@theoakenforest.com
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/social2-1500w.png"
            className="contact-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
