import React from 'react';
import './cardDeals.css';



export default props => {

    const { products, bookmark, bookmarkState, handleClick, valor, fav, access } = props
    var prod

    (valor === 'carrito')
        ? prod = fav
        : prod = products



    return (
        <div className={"card"}>
            <div className={"cardContent"}>
                {(valor === 'carrito')
                    ? <p className={"cardHeader"}>Favoritos</p>
                    : <p className={"cardHeader"}>Ofertas de la semana</p>
                }

                <div className={"cardItemsContainer"}>
                    {(!prod) ? <div> </div> : prod.map(item => {
                        var length = 100;
                        var myString = item.title;
                        var myTruncatedString = () => {
                            if (item.title.length > 50) {
                                return myString.substring(0, length) + "..."
                            }
                            else {
                                return myString
                            }
                        }
                        console.log(item.title.length)
                        return (
                            <div key={item.id} className={"itemCardContainer"}>
                                <div className={"itemCard"}>
                                    <a target={"_blank"} href={item.permalink}><img alt={""} src={item.thumbnail} title={item.title} className={'itemImg'} /></a>
                                    <div className={"itemDetail"}>
                                        <div className={"itemPriceRow"}>
                                            <span className={"primaryTitle"}>
                                                <span className={"itemPrecio"}>{"$" + (item.price).toFixed(0)}</span>
                                                {(valor === 'carrito')
                                                    ? <div> {<button onClick={() => bookmarkState(item.id)} className={"eliminar"} >Eliminar </button>}
                                                    </div>
                                                    : <span>{(access === "unauthorized")
                                                    ?<a href={'http://localhost:3001/back/auth/mercadolibre'} target={'_blank'}>
                                                    <button className={"ui-item_bookmark"}><svg className={"ui-item_bookmark_icon"} viewBox="0 0 36 32"><path d="M30.4 16q1.5-1.3 2-2.6t.6-3q0-1.4-.7-3T30.6 5q-1.4-1.2-2.4-1.6T25.8 3q-1.5 0-3 .6t-2.6 2l-2 2-2.3-2q-1.8-1.4-3-2T10.2 3t-2.6.4T5.3 5q-1 .7-1.6 2.4t-.7 3q0 1.4.6 3T5.4 16L18 28l12.4-12zM0 10.5q0-1.7.8-4t2.6-3.8Q5 1.2 6.7.7t3.6-.7q2 0 3.8.8t4 2.7q2-2 4-2.7t4-.8 3.4.6 3.3 2Q34.3 4 35 6.3t1 4-.6 4-3 4L18 32 3.4 18.2Q1 16 .4 13.7T0 10.4z"></path></svg>
                                                    </button></a>
                                                    :<span>{(!bookmark[item.id])
                                                        ? <button onClick={() => handleClick(item.id)} className={"ui-item_bookmark"}><svg className={"ui-item_bookmark_icon"} viewBox="0 0 36 32"><path d="M30.4 16q1.5-1.3 2-2.6t.6-3q0-1.4-.7-3T30.6 5q-1.4-1.2-2.4-1.6T25.8 3q-1.5 0-3 .6t-2.6 2l-2 2-2.3-2q-1.8-1.4-3-2T10.2 3t-2.6.4T5.3 5q-1 .7-1.6 2.4t-.7 3q0 1.4.6 3T5.4 16L18 28l12.4-12zM0 10.5q0-1.7.8-4t2.6-3.8Q5 1.2 6.7.7t3.6-.7q2 0 3.8.8t4 2.7q2-2 4-2.7t4-.8 3.4.6 3.3 2Q34.3 4 35 6.3t1 4-.6 4-3 4L18 32 3.4 18.2Q1 16 .4 13.7T0 10.4z"></path></svg>
                                                        </button>
                                                        : <button onClick={() => handleClick(item.id)} className={"ui-item_bookmark_added"}><svg className={"ui-item_bookmark_icon"} viewBox="0 0 36 32"><path d="M0 10.4q0-1.7.8-4t2.6-3.8Q5 1.2 6.7.6t3.6-.6q2 0 3.8.8t4 2.7q2-2 4-2.7t4-.8 3.4.6 3.3 2Q34.3 4 35 6.3t1 4-.6 4-3 4L18 32 3.4 18.2Q1.8 16.7 1 14.7t-1-4.3z"></path></svg>
                                                        </button>
                                                    }</span>}
                                                    </span>}
                                                
                                            </span>
                                            {(item.original_price)
                                                ? <span><span className={"itemDiscount"}>{(Math.floor(((item.original_price - item.price) / item.original_price) * 100)).toFixed(0) + "% OFF"}</span><span className={"itemPrecioOld itemPrecioOld:hover"}>{"$" + (item.original_price).toFixed(0)}</span></span>
                                                : null
                                            }
                                        </div>
                                        <div className={"itemTitleRow"}>
                                            <a target={"_blank"} href={item.permalink}><h4 className={"itemTitle"}>{myTruncatedString()}</h4></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={"cardFooter"}>
                    <div className={"more-offers-button"}>
                        <a href={'https://ofertas.mercadolibre.com.ar/ofertas-de-la-semana'} target={"_blank"}><button className={"ui-button"}>Ver todas las ofertas</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
