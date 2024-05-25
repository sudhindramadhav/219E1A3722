import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Product from './components/Product'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <div>
        <h1>Hello World</h1>
        <Link to="/products">
          <button>Go to Products</button>
        </Link>
        <Routes>
          <Route path="/products" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
