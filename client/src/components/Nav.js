import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Nav.css'
import { BsSearch } from 'react-icons/bs';
import { BsBookHalf } from 'react-icons/bs';
import { MdListAlt } from 'react-icons/md';

const Nav = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__li"><Link to="/" className="nav__link"><BsSearch className="nav__icon" />Search</Link></li>
          <li className="nav__li"><Link to="/about" className="nav__link"><BsBookHalf className="nav__icon" />About</Link></li>
          <li className="nav__li"><Link to="/mylist" className="nav__link"><MdListAlt className="nav__icon" />Listen Later</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;