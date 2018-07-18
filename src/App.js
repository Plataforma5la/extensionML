import React, { Component } from 'react';
import './App.css';
import Footer from './browser/components/Footer'
import CardDeals from './browser/components/cardDeals'

class App extends Component {

  render() {
    return (
      <div>
        <CardDeals/>
        <Footer />
      </div>
    );
  }
}

export default App;
