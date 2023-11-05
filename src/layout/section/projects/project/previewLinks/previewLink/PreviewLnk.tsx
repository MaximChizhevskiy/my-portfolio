import React from 'react';
import {IconLink} from "../../../../../../components/icons/IconLink";
import styled from "styled-components";
import {FlexWrapper} from "../../../../../../components/FlexWrapper";
import {theme} from "../../../../../../styles/Theme";

type ViewLnkPropsType = {
    iconId: string
    linkText: string

}

export const PreviewLnk = (props: ViewLnkPropsType) => {
    return (
        <StyledPreviewLink>
            <FlexWrapper>
            <IconLink IconId={props.iconId}/><StyledLinkText href={"#"}>{props.linkText}</StyledLinkText>
            </FlexWrapper>
        </StyledPreviewLink>
    );
};

const StyledPreviewLink = styled.div`
    
`

const StyledLinkText = styled.a`
  font-family: Poppins, sans-serif;
  margin-left: 10px;
  margin-right: 15px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  text-decoration-line: underline;

  :hover {
    color: ${theme.colors.accent};
  }
`



