import React from 'react';
import { useSelector } from 'react-redux';
import { DefaultState } from '../../redux/reducers/reducer';
import { Model } from '../../utils/enums/Model';
import { getPagesValues, Pages } from '../../utils/enums/Pages';
import NamePage from '../components/NamePage';
import './MenuList.css';

export const MenuList = () => {
    const page: Pages = useSelector((state: DefaultState) => state.pageVisible);
    const model: Model | undefined = useSelector((state: DefaultState) => state.product.model);

    return (
        <div className="menulist">
            {getPagesValues().map((element: number, index) =>
                <NamePage
                    key={index} page={element}
                    isVisible={Pages[page] === Pages[element]}
                    isModelSelected={!!model}
                />)}
        </div>
    );
};