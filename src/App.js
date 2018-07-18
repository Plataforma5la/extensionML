import React, { Component } from 'react';
import './App.css';
import CardDeals from './browser/components/cardDeals'

class App extends Component {

  imageClick() {
    console.log('click')
  }

  render() {
    return (
      <div>
        <CardDeals imageClick={this.imageClick}/>
      </div>
    );
  }
}

export default App;
