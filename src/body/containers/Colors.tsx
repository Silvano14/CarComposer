import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DefaultState } from '../../redux/reducers/reducer';
import { Bmw } from '../../utils/car/Car';
import { getImageByCar } from '../../utils/car/getImageByCar';
import { Color } from '../../utils/enums/Color';
import { Model } from '../../utils/enums/Model';
import CarColor from '../components/CarColor';
import './Colors.css';

const Colors = () => {
    const { color: actualColor, model } = useSelector((state: DefaultState) => state.product)
    const [color, setColor] = useState<Color>();

    const getCar = useCallback(() => new Bmw(Model[model!] as unknown as Model), [model]);
    console.log(getCar().color)


    useEffect(() => {
        if (actualColor !== undefined) {
            setColor(actualColor);
            console.log(actualColor)
        }
    }, [actualColor])

    return (
        <div className="colors">
            {getImageByCar(color, model, { width: '850px', height: '400px', })}
            <div className="container-color">
                {getCar().color.map((color, index) => <CarColor key={index} possibleColor={color} model={model!} />)}
            </div>
        </div>
    );
};

export default Colors;