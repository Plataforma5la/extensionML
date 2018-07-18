import React, { Component } from 'react';
import './App.css';
import Footer from './browser/components/Footer'
import CardDeals from './browser/components/cardDeals'
import SingleProduct from './browser/containers/SingleProduct'

class App extends Component {

  render() {
    return (
      <div>
        <CardDeals/>
        <SingleProduct />
        <Footer />
      </div>
    );
  }
}

export default App;
