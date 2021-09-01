import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NEXT_PAGE, PREVIOUS_PAGE } from '../../redux/actions/action';
import { DefaultState } from '../../redux/reducers/reducer';
import { Button } from '../../utils';
import { getImageByCar } from '../../utils/car/getImageByCar';
import { getPagesValues, Pages } from '../../utils/enums/Pages';
import { dispatchAction } from '../../utils/redux/dispatchAction';
import TotalPrice from '../components/TotalPrice';
import './Footer.css';

const Footer = () => {
    const { pageVisible, product: { model, color } } = useSelector((state: DefaultState) => state);
    const dispatch = useDispatch();
    return (
        <div className="footer">
            <div className="resume">
                {getImageByCar(color, model, { width: '150px', height: '75px' })}
                <div className="line" />
                <TotalPrice />
            </div>
            {Pages[pageVisible] as unknown as string !== Pages[Pages.Models]
                ? <Button
                    className="footer-btn previous"
                    label="<"
                    onClick={() => model ? dispatchAction(dispatch, PREVIOUS_PAGE) : {}} />
                : <></>}
            <Button
                className="footer-btn next"
                style={{ backgroundColor: model ? '#FFB500' : '' }}
                label={`${labelButtonPage(pageVisible)} >`}
                onClick={() => model ? dispatchAction(dispatch, NEXT_PAGE) : {}}
            />
        </div>
    );
};

const labelButtonPage = (pageVisible: Pages) => {
    if (typeof pageVisible === 'string') {
        const result = parseInt(pageVisible) + 1;
        if (result >= getPagesValues().length)
            return "BUY NOW";
        else
            return Pages[result]
    }
    return Pages[pageVisible + 1];
}

export default Footer;
