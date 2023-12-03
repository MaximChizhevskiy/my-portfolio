import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skills = styled.section`
position: relative;
`

const Skill = styled.div`
  width: 200px;
  padding: 20px 35px 20px;
`

const SkillTitle = styled.h3`
  text-align: center;
  color: ${theme.colors.titlesColor};
  margin-top: -15px;
`

export const S = {
    Skills,
    Skill,
    SkillTitle
}