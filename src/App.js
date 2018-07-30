import React, { Component } from 'react';
import './App.css';
import CardDealsContainer from './browser/containers/CardDealsContainer'
import Header from './browser/containers/HeaderContainer';
import Footer from './browser/components/Footer'
import SingleProduct from './browser/containers/SingleProduct'
import axios from 'axios';
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
  }

  componentDidMount() {

    if (window.location.href.includes('#access_token')) {
      this.setState({
        token: window.location.href.split('token=')[1]
      })
    }
<<<<<<< HEAD
    axios.get('/back/products')
        .then(data => this.setState({products: data.data.results}))
        .then(() => {
            if(this.state.token){
            axios.get(`/back/products/${this.state.token}`)
                .then(data => {
                    var arr = data.data
                    var obj = {}
                    for(var i = 0; i < arr.length; i++){
                        obj[arr[i].item_id] = arr[i].bookmarked_date;
                    }
                    return obj;
                })
                .then(obj => (
                    this.setState({
                        bookmark: obj
                    })
                ))
            }}
        )
    }
||||||| merged common ancestors
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1430&limit=5&price=549-650`)
        .then(data => this.setState({products: data.data.results}))
        .then(() => {
            if(this.state.token){
            axios.get(`https://api.mercadolibre.com/users/me/bookmarks?access_token=${this.state.token}`)
                .then(data => {
                    var arr = data.data
                    var obj = {}
                    for(var i = 0; i < arr.length; i++){
                        obj[arr[i].item_id] = arr[i].bookmarked_date;
                    }
                    return obj;
                })
                .then(obj => (
                    this.setState({
                        bookmark: obj
                    })
                ))
            }}
        )
    }
=======
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1430&limit=5&price=549-650`)
      .then(data => this.setState({ products: data.data.results }))
      .then(() => {
        if (this.state.token) {
          axios.get(`https://api.mercadolibre.com/users/me/bookmarks?access_token=${this.state.token}`)
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
>>>>>>> origin/2-header

  handleValor(id) {
    this.setState({
      valor: id
    })
  }

  handleClick = id => {
<<<<<<< HEAD
        
    if(!this.state.token) {
        window.location.href = 'https://auth.mercadolibre.com.ar/authorization?response_type=token&client_id=6429131972786101'
    } else if(this.state.bookmark[id]) {
        axios({
          method: 'DELETE',
          url: `/back/bookmarks/${id}/${this.state.token}`,
        })
        .then(() => {
          var bookmark = {...this.state.bookmark}
          delete bookmark[id]
          this.setState({bookmark})
        })
||||||| merged common ancestors
        
    if(!this.state.token) {
        window.location.href = 'https://auth.mercadolibre.com.ar/authorization?response_type=token&client_id=6429131972786101'
    } else if(this.state.bookmark[id]) {
        console.log('hace este else if', `https://api.mercadolibre.com/users/me/bookmarks/${id}?access_token=${this.state.token}`)
        axios({
          method: 'DELETE',
          // headers: {"Content-Type": "application/x-www-form-urlencoded"},
          url: `https://api.mercadolibre.com/users/me/bookmarks/${id}?access_token=${this.state.token}`,
        })
=======

    if (!this.state.token) {
      window.location.href = 'https://auth.mercadolibre.com.ar/authorization?response_type=token&client_id=6429131972786101'
    } else if (this.state.bookmark[id]) {
      console.log('hace este else if', `https://api.mercadolibre.com/users/me/bookmarks/${id}?access_token=${this.state.token}`)
      axios({
        method: 'DELETE',
        // headers: {"Content-Type": "application/x-www-form-urlencoded"},
        url: `https://api.mercadolibre.com/users/me/bookmarks/${id}?access_token=${this.state.token}`,
      })
>>>>>>> origin/2-header
        .catch(err => {
          console.log('MESSAGE', err)
<<<<<<< HEAD
      })
    } else {
        axios({
            method: 'POST',
            url: `/back/bookmarks/${id}/${this.state.token}`,
||||||| merged common ancestors
      })
    } else {
        axios({
            method: 'POST',
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            url: `https://api.mercadolibre.com/users/me/bookmarks?access_token=${this.state.token}`,
            data: JSON.stringify({"item_id": id})
=======
>>>>>>> origin/2-header
        })
    } else {
      axios({
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: `https://api.mercadolibre.com/users/me/bookmarks?access_token=${this.state.token}`,
        data: JSON.stringify({ "item_id": id })
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
        
        {this.state.products.length === 0?<div className="preCargar"><ClipLoader color={"#fff159"} loading={ true }/></div>:<div>{this.state.valor === 'home' ? <div className={"cardsContainer"}>
          <CardDealsContainer handleClick={this.handleClick} bookmark={this.state.bookmark} products={this.state.products} />
          <SingleProduct />
        </div> : null}</div> }
        
        <Footer />
      </div>
    );
  }
}

export default App;
