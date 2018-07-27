import React from 'react';
import CardDeals from '../components/cardDeals';
import axios from 'axios';

const fav = [
    {
        id: 'MLM609373763',
        permalink: 'https://articulo.mercadolibre.com.mx/MLM-609373763-mochila-antirrobo-viaje-bolsas-gps-tracker-impermeable-e-_JM',
        title: ' Mochila Antirrobo Viaje Bolsas Gps Tracker Impermeable /e',
        thumbnail: 'http://mlm-s2-p.mlstatic.com/678569-MLM27822635689_072018-I.jpg',
        price: 550,
        original_price: null,
    },
    {
        id: 'MLM549626037',
        permalink: "https://articulo.mercadolibre.com.mx/MLM-549626037-sensfoot-zapatos-chef-cocina-restaurante-doctores-_JM",
        title: ' Sensfoot Zapatos Chef, Cocina, Restaurante, Doctores',
        thumbnail: "http://mlm-s2-p.mlstatic.com/907578-MLM27318532954_052018-I.jpg",
        price:
            750,
        original_price: null,
    },
    {
        id: 'MLM600959359',
        permalink: "https://articulo.mercadolibre.com.mx/MLM-600959359-corset-reductor-faja-cinturilla-colombiana-lenceria-_JM",
        title: ' Corset Reductor Faja Cinturilla Colombiana Lenceria',
        thumbnail: "http://mlm-s2-p.mlstatic.com/813084-MLM27151074556_042018-I.jpg",
        price:
            245,
        original_price: null,
    }
]

class FavContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return <CardDeals favProducts={fav} />
    }

}

export default FavContainer;