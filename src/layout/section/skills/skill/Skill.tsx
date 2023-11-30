import React from 'react';
import {IconSkill} from "../../../../components/icons/IconSkill";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from '../Skills_Styles';

type SkillPropsType = {
    iconId: string
    skillTitle: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={"column"} justify={"center"}>
                    <IconSkill IconId={props.iconId}/>
                    <S.SkillTitle>{props.skillTitle}</S.SkillTitle>
            </FlexWrapper>
        </S.Skill>
    );
};





