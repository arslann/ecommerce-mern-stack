'use client';
import { useGetProductsQuery } from '@/app/store/authService';
import React from 'react';
import ProductCard from './ProductCard';
import CategoryFilters from './CategoryFilters';

function Products({ products }) {
  const { data, error, isLoading, isSuccess } = useGetProductsQuery();

  if (isSuccess) console.log(data);

  return (
    isSuccess && (
      <div className="mt-8 max-w-6xl mx-auto">
        <CategoryFilters data={data} />
        <div className="mt-8 flex w-full flex-wrap gap-4 justify-start items-center md:justify-center lg:justify-start">
          <ProductCard {...data[0]} />
          {data.map((el) => (
            <ProductCard {...el} />
          ))}
        </div>
      </div>
    )
  );
}

export default Products;
