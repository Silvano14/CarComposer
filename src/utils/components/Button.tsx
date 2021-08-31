import React, { Fragment } from 'react';

type ButtonProps = {
    readonly label: string,
    readonly style?: React.CSSProperties,
    readonly className?: string,
    onClick?(): void
    readonly id?: string
    readonly logo?: string
}

export const commonBtnStyle: React.CSSProperties = {
}

export const Button = ({ className, style, label, onClick, id }: ButtonProps) =>
    <Fragment>
        <button className={className || ""} style={{ ...commonBtnStyle, ...style }} onClick={onClick} id={"id"}>
            {label}
        </button>
    </Fragment>
