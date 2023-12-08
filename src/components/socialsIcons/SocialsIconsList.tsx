import React from 'react';
import {IconsSocial} from "../icons/IconsSocial";
import {S} from './SocialsIconsList_Styles';

type SocialsIconsListPropsType ={
    isFooter?: boolean
}

export const SocialsIconsList: React.FC<SocialsIconsListPropsType> = ({ isFooter }: SocialsIconsListPropsType) => {
    return (
        <S.SocialsIcons isFooter={isFooter}>
            <S.Link href={"https://github.com/MaximChizhevskiy/"} target="_blank" >
                <IconsSocial IconId={"gitHubMinSvg"} />
            </S.Link>
            <S.Link href={"https://www.linkedin.com/in/maxim-chizhevskiy-436015258/"} target="_blank">
                <IconsSocial IconId={"linkedInSvg"}/></S.Link>
            <S.Link href={"https://t.me/MaximCh307/"} target="_blank">
                <IconsSocial IconId={"telegramSvg"}/>
            </S.Link>
        </S.SocialsIcons>

    );
};
