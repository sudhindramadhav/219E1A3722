import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="button-container">
      <button 
        className="centered-button" 
        style={{ padding: '10px 20px', height: '40px' }}
      >
        <Link to="/products" className="button-link">View All Products</Link>
      </button>
    </div>
  );
};

export default Home;
