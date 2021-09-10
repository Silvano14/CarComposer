import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ADD_ACCESSORY, REMOVE_ACCESSORY } from '../../redux/actions/action';
import Checkbox from '../../utils/components/Checkbox';
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
            onClick={selectAccessory(isClicked, dispatch, accessory, price, setIfClicked)}>
            <p className="label">{label}</p>
            <p className="price">{`$ ${price}`}</p>
            <Checkbox isChecked={isClicked} />
        </div>
    );
};

export default Accessory;

function selectAccessory(
    isClicked: boolean,
    dispatch: Dispatch<any>,
    accessory: Accessories,
    price: number,
    setIfClicked: React.Dispatch<React.SetStateAction<boolean>>
): React.MouseEventHandler<HTMLDivElement> | undefined {
    return () => {
        !isClicked
            ? dispatchAction(dispatch, ADD_ACCESSORY, { accessory, price })
            : dispatchAction(dispatch, REMOVE_ACCESSORY, { accessory, price });
        setIfClicked(!isClicked);
    };
}
