import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarContainer from '../components/navbar-container'
import './in-the-news.css'

const InTheNews = (props) => {
  return (
    <div className="in-the-news-container">
      <Helmet>
        <title>In-the-News - TheOakenForest</title>
        <meta property="og:title" content="In-the-News - TheOakenForest" />
      </Helmet>
      <NavbarContainer rootClassName="navbar-container-root-class-name3"></NavbarContainer>
      <div className="in-the-news-section-separator"></div>
      <div className="in-the-news-section-separator1"></div>
      <div className="in-the-news-section-separator2"></div>
      <div className="in-the-news-subscribe">
        <div className="in-the-news-blog">
          <div className="in-the-news-container1">
            <div className="in-the-news-blog-post-card"></div>
          </div>
          <div className="in-the-news-container2">
            <iframe
              src="https://www.youtube.com/embed/7-LqVe2PArM"
              className="in-the-news-iframe"
            ></iframe>
            <div className="in-the-news-container3">
              <iframe
                src="https://www.youtube.com/embed/UPAbfPN5dzA"
                className="in-the-news-iframe1"
              ></iframe>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/screenshot%202023-03-27%20at%2014.47.32-1400w.png"
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="in-the-news-image"
          />
          <div className="in-the-news-container4">
            <div className="in-the-news-blog-post-card1">
              <a
                href="https://www.ign.com/articles/playground-created-forza-horizon-5-sign-language-support"
                target="_blank"
                rel="noreferrer noopener"
                className="in-the-news-link"
              >
                <img
                  alt="image"
                  src="/playground_assets/screenshot%202023-03-27%20at%2014.46.29-1400w.png"
                  image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                  className="in-the-news-image1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InTheNews
