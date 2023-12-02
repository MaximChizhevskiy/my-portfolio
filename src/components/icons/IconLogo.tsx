import React from 'react';
import logoEllipseSprite from '../../assets/images/logo-ellipse-sprite.svg'

type IconLogoPropsType = {
    IconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const IconLogo: React.FC<IconLogoPropsType> = (props: IconLogoPropsType) => {
    return (
        <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${logoEllipseSprite}#${props.IconId}`}/>
        </svg>
    );
};
