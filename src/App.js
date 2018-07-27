import React, { Component } from 'react';
import './App.css';
import CardDealsContainer from './browser/containers/CardDealsContainer'
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
           <CardDealsContainer/>
           <SingleProduct />
           <Footer />
          </div>
        </div>          
    );
  }
}

export default App;
