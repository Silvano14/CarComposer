import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_ACCESSORY, REMOVE_ACCESSORY } from '../../redux/actions/action';
import { Accessories } from '../../utils/enums/Accessories';
import { dispatchAction } from '../../utils/redux/dispatchAction';
import './Accessory.css';

type AccessoryProp = {
    label: string
    price: number
    isSelected: boolean
    accessory: Accessories
}

const Accessory = ({ label, price, isSelected, accessory }: AccessoryProp) => {
    const [isClicked, setIfClicked] = useState<boolean>(isSelected);
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