'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

function page() {
  const cart = useSelector((state) => state.cart);

  // Initialize state for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    countryRegion: '',
    streetAddress: '',
    townCity: '',
    zipCode: '',
    phone: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here, like sending it to a server or processing it.
    console.log('Form Data:', formData);
  };

  if (cart.length < 1) {
    return (
      <div className="container mx-auto font-mono px-4 mt-8 flex items-center justify-center gap-6">
        <h1 className="font-extrabold text-xl">No products in the cart</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto font-mono px-4 mt-8 flex flex-row gap-6">
      <div className="flex-[1]">
        <h1 className="font-bold text-xl mb-4">Billing details</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-row gap-3">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="border border-gray-300 px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="border border-gray-300 px-2 py-1"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="countryRegion">Country / Region</label>
            <input
              type="text"
              id="countryRegion"
              name="countryRegion"
              value={formData.countryRegion}
              onChange={handleInputChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="townCity">Town / City</label>
            <input
              type="text"
              id="townCity"
              name="townCity"
              value={formData.townCity}
              onChange={handleInputChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="zipCode">ZIP Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="flex-[1]">
        <h1 className="font-bold text-xl mb-4">Your order</h1>
        <ul>
          {cart.map((product) => {
            return (
              <li className="max-w-80%] h-[90px] flex flex-row flex-nowrap justify-start gap-1 border-b border-gray-200 pb-3 mb-4 m-auto">
                <div className="w-20 h-full relative">
                  <Link href={`/product/` + product.id}>
                    <Image src={product.image} fill={true} />
                  </Link>
                </div>
                <div className="flex flex-col justify-start items-start relative w-full ml-2">
                  <h3>
                    {product.title}{' '}
                    <span className="font-bold">X{product.quantity}</span>
                  </h3>

                  <div className="absolute right-0 top-0">${product.price}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default page;
