import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DefaultState } from '../../redux/reducers/reducer';
import { Bmw } from '../../utils/car/Car';
import { getAccessoriesAvailable } from '../../utils/enums/Accessories';
import { Model } from '../../utils/enums/Model';
import Accessory from '../components/Accessory';
import './Accessories.css';

const Accessories = () => {
    const { model } = useSelector((state: DefaultState) => state.product)

    const getCar = useCallback(() => new Bmw(Model[model!] as unknown as Model), [model]);

    return (
        <div className="accessories">
            {getCar().accessories.map((accessory, index) =>
                <Accessory
                    key={index}
                    label={getAccessoriesAvailable()[accessory].description}
                    price={getAccessoriesAvailable()[accessory].price}
                />)}
        </div>
    );
};

export default Accessories;