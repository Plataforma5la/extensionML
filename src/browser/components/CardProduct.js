import React from 'react';
import './cardProduct.css';
import arrow from '../imagenes/arrow.png'
var arrowStyle = {
    maxWidth: '17px',
    maxHeight: '17px',
    float: 'right',
    marginLeft: '111px',

};
export default function (props) {

    return (
        <div>
            {props.cards.map(card => (
                <div className={"Card"} key={card.id} >
                    <div>
                        <div className={'oferta'}>
                            <p className={'titulo'}>OFERTA DEL DIA</p>
                        </div>
                        <div>
                            <img id={'img'} src={card.pictures[0].url} alt='head' />
                        </div>
                        <h3 className={'nombre'}>{card.title}
                        </h3>
                        {<p className={"precios"}>
                            <span className={"precio"}>${card.price}</span>
                            {(card.original_price)
                                ? <span><span className={"precioAntes"}>${card.original_price}</span><span className={"descuento"}>{Math.round((1 - parseInt(card.price) / parseInt(card.original_price)) * 100)}%OFF</span></span>
                                : null}

                        </p>}

                        <div className={"contenedor"} >
                            <a href={card.permalink} id={'linkText'} target={"_blank"} > Ver en Mercado Libre  <img src={arrow} alt='arr' style={arrowStyle} /> </a>
                        </div>
                    </div>
                </div >
            ))}
        </div >
    )
}