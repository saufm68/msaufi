import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import avatar from '../assets/images/avatar.jpg'
import cover from '../assets/images/cover_Photo.jpeg'

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Introduction" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={cover} alt="cover" />
            </span>
            <h2>How I Started...</h2>
            <p>
              Since young I have always been intrigued by modern technology and
              how they work. This led me to learn more about basic circuitry so
              that I, too, can try to build these machines. I would always buy
              robotic kits from TAMIYA to learn how to build simple robots.
              After playing with wires, resistors and DC motors, I've decided to
              venture into programming to learn how to program my creations to
              do specific tasks. After learning to code with Arduino, I found
              that I prefer working with software than hardware leading me to
              learn other programming languages.
              <br />
              <br />I decided to start with JavaScript. After learning
              Javascript on my own through the help of YouTube videos and online
              tutorials, I decided to join the General Assembly Web Development
              Immersive course to further improve my coding skills. Through the
              course, I was able to hone my skills and write cleaner code. I
              have also found my love for developing web applications in the
              course, especially in creating UI features that users can see and
              interact with.{' '}
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
