import React from 'react';
import CardProduct from '../components/CardProduct.js';
import axios from 'axios';

export default class SingleProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            bookmark: {}
        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick = id =>
        this.setState(({ bookmark }) => ({
            bookmark: { ...bookmark, [id]: !bookmark[id] }
        }))

    componentDidMount() {

        axios.get('https://api.mercadolibre.com/sites/MLM/search?category=MLM1051&limit=3')
            .then(result => {
                return result.data.results
            }).then(result => {
                result.forEach((element, index) => {
                    return axios.get('https://api.mercadolibre.com/items/' + element.id).then(result => {

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
                <CardProduct handleClick={this.handleClick} bookmark={this.state.bookmark} cards={this.state.cards}

                />
            </div>
        )
    }
}