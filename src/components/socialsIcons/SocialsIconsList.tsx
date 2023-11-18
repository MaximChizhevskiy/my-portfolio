import React from 'react';
import {IconsSocial} from "../icons/IconsSocial";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const SocialsIconsList = () => {
    return (
        <StyledSocialsIcons>
            <StyledLink><IconsSocial IconId={"gitHubMinSvg"} /></StyledLink>
            <StyledLink><IconsSocial IconId={"linkedInSvg"}/></StyledLink>
            <StyledLink><IconsSocial IconId={"telegramSvg"}/></StyledLink>
        </StyledSocialsIcons>

    );
};

const StyledSocialsIcons = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: center;
  min-width: 150px;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const StyledLink = styled.a`
  :hover {
    color: ${theme.colors.accent};
    transform: translateY(-4px);
    cursor: pointer;
  }
`


