import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <ul className="navbar-nav mr-auto">
        <Link to="/starships" className="nav-link">
          Starships
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
