import React from 'react';
import {Button} from "../../../../components/Button";
import {S} from '../Projects_Styles';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {PreviewLink} from "./previewLinks/previewLink/PreviewLink";

type WorkProjectType = {
    title: string
    text: string
    imgSrc: string
    stack: string
    previewHref: string
    gitHubHref: string
}

export const Project: React.FC<WorkProjectType> = (props: WorkProjectType) => {
    return (
        <S.Project>
            <S.ImageWrapper>
                <S.Image src={props.imgSrc} alt={""}/>
                <a href={props.previewHref} target="_blank">
                <Button>View Project</Button>
                </a>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <strong>Tech stack:</strong>
                <S.Stack>{props.stack}</S.Stack>
                <S.PreviewLinks>
                    <FlexWrapper justify={"space-between"}>
                        <PreviewLink iconId={"linkProjSvg"} linkText={"Live Preview"} href={props.previewHref}/>
                        <PreviewLink iconId={"gitHubProjSvg"} linkText={"View Code"} href={props.gitHubHref}/>
                    </FlexWrapper>
                </S.PreviewLinks>
            </S.Description>
        </S.Project>
    );
};

