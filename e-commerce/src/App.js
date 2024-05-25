import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={ProductList} />
      </Routes>
    </Router>
  );
};

export default App;
