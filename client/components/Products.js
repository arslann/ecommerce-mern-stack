"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import CategoryFilters from "./CategoryFilters";

function Products({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");

  // This function filters products based on category
  const filterProductsByCategory = (category) => {
    setCategory(category);
    const filtered = products.filter((product) => {
      return (
        category === "all" ||
        product.category.toLowerCase() === category.toLowerCase()
      );
    });

    setFilteredProducts(filtered);
  };

  // This function filters products based on search text
  const filterProductsBySearchText = (text) => {
    setSearchText(text);

    const filtered = products.filter((product) => {
      return (
        product.title.toLowerCase().includes(text.toLowerCase()) &&
        (category === "all"
          ? true
          : product.category.toLowerCase() === category.toLowerCase())
      );
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="mt-8 max-w-6xl mx-auto ">
      <CategoryFilters
        searchText={searchText}
        filterProductsByCategory={filterProductsByCategory}
        filterProductsBySearchText={filterProductsBySearchText}
      />
      <div className="mt-8 flex w-full flex-wrap gap-4 justify-start items-center md:justify-center lg:justify-start">
        {filteredProducts.map((el) => (
          <ProductCard {...el} key={el.title} />
        ))}
      </div>
    </div>
  );
}

export default Products;
