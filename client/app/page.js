"use client";
import Carousel from "@/components/Carousel";
import Products from "@/components/Products";
import { useGetProductsQuery } from "@/app/store/authService";
export default function Home() {
  const { data, error, isLoading, isSuccess } = useGetProductsQuery();

  return (
    <>
      <Carousel />

      <div className="container mx-auto font-mono px-4">
        {isLoading && (
          <div className="mt-8 w-full flex justify-center">
            <span className="loading loading-spinner w-16"></span>
          </div>
        )}
        {isSuccess && <Products products={data} />}
      </div>
    </>
  );
}
