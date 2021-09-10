import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SHOW_ALERT_MODEL, UPDATE_COLOR, UPDATE_MODEL, UPDATE_PRICE } from '../../redux/actions/action';
import { DefaultState } from '../../redux/reducers/reducer';
import Checkbox from '../../utils/components/Checkbox';
import { getImageByCar } from '../../utils/components/getImageByCar';
import { getModelsAvailable, Model } from '../../utils/enums/Model';
import { dispatchAction } from '../../utils/redux/dispatchAction';
import { fadeBorder } from '../../utils/style/commonStyle';
import './CarModel.css';

const styleImage: React.CSSProperties = {
    width: '370px',
    height: '170px',
}

const CarModel = ({ model }: { model: Model }) => {
    const dispatch = useDispatch();
    const [isClicked, setIfClicked] = useState<boolean>(false);
    const modelSelected = useSelector((state: DefaultState) => state.product.model);

    const { price }: { price: number } = getModelsAvailable()[Model[model] as unknown as Model];

    const modelSelectedStyle: React.CSSProperties = {
        ...fadeBorder,
        border: '2px solid #FFB500',
    }

    useEffect(() => {
        if (modelSelected === model) {
            setIfClicked(true);
        } else {
            setIfClicked(false);
        }
    }, [model, modelSelected])

    return (
        <div className={`car model`}
            onClick={() => {
                if (isClicked) {
                    dispatchAction(dispatch, UPDATE_PRICE, 0)
                    dispatchAction(dispatch, UPDATE_MODEL)
                } else {
                    dispatchAction(dispatch, UPDATE_PRICE, price)
                    dispatchAction(dispatch, SHOW_ALERT_MODEL, false)
                    dispatchAction(dispatch, UPDATE_MODEL, model)
                }
                // If you change the model you must have default color
                dispatchAction(dispatch, UPDATE_COLOR)
                setIfClicked(!isClicked)
            }}
            style={isClicked
                ? modelSelectedStyle
                : fadeBorder}
        >

            <h1>{`BMW ${model}`}</h1>
            {getImageByCar(undefined, model, styleImage)}
            <p>{`from $ ${price}`}</p>
            <Checkbox isChecked={isClicked} style={{ borderRadius: '100%' }} />
        </div>
    );
};


export default CarModel;