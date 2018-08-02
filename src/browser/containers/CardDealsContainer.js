import React from 'react';
import CardDeals from '../components/cardDeals';


class CardDealsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
    const { handleClick, bookmark, products, access } = this.props
     return <CardDeals handleClick={handleClick} bookmark={bookmark} products={products} access={access}/>
    }

}

export default CardDealsContainer;