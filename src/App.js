import React, { Component } from 'react';
import './App.css';
import CardDealsContainer from './browser/containers/CardDealsContainer'
import Header from './browser/containers/HeaderContainer';
import Footer from './browser/components/Footer'
import SingleProduct from './browser/containers/SingleProduct'
import FavContainer from './browser/containers/FavContainer';
import Axios from './axiosdef';
import { ClipLoader } from 'react-spinners'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valor: 'home',
      bookmark: {},
      token: '',
      products: [],

    }
    this.handleValor = this.handleValor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.bookmarkState = this.bookmarkState.bind(this);
  }

  componentDidMount() {
    if (window.location.href.includes('#access_token')) {
      this.setState({
        token: window.location.href.split('token=')[1]
      })
    }
    Axios.get('/back/products')
      .then(data => this.setState({ products: data.data.results }))
      .then(() => {
        if (this.state.token) {
          Axios.get(`/back/products/${this.state.token}`)
            .then(data => {
              var arr = data.data
              var obj = {}
              for (var i = 0; i < arr.length; i++) {
                obj[arr[i].item_id] = arr[i].bookmarked_date;
              }
              return obj;
            })
            .then(obj => (
              this.setState({
                bookmark: obj
              })
            ))
        }
      }
      )
  }

  handleValor(id) {
    this.setState({
      valor: id
    })
  }

  bookmarkState(id) {
    if (this.state.bookmark[id]) {
      Axios({
        method: 'DELETE',
        url: `/back/bookmarks/${id}/${this.state.token}`,
      })
        .then(() => {

          var bookmark = { ...this.state.bookmark }
          delete bookmark[id]
          this.setState({ bookmark })
        }).then(() => {

        }
        )
        .catch(err => {
          console.log('MESSAGE', err)
        })
    }


  }

  handleClick = id => {

    if (!this.state.token) {
      window.location.href = 'https://auth.mercadolibre.com.ar/authorization?response_type=token&client_id=6429131972786101'
    } else if (this.state.bookmark[id]) {
      Axios({
        method: 'DELETE',
        url: `/back/bookmarks/${id}/${this.state.token}`,
      })
        .then(() => {

          var bookmark = { ...this.state.bookmark }
          delete bookmark[id]
          this.setState({ bookmark })
        })
        .catch(err => {
          console.log('MESSAGE', err)
        })
    } else {
      Axios({
        method: 'POST',
        url: `/back/bookmarks/${id}/${this.state.token}`,
      })
        .then(data => {
          var bookmark = { ...this.state.bookmark }
          bookmark[data.data.item_id] = data.data.bookmarked_date;
          this.setState({ bookmark })
        })
        .catch(err => {
          console.log('MESSAGE', err.message)
        })
    }
  }

  render() {

    return (
      <div>
        <div className={"fixedHeader"}>
          <Header handleValor={this.handleValor} valor={this.state.valor} />
        </div>
        {this.state.products.length === 0 ? <div className="preCargar"><ClipLoader color={"#fff159"} loading={true} /></div> : <div>{this.state.valor === 'home' ? <div className={"cardsContainer"}>
          <CardDealsContainer handleClick={this.handleClick} bookmark={this.state.bookmark} products={this.state.products} />
          <SingleProduct handleClick={this.handleClick} bookmark={this.state.bookmark} />
        </div> : <FavContainer bookmarkState={this.bookmarkState} bookmark={this.state.bookmark} products={this.state.products} valor={this.state.valor} handleValor={this.handleValor} token={this.state.token} />}<Footer /></div>}


      </div>
    );
  }
}

export default App;
