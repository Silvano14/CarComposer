import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NEXT_PAGE, PREVIOUS_PAGE } from '../../redux/actions/action';
import { DefaultState } from '../../redux/reducers/reducer';
import { Button } from '../../utils';
import { getImageByCar } from '../../utils/car/getImageByCar';
import { Pages } from '../../utils/enums/Pages';
import { dispatchAction } from '../../utils/redux/dispatchAction';
import TotalPrice from '../components/TotalPrice';
import './Footer.css';

const Footer = () => {
    const { pageVisible, product: { model, color } } = useSelector((state: DefaultState) => state);
    console.log(Pages[pageVisible] as unknown as string !== Pages[Pages.Models])
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
                label={`${Pages[pageVisible]} >`}
                onClick={() => model ? dispatchAction(dispatch, NEXT_PAGE) : {}}
            />
        </div>
    );
};

// const labelButtonPage = (pageVisible: Page) => {
//     if (typeof state.pageVisible === 'string') {
//         const checkPageVisible = parseInt(pageVisible);
//     }
// }

export default Footer;