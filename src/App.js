import React, { Component } from 'react';
import './App.css';
import Products from './browser/components/products'
import SingleProduct from './browser/containers/SingleProduct'

class App extends Component {
  render() {
    return (
      <div>
        <Products />
        <SingleProduct />
      </div>
    );
  }
}

export default App;
