import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DefaultState } from '../../redux/reducers/reducer';
import { Bmw } from '../../utils/car/Car';
import { getImageByCar } from '../../utils/components/getImageByCar';
import { getAccessoriesAvailable } from '../../utils/enums/Accessories';
import { Color, getColorAvailable } from '../../utils/enums/Color';
import { Model } from '../../utils/enums/Model';
import CarColor from '../components/CarColor';
import './Summary.css';

const Summary = () => {
    const { color, model = Model.i3 | Model.i8, accessories } = useSelector((state: DefaultState) => state.product)
    const getCar = useCallback(() => new Bmw(Model[model] as unknown as Model), [model]);

    const checkColor = (color: Color, model: Model) => {
        // If the user skip the color page we are safe (should be better a default in the enum...)
        if (!color) {
            return model === Model.i3 ? Color.White : Color.GreyMetallic;
        }
        return color;
    }

    const colorGuard = getColorAvailable()[checkColor(color, model)];
    return (
        <div className="summary">

            <div className="line" />

            <p className="title section"> MODEL </p>
            {getImageByCar(color, model, { width: '700px', height: '350px' })}
            <h1>{`BMW ${model}`}</h1>
            <p className="description"> {getCar().description} </p>

            <div className="line" />

            <p className="title section"> COLOR </p>
            <div className="color section">
                <CarColor possibleColor={checkColor(color, model)} showTooltip={false} model={model} />
                <p className="description-color">{`${colorGuard.description} $ ${colorGuard.price}`}</p>
            </div>

            <div className="line" />

            <p className="title section"> ACCESSORIES </p>
            <div className="accessories list">
                <ul>{accessories && accessories.length
                    ? accessories.map((el, index) => <li key={index}>{getAccessoriesAvailable()[el.accessory].description}</li>)
                    : <li>"No Accessories selected;"</li>}
                </ul>
            </div>
        </div>
    );
};

export default Summary;