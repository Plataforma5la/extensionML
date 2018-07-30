import React from 'react';
import './footer.css';
import carrito from '../imagenes/carrito.png'
import bag from '../imagenes/bag.png'
import tag from '../imagenes/tag.png'

export default () => (

    <div className={"Footer"}>
        <div className={"InnerFooter"}>
            <h3>Conocé nuestras ofertas!
 </h3>
            <h4 id={"secondary-title"} >
                Visitanos y descrubrí nuestros productos.
                <div id={'border'}></div>
            </h4>
            <div className={"InnerFooter"} id={'carrito'}>
                <div className={'flex'}>
                    <a href={'https://www.mercadolibre.com/jms/mlm/lgz/msl/login/H4sIAAAAAAAEAzWMOw7DMAxD76I5n91jLxKoNpMatWJDUoEUQe9eZ8hI8vGdVOqW98W_DRQIRys5ZqeBWmFfq8qSUx-k9Mqy445yIawscKhROC_RhvRAP12qlYuhQ1vt4eXeLMxzXaHONgk0cqolPxVTrDLJcW9jwlh4NAjvTL-hi8wXV45vCq4f_P57Q0aktAAAAA/user'} target={'_blank'} >
                        <span className={'carritoIcon'}
                        />
                        <p className={"linkCarrito"}> Ver el carrito</p>
                    </a>
                </div>
                <div className={'flex'}>
                    <a href={'https://www.mercadolibre.com.mx/mercadopuntos/descuentosexclusivos'} target={'_blank'}>
                        <span className={'descuentosMP'} />
                        <p className={"links"}> Descuentos Mercado Puntos</p>
                    </a>
                </div>
                <div className={'flex'}>
                    <a href={'https://ofertas.mercadolibre.com.mx/ofertas-de-la-semana'} target={'_blank'}>
                        <span className={'ofertasSemana'} />
                        <p className={"links"}> Más ofertas</p>
                    </a>
                </div>
            </div>
        </div>
    </div>

)