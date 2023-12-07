import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles'
import {Skill} from "./skill/Skill";
import { Fade } from "react-awesome-reveal";

const skillData = [
    {
        iconId: "htmlSvg",
        skillTitle: "HTML5",
    },
    {
        iconId: "cssSvg",
        skillTitle: "CSS3",
    },
    {
        iconId: "jsSvg",
        skillTitle: "JavaScript",
    },
    {
        iconId: "typeScriptSvg",
        skillTitle: "TypeScript",
    },
    {
        iconId: "reactSvg",
        skillTitle: "React",
    },
    {
        iconId: "reduxSvg",
        skillTitle: "Redux",
    },
    {
        iconId: "gitSvg",
        skillTitle: "Git",
    },
    {
        iconId: "storybookSvg",
        skillTitle: "Storybook",
    },
    {
        iconId: "jestSvg",
        skillTitle: "Jest",
    },
    {
        iconId: "styledSvg",
        skillTitle: "Styled Components",
    },
    {
        iconId: "materialSvg",
        skillTitle: "Material UI",
    },

]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-around"}>
                    <Fade cascade={true} damping={0.1}>
                    {skillData.map((s, index) => {
                        return <Skill key={index}
                                      iconId={s.iconId}
                                      skillTitle={s.skillTitle}/>
                    })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};
