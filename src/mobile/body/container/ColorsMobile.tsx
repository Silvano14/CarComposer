import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CarColor from '../../../body/components/CarColor';
import { DefaultState } from '../../../redux/reducers/reducer';
import { Bmw } from '../../../utils/car/Car';
import { getImageByCar } from '../../../utils/components/getImageByCar';
import { Color } from '../../../utils/enums/Color';
import { Model } from '../../../utils/enums/Model';

const Colors = () => {
    const { color: actualColor, model } = useSelector((state: DefaultState) => state.product)
    const [color, setColor] = useState<Color>();

    const getCar = useCallback(() => new Bmw(Model[model!] as unknown as Model), [model]);


    useEffect(() => {
        if (actualColor !== undefined) {
            setColor(actualColor);
        }
    }, [actualColor])

    return (
        <div className="colors" style={{ marginTop: '30px' }}>
            {getImageByCar(color, model, { width: '300px', height: '200px', })}
            <div className="container-color" style={{ margin: '30px' }}>
                {getCar().color.map((color, index) => <CarColor key={index} possibleColor={color} model={model!} />)}
            </div>
        </div>
    );
};

export default Colors;