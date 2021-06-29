import React from 'react';
import logo from './logo.svg';
import './App.css';
import Route from './components/Route';
import AppForm from './containers/AppForm';
import Landing from './containers/Landing';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Landing />
      </Route>
      <Route path="/form">
        <AppForm />
      </Route>
    </div>
  );
}

export default App;
