import React from 'react';
import iconsSprite from "../../assets/images/icons-sprite.svg";

type IconSkillPropsType = {
    IconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const IconSkill: React.FC<IconSkillPropsType> = (props: IconSkillPropsType) => {
    return (
        <svg
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.IconId}`} />
        </svg>
    );
};
