import React from 'react';
import { useSelector } from 'react-redux';
import { DefaultState } from '../../../redux/reducers/reducer';
import { Button } from '../../../utils';
import { getPagesValues, Pages } from '../../../utils/enums/Pages';
import './HeaderMobile.css';

export const HeaderMobile = () => {
    const page: Pages = useSelector((state: DefaultState) => state.pageVisible);

    const getTitleHeader = (page: Pages) => {
        switch (page) {
            case Pages.Models:
                return "Select Model";
            case Pages.Colors:
                return "Select Color";
            case Pages.Accessories:
                return "Accessories";
            case Pages.Summary:
                return "Summary";
        }
    }

    return (
        <div className="header-mobile">
            <div className="resume-mobile">
                <h1>{getTitleHeader(page)}</h1>
                <p className="number-page"> {`Step  ${page + 1} of ${getPagesValues().length}`}</p>
            </div>
            {page === Pages.Models
                ? <Button className="btn-homepage" label="< Article & Download" />
                : <></>
            }
        </div>)
}

