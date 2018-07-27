import React from 'react';
import './cardProduct.css';
import arrow from '../imagenes/arrow.png'
var arrowStyle = {
    maxWidth: '16px',
    maxHeight: '16px',
    float: 'right',
    marginLeft: '111px',

};
export default function (props) {
    const { cards, bookmark, handleClick, handleClickCruz } = props

    return (
        <div>
            {cards.map(card => (

                <div className={"Card"} key={card.id} >

                    <div>

                        <div className={'oferta'}>
                            <p className={'titulo'}>OFERTA DEL DIA</p>
                        </div>
                        {(!bookmark[card.id])
                            ? <button onClick={() => handleClick(card.id)} className={"ui-item_bookmark2"}><svg className={"ui-item_bookmark_icon2"} viewBox="0 0 36 32"><path d="M30.4 16q1.5-1.3 2-2.6t.6-3q0-1.4-.7-3T30.6 5q-1.4-1.2-2.4-1.6T25.8 3q-1.5 0-3 .6t-2.6 2l-2 2-2.3-2q-1.8-1.4-3-2T10.2 3t-2.6.4T5.3 5q-1 .7-1.6 2.4t-.7 3q0 1.4.6 3T5.4 16L18 28l12.4-12zM0 10.5q0-1.7.8-4t2.6-3.8Q5 1.2 6.7.7t3.6-.7q2 0 3.8.8t4 2.7q2-2 4-2.7t4-.8 3.4.6 3.3 2Q34.3 4 35 6.3t1 4-.6 4-3 4L18 32 3.4 18.2Q1 16 .4 13.7T0 10.4z"></path></svg>
                            </button>
                            : <button onClick={() => handleClick(card.id)} className={"ui-item_bookmark_added2"}><svg className={"ui-item_bookmark_icon2"} viewBox="0 0 36 32"><path d="M0 10.4q0-1.7.8-4t2.6-3.8Q5 1.2 6.7.6t3.6-.6q2 0 3.8.8t4 2.7q2-2 4-2.7t4-.8 3.4.6 3.3 2Q34.3 4 35 6.3t1 4-.6 4-3 4L18 32 3.4 18.2Q1.8 16.7 1 14.7t-1-4.3z"></path></svg>
                            </button>
                        }
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
                            <a href={card.permalink} id={'linkText'} target={"_blank"} > Ver en Mercado Libre   </a>
                        </div>
                    </div>
                </div >
            ))}
        </div >
    )
}

