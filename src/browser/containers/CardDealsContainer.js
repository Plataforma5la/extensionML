import React from 'react';
import CardDeals from '../components/cardDeals';
import axios from 'axios';


class CardDealsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            bookmark: false
        }
    
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/sites/MLM/search?category=MLM1430&limit=5&price=100-1000`)
            .then(data => this.setState({products: data.data.results}))
    }

    handleClick() {
        this.setState(prevState => ({
            bookmark: !prevState.bookmark
        }))
    }

    render() {
     return <CardDeals handleClick={this.handleClick} bookmark={this.state.bookmark} products={this.state.products}/>
    }

}

export default CardDealsContainer;