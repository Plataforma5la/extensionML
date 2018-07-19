import React, { Component } from 'react';
import './App.css';
import Products from './browser/components/products'
import Footer from './browser/components/Footer'
import SingleProduct from './browser/containers/SingleProduct'

class App extends Component {
  render() {
    return (
      <div>
        <Products />
        <SingleProduct />
        <Footer />

      </div>
    );
  }
}

export default App;
