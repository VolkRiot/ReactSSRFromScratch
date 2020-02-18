import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="navbar container">
    <section className="navbar-section">
      <span className="navbar-brand mr-2">FavMovies</span>
    </section>
    <ul className="tab tab-block">
      <li className="tab-item">
        <Link to="/" className="active">
          Home
        </Link>
      </li>
    </ul>
  </header>
);

export default Navbar;