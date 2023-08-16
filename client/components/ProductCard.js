import Link from 'next/link';
import React from 'react';

function ProductCard({ image, title, _id, price }) {
  return (
    <Link
      href={`/product/` + _id}
      className="card flex-1 max-w-[480px] min-w-[250px] bg-base-100 shadow-xl sm:max-w-[293px] "
    >
      <figure>
        <img
          src={image[0]}
          alt="Product"
          onMouseOver={(e) => (e.currentTarget.src = image[1])}
          onMouseOut={(e) => (e.currentTarget.src = image[0])}
        />
      </figure>
      <div className="card-body text-gray-500 font-mono font-light line -mb-4 -mt-2">
        <h2 className="">{title}</h2>
        <p>${price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
