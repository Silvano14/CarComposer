import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NEXT_PAGE, PREVIOUS_PAGE } from '../../redux/actions/action';
import { DefaultState } from '../../redux/reducers/reducer';
import { Button } from '../../utils';
import { getImageByCar } from '../../utils/components/getImageByCar';
import { getPagesValues, Pages } from '../../utils/enums/Pages';
import { dispatchAction } from '../../utils/redux/dispatchAction';
import TotalPrice from '../components/TotalPrice';
import './Footer.scss';

const Footer = () => {
    const { pageVisible, showAlertModel, product: { model, color } } = useSelector((state: DefaultState) => state);
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const style: React.CSSProperties = {
    }

    useEffect(() => {
        if (showAlertModel)
            setShowAlert(true);

    }, [showAlertModel])

    return (
        <div className="footer">

            <div className="resume">
                {getImageByCar(color, model, { width: '150px', height: '75px' })}
                <div className="line" />
                <TotalPrice />
            </div>

            {(Pages[pageVisible] as string) !== Pages[Pages.Models]
                ? <Button
                    className="footer-btn previous"
                    label="<"
                    onClick={() => model ? dispatchAction(dispatch, PREVIOUS_PAGE) : {}} />
                : <></>}

            {showAlert ? <div className={`alert bottom ${!!showAlertModel ? 'showMe' : 'hideMe'}`}>
                Please, select a model first!
            </div>
                : <></>
            }
            <Button
                className="footer-btn next btn-flip"
                style={{ backgroundColor: model ? '#FFB500' : '', ...style }}
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
    // @ts-ignore
    if (pageVisible === 3 || pageVisible === Pages.Summary)
        return "BUY NOW";

    return Pages[pageVisible + 1];
}

export default Footer;
