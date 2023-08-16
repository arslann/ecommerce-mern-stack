'use client';
import { useGetProductsQuery } from '@/app/store/authService';
import React from 'react';
import ProductCard from './ProductCard';
import CategoryFilters from './CategoryFilters';

function Products() {
  const { data, error, isLoading, isSuccess } = useGetProductsQuery();

  if (isSuccess) console.log(data);

  return (
    isSuccess && (
      <div className="mt-8 max-w-6xl container mx-auto">
        <CategoryFilters data={data} />
        <div className="mt-8 flex w-full flex-wrap container gap-4 justify-start">
          <ProductCard {...data[0]} />
          <ProductCard {...data[0]} />
          <ProductCard {...data[0]} />
          <ProductCard {...data[0]} />
          <ProductCard {...data[0]} />
          <ProductCard {...data[0]} />
        </div>
      </div>
    )
  );
}

export default Products;
