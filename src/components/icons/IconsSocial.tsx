import React from 'react';
import iconsSprite from "../../assets/images/icons-sprite.svg";

type IconSocialPropsType = {
    IconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const IconsSocial: React.FC<IconSocialPropsType> = (props: IconSocialPropsType) => {
    return (
        <svg width={props.width || "32"} height={props.height || "32"} viewBox={props.viewBox || "0 0 32 32"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.IconId}`}/>
        </svg>

    );
};
