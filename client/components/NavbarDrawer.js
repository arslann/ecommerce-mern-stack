'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';

function NavbarDrawer() {
  const cart = useSelector((state) => state.cart);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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
        <div className="menu px-11 w-1/4 h-full bg-[#333] text-white pt-10">
          {cart.length < 1 ? (
            <h3>No products in the cart</h3>
          ) : (
            <ul>
              {cart.map((product) => {
                return (
                  <li className="w-full h-[110px] flex flex-row flex-nowrap justify-start gap-1 border-t border-gray-600 pt-3 mb-4">
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
                            onClick={handleDecrement}
                            size={12}
                          />
                          <span className="quantity-text">
                            {product.quantity}
                          </span>
                          <BiSolidRightArrow
                            onClick={handleIncrement}
                            size={12}
                          />
                        </div>
                      </div>
                      <div className="absolute right-0 bottom-0">
                        ${product.price}
                      </div>
                      <ImCross className="absolute right-0 top-0" />
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
