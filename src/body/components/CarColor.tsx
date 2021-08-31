import React from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_COLOR } from '../../redux/actions/action';
import { Color, getColorAvailable } from '../../utils/enums/Color';
import { dispatchAction } from '../../utils/redux/dispatchAction';
import './CarColor.css';

const style: React.CSSProperties = {
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    cursor: 'pointer',
}

const CarColor = ({ possibleColor }: { possibleColor: Color }) => {
    const dispatch = useDispatch();

    const color = getColorAvailable()[possibleColor].hexColor;
    return (
        <div style={{ ...style, width: '51px', height: '51px', border: '2px solid gray', marginRight: '10px' }}>
            <div
                className="car color tooltip"
                style={{ ...style, backgroundColor: color }}
                onClick={() => dispatchAction(dispatch, UPDATE_COLOR, possibleColor)}
            >
                <span className="tooltiptext">{Color[possibleColor]}</span>
            </div>
        </div>
    );
};

export default CarColor;