"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  initializeCartFromLocalStorage,
} from "@/app/store/cartSlice";

function NavbarDrawer() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  // Initialize the cart state from local storage when the component mounts
  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  useEffect(() => {
    dispatch(initializeCartFromLocalStorage());
  }, []);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div className="drawer drawer-end text-[#686868]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button cursor-pointer hover:text-black"
        >
          Cart
        </label>
      </div>
      <div className="drawer-side z-20 ">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="menu w-2/3 md:w-1/2 lg:w-1/3  h-full bg-[#333] text-white pt-10">
          {cart.length < 1 ? (
            <h3>No products in the cart</h3>
          ) : (
            <ul>
              {cart.map((product) => {
                return (
                  <li className="max-w-[90%] h-[110px] flex flex-row flex-nowrap justify-start gap-1 border-t border-gray-600 pt-3 mb-4 m-auto">
                    <div className="w-20 h-full relative">
                      <Link href={`/product/` + product.id}>
                        <Image src={product.image} fill={true} />
                      </Link>
                    </div>
                    <div className="flex flex-col justify-start items-start relative w-full">
                      <h3>{product.title}</h3>
                      <div className="w-full flex space-x-4 text-gray-400 items-center">
                        <label>Qty</label>
                        <div className="flex flex-row items-center gap-2">
                          <BiSolidLeftArrow
                            onClick={() => handleDecrement(product.id)}
                            size={12}
                          />
                          <span className="quantity-text">
                            {product.quantity}
                          </span>
                          <BiSolidRightArrow
                            onClick={() => handleIncrement(product.id)}
                            size={12}
                          />
                        </div>
                      </div>
                      <div className="absolute right-0 bottom-0">
                        ${product.price}
                      </div>
                      <ImCross
                        className="absolute right-0 top-0"
                        onClick={() => handleRemove(product.id)}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarDrawer;
