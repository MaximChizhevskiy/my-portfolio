import React from 'react';
import iconsSprite from "../../assets/images/icons-sprite.svg";

type IconSkillPropsType = {
    IconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const IconSkill = (props: IconSkillPropsType) => {
    return (
        <svg
            /*width={props.width || "131"} height={props.height || "131"} viewBox={props.viewBox || "0 0 131 131"}*/
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.IconId}`} />
        </svg>
    );
};
