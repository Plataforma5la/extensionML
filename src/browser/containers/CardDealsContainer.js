import React from 'react';
import CardDeals from '../components/cardDeals';
import axios from 'axios';


class CardDealsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            bookmark: {}
        }
    
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/sites/MLM/search?category=MLM1430&limit=5&price=549-650`)
            .then(data => this.setState({products: data.data.results}))
    }

    handleClick = id => 
     this.setState(({bookmark}) => ({
            bookmark: {...bookmark, [id]: !bookmark[id]}
        }))
    

    render() {
     return <CardDeals handleClick={this.handleClick} bookmark={this.state.bookmark} products={this.state.products}/>
    }

}

export default CardDealsContainer;