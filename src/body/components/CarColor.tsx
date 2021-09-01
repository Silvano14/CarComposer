import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_COLOR, UPDATE_PRICE } from '../../redux/actions/action';
import { DefaultState } from '../../redux/reducers/reducer';
import { Color, getColorAvailable } from '../../utils/enums/Color';
import { getModelsAvailable, Model } from '../../utils/enums/Model';
import { dispatchAction } from '../../utils/redux/dispatchAction';
import './CarColor.css';

const style: React.CSSProperties = {
    width: '50px',
    height: '49px',
    borderRadius: '100%',
    cursor: 'pointer',
}

type CarColorProps = {
    possibleColor: Color,
    model: Model,
    showTooltip?: boolean,
};


const CarColor = ({ possibleColor, model, showTooltip = true }: CarColorProps) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState<boolean>(false);
    const colorSelected = useSelector((state: DefaultState) => state.product.color);

    const modelPrice = getModelsAvailable()[Model[model] as unknown as Model].price;

    const { hexColor: color, price: colorPrice } = getColorAvailable()[possibleColor];

    useEffect(() => {
        if (colorSelected === possibleColor)
            setSelected(true);
        else
            setSelected(false);
    }, [color, colorSelected, selected, possibleColor])

    return (
        <div
            className="car-color"
            style={{
                ...style,
                border: selected && showTooltip ? '2px solid #FFB500' : '2px solid #EFEFEF',
                marginRight: '10px'
            }}>
            <div
                className="car color tooltip"
                style={{ ...style, backgroundColor: color }}
                onClick={() => showTooltip ? chosenColor(dispatch, setSelected, possibleColor, modelPrice, colorPrice) : {}}
            >
                {showTooltip ? <span className="tooltiptext">{`${Color[possibleColor]} $ ${colorPrice}`}</span> : <></>
                }
            </div>
        </div>
    );
};

const chosenColor = (dispatch: Dispatch<any>, setSelected: Function, color: Color, currentPrice: number, colorPrice: number) => {
    setSelected(true);
    const updatedPrice = currentPrice + colorPrice;
    dispatchAction(dispatch, UPDATE_COLOR, color);
    dispatchAction(dispatch, UPDATE_PRICE, updatedPrice);
}

export default CarColor;