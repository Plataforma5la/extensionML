import React, { Component } from 'react';
import './App.css';
import CardDeals from './browser/components/cardDeals'
import Header from './browser/containers/HeaderContainer';
import Footer from './browser/components/Footer'
import SingleProduct from './browser/containers/SingleProduct'

class App extends Component {

  render() {
    return (
        <div>
          <div className={"fixedHeader"}>
           <Header />
          </div>
          <div className={"cardsContainer"}>
           <CardDeals/>
           <SingleProduct />
           <Footer />
          </div>
        </div>          
    );
  }
}

export default App;
