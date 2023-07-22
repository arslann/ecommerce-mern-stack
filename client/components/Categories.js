import React from 'react';
import './Categories.css';
import Link from 'next/link';

import { BsHandbagFill, BsHeadphones, BsPlus } from 'react-icons/bs';
import { PiPottedPlantDuotone } from 'react-icons/pi';
import { BiChair } from 'react-icons/bi';

function Categories() {
  return (
    <div className="Category_Menu">
      <h6 className="font-bol cursor-pointer hover:text-black">Categories</h6>

      <div className="sub_menu">
        <div className="menu-item">
          <Link href="/">
            <BsHandbagFill size="70" className="m-auto text-black mb-3" /> Bags
            & Backpacks
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/">
            <PiPottedPlantDuotone
              size="70"
              className="m-auto text-black mb-3"
            />
            Decoration
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/">
            <BsHeadphones size="70" className="m-auto text-black mb-3" />
            Essentials
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/">
            <BiChair size="70" className="m-auto text-black mb-3" /> Interior
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/">
            <BsPlus size="70" className="m-auto text-black mb-3" /> Shop All
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
