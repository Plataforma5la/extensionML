import React from 'react';
import './cardBanner.css';
import Config from '../../config.js'
import Imagen from '../imagenes/imagen3.jpg'


export default function () {

    return (
        <div className={"CardBanner"} >

            <a href={Config.bannerUrl} target={"_blank"} >

                <img id={'imgB'} src={Imagen} alt='img' />

            </a>

        </div >

    )
}

