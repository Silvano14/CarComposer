import React from 'react';
import './Checkbox.css';

type CheckboxProp = { isChecked: boolean, style?: React.CSSProperties }

const Checkbox = ({ isChecked, style }: CheckboxProp) =>
    <label className="container">
        <input className="input-checkbox" type="checkbox" readOnly={true} checked={isChecked} />
        <span className="checkmark" style={style} ></span>
    </label>

export default Checkbox;