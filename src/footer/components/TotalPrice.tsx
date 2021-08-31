import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DefaultState } from '../../redux/reducers/reducer';
import './TotalPrice.css';

const TotalPrice = () => {
    const { price, model } = useSelector((state: DefaultState) => state.product);
    const [currentPrice, setCurrentPrice] = useState<number>(0);

    useEffect(() => {
        if (price)
            setCurrentPrice(price);
        if (!model)
            setCurrentPrice(0);
    }, [model, price]);

    return (<div className="total-price">
        <p> Total </p>
        <p className="price">{`$ ${currentPrice}`}</p>
    </div>)
}


export default TotalPrice;