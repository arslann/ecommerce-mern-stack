'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { useCreateOrderMutation } from '../store/authService';

function page() {
  const cart = useSelector((state) => state.cart);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingPrice, setSippingPrice] = useState(10);

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

  const [createOrder] = useCreateOrderMutation();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the order data
    const orderData = {
      userId: 'user_id_here', // Replace with the actual user ID
      products: cart.map((product) => ({
        product: product.id, // Assuming 'id' is the product ID
        quantity: product.quantity,
      })),
      name: formData.firstName,
      lastname: formData.lastName,
      address:
        formData.streetAddress +
        ' ' +
        formData.townCity +
        ' ' +
        formData.countryRegion,
      phone: formData.phone,
      // You can set 'status' and 'date' in your server logic
    };

    try {
      const { data } = await createOrder(orderData);
      console.log('Response before unwrap:', data);

      // Optionally, you can redirect the user to a confirmation page or perform other actions
    } catch (error) {
      // Handle any errors that occur during order creation
      console.error('Error creating order:', error);
    }
  };

  if (cart.length < 1) {
    return (
      <div className="container mx-auto font-mono px-4 mt-8 flex items-center justify-center gap-6">
        <h1 className="font-extrabold text-xl">No products in the cart</h1>
      </div>
    );
  }

  useEffect(() => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    setSubTotal(total);
    setTotal(total + shippingPrice);
  }, []);

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
              required
              className="border border-gray-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              required
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
              required
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
              required
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
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white text-lg btn hover:bg-gray-800 "
          >
            Place Order
          </button>
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
        <table className="bg-gray-100 w-1/2 border border-gray-600">
          <tr className="border-b border-gray-500 p-4">
            <td className="p-4">Subtotal</td>
            <td className="px-4">${subTotal}</td>
          </tr>
          <tr className="flex flex-col">
            <td className="p-4">Shipping</td>
            <td className="px-4 pb-4">
              <input
                type="radio"
                name="shipping_option"
                id="standard_shipping"
                value="10.00"
                checked
              />
              <label className="ml-2" for="standard_shipping ">
                Standard: $10.00
              </label>
            </td>
          </tr>
          <tr className="border-gray-500 border-t">
            <td className="p-4">Total</td>
            <td className="px-4">${total}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default page;
