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
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1430&limit=5&price=549-650`)
            .then(data => this.setState({products: data.data.results}))
    }

    // handleClick = id => 
    //  this.setState(({bookmark}) => ({
    //         bookmark: {...bookmark, [id]: !bookmark[id]}
    //     }))
   
    
    handleClick = id => { 
    const axiosConfig = {
        headers : {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
           }
    }
    if(!this.state.token) {
        axios.post('https://auth.mercadolibre.com.ar/authorization?response_type=token&client_id=6429131972786101', axiosConfig)
    }
    }

    render() {
     return <CardDeals handleClick={this.handleClick} bookmark={this.state.bookmark} products={this.state.products}/>
    }

}

export default CardDealsContainer;