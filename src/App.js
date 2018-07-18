import React, { Component } from 'react';
import './App.css';
import Footer from './browser/components/Footer'
import CardDeals from './browser/components/cardDeals'
import SingleProduct from './browser/containers/SingleProduct'
import Header from './browser/containers/HeaderContainer';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <CardDeals/>
        <SingleProduct />
        <Footer />
      </div>
    );
  }
}

export default App;
