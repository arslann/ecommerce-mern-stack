"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
function CategoryFilters({
  searchText,
  filterProductsByCategory,
  filterProductsBySearchText,
}) {
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);

  const [category, setCategory] = useState("all");

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("category") || "all";

  useEffect(() => {
    if (searchQuery && searchQuery.length > 1 && searchQuery !== "all") {
      setCategory(searchQuery.toLowerCase());
    } else {
      setCategory("all");
    }
    filterProductsByCategory(searchQuery.toLowerCase());
  }, [searchQuery]);

  const handleCategoryChange = (e) => {
    e.preventDefault();

    const newCategory = e.target.innerText.toLowerCase();
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
      <div className=" flex flex-row  justify-between">
        <div>
          <ul className="hidden sm:flex gap-2 font-normal text-md text-gray-500">
            <li key={"all"}>
              <button
                className={
                  "hover:text-yellow-600 transition-color duration-200 ease-in " +
                  (category === "all" ? "text-yellow-600" : "")
                }
                onClick={handleCategoryChange}
              >
                All
              </button>
              <span className="pl-3 text-gray-400">|</span>
            </li>
            <li key={"backpack"} className="inline-block">
              <button
                className={
                  "hover:text-yellow-600 transition-color duration-200 ease-in " +
                  (category === "backpack" ? "text-yellow-600" : "")
                }
                onClick={handleCategoryChange}
              >
                Backpack
              </button>
              <span className="pl-3 text-gray-400">|</span>
            </li>
            <li key={"decoration"}>
              <button
                className={
                  "hover:text-yellow-600 transition-color duration-200 ease-in " +
                  (category === "decoration" ? "text-yellow-600" : "")
                }
                onClick={handleCategoryChange}
              >
                Decoration
              </button>
              <span className="pl-3 text-gray-400">|</span>
            </li>
            <li key={"essentials"}>
              <button
                className={
                  "hover:text-yellow-600 transition-color duration-200 ease-in " +
                  (category === "essentials" ? "text-yellow-600" : "")
                }
                onClick={handleCategoryChange}
              >
                Essentials
              </button>
              <span className="pl-3 text-gray-400">|</span>
            </li>
            <li key={"Interior"}>
              <button
                className={
                  "hover:text-yellow-600 transition-color duration-200 ease-in " +
                  (category === "interior" ? "text-yellow-600" : "")
                }
                onClick={handleCategoryChange}
              >
                Interior
              </button>
            </li>
          </ul>
        </div>

        <div className="max-sm:w-full">
          <ul className="block max-sm:w-full sm:flex gap-3 font-normal text-md text-gray-500">
            <li key={"search"}>
              <button
                className={
                  "hover:text-yellow-600 transition-color duration-200 ease-in max-sm:btn max-sm:w-full " +
                  (isSearchBarActive ? "text-yellow-600" : "")
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
          isSearchBarActive ? "opacity-100 block" : "opacity-0 hidden"
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
