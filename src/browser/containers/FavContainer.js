import React from 'react';
import CardDeals from '../components/cardDeals';


class FavContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {

        const { handleClick, bookmark, products, valor, handleValor } = this.props

        return <CardDeals handleClick={handleClick} bookmark={bookmark} products={products} valor={valor} handleValor={handleValor} />
    }

}

export default FavContainer;