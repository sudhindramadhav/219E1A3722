import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
    backgroundColor: '#f0f0f0', 
  };

  const buttonStyle = {
    padding: '10px 20px',
    height: '40px',
    backgroundColor: '#3498db', 
    color: '#fff', 
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={containerStyle}>
      <div className="button-container">
        <Link to="/products" style={{ textDecoration: 'none' }}>
          <button className="centered-button" style={buttonStyle}>
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
