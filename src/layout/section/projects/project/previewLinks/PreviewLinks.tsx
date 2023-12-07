import React from 'react';
import {PreviewLink} from "./previewLink/PreviewLink";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {S} from '../../Projects_Styles';


export const PreviewLinks: React.FC = () => {
    return (
        <S.PreviewLinks>
            <FlexWrapper justify={"space-between"}>
          <PreviewLink iconId={"linkProjSvg"} linkText={"Live Preview"} href={"#"}/>
          <PreviewLink iconId={"gitHubProjSvg"} linkText={"View Code"} href={"#"}/>
            </FlexWrapper>
        </S.PreviewLinks>
    );
};

