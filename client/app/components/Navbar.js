import React from 'react';
import Link from 'next/link';
import LoginModal from './LoginModel';
import NavbarDrawer from './NavbarDrawer';

function Navbar() {
  return (
    <nav className="navbar self-center w-full font-mono justify-between px-32 pt-3">
      <div className="links">
        <h6>Categories</h6>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn m-1">
            Pages
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box float-left"
          >
            <li>
              <a></a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Link
          href="/"
          className="font-bold text-2xl tracking-widest font-serif"
        >
          LuxeLair
        </Link>
      </div>

      <div className="flex">
        <LoginModal />
        <NavbarDrawer />
      </div>
    </nav>
  );
}

export default Navbar;
