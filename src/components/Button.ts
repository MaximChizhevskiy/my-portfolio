import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
  width: 200px;
  height: 60px;
  flex-shrink: 0;
  background: ${theme.colors.accent};
  border-radius: 83px;
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;  
  cursor: pointer;
  
  :hover {
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  }
`