import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Products List</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {products.map(product => (
          <li key={product.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <strong>Name:</strong> {product.productName}<br />
                <strong>Price:</strong> ${product.price}<br />
                <strong>Rating:</strong> {product.rating}<br />
                <strong>Discount:</strong> {product.discount}%<br />
                <strong>Availability:</strong> {product.availability}<br />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
