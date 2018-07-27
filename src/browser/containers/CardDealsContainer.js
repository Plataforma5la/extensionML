import React from 'react';
import CardDeals from '../components/cardDeals';
import axios from 'axios';


class CardDealsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            bookmark: {},
            token: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        
        if(window.location.href.includes('#access_token')) {
            this.setState({
                token: window.location.href.split('token=')[1]
            })
        }
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
    
    handleClick = id => {
        
        if(!this.state.token) {
            window.location.href = 'https://auth.mercadolibre.com.ar/authorization?response_type=token&client_id=6429131972786101'
        } else {
            const uri = `https://api.mercadolibre.com/users/me/bookmarks?access_token=${this.state.token}`
            axios({
                method: 'POST',
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                url: uri,
                data: JSON.stringify({"item_id": id})
            })
            .catch(err => {
                    console.log('MESSAGE', err.message)
                })
        }
    }
 
    render() {
        // console.log(this.state.bookmark)
     return <CardDeals handleClick={this.handleClick} bookmark={this.state.bookmark} products={this.state.products}/>
    }

}

export default CardDealsContainer;