import React from 'react';
import {PreviewLnk} from "./previewLink/PreviewLnk";
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";


export const PreviewLinks = () => {
    return (
        <StyledPreviewLinks>
            <FlexWrapper justify={"space-between"}>
          <PreviewLnk iconId={"linkProjSvg"} linkText={"Live Preview"}/>
          <PreviewLnk iconId={"gitHubProjSvg"} linkText={"View Code"}/>
            </FlexWrapper>
        </StyledPreviewLinks>
    );
};


const StyledPreviewLinks = styled.div`
`
