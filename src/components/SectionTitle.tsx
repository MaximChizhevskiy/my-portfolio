import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  font-family: Poppins,sans-serif;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  color: ${theme.colors.titlesColor};
  position: relative;
  margin-bottom: 100px;
  
  &::before{
    content: "";
    display: inline-block;
    width: 55px;
    height: 5px;
    background-color: ${theme.colors.accent};
    
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
  }
`