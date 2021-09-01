import React, { ReactElement } from "react";
import { CarImage } from "../components/CarImage";
import { Color } from "../enums/Color";
import { Model } from "../enums/Model";

import i3Black from '../../asset/i3-black.jpg';
import i3Orange from '../../asset/i3-orange.jpg';
import i3 from '../../asset/i3.jpg';
import i8White from '../../asset/i8-white.jpg';
import i8 from '../../asset/i8.jpg';

export const getImageByCar = (color: Color | undefined, model: Model | undefined, customStyle?: React.CSSProperties): ReactElement => {

    if (model === undefined) {
        return <></>;
    }

    if (typeof model === 'string' && model === '') {
        return <></>;
    }

    const style = { width: '700px', height: '350px', ...customStyle }

    if (color === undefined) {
        // When we are in model page, we don't have the color! (footer)
        return Model[model] as unknown as Model === Model.i3 ? <CarImage style={style} image={i3} /> : <CarImage style={style} image={i8} />
    }

    switch (Color[color]) {
        case Color[Color.GreyMetallic]:
            return <CarImage style={style} image={i8} />
        case Color[Color.MineralGrey]:
            return <CarImage style={style} image={i3Black} />
        case Color[Color.OrangeMetallic]:
            return <CarImage style={style} image={i3Orange} />
        case Color[Color.White]:
            return <CarImage style={style} image={i3} />
        case Color[Color.WhitePerlMetallic]:
            return <CarImage style={style} image={i8White} />
        default: return <></>
    }
}