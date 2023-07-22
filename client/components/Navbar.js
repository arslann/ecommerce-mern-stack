import React from 'react';
import Link from 'next/link';
import LoginModal from './LoginModel';
import NavbarDrawer from './NavbarDrawer';
import Categories from './Categories';

function Navbar() {
  return (
    <nav className="navbar navbar-center w-full font-mono justify-around mt-3 text-[#686868] ">
      <div className="">
        <Categories />
        <div className="dropdown dropdown-hover ml-5">
          <h6 tabIndex={0} className="cursor-pointer hover:text-black">
            Pages
          </h6>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 w-48 shadow float-left bg-black text-white -ml-5"
          >
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Link
          href="/"
          className="font-bold text-2xl tracking-widest font-serif text-black"
        >
          LuxeLair
        </Link>
      </div>

      <div className="flex gap-6">
        <LoginModal />
        <NavbarDrawer />
      </div>
    </nav>
  );
}

export default Navbar;
