import React from 'react';
import '../styles/Header.css'
import { GiFishingHook } from 'react-icons/gi'

const Header = () => {
  return (
    <div className="mobile__title-icon">
      <GiFishingHook className="header__logo" />
      <header className="header__title">Hook: The Podcast App</header>
    </div>
  )
}

export default Header;