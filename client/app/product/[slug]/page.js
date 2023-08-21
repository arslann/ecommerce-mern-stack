'use client';
import { useGetProductQuery } from '@/app/store/authService';
import Breadcrumbs from '@/components/Breadcrumbs';
import React from 'react';

export default function page({ params }) {
  // fetch single product by id
  const { data, error, isLoading, isSuccess } = useGetProductQuery(params.slug);

  if (isSuccess) console.log(data);

  if (isLoading) return <h1>Loading....</h1>;

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto w-full pt-6 pb-12">
        <Breadcrumbs category={data.category} productName={data.title} />
      </div>
    </div>
  );
}
