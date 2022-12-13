import logo from './logo.svg';
import './styles.css';
import Listing from './components/Listing';
import items from './data/etsy.json';
import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="item-list">
        <Listing items={items} />
      </div>
    </div>
  );
}

export default App;
