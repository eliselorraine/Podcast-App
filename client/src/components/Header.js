import React from 'react';
import Nav from './Nav';
import { GiFishingHook } from 'react-icons/gi'

const Header = () => {
  return (
    <div className="header">
      <GiFishingHook />
      <header>Podcast App</header>
      <Nav />
    </div>
  )
}

export default Header;