import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarContainer from '../components/navbar-container'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>TheOakenForest</title>
        <meta property="og:title" content="TheOakenForest" />
      </Helmet>
      <NavbarContainer rootClassName="navbar-container-root-class-name"></NavbarContainer>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div className="home-container1">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading">
              <span className="Section-Heading">
                Hi, I&apos;m Cameron &apos;
              </span>
              <span className="home-text01">Oak</span>
              <span className="Section-Heading">&apos; Akitt.</span>
            </h1>
            <span className="home-text03">
              I have 4 years of ongoing UX, and UX research, experience in the
              games industry as an Accessibility Consultant, working with AAA
              studios, such as Playground Games and Firesprite. I combine my
              project management acumen with industry, and lived experiences as
              a d/Deaf &amp; Hard of Hearing Gamer and Teacher of the Deaf, to
              make games more accessible and help studios improve the quality of
              their work through inclusive games user research.
            </span>
            <div className="home-cta-btn-container"></div>
          </div>
          <img
            alt="image"
            src="/playground_assets/trying_oak%2Bbutton_about-1500w.png"
            className="home-image"
          />
        </div>
      </div>
      <div className="home-features">
        <img
          alt="image"
          src="/playground_assets/oak_oak%2Bbutton_consult-300h.png"
          className="home-image1"
        />
        <div className="home-heading-container">
          <span className="home-text04">
            There are a number of ways I can support your studio to make your
            titles more accessible for gamers with disabilities.
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
            <div className="home-icon-container">
              <svg viewBox="0 0 1170.2857142857142 1024" className="home-icon">
                <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
              </svg>
            </div>
            <div className="home-content-container">
              <span className="home-heading1 Card-Heading">
                Accessibility Consultancy
              </span>
              <span className="home-text05">
                I bring together industry experience working with AAA studios
                and a decade of experience as a SEN Teacher and Teacher of the
                Deaf to support studios to understand the needs of gamers with
                disabilities and make their titles more accessible.
              </span>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-icon-container1">
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
              </svg>
            </div>
            <div className="home-content-container1">
              <span className="home-heading2 Card-Heading">User Research</span>
              <span className="home-text06">
                Understanding the needs of your players and how they interact
                with your designs, systems and mechanics is important. I can
                assist with your UX user research by helping to run, and analyse
                the results of, usability testing sessions. 
              </span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-icon-container2">
              <svg viewBox="0 0 865.7188571428571 1024" className="home-icon04">
                <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
              </svg>
            </div>
            <div className="home-content-container2">
              <span className="home-heading3 Card-Heading">Design Sprints</span>
              <span className="home-text07">
                We all benefit from broadening our perspective and world
                knowledge. I can support your multidisciplinary teams to
                understand the needs of gamers with disabilities and develop
                innovative, accessible, solutions to bridge those gaps.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-about">
        <div className="home-max-content-width-container">
          <div className="home-heading-container1">
            <h1 className="Section-Heading home-text08">
              Professional experience
            </h1>
          </div>
          <div className="home-content-container3">
            <div className="home-about-1">
              <div className="home-container2">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text09">
                  Lead Consultant on the development of new accessibility
                  features including the world first inclusion of signed
                  languages into a AAA game.
                </span>
              </div>
              <div className="home-container3">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text10">
                  Debriefing stakeholders at all levels of the organisation
                  using both written reports and presentations with clear,
                  concise and actionable recommendations that also identify
                  areas for further research.
                </span>
              </div>
              <div className="home-container4">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text11">
                  <span>
                    Spokesperson for Xbox Games Studios participating in press
                    interviews including written pieces by
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://www.ign.com/articles/playground-created-forza-horizon-5-sign-language-support"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    IGN
                  </a>
                  <span>
                    {' '}
                    and
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://news.microsoft.com/source/features/work-life/forza-horizon-5-introduces-sign-language-support-throughout-in-game-scenes/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    Microsoft
                  </a>
                  <span>
                    , phone and full broadcast including on the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://www.bbc.co.uk/iplayer/episode/m0018mc1/click-turning-food-waste-into-energy?page=1"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    BBC
                  </a>
                  <span>
                    ,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://youtu.be/7-LqVe2PArM"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link3"
                  >
                    Youtube
                  </a>
                  <span>
                    {' '}
                    and
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://youtu.be/UPAbfPN5dzA"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link4"
                  >
                    livestream
                  </a>
                  <span>.</span>
                </span>
              </div>
            </div>
            <div className="home-about-11">
              <div className="home-container5">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text18">
                  <span className="home-text19">
                    Helped conduct usability testing using methodologies
                    including playtests, think aloud protocol, focus groups and
                    retrospective testing.
                  </span>
                  <br className="Card-Text"></br>
                  <span className="Card-Text">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-container6">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text22">
                  Analysing data from research sessions, identifying key
                  problems along with potential solutions to improve the quality
                  of the game.
                </span>
              </div>
              <div className="home-container7">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text23">
                  Lead Consultant on the development new data collection tools
                  that supported the needs of d/Deaf &amp; Hard of Hearing
                  participates.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-clients">
        <div className="home-heading-container2">
          <h1 className="home-text24 Section-Heading">Clients</h1>
        </div>
        <div className="home-logo-container">
          <img
            alt="image"
            src="/playground_assets/firesprite-200h.webp"
            className="home-logo"
          />
          <img
            alt="image"
            src="/playground_assets/logo_4_rgb-200h.png"
            className="home-logo1"
          />
          <img
            alt="image"
            src="/playground_assets/xbox_game_studios.svg"
            className="home-logo2"
          />
          <img
            alt="image"
            src="/playground_assets/1920px-playstation_studios_logo_with_a_black_center_frame.svg-200w.png"
            className="home-logo3"
          />
          <img
            alt="image"
            src="/playground_assets/overwatch_league_logo.svg-200h.png"
            className="home-logo4"
          />
        </div>
      </div>
      <div className="home-footer">
        <div className="home-social-links">
          <a
            href="https://twitter.com/TheOakenForest"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link5"
          >
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon18">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="home-subscribe"></div>
    </div>
  )
}

export default Home
