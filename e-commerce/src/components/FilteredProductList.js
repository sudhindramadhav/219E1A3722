import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductListByProductName = ({ productName }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByProductName = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${productName}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products by product name:', error);
      }
    };

    fetchProductsByProductName();
  }, [productName]);

  return (
    <div>
      <h2>Products List for Product Name: {productName}</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>Name:</strong> {product.productName}<br />
            <strong>Price:</strong> ${product.price}<br />
            <strong>Rating:</strong> {product.rating}<br />
            <strong>Discount:</strong> {product.discount}%<br />
            <strong>Availability:</strong> {product.availability}<br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListByProductName;
