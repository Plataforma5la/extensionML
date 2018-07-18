import React, { Component } from 'react';
import './App.css';
import Products from './browser/components/products'
import Footer from './browser/components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Products />
        <Footer />
      </div>
    );
  }
}

export default App;
