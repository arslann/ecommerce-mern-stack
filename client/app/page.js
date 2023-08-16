import Carousel from '@/components/Carousel';
import Products from '@/components/Products';

export default function Home() {
  return (
    <div className="container mx-auto font-mono px-4">
      <Carousel />
      <Products />
    </div>
  );
}
