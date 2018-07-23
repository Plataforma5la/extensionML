import React from 'react';
import CardDeals from '../components/cardDeals';
import axios from 'axios';


class CardDealsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('https://api.mercadolibre.com/sites/MLA/search?category=MLA1430&limit=5&price=100-1000')
            .then(data => this.setState({products: data.data.results}))
    }

    render() {
     return <CardDeals products={this.state.products}/>
    }

}

export default CardDealsContainer;