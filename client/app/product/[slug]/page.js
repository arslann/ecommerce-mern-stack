'use client';
import { useGetProductQuery } from '@/app/store/authService';
import Breadcrumbs from '@/components/Breadcrumbs';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '@/app/store/cartSlice';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';

import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi';

export default function page({ params }) {
  const [isHovered, setisHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  // fetch single product by id
  const { data, error, isLoading, isSuccess } = useGetProductQuery(params.slug);

  // if (isSuccess) console.log(data);

  if (isLoading) return <h1>Loading....</h1>;

  const handleAddToCart = () => {
    const newItem = { ...data };
    console.log(addToCart);
    dispatch(addToCart(newItem));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-[#eee]">
      <div className="container mx-auto w-full pt-6 pb-12">
        <Breadcrumbs category={data.category} productName={data.title} />
        <div className="flex flex-nowrap w-full justify-center gap-6">
          <div
            className="h-auto w-2/5"
            onMouseOver={(e) => setisHovered(true)}
            onMouseOut={(e) => setisHovered(false)}
          >
            <Carousel
              showArrows={true}
              showThumbs={false}
              showIndicators={false}
              infiniteLoop={true}
              showStatus={false}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <MdOutlineKeyboardArrowLeft
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className={
                      'absolute z-[2] w-8 h-8 cursor-pointer top-1/2 left-4 font-thin text-gray-500 hover:text-yellow-600 transition-all duration-200 ease-in ' +
                      (isHovered ? ' opacity-100' : ' opacity-0')
                    }
                  />
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <MdOutlineKeyboardArrowRight
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className={
                      'absolute z-[2] w-8 h-8  cursor-pointer top-1/2 right-4 font-thin text-gray-500 hover:text-yellow-600 transition-all duration-200 ease-in' +
                      (isHovered ? ' opacity-100' : ' opacity-0')
                    }
                  />
                )
              }
            >
              <div className="">
                <img src={data.image[0]} alt="Image 1" />
              </div>
              <div>
                <img src={data.image[1]} alt="Image 2" />
              </div>
            </Carousel>
          </div>
          <div className="flex justify-evenly flex-col w-1/3 max-w-sm ">
            <div>
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <p className="text-xl text-yellow-500 font-semibold mt-4">
                ${data.price}
              </p>
              <p className="mt-6 font-thin text-md text-gray-700">
                {data.description}
              </p>
            </div>
            <div className="">
              <div className="w-full flex justify-between mb-6 py-4 border-b border-black">
                <label>Quantity</label>
                <div className="flex flex-row items-center gap-3">
                  <BiSolidLeftArrow onClick={handleDecrement} />
                  <span className="quantity-text">{quantity}</span>
                  <BiSolidRightArrow onClick={handleIncrement} />
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="btn rounded-none bg-black text-white w-full hover:bg-gray-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
