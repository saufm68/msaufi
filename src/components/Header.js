import React from 'react'

import logo from '../assets/images/website-icon.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} /></span>
        <h1>Saufi Dzulkifley</h1>
        <p>Hi, welcome to my personal site</p>
    </header>
)

export default Header
