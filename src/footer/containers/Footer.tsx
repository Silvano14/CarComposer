import React, { useEffect, useState } from 'react';
import { Animated } from "react-animated-css";
import { useDispatch, useSelector } from 'react-redux';
import { NEXT_PAGE, PREVIOUS_PAGE } from '../../redux/actions/action';
import { DefaultState } from '../../redux/reducers/reducer';
import { Button } from '../../utils';
import { getImageByCar } from '../../utils/components/getImageByCar';
import { getPagesValues, Pages } from '../../utils/enums/Pages';
import { dispatchAction } from '../../utils/redux/dispatchAction';
import TotalPrice from '../components/TotalPrice';
import './Footer.css';

const Footer = () => {
    const { pageVisible, showAlertModel, product: { model, color, oldModel } } = useSelector((state: DefaultState) => state);
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [showImage, setShowImage] = useState<boolean>(false);
    const [showPreviousButton, setShowPreviousButton] = useState<boolean>(false);

    useEffect(() => {
        if (showAlertModel)
            setShowAlert(true);

        if (model)
            setShowImage(true);
        else
            setShowImage(false);

        if (pageVisible > Pages.Models)
            setShowPreviousButton(true);
        else
            setShowPreviousButton(false);

    }, [model, pageVisible, showAlertModel])

    return (
        <div className="footer">

            <div className="resume">
                <Animated animationIn="slideInLeft" animationOut="slideOutLeft" animationInDuration={400} animationOutDuration={400} isVisible={showImage}>
                    {getImageByCar(color, oldModel, { width: '150px', height: '75px' })}
                </Animated>
                <div className={`${showImage ? 'left' : 'right'}`}>
                    <TotalPrice />
                </div>
            </div>

            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={400} animationOutDuration={400} isVisible={showPreviousButton}>
                <Button
                    className={`footer-btn previous`}
                    label="<"
                    onClick={() => model ? dispatchAction(dispatch, PREVIOUS_PAGE) : {}} />
            </Animated>

            {showAlert ? <div className={`alert bottom ${!!showAlertModel ? 'showMe' : 'hideMe'}`}>
                Please, select a model first!
            </div>
                : <></>
            }
            <Button
                className={`footer-btn next`}
                style={{ backgroundColor: model ? '#FFB500' : '' }}
                label={`${labelButtonPage(pageVisible)} >`}
                onClick={() => model ? dispatchAction(dispatch, NEXT_PAGE) : {}}
            />

        </div>
    );
};

export const labelButtonPage = (pageVisible: Pages) => {
    if (typeof pageVisible === 'string') {
        const result = parseInt(pageVisible) + 1;
        if (result >= getPagesValues().length)
            return "BUY NOW";
        else
            return Pages[result]
    }

    if (pageVisible === Pages.Summary)
        return "BUY NOW";

    return Pages[pageVisible + 1];
}

export default Footer;
