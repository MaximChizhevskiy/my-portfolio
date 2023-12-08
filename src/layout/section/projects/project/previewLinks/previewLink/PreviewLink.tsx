import React from 'react';
import {IconLink} from "../../../../../../components/icons/IconLink";
import {FlexWrapper} from "../../../../../../components/FlexWrapper";
import {S} from '../../../Projects_Styles';

type ViewLnkPropsType = {
    iconId: string
    linkText: string
    href: string
}

export const PreviewLink: React.FC<ViewLnkPropsType> = (props: ViewLnkPropsType) => {
    return (
        <S.PreviewLink>
            <FlexWrapper>
            <IconLink IconId={props.iconId}/><S.LinkText href={props.href} target="_blank">{props.linkText}</S.LinkText>
            </FlexWrapper>
        </S.PreviewLink>
    );
};




