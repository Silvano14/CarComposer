import React, { Fragment, ReactElement } from 'react';
import './Button.css';

type ButtonProps = {
    readonly label: string | ReactElement,
    readonly style?: React.CSSProperties,
    readonly className?: string,
    onClick?(): void
    readonly id?: string
    readonly logo?: string
}

export const Button = ({ className, style, label, onClick, id }: ButtonProps) =>
    <Fragment>
        <button
            className={`btn ${className}`}
            style={style}
            onClick={onClick}
        >
            {label}
        </button>
    </Fragment>
