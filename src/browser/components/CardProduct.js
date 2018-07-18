import React from 'react';
import './cardProduct.css';

export default function (props) {

    return (
        <div>
            {props.cards.map(card => (
                <div className={"Card"} key={card.id} >
                    <div className={"CardHeader"}>
                        <div className={'oferta'}>
                            <p className={'titulo'}>OFERTA DEL DIA</p>
                        </div>
                        <div>
                            <img id={'img'} src={card.imagen} alt='head' />


                        </div>
                        <h3>{card.nombre}
                        </h3>
                        <p className={"secondary-title"}>
                            {card.descripcion}-{card.precio}

                        </p>
                        <div id={"contenedor"} >
                            <p> <a href='https://www.mercadolibre.com.ar/' id={'linkText'} target={"_blank"}>Ver en Mercado Libre</a></p>
                        </div>

                    </div>
                </div >

            ))}

        </div >

    )

}