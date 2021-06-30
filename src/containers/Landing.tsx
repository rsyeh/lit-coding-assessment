import React from 'react';
import './styles.css';

function Landing() {

  return (
    <div className="Landing-page">
      <header className="header">
      <h1>
        Lonsdale Investment Technology: Coding Assessment
      </h1>
      <a className="app-form-link" href="/products">
        <button className="Landing-nav-button">
          Go to product page
        </button>
      </a>
      </header>
    </div>
  );
}

export default Landing;
