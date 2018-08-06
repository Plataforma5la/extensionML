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
            // .then(result => console.log('anda', result))
            .then(result => {
                result.forEach((element, index) => {

                    return Axios.get(`/back/product/${element.id}`).then(result => {

                        this.setState(({ cards }) => ({
                            cards: [...cards, result.data],
                        })
                        )
                    })

                })

            })

    }

    render() {

        return (
            <div>
                <CardProduct handleClick={this.props.handleClick} bookmark={this.props.bookmark} cards={this.state.cards}

                />
            </div>
        )
    }
}