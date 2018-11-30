import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import avatar from '../assets/images/avatar.jpg'
import trapped from '../assets/images/trapped2.png'
import playground from '../assets/images/playground2.png'
import malayme from '../assets/images/malayme2.png'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Msaufi" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="first" className="main special">
            <header className="major">
              <h2>Recent Works</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image work">
                  <img className="project" src={trapped} alt="project1 pic" />
                  <div className="middle">
                    <a href="https://trap.netlify.com/">
                      <button className="primary">Visit Site</button>
                    </a>
                    <a href="https://github.com/saufm68/Trapped">
                      <button className="secondary">Visit Repo</button>
                    </a>
                  </div>
                </span>
                <h2>
                  <b>Trapped</b>
                </h2>
                <p>
                  An arcade style game where players navigate through a map,
                  avoiding enemies to get to the exit.
                </p>
              </li>
              <li>
                <span className="image work">
                  <img
                    className="project"
                    src={playground}
                    alt="project2 pic"
                  />
                  <div className="middle">
                    <a href="https://play-g.herokuapp.com/">
                      <button className="primary">Visit Site</button>
                    </a>
                    <a href="https://github.com/saufm68/PlayGround">
                      <button className="secondary">Visit Repo</button>
                    </a>
                  </div>
                </span>
                <h2>
                  <b>PlayGround</b>
                </h2>
                <p>
                  A game sharing platform, with built-in game-maker
                  functionality, for users to share the games they created and
                  get feedback from others.
                </p>
              </li>
              <li>
                <span className="image work">
                  <img className="project" src={malayme} alt="project3 pic" />
                  <div className="middle">
                    <a href="https://malayme.herokuapp.com/">
                      <button className="primary">Visit Site</button>
                    </a>
                    <a href="https://github.com/saufm68/Project3">
                      <button className="secondary">Visit Repo</button>
                    </a>
                  </div>
                </span>
                <h2>
                  <b>MalayMe</b>
                </h2>
                <p>
                  A language learning platform to help users learn Malay. It
                  contains a library of usesul videos for learning the language.
                  It also has a Q&A platform where users can ask others
                  questions regarding the language, encouraging a community
                  based learning.
                </p>
              </li>
            </ul>
          </section>

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <p>
                  A recent graduate of the General Assembly Web Development
                  Immersive Course, working towards becoming a Web Developer...
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/introduction" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={avatar} alt="profile pic" />
              </span>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
