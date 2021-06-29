import React from 'react';
import './styles.css';

function ProductPage() {
  return (
    <div className="Products-page">
      <div className="App-header">
        <h1>Products Page</h1>
      </div>
      <div className="Products-content">
        <h2>Products List</h2>
        <div className="Products-add">
          <button>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;