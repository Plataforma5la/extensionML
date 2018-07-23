import React from 'react';
import './cardDeals.css';



export default props => {

    const { products } = props

    return (
    <div className={"card"}>
        <div className={"cardContent"}>
            <p className={"cardHeader"}>Deals</p>
            <div className={"cardItemsContainer"}>
                {products.map(item => {
                    var length = 100;
                    var myString = item.title;
                    var myTruncatedString = () => {
                        if(item.title.length > 100) {
                        return myString.substring(0, length)+"..."}
                        else {
                        return myString
                        }
                    }
                return(
                    <div key={item.id} className={"itemCardContainer"}>
                        <div className={"itemCard"}>
                            <a target={"_blank"} href={item.permalink}><img alt={""} src={item.thumbnail} title={item.title} className={'itemImg'}/></a>
                        <div className={"itemDetail"}>
                            <div className={"itemPriceRow"}>
                                <p className={"primaryTitle"}>
                                    <span className={"itemPrecio"}>{"$"+item.price}</span>
                                    </p>
                                    {(item.original_price)
                                        ?<span><span className={"itemDiscount"}>{(Math.floor(((item.original_price-item.price)/item.original_price)*100)).toFixed(0)+"% OFF"}</span><span className={"itemPrecioOld itemPrecioOld:hover"}>{"$"+item.original_price}</span></span>
                                        :null
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
        </div>
    </div>
    )
}