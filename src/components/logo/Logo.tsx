import React from 'react';
import {IconLogo} from "../icons/IconLogo";
import {FlexWrapper} from "../FlexWrapper";
import {S} from './Logo_Styles';
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (
        <S.LinkLogo onClick={() => {
            scroll.scrollToTop()
        }}>
            <FlexWrapper align={"center"}>
                <IconLogo IconId={"logoIcon"}/>
                <S.TitleLogo>Portfolio</S.TitleLogo>
            </FlexWrapper>
        </S.LinkLogo>

    );
};

