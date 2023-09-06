'use client';
import Carousel from '@/components/Carousel';
import Products from '@/components/Products';
import { useGetProductsQuery } from '@/app/store/authService';
export default function Home() {
  const { data, error, isLoading, isSuccess } = useGetProductsQuery();

  return (
    <div className="container mx-auto font-mono px-4">
      <Carousel />
      {isSuccess && <Products products={data} />}
    </div>
  );
}
