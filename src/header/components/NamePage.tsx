import React from 'react';
import { useDispatch } from 'react-redux';
import { SHOW_ALERT_MODEL, UPDATE_PAGE } from '../../redux/actions/action';
import { Pages } from '../../utils/enums/Pages';
import { dispatchAction } from '../../utils/redux/dispatchAction';
import './NamePage.css';

type ModelProp = {
    readonly page: number,
    readonly isVisible: boolean
    readonly isModelSelected: boolean;
}

const NamePage = ({ page, isVisible, isModelSelected }: ModelProp) => {
    const dispatch = useDispatch();
    const isSelected: React.CSSProperties = { borderBottom: '2px solid #FFB80B', color: '#FFB80B' };
    const textColorTransition = {
        transitionProperty: 'color',
        transitionDuration: '0.5s'
    }

    return (
        <div
            className={`name page ${isModelSelected ? 'enable' : 'disable'}`}
            style={isVisible ? isSelected : { color: isModelSelected ? '#5D7C89' : '#AEBDC4', ...textColorTransition }}
            onClick={() => isModelSelected
                ? dispatchAction(dispatch, UPDATE_PAGE, page)
                : dispatchAction(dispatch, SHOW_ALERT_MODEL, true)}
        >
            <p>{Pages[page]}</p>
        </div>
    )
}


export default NamePage;

