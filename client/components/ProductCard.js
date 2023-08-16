import React from 'react';

function ProductCard({ image, title }) {
  return (
    <div className="card flex-1 max-w-[480px] min-w-[250px] bg-base-100 shadow-xl sm:max-w-[300px]">
      <figure>
        <img src={image[0]} alt="Product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}

export default ProductCard;
