import React from 'react';
import './cardBanner.css';
import imagen from '../imagenes/imagen3.jpg'



export default function () {

    return (
        <div className={"CardBanner"} >

            <a href={'https://ofertas.mercadolibre.com.mx/espacios-de-diseno#DEAL_ID=MLM107&S=homedesktop&V=5&L=espaciosdediseno&c_id=/home/exhibitors-carousel/element&c_campaign=http://ofertas.mercadolibre.com.mx/espacios-de-diseno#DEAL_ID=MLM107&S=homedesktop&V=5&L=espaciosdediseno&c_element_order=4'} target={"_blank"} >

                <img id={'imgB'} src={imagen} alt='img' />

            </a>

        </div >

    )
}

