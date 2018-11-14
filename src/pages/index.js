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
                    <a href="https://saufm68.github.io/Trapped/">
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
                  Arcade style game where players navigate through the map,
                  avoiding enemies along the way, to get to the exit
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
                  Game blog for sharing your favourite games. Includes a mini
                  game-maker platform for users to create simple pac-man-styled
                  games.
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
                  Platform for users to learn Malay through watching videos
                  picked for them or through a community based Q&A portion.
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
