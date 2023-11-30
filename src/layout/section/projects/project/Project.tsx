import React from 'react';
import {Button} from "../../../../components/Button";
import {S} from '../Projects_Styles';
import {PreviewLinks} from "./previewLinks/PreviewLinks";

type WorkProjectType = {
    title: string
    text: string
    src: string
    stack: string
}

export const Project: React.FC<WorkProjectType> = (props: WorkProjectType) => {
    return (
        <S.Project>
            <S.ImageWrapper>
                <S.Image src={props.src} alt={""}/>
                <Button>View Project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <strong>Tech stack:</strong>
                <S.Stack>{props.stack}</S.Stack>
                <PreviewLinks/>
            </S.Description>
        </S.Project>
    );
};

