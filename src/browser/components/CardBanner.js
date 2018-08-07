import React from 'react';
import './cardBanner.css';
import Config from '../../config.js'


export default function () {

    return (
        <div className={"CardBanner"} >

            <a href={Config.bannerUrl} target={"_blank"} >

                <img id={'imgB'} src={Config.bannerImg} alt='img' />

            </a>

        </div >

    )
}

