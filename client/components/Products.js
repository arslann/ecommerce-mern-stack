'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CategoryFilters from './CategoryFilters';

function Products({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  console.log(products);
  // Callback function to filter products based on the selected category
  const handleFilterProducts = (selectedCategory) => {
    if (selectedCategory === 'All') {
      // If 'All' category is selected, display all products
      setFilteredProducts(products);
    } else {
      // Filter products based on the selected category
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="mt-8 max-w-6xl mx-auto">
      <CategoryFilters filterProducts={handleFilterProducts} />
      <div className="mt-8 flex w-full flex-wrap gap-4 justify-start items-center md:justify-center lg:justify-start">
        {filteredProducts.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

export default Products;
