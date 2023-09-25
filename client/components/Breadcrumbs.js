import Link from 'next/link';
import React from 'react';

function Breadcrumbs({ category, productName }) {
  return (
    <div className="text-sm breadcrumbs max-sm:hidden">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">{category}</Link>
        </li>
        <li>{productName}</li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
