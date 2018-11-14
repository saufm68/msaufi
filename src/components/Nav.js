import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
/* eslint-disable */
const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['intro', 'first', 'second']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="intro">
          <a href="#">About Me</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="first">
          <a href="#">Recent Works</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="second">
          <a href="#">Contacts</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
