import React from 'react';
// import '../styles/Header.css'
import '../stylesheets/Header.css'
import { GiFishingHook } from 'react-icons/gi'

const Header = ({ data }) => {
  if(data.length !== 0) {

  }
  return (
    <div className={data.length !== 0 ? "header__container--results" : "header__container"}>
      <div className="header__text-container">
        <GiFishingHook className="header__logo" />
        <header className="header__title">Hook: the Podcast App</header>
      </div>
    </div>
  )
}

export default Header;