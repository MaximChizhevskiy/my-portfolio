import React from 'react';
import logoEllipseSprite from '../../assets/images/logo-ellipse-sprite.svg'

type IconLogoPropsType = {
    IconId: string
    IconId2?: string
    IconId3?: string
    IconId4?: string
    IconId5?: string
    IconId6?: string
    IconId7?: string
    width?: string
    height?: string
    viewBox?: string
}

export const IconLogo = (props: IconLogoPropsType) => {
    return (
        <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${logoEllipseSprite}#${props.IconId}`}/>
        <use xlinkHref={`${logoEllipseSprite}#${props.IconId2}`}/>
        <use xlinkHref={`${logoEllipseSprite}#${props.IconId3}`}/>
        <use xlinkHref={`${logoEllipseSprite}#${props.IconId4}`}/>
        <use xlinkHref={`${logoEllipseSprite}#${props.IconId5}`}/>
        <use xlinkHref={`${logoEllipseSprite}#${props.IconId6}`}/>
        <use xlinkHref={`${logoEllipseSprite}#${props.IconId7}`}/>
        </svg>
    );
};
