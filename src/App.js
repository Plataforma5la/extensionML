import React, { Component } from 'react';
import './App.css';
import CardDeals from './browser/components/cardDeals'
import Header from './browser/components/HeaderContainer';
import Footer from './browser/components/Footer'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <CardDeals/>
        <Footer />
      </div>
    );
  }
}

export default App;
