import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <li>
      <strong>{product.name}</strong> - ${product.price}
    </li>
  );
};

export default ProductItem;
