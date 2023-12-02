import React from 'react';
import {IconsSocial} from "../icons/IconsSocial";
import {S} from './SocialsIconsList_Styles';

type SocialsIconsListPropsType ={
    isFooter?: boolean
}

export const SocialsIconsList: React.FC<SocialsIconsListPropsType> = ({ isFooter }: SocialsIconsListPropsType) => {
    return (
        <S.SocialsIcons isFooter={isFooter}>
            <S.Link><IconsSocial IconId={"gitHubMinSvg"} /></S.Link>
            <S.Link><IconsSocial IconId={"linkedInSvg"}/></S.Link>
            <S.Link><IconsSocial IconId={"telegramSvg"}/></S.Link>
        </S.SocialsIcons>

    );
};
