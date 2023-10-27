import React from 'react';
import {IconsSocial} from "../icons/IconsSocial";
import styled from "styled-components";

export const SocialsIcons = () => {
    return (
        <StyledSocialsIcons>
        <IconsSocial IconId={"gitHubMinSvg"}/>
        <IconsSocial IconId={"linkedInSvg"}/>
        <IconsSocial IconId={"telegramSvg"}/>
        </StyledSocialsIcons>

    );
};

const StyledSocialsIcons = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: center;
  min-width: 150px;
 `;
