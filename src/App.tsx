import React from 'react';
import './App.css';
import Route from './components/Route';
import ProductPage from './containers/ProductPage';
import Landing from './containers/Landing';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Landing />
      </Route>
      <Route path="/product">
        <ProductPage />
      </Route>
    </div>
  );
}

export default App;
