import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'
import { BsSearch } from 'react-icons/bs';
import { BsBookHalf } from 'react-icons/bs';
import { MdListAlt } from 'react-icons/md';

const Nav = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__li"><Link to="/" className="nav__link"><BsSearch /></Link></li>
          <li className="nav__li"><Link to="/about" className="nav__link"><BsBookHalf /></Link></li>
          <li className="nav__li"><Link to="/mylist" className="nav__link"><MdListAlt /></Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;