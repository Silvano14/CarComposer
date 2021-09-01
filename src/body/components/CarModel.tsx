import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i3 from '../../asset/i3.jpg';
import i8 from '../../asset/i8.jpg';
import { UPDATE_COLOR, UPDATE_MODEL, UPDATE_PRICE } from '../../redux/actions/action';
import { DefaultState } from '../../redux/reducers/reducer';
import { CarImage } from '../../utils/components/CarImage';
import { getModelsAvailable, Model } from '../../utils/enums/Model';
import { dispatchAction } from '../../utils/redux/dispatchAction';
import './CarModel.css';

const CarModel = ({ model }: { model: Model }) => {
    const dispatch = useDispatch();
    const [isClicked, setIfClicked] = useState<boolean>(false);
    const modelSelected = useSelector((state: DefaultState) => state.product.model);

    const { price }: { price: number } = getModelsAvailable()[Model[model] as unknown as Model];

    const modelSelectedStyle: React.CSSProperties = {
        border: '2px solid #FFB500'
    }

    useEffect(() => {
        if (modelSelected === model) {
            setIfClicked(true);
        } else {
            setIfClicked(false);
        }
    }, [model, modelSelected])

    return (
        <div className="car model"
            onClick={() => {
                if (isClicked) {
                    dispatchAction(dispatch, UPDATE_PRICE, 0)
                    dispatchAction(dispatch, UPDATE_COLOR)
                    dispatchAction(dispatch, UPDATE_MODEL, '')
                } else {
                    dispatchAction(dispatch, UPDATE_PRICE, price)
                    dispatchAction(dispatch, UPDATE_COLOR)
                    dispatchAction(dispatch, UPDATE_MODEL, model)
                }
                setIfClicked(!isClicked)
            }}
            style={isClicked ? modelSelectedStyle : {}} >
            <h1>{`BMW ${model}`}</h1>
            {getImageByModel(model)}
            <p>{`from $ ${price}`}</p>

        </div>
    );
};

const styleImage: React.CSSProperties = {
    width: '350px',
    height: '150px',
}

const getImageByModel = (model: Model) =>
    (Model[model] as unknown as Model) === Model.i3
        ? <CarImage image={i3} style={styleImage} />
        : <CarImage image={i8} style={styleImage} />


export default CarModel;