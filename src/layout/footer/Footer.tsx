import React from 'react';
import {SocialsIconsList} from "../../components/socialsIcons/SocialsIconsList";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles';

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper justify={"space-around"} align-items={"center"} wrap={"wrap"}>
            <S.ContentBlock>
                <S.Text>Call me:</S.Text>
                <S.Text>+7-(701)-855-68-18</S.Text>
            </S.ContentBlock>
            <S.ContentBlock>
                <S.Text>Email:</S.Text>
                <S.Text>max15.91@mail.ru</S.Text>
            </S.ContentBlock>
                <S.ContentBlock>
            <SocialsIconsList isFooter/>
                </S.ContentBlock>
            </FlexWrapper>
        </S.Footer>
    );
};
