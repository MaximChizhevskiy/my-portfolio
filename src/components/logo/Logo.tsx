import React from 'react';
import {IconLogo} from "../icons/IconLogo";
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";


export const Logo = () => {
    return (
        <FlexWrapper align={"center"} >
            <IconLogo IconId={"logoIcon"} />
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

