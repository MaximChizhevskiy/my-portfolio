import React from 'react';
import iconsLink from "../../assets/images/icons-projects.svg";

type IconLinkPropsType = {
    IconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const IconLink: React.FC<IconLinkPropsType> = (props: IconLinkPropsType) => {
    return (
        <svg
             fill="none" xmlns="http://www.w3.org/2000/svg" height={"20px"} width={"20px"} viewBox={"0 0 20 20"}>
            <use xlinkHref={`${iconsLink}#${props.IconId}`} />
        </svg>
    );
};
