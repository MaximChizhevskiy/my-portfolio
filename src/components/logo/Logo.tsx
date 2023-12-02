import React from 'react';
import {IconLogo} from "../icons/IconLogo";
import {FlexWrapper} from "../FlexWrapper";
import { S } from './Logo_Styles';


export const Logo: React.FC = () => {
    return (
        <FlexWrapper align={"center"} >
            <IconLogo IconId={"logoIcon"} />
            <S.TitleLogo>Portfolio</S.TitleLogo>
        </FlexWrapper>
    );
};

