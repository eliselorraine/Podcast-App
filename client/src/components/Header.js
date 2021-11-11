import React from 'react';
import '../styles/Header.css'
import Nav from './Nav';
import { GiFishingHook } from 'react-icons/gi'

const Header = () => {
  return (
    <div className="header-container">
      <GiFishingHook className="header__logo"/>
      <header className="header__title">Hook: The Podcast App</header>
      <Nav />
    </div>
  )
}

export default Header;