import React from 'react';
import CardDeals from '../components/cardDeals';


class CardDealsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { handleClick, bookmark, products, valor } = this.props
        return <CardDeals handleClick={handleClick} bookmark={bookmark} products={products} valor={valor} />
    }
}

export default CardDealsContainer;