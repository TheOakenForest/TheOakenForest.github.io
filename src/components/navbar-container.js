import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar-container.css'

const NavbarContainer = (props) => {
  return (
    <div
      data-role="Header"
      className={`navbar-container-navbar-container ${props.rootClassName} `}
    >
      <div className="navbar-container-navbar">
        <div className="navbar-container-container">
          <div className="navbar-container-container1">
            <div className="navbar-container-links-container">
              <Link to="/" className="navbar-container-link Navbar-Link">
                {props.link}
              </Link>
              <Link
                to="/testimonials"
                className="navbar-container-link1 Navbar-Link"
              >
                {props.link2}
              </Link>
              <Link
                to="/in-the-news"
                className="navbar-container-link2 Navbar-Link"
              >
                {props.link31}
              </Link>
            </div>
          </div>
          <Link to="/contact" className="navbar-container-link3 Navbar-Link">
            {props.link3}
          </Link>
        </div>
        <div data-role="BurgerMenu" className="navbar-container-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-container-icon">
            <path
              d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="navbar-container-mobile-menu">
          <div className="navbar-container-container2">
            <span className="Card-Heading navbar-container-heading">
              {props.Heading}
            </span>
            <div
              data-role="CloseMobileMenu"
              className="navbar-container-close-menu"
            >
              <svg viewBox="0 0 1024 1024" className="navbar-container-icon2">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
          <div className="navbar-container-links-container1">
            <span className="navbar-container-link4 Navbar-Link">
              {props.link4}
            </span>
            <span className="navbar-container-link5 Navbar-Link">
              {props.link5}
            </span>
            <span className="navbar-container-link6 Navbar-Link">
              {props.link6}
            </span>
            <span className="Navbar-Link">{props.link7}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

NavbarContainer.defaultProps = {
  link2: 'Testimonials',
  link5: 'Experience',
  link6: 'Portofolio',
  link7: 'Contact',
  link: 'About',
  rootClassName: '',
  link4: 'About',
  Heading: 'Logo',
  link3: 'Contact',
  link31: 'In The News',
}

NavbarContainer.propTypes = {
  link2: PropTypes.string,
  link5: PropTypes.string,
  link6: PropTypes.string,
  link7: PropTypes.string,
  link: PropTypes.string,
  rootClassName: PropTypes.string,
  link4: PropTypes.string,
  Heading: PropTypes.string,
  link3: PropTypes.string,
  link31: PropTypes.string,
}

export default NavbarContainer
