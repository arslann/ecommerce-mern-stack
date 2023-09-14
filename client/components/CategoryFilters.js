'use client';
import React, { useState } from 'react';

function CategoryFilters({
  searchText,
  filterProductsByCategory,
  filterProductsBySearchText,
}) {
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const [category, setCategory] = useState('All');

  const handleCategoryChange = (e) => {
    e.preventDefault();

    const newCategory = e.target.innerText;
    setCategory(newCategory);

    // Call the callback function to filter products by category
    filterProductsByCategory(newCategory);
  };

  const handleSearchTextChange = (e) => {
    const newText = e.target.value;
    console.log(newText);

    // Call the callback function to filter products by search text
    filterProductsBySearchText(newText);
  };

  return (
    <div className="">
      <div className=" flex flex-row justify-between">
        <div>
          <ul className="flex gap-2 font-normal text-md text-gray-500">
            <li>
              <button
                className={
                  'hover:text-yellow-600 transition-color duration-200 ease-in ' +
                  (category === 'All' ? 'text-yellow-600' : '')
                }
                onClick={handleCategoryChange}
              >
                All
              </button>
              <span className="pl-3 text-gray-400">|</span>
            </li>
            <li className="inline-block">
              <button
                className={
                  'hover:text-yellow-600 transition-color duration-200 ease-in ' +
                  (category === 'Bags & Backpacks' ? 'text-yellow-600' : '')
                }
                onClick={handleCategoryChange}
              >
                Backpack
              </button>
              <span className="pl-3 text-gray-400">|</span>
            </li>
            <li>
              <button
                className={
                  'hover:text-yellow-600 transition-color duration-200 ease-in ' +
                  (category === 'Decoration' ? 'text-yellow-600' : '')
                }
                onClick={handleCategoryChange}
              >
                Decoration
              </button>
              <span className="pl-3 text-gray-400">|</span>
            </li>
            <li>
              <button
                className={
                  'hover:text-yellow-600 transition-color duration-200 ease-in ' +
                  (category === 'Essentials' ? 'text-yellow-600' : '')
                }
                onClick={handleCategoryChange}
              >
                Essentials
              </button>
              <span className="pl-3 text-gray-400">|</span>
            </li>
            <li>
              <button
                className={
                  'hover:text-yellow-600 transition-color duration-200 ease-in ' +
                  (category === 'Interior' ? 'text-yellow-600' : '')
                }
                onClick={handleCategoryChange}
              >
                Interior
              </button>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex gap-3 font-normal text-md text-gray-500">
            <li>
              <button
                className={
                  'hover:text-yellow-600 transition-color duration-200 ease-in ' +
                  (isSearchBarActive ? 'text-yellow-600' : '')
                }
                onClick={() => setIsSearchBarActive(!isSearchBarActive)}
              >
                Search
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          isSearchBarActive ? 'opacity-100 block' : 'opacity-0 hidden'
        } transition-all duration-300 ease-in mt-6 `}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={handleSearchTextChange}
          className="bg-gray-100 rounded-md w-full p-4 outline-none text-xl"
        />
      </div>
    </div>
  );
}

export default CategoryFilters;
