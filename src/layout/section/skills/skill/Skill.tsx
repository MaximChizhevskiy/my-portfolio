import React from 'react';
import styled from "styled-components";
import {IconSkill} from "../../../../components/icons/IconSkill";

type SkillPropsType = {
    iconId: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <IconSkill IconId={props.iconId} />
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 18%;
    border: 3px dashed white;
`