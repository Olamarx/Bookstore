import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

function Nav() {
  return (
    <nav className={style.nav}>
      <div>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(Link) => (Link.isActive ? 'active' : 'none')}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={(Link) => (Link.isActive ? 'active' : 'none')}
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
      <CgProfile />
    </nav>
  );
}

export default Nav;
