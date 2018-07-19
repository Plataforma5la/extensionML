import React from 'react';
import CardProduct from '../components/CardProduct.js';

export default class SingleProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    nombre: 'Headphones',
                    id: 1,
                    descripcion: 'Headset con Mic y Volumen',
                    precio: '$400',
                    imagen: 'https://images-na.ssl-images-amazon.com/images/I/71W16uSrFLL._SL1300_.jpg'
                },
                {
                    nombre: 'Parlantes',
                    id: 2,
                    descripcion: 'USB-Powered para Computadora',
                    precio: '$300',
                    imagen: 'https://images-na.ssl-images-amazon.com/images/I/91CSt5TF8UL._SL1500_.jpg'
                },
                {
                    nombre: 'Cargador Portable',
                    id: 3,
                    descripcion: 'Ultra High - Power Bank ',
                    precio: '$200',
                    imagen: 'https://images-na.ssl-images-amazon.com/images/I/61z7FKblfkL._SL1500_.jpg'
                }

            ]
        }


    }

    render() {

        return (
            <div>
                <CardProduct cards={this.state.cards} />
            </div>
        )
    }
}