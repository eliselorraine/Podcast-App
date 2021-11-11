import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

const Nav = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul className="nav__menu">
          <li><Link to="/" className="nav__link">Home</Link></li>
          <li><Link to="/about" className="nav__link">About</Link></li>
          <li><Link to="/mylist" className="nav__link">My Listening List</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;