import React, { Component } from 'react';
import './App.css';
import CardDealsContainer from './browser/containers/CardDealsContainer'
import Header from './browser/containers/HeaderContainer';
import Footer from './browser/components/Footer'
import SingleProduct from './browser/containers/SingleProduct'
import FavContainer from './browser/containers/FavContainer';
import Axios from './axiosdef';
import { ClipLoader } from 'react-spinners';
import CardBanner from './browser/components/CardBanner';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valor: 'home',
      bookmark: {},
      token: '',
      products: [],
      access: ''

    }
    this.handleValor = this.handleValor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.bookmarkState = this.bookmarkState.bind(this);
  }



  componentDidMount() {

    Axios.get('/back/auth/ml/access')
      .then(data => {
        if (data.data === 'unauthorized') {
          this.setState({
            access: 'unauthorized'
          })
        } else {
          localStorage.setItem('access-token', data.data)
        }
      })
      .catch(err => console.log(err))


    var token = localStorage.getItem('access-token')

    Axios.get('/back/products')
      .then(data => this.setState({ products: data.data.results }))
      .then(() => {
        if (this.state.access !== 'unauthorized') {
          Axios.get(`/back/products/${token}`)
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
            .catch(err => console.log(err))
        }
      })
  }

  bookmarkState(id) {

    var tokenClickFav = localStorage.getItem('access-token')

    if (this.state.bookmark[id]) {
      Axios({
        method: 'DELETE',
        url: `/back/bookmarks/${id}/${tokenClickFav}`,
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

  handleValor(id) {
    this.setState({
      valor: id
    })
  }


  handleClick = id => {

    Axios.get('/back/auth/mercadolibre')

    var tokenClick = localStorage.getItem('access-token')

    if (this.state.bookmark[id]) {
      Axios({
        method: 'DELETE',
        url: `/back/bookmarks/${id}/${tokenClick}`,
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
        url: `/back/bookmarks/${id}/${tokenClick}`,
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
          <CardDealsContainer handleClick={this.handleClick} bookmark={this.state.bookmark} products={this.state.products} access={this.state.access} />
          <SingleProduct handleClick={this.handleClick} bookmark={this.state.bookmark} />
          <CardBanner />
        </div> : <FavContainer bookmarkState={this.bookmarkState} bookmark={this.state.bookmark} products={this.state.products} valor={this.state.valor} handleValor={this.handleValor} token={this.state.token} />}<Footer /></div>}
      </div>
    );
  }
}

export default App;
