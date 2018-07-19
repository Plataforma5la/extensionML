import React, { Component } from 'react';
import './App.css';
import CardDeals from './browser/components/cardDeals'
import Header from './browser/components/HeaderContainer';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <CardDeals/>
      </div>
    );
  }
}

export default App;
