import React, { Component } from 'react';
import './App.css';
import Products from './browser/components/products'
import Header from './browser/components/HeaderContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Products />
      </div>
    );
  }
}

export default App;
