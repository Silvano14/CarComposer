import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AccessoriesStored, DefaultState } from '../../../redux/reducers/reducer';
import { Bmw } from '../../../utils/car/Car';
import { Accessories as AccessoriesType, getAccessoriesAvailable } from '../../../utils/enums/Accessories';
import { Model } from '../../../utils/enums/Model';
import AccessoryMobile from '../components/AccessoryMobile';
import './AccessoriesMobile.css';

const AccessoriesMobile = () => {
    const { model, accessories } = useSelector((state: DefaultState) => state.product)

    const getCar = useCallback(() => new Bmw(Model[model!] as unknown as Model), [model]);

    const isSelectedAccessory = (accessory: AccessoriesType, listAccessories: AccessoriesStored | undefined): boolean => {
        if (listAccessories) {
            const element = listAccessories.find((el) => accessory === el.accessory);
            if (element)
                return element.isSelected;
            return false
        }
        return false;
    }

    return (
        <div className="accessories-mobile">
            {getCar().accessories.map((accessory, index) =>
                <AccessoryMobile
                    key={index}
                    label={getAccessoriesAvailable()[accessory].description}
                    price={getAccessoriesAvailable()[accessory].price}
                    accessory={accessory}
                    isSelected={isSelectedAccessory(accessory, accessories)}
                />)}
        </div>
    );
};

export default AccessoriesMobile;