import React from 'react';
import { Animated } from "react-animated-css";
import { useDispatch, useSelector } from 'react-redux';
import { labelButtonPage } from '../../footer/containers/Footer';
import { NEXT_PAGE, PREVIOUS_PAGE } from '../../redux/actions/action';
import { DefaultState } from '../../redux/reducers/reducer';
import { Button } from '../../utils';
import { dispatchAction } from '../../utils/redux/dispatchAction';
import './FooterMobile.css';

const Footer = () => {
    const { pageVisible, product: { model } } = useSelector((state: DefaultState) => state);
    const dispatch = useDispatch();

    return (
        <div className="footer-mobile">
            <Animated
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                animationInDuration={400}
                animationOutDuration={400}
                isVisible={parseInt(pageVisible as unknown as string) > 0}
            // style={{ display: parseInt(pageVisible as unknown as string) === 0 ? 'none' : '' }}
            >
                <Button
                    className={`footer-btn-mobile previous `}
                    label={`< ${labelButtonPage(pageVisible - 2) || ''}`}
                    onClick={() => model ? dispatchAction(dispatch, PREVIOUS_PAGE) : {}}
                />
            </Animated>
            <Animated animationIn="slideInUp" animationOut="slideOutDown" animationInDuration={400} animationOutDuration={400} isVisible={!!model} style={{ width: '100%' }}>
                <Button
                    className={`footer-btn-mobile next`}
                    label={`${labelButtonPage(pageVisible)} >`}
                    style={{ width: '100%' }}
                    onClick={() => model ? dispatchAction(dispatch, NEXT_PAGE) : {}}
                />
            </Animated>
        </div>
    );
};

export default Footer;
