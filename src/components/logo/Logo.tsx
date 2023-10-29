import React from 'react';
import {IconLogo} from "../icons/IconLogo";
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";


export const Logo = () => {
    return (
        <FlexWrapper align={"center"} >
            <IconLogo IconId={"ellipse1"} IconId2={"ellipse2"} IconId3={"ellipse3"} IconId4={"ellipse4"}
                      IconId5={"ellipse5"} IconId6={"ellipse6"} IconId7={"ellipse7"}/>
            <TitleLogo>Portfolio</TitleLogo>
        </FlexWrapper>
    );
};

const TitleLogo = styled.span`
  margin-left: 15px;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

