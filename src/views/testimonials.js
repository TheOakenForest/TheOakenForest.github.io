import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarContainer from '../components/navbar-container'
import './testimonials.css'

const Testimonials = (props) => {
  return (
    <div className="testimonials-container">
      <Helmet>
        <title>Testimonials - TheOakenForest</title>
        <meta property="og:title" content="Testimonials - TheOakenForest" />
      </Helmet>
      <NavbarContainer rootClassName="navbar-container-root-class-name2"></NavbarContainer>
      <div className="testimonials-section-separator"></div>
      <div className="testimonials-section-separator1"></div>
      <div className="testimonials-features">
        <div className="testimonials-heading-container">
          <h2 className="testimonials-text Section-Heading">Testimonials</h2>
        </div>
      </div>
      <div className="testimonials-testimonial-card">
        <div className="testimonials-testimonial">
          <svg viewBox="0 0 1024 1024" className="testimonials-icon">
            <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
          </svg>
          <span className="testimonials-text01">
            <span className="testimonials-text02">
              “Cameron is one of those talented people who has a great deal of
              expert knowledge that he is able to effectively condense and
              communicate to listeners who lack his years of experience and
              context.”
            </span>
            <span className="testimonials-text03">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="testimonials-text04">
            {' '}
            Madeleine Tate, Producer on Forza Horizon 5
          </span>
        </div>
        <img
          alt="profile"
          src="/playground_assets/pg-logo-200h.png"
          className="testimonials-image"
        />
      </div>
      <div className="testimonials-testimonial1">
        <div className="testimonials-container1">
          <header className="testimonials-testimonial-card1">
            <svg viewBox="0 0 1024 1024" className="testimonials-icon2">
              <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
            </svg>
            <div className="testimonials-testimonial2">
              <span className="testimonials-text05">
                <span className="testimonials-text06">
                  “I was privileged to work with Cameron on the development of
                  the ground-breaking sign language interpretation feature for
                  Forza Horizon 5, where his knowledge and guidance were
                  essential to bringing our accessibility work to fruition.
                  Cameron is one of those talented people who has a great deal
                  of expert knowledge that he is able to effectively condense
                  and communicate to listeners who lack his years of experience
                  and context. His knowledge as both a British Sign Language
                  user and a teacher of the deaf gives him invaluable
                  perspective and insight when it comes to making accessible
                  content.
                </span>
                <br></br>
                <br></br>
                <span className="testimonials-text09">
                  When we didn’t even know what questions we should be asking,
                  Cameron was patient and thorough in walking us through how we
                  might consider potential problems and solutions. Not only did
                  he help us in the development of our sign language feature,
                  but he also went above and beyond by giving us feedback on the
                  accessibility of the rest of the game outside of that one
                  feature.
                </span>
                <br className="testimonials-text10"></br>
                <br className="testimonials-text11"></br>
                <span className="testimonials-text12">
                  Cameron was also a valuable resource when it came to PR. He’s
                  a natural presenter and helped us to better explain the
                  feature to the larger community with his easy and charming
                  interviewing style. Cameron was a pleasure to work with, and
                  his contribution as an educator, accessibility consultant, and
                  a presenter cannot be understated.”
                </span>
              </span>
              <img
                alt="profile"
                src="/playground_assets/pg-logo-200h.png"
                className="testimonials-image1"
              />
              <span className="testimonials-text13">
                Madeleine Tate, Producer on Forza Horizon 5
              </span>
            </div>
          </header>
          <header className="testimonials-testimonial-card2">
            <svg viewBox="0 0 1024 1024" className="testimonials-icon4">
              <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
            </svg>
            <div className="testimonials-testimonial3">
              <span className="testimonials-text14">
                <span>
                  “Working with Cameron was an absolute pleasure. He speaks
                  about accessibility within videogames with authority and
                  passion and was able to inspire me and my team to do better
                  and strive further.
                </span>
                <br></br>
                <br></br>
                <span>
                  Cameron presents with a calm &amp; clear tone, and he’s able
                  to describe complex subjects in technical detail and also
                  through real-world anecdotes which helped our team empathise
                  with people from the deaf and hard of hearing community.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Cameron is a videogame enthusiast who lives and works within
                  the deaf and hard of hearing community, this lived experience
                  allows him to work with a level of detail and nuance that
                  added instant value to our project.”
                </span>
              </span>
              <img
                alt="profile"
                src="/playground_assets/pg-logo-200h.png"
                className="testimonials-image2"
              />
              <span className="testimonials-text22">
                Mike Brown, Creative Director on Forza Horizon 5
              </span>
            </div>
          </header>
          <header className="testimonials-testimonial-card3">
            <svg viewBox="0 0 1024 1024" className="testimonials-icon6">
              <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
            </svg>
            <div className="testimonials-testimonial4">
              <span className="testimonials-text23">
                “The Xbox Global PR team had the privilege to work with Cameron
                following his consultation on the British Sign Language
                integration feature in Forza Horizon 5, the award-winning
                open-world racing game from Xbox Game Studios developer
                Playground Games. In addition to his impressive expertise in
                accessibility consultancy and advocacy for the deaf/hard of
                hearing, Cameron proved to be an incredible resource in telling
                this important story. Cameron was utilized as a spokesperson and
                participated in multiple press interviews – including written,
                phone, and full broadcast. He also spoke on camera in the Xbox
                YouTube feature, eloquently explaining the importance of
                integrating features like sign language into video games.
                Cameron’s teaching background, media and presentation skills,
                and commitment to championing inclusivity for others are why we
                can’t wait to work with him again soon.”
              </span>
              <img
                alt="profile"
                src="/playground_assets/xbox-game-studios-logo-r225x225-200h.jpg"
                className="testimonials-image3"
              />
              <span className="testimonials-text24">
                Johnny Gibson, Xbox Game Studios Communications Lead
              </span>
            </div>
          </header>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
