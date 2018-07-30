import React, { Component } from 'react';
import './App.css';
import CardDealsContainer from './browser/containers/CardDealsContainer'
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
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/2-header
    );
  }
}

export default App;
