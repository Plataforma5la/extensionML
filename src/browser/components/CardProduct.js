import React from 'react';
import './cardProduct.css';

export default function (props) {
    const { cards, bookmark, handleClick } = props

    return (
        <div>
            {cards.map(card => (

                <div className={"Card"} key={card.id} >

                    <div>
                        <div className={'favoritos'}>
                            <div className={'oferta'}>
                                <p className={'titulo'}>OFERTA DEL DIA</p>
                            </div>
                            <div >
                                {(!bookmark[card.id])
                                    ? <button onClick={() => handleClick(card.id)} className={"ui-item_bookmark2"}><svg className={"ui-item_bookmark_icon2"} viewBox="0 0 36 32"><path d="M30.4 16q1.5-1.3 2-2.6t.6-3q0-1.4-.7-3T30.6 5q-1.4-1.2-2.4-1.6T25.8 3q-1.5 0-3 .6t-2.6 2l-2 2-2.3-2q-1.8-1.4-3-2T10.2 3t-2.6.4T5.3 5q-1 .7-1.6 2.4t-.7 3q0 1.4.6 3T5.4 16L18 28l12.4-12zM0 10.5q0-1.7.8-4t2.6-3.8Q5 1.2 6.7.7t3.6-.7q2 0 3.8.8t4 2.7q2-2 4-2.7t4-.8 3.4.6 3.3 2Q34.3 4 35 6.3t1 4-.6 4-3 4L18 32 3.4 18.2Q1 16 .4 13.7T0 10.4z"></path></svg>
                                    </button>
                                    : <button onClick={() => handleClick(card.id)} className={"ui-item_bookmark_added2"}><svg className={"ui-item_bookmark_icon2"} viewBox="0 0 36 32"><path d="M0 10.4q0-1.7.8-4t2.6-3.8Q5 1.2 6.7.6t3.6-.6q2 0 3.8.8t4 2.7q2-2 4-2.7t4-.8 3.4.6 3.3 2Q34.3 4 35 6.3t1 4-.6 4-3 4L18 32 3.4 18.2Q1.8 16.7 1 14.7t-1-4.3z"></path></svg>
                                    </button>
                                }
                            </div>
                        </div>
                        <div className={'contImg'}>
                            <img id={'imgProd'} src={card.pictures[0].url} alt='head' />
                        </div>
                        <div className={'priceCont'}>
                            {(card.shipping.free_shipping)
                                ?
                                <div className={'envioCirculo'} title={'Envío gratis'}>
                                    <svg className={"envio"} viewBox="0 0 39 32"><path d="M21.7 24q.6-1.3 2-2t2.6-.8q1.5 0 2.7.7t2 2h4.4v-7.5L30 10.3h-4.8V6.8h5.6q.5 0 .8.2t.6.5l6.2 7.4q.3 0 .4.3t0 .6v9.6q0 .7-.5 1.2t-1 .4h-6q-.4 1.8-1.8 3t-3.2 1-3.3-1-1.7-3h-6q-.4 1.8-1.8 3t-3.2 1-3.3-1-1.7-3H1.7Q1 27.4.5 27T0 25.6V4q0-1.7 1.2-2.8T4 0h17.2q1.6 0 2.8 1.2T25.2 4v14.3h-3.5V4q0-.2-.2-.4t-.3-.2H4q-.3 0-.4.2t-.2.4v20h2.3q.6-1.3 2-2t2.6-.8q1.5 0 2.7.7t2 2h6.7zm4.6 4q.7 0 1.2-.5t.5-1.2-.5-1.2-1.2-.3-1.2.5-.3 1.3.5 1.2 1.3.5zm-16 0q.7 0 1.2-.5t.5-1.2-.5-1.2-1.2-.3T9 25t-.4 1.3.5 1.2 1.4.5z"></path></svg>
                                </div>

                                : null
                            }
                        </div>
                        <h3 className={'nombre'}>{card.title}
                        </h3>

                        {<p className={"precios"} >

                            <span className={"precio"}>${Math.round(card.price).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                            {(card.original_price)
                                ? <span><span className={"precioAntes"}>{"$" + Math.round((card.original_price)).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                                    <span className={"descuento"}>{Math.round((1 - parseInt(card.price) / parseInt(card.original_price)) * 100)}%OFF</span></span>
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

