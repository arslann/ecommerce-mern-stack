'use client';
import { useGetProductsQuery } from '@/app/store/authService';
import React, { useEffect } from 'react';

function Products() {
  const { data, error, isLoading, isSuccess } = useGetProductsQuery();

  if (isSuccess) console.log(data);

  return <div>Products</div>;
}

export default Products;
