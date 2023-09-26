import React from "react";

import Image from "next/image";

import interior from "../public/interior.jpg";
import backpack from "../public/backpack.jpg";
import pot from "../public/pot.jpg";
import Link from "next/link";

function Carousel() {
  return (
    <div className="carousel w-screen sm:w-full max-h-[520px] font-mono -z-10  no-scrollbar ">
      <div id="slide1" className="carousel-item relative w-full ">
        <Link
          href="/?category=Interior"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold max-sm:text-3xl text-6xl text-white max-sm:hover:text-4xl hover:text-7xl z-10  animate-pulse"
        >
          Interior
        </Link>
        <Image
          src={interior}
          alt="slider"
          className="object-cover w-full h-[100%] object-center brightness-50 "
        />
        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle max-sm:btn-sm">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle max-sm:btn-sm">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Link
          href="/?category=backpack"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:text-3xl max-sm:hover:text-4xl font-bold text-6xl text-white  hover:text-7xl z-10 animate-pulse"
        >
          Backpacks
        </Link>
        <Image
          src={backpack}
          alt="slider"
          className="object-cover w-full h-[100%] object-center brightness-50"
        />
        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle max-sm:btn-sm">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle max-sm:btn-sm">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Link
          href="/?category=decoration"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:text-3xl max-sm:hover:text-4xl font-bold text-6xl text-white  hover:text-7xl z-10 animate-pulse"
        >
          Decoration
        </Link>
        <Image
          src={pot}
          alt="slider"
          className="object-cover w-full h-[100%] object-center brightness-50"
        />
        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle max-sm:btn-sm">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle max-sm:btn-sm">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
