import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ACCESSORY, REMOVE_ACCESSORY } from '../../redux/actions/action';
import { DefaultState } from '../../redux/reducers/reducer';
import { Accessories } from '../../utils/enums/Accessories';
import { dispatchAction } from '../../utils/redux/dispatchAction';
import './Accessory.css';

const Accessory = ({ label, price }: { label: string, price: number }) => {
    const [isClicked, setIfClicked] = useState<boolean>(false);
    const accessory: Accessories[] = useSelector((state: DefaultState) => state.product.accessories);
    const dispatch = useDispatch();

    const selectedStyle: React.CSSProperties = {
        border: '2px solid #FFB500'
    }

    return (
        <div className="accessory"
            style={isClicked ? selectedStyle : {}}
            onClick={() => {
                !isClicked
                    ? dispatchAction(dispatch, ADD_ACCESSORY, { accessory, price })
                    : dispatchAction(dispatch, REMOVE_ACCESSORY, { accessory, price })
                setIfClicked(!isClicked);
            }}>
            <p className="label">{label}</p>
            <p className="price">{`$ ${price}`}</p>
            <p> checkbox </p>
        </div>
    );
};

export default Accessory;