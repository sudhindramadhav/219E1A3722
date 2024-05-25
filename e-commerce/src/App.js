import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={ProductList} />
        {/* Add more routes as needed */}
      </div>
    </Router>
  );
};

export default App;
