import React from 'react';
import {PreviewLnk} from "./previewLink/PreviewLnk";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import { S } from '../../Projects_Styles';


export const PreviewLinks = () => {
    return (
        <S.PreviewLinks>
            <FlexWrapper justify={"space-between"}>
          <PreviewLnk iconId={"linkProjSvg"} linkText={"Live Preview"}/>
          <PreviewLnk iconId={"gitHubProjSvg"} linkText={"View Code"}/>
            </FlexWrapper>
        </S.PreviewLinks>
    );
};

