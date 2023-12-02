import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Footer = styled.footer`
  background-color: #0F1624;
  color: #FFF;
  padding-top: 45px;
  padding-bottom: 65px;
`

const ContentBlock = styled.div`
    @media ${theme.media.mobile} {
      margin: 15px;
    }
`

const Text = styled.p`
  margin: 0 auto;   
`

export const S = {
    Footer,
    Text,
    ContentBlock
}