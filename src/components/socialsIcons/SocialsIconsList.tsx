import React from 'react';
import {IconsSocial} from "../icons/IconsSocial";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type SocialsIconsListPropsType ={
    isFooter?: boolean
}

export const SocialsIconsList = ({ isFooter }: SocialsIconsListPropsType) => {
    return (
        <StyledSocialsIcons isFooter={isFooter}>
            <StyledLink><IconsSocial IconId={"gitHubMinSvg"} /></StyledLink>
            <StyledLink><IconsSocial IconId={"linkedInSvg"}/></StyledLink>
            <StyledLink><IconsSocial IconId={"telegramSvg"}/></StyledLink>
        </StyledSocialsIcons>

    );
};

const StyledSocialsIcons = styled.div<{isFooter?: boolean}>`
  display: flex;
  justify-content: space-between;
  vertical-align: center;
  min-width: 150px;

  @media ${theme.media.tablet} {
    display: ${({isFooter}) => (isFooter ? 'flex' : 'none')};
  }
`;

const StyledLink = styled.a`
  :hover {
    color: ${theme.colors.accent};
    transform: translateY(-4px);
    cursor: pointer;
  }
`


