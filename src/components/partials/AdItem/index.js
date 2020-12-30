import React from 'react';
import {Link} from 'react-router-dom';
import {ItemArea} from './styled';

export default ({data, disabled}) => {

    let price = '';

    if(data.priceNegotiable){
        price = "Price Negotiable";
    }else{
        price = "R$ "+parseFloat(data.price).toFixed(2);
    }
    return (
        <ItemArea className="ad-item">
            <Link to={`/ad/item/${data.id}`}>
                <div className="ad-image">
                    <img src={data.images[0]} alt="Item image"/>
                </div>
                <div className="ad-title">{data.title}</div>
                <div className="ad-price">{price}</div>
            </Link>
        </ItemArea>
    );
}