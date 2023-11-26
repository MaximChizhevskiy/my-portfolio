import React from 'react';
import styled from "styled-components";
import {IconSkill} from "../../../../components/icons/IconSkill";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconId: string
    skillTitle: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} justify={"center"}>
                    <IconSkill IconId={props.iconId}/>
                    <SkillTitle>{props.skillTitle}</SkillTitle>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 200px;
  padding: 20px 35px 20px;
`

const SkillTitle = styled.h3`
  text-align: center;
  color: ${theme.colors.titlesColor};
  margin-top: -15px;
`



