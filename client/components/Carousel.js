import React from 'react';

import Image from 'next/image';

import interior from '../public/interior.jpg';
import backpack from '../public/backpack.jpg';
import pot from '../public/pot.jpg';
import Link from 'next/link';

function Carousel() {
  return (
    <div className="carousel w-full max-h-[640px]  font-mono -z-10 no-scrollbar ">
      <div id="slide1" className="carousel-item relative w-full ">
        <Link
          href="/category/decoration"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-6xl text-white  hover:text-7xl z-10  animate-pulse"
        >
          Interior
        </Link>
        <Image
          src={interior}
          className="object-cover w-full h-[100%] object-center brightness-50 "
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Link
          href="/category/decoration"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-6xl text-white  hover:text-7xl z-10 animate-pulse"
        >
          Backpacks
        </Link>
        <Image
          src={backpack}
          className="object-cover w-full h-[100%] object-center brightness-50"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Link
          href="/category/decoration"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-6xl text-white  hover:text-7xl z-10 animate-pulse"
        >
          Decoration
        </Link>
        <Image
          src={pot}
          className="object-cover w-full h-[100%] object-center brightness-50"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;