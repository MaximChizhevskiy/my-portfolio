import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({
    family: "Poppins,sans-serif", weight: 700, Fmax: 38, Fmin: 30,
  })}

  text-align: center;
  font-style: normal;
  color: ${theme.colors.titlesColor};
  position: relative;
  margin-bottom: 100px;

  &::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 5px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);

    @media ${theme.media.mobile} {
      bottom: -20px;
    }
  }
`