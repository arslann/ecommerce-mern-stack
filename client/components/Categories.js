import React, { useState } from "react";
import "./Categories.css";
import Link from "next/link";

import { BsHandbagFill, BsHeadphones, BsPlus } from "react-icons/bs";
import { PiPottedPlantDuotone } from "react-icons/pi";
import { BiChair } from "react-icons/bi";

function Categories() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Category_Menu ">
      <label className="btn btn-circle swap swap-rotate sm:hidden bg-transparent border-none  hover:bg-transparent">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          onClick={toggleMenu}
          checked={isMenuOpen}
          readOnly={true}
        />

        {/* hamburger icon */}
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        {/* close icon */}
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>

      <h6 className="font-bol cursor-pointer hover:text-black max-sm:hidden">
        Categories
      </h6>

      <div className={`sub_menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-item">
          <Link href="/?category=backpack" onClick={toggleMenu}>
            <BsHandbagFill
              size={70}
              className="m-auto text-black mb-3 max-sm:scale-50 max-md:scale-75"
            />{" "}
            Bags & Backpacks
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/?category=decoration" onClick={toggleMenu}>
            <PiPottedPlantDuotone
              size="70"
              className="m-auto text-black mb-3 max-sm:scale-50 max-md:scale-75"
            />
            Decoration
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/?category=essentials" onClick={toggleMenu}>
            <BsHeadphones
              size="70"
              className="m-auto text-black mb-3 max-sm:scale-50 max-md:scale-75"
            />
            Essentials
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/?category=interior" onClick={toggleMenu}>
            <BiChair
              size="70"
              className="m-auto text-black mb-3 max-sm:scale-50 max-md:scale-75"
            />{" "}
            Interior
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/" onClick={toggleMenu}>
            <BsPlus
              size="70"
              className="m-auto text-black mb-3 max-sm:scale-50 max-md:scale-75"
            />{" "}
            Shop All
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
