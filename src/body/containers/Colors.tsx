import React, { Fragment, ReactElement, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import i3 from '../../asset/i3.jpg';
import i8 from '../../asset/i8.jpg';
import { DefaultState } from '../../redux/reducers/reducer';
import { Bmw } from '../../utils/car/Car';
import { CarImage } from '../../utils/components/CarImage';
import { Color } from '../../utils/enums/Color';
import { Model } from '../../utils/enums/Model';
import CarColor from '../components/CarColor';
import './Colors.css';

const Colors = () => {

    const { color: actualColor, model } = useSelector((state: DefaultState) => state.product)
    const [color, setColor] = useState<Color>(Model[model!] === Model[Model.i8] ? Color.White : Color.GreyMetallic);

    const getCar = useCallback(() => new Bmw(Model[model!] as unknown as Model), [model]);

    useEffect(() => {
        if (actualColor) {
            setColor(actualColor);
        }
    }, [actualColor])

    return (
        <div className="colors">
            {getCorrectImage(color, model)}
            <div className="container-color">
                {getCar().color.map((color, index) => <CarColor key={index} possibleColor={color} />)}
            </div>
        </div>
    );
};

const styleImage: React.CSSProperties = {
    width: '850px',
    height: '400px',
}

const getCorrectImage = (color: Color | undefined, model: Model | undefined): ReactElement => {
    if (color !== undefined && model !== undefined) {
        const modelParsed = Model[Model[model] as unknown as number];

        switch (Color[color]) {
            case Color[Color.GreyMetallic]:
                return <CarImage style={styleImage} image={modelParsed === Model[Model.i8] ? i8 : i3} />
            case Color[Color.MineralGrey]:
                return <CarImage style={styleImage} image={modelParsed === Model[Model.i8] ? i8 : i3} />
            case Color[Color.OrangeMetallic]:
                return <CarImage style={styleImage} image={modelParsed === Model[Model.i8] ? i8 : i3} />
            case Color[Color.White]:
                return <CarImage style={styleImage} image={modelParsed === Model[Model.i8] ? i8 : i3} />
            case Color[Color.WhitePerlMetallic]:
                return <CarImage style={styleImage} image={modelParsed === Model[Model.i8] ? i8 : i3} />
            default: return <CarImage style={styleImage} image={modelParsed === Model[Model.i8] ? i8 : i3} />
        }
    }
    return <Fragment />
}

export default Colors;