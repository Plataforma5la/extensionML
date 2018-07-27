import React from 'react';
import CardProduct from '../components/CardProduct.js';
import axios from 'axios';

export default class SingleProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            cardsRemove: {},
            bookmark: {}
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickCruz = this.handleClickCruz.bind(this)
    }
    handleClick = id =>
        this.setState(({ bookmark }) => ({
            bookmark: { ...bookmark, [id]: !bookmark[id] }
        }))

    handleClickCruz = id => {
        const index = this.state.cards.findIndex((card) => card.id === id)
        const newCards = this.state.cards
        newCards[index].show = false
        this.setState({
            cards: newCards
        })
    }

    componentDidMount() {

        axios.get('https://api.mercadolibre.com/sites/MLM/search?category=MLM1051&limit=3')
            .then(result => {
                return result.data.results
            }).then(result => {
                result.forEach((element, index) => {
                    return axios.get('https://api.mercadolibre.com/items/' + element.id).then(result => {
                        result.data.show = true
                        this.setState(({ cards }) => ({
                            cards: [...cards, result.data],
                        })
                        )
                    })

                })

            })

    }

    render() {
        const filteredCards = this.state.cards.filter((card) => card.show)
        return (
            <div>
                <CardProduct handleClick={this.handleClick} bookmark={this.state.bookmark} cards={filteredCards}
                    handleClickCruz={this.handleClickCruz} cardsRemove={this.state.cardsRemove}
                />
            </div>
        )
    }
}