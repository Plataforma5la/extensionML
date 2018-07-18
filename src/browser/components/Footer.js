import React from 'react';
import './footer.css';
import imgArg from '../imagenes/bandera_arg.png'
import imgBr from '../imagenes/bandera_br.png'
import imgMx from '../imagenes/bandera_mx.png'

export default () => (

    <div className={"Footer"}>
        <div className={"InnerFooter"}>
            <h3>That is all for now!
 </h3>
            <p className={"secondary-title"}>
                Check back soon for more updates.

</p>
            <div id={'banderas'}>
                <img id={'img'} src={imgArg} alt='arg' />
                <a href={'https://www.mercadolibre.com.ar/'} >

                    <p className={"links"}> Argentina</p>
                </a>
                <img id='img' src={imgBr} alt='br' />
                <a href={'https://www.mercadolivre.com.br/'} >
                    <p className={"links"}> Brasil</p>
                </a>
                <img id='img' src={imgMx} alt='mx' />
                <a href={'https://www.mercadolibre.com.mx/'} >
                    <p className={"links"}> Mexico</p>
                </a>

            </div>
        </div>
    </div>

)