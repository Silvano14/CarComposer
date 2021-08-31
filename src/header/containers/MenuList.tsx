import React from 'react';
import { useSelector } from 'react-redux';
import { DefaultState } from '../../redux/reducers/reducer';
import { getPagesValues, Pages } from '../../utils/enums/Pages';
import Page from '../components/Page';
import './MenuList.css';

export const MenuList = () => {
    const page: Pages = useSelector((state: DefaultState) => state.pageVisible);

    return (
        <div className="menulist">
            {getPagesValues().map((element: number, index) => <Page key={index} page={element} isVisible={Pages[page] === Pages[element]} />)}
        </div>
    );
};