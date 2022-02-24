import React from 'react';
import '../stylesheets/Header.css'
import { GiFishingHook } from 'react-icons/gi'
import { useLocation } from 'react-router-dom'

const Header = ({ data }) => {
  const location = useLocation();

  if (location.pathname === '/mylist') {
    return (
      <div className="header__container--results">
        <div className="header__text-container my_list_header">
          <GiFishingHook className="header__logo" />
          <header className="header__title my_list_title">My List</header>
        </div>
      </div>
    )
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