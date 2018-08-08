import React from 'react';
import CardProduct from '../components/CardProduct.js';
import Axios from '../../axiosdef';

export default class SingleProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],

        }


    }

    componentDidMount() {

        Axios.get('/back/singleproducts')
            .then(result => {
                return result.data
            })
            .then(result => {
                return Promise.all(result.map(element => Axios.get(`/back/product/${element.id}`)))
            })
            .then(array => {
                this.setState({
                    cards: array.map(element => element.data)
                })
            })

    }

    render() {

        return (
            <div>
                <CardProduct handleClick={this.props.handleClick} bookmark={this.props.bookmark} cards={this.state.cards}
                    access={this.props.access}

                />
            </div>
        )
    }
}