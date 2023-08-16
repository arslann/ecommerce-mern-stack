'use client';
import React, { useState } from 'react';

function CategoryFilters({ data }) {
  const [category, setCategory] = useState('All');
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);

  const handleCategoryChange = (e) => {
    e.preventDefault();

    setCategory(e.target.innerText);
  };

  return (
    <div className="">
      <div className=" flex flex-row justify-between">
        <div>
          <ul className="flex gap-2 font-normal text-md text-gray-500">
            <li>
              <button
                className={
                  'hover:text-yellow-600 ' +
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
                  'hover:text-yellow-600 ' +
                  (category === 'Bags & Backpacks' ? 'text-yellow-600' : '')
                }
                onClick={handleCategoryChange}
              >
                Bags & Backpacks
              </button>
              <span className="pl-3 text-gray-400">|</span>
            </li>
            <li>
              <button
                className={
                  'hover:text-yellow-600 ' +
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
                  'hover:text-yellow-600 ' +
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
                  'hover:text-yellow-600 ' +
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
                  'hover:text-yellow-600 ' +
                  (isFilterActive ? 'text-yellow-600' : '')
                }
                onClick={() => setIsFilterActive(!isFilterActive)}
              >
                Filter
              </button>
              <span className="pl-3 text-gray-400">|</span>
            </li>
            <li>
              <button
                className={
                  'hover:text-yellow-600 ' +
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

      <div className="flex justify-between mt-6">
        <div>
          <h3 className="font-normal text-md text-gray-400">Sort By</h3>
        </div>
        <div>
          <h3>Price</h3>
        </div>
        <div>
          <h3>Color</h3>
        </div>
        <div>
          <h3>Tags</h3>
        </div>
      </div>
    </div>
  );
}

export default CategoryFilters;
