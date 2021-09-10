import React from 'react';
import { useSelector } from 'react-redux';
import { DefaultState } from '../../../redux/reducers/reducer';
import { Button } from '../../../utils';
import { getPagesValues, Pages } from '../../../utils/enums/Pages';
import './HeaderMobile.css';

export const HeaderMobile = () => {
    const page: Pages = useSelector((state: DefaultState) => state.pageVisible);

    return (
        <div className="header-mobile">
            <div className="resume-mobile">
                <h1> Select Model </h1>
                <p className="number-page"> {`Step  ${page + 1} of ${getPagesValues().length}`}</p>
            </div>
            <Button className="btn-homepage" label="< Article & Download" />
        </div>)
}
