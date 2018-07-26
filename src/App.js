import React, { Component } from 'react';
import './App.css';
import CardDeals from './browser/components/cardDeals'
import Header from './browser/containers/HeaderContainer';
import Footer from './browser/components/Footer'
import SingleProduct from './browser/containers/SingleProduct'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valor: 'home'
    }
    this.handleValor = this.handleValor.bind(this);
  }
  handleValor(id) {
    this.setState({
      valor: id
    })
  }
  render() {
    return (
      <div>
        <div className={"fixedHeader"}>
          {console.log(this.state)}
          <Header handleValor={this.handleValor} valor={this.state.valor} />
        </div>
        {this.state.valor === 'home' ? <div className={"cardsContainer"}>
          <CardDeals />
          <SingleProduct />
        </div> : null}
        <Footer />
      </div>
    );
  }
}

export default App;
