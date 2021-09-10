import React, { Fragment } from 'react';
import './Button.css';

type ButtonProps = {
    readonly label: string,
    readonly style?: React.CSSProperties,
    readonly className?: string,
    onClick?(): void
    readonly id?: string
    readonly logo?: string
}

export const Button = ({ className, style, label, onClick, id }: ButtonProps) =>
    <Fragment>
        <button
            data-back="Back" data-front="Front"
            className={`btn ${className}`}
            style={style}
            onClick={onClick}
            id={"id"}
            //@ts-ignore
            content={label}>
            {label}
        </button>
    </Fragment>
