import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NEXT_PAGE } from '../../redux/actions/action';
import { DefaultState } from '../../redux/reducers/reducer';
import { Button } from '../../utils';
import { CarImage } from '../../utils/components/CarImage';
import { Pages } from '../../utils/enums/Pages';
import { dispatchAction } from '../../utils/redux/dispatchAction';
import TotalPrice from '../components/TotalPrice';
import './Footer.css';
import i3 from '../../asset/i3.jpg';
import i8 from '../../asset/i8.jpg';
import { Model } from '../../utils/enums/Model';

const Footer = () => {
    const { pageVisible, product: { model } } = useSelector((state: DefaultState) => state);
    const dispatch = useDispatch();

    return (
        <div className="footer">
            <div className="resume">
                {model
                    ? <CarImage image={(Model[model!] as unknown as Model) === Model.i3 ? i3 : i8} style={{ width: '150px' }} />
                    : <></>
                }<TotalPrice />
            </div>
            <Button
                className="footer-btn"
                style={{ backgroundColor: model ? '#FFB500' : '' }}
                label={`${Pages[pageVisible]} >`}
                onClick={() => model ? dispatchAction(dispatch, NEXT_PAGE) : {}}
            />
        </div>
    );
};

export default Footer;