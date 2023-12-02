import styled from "styled-components";
import {theme} from "../../styles/Theme";

const SocialsIcons = styled.div<{isFooter?: boolean}>`
  display: flex;
  justify-content: space-between;
  vertical-align: center;
  min-width: 150px;

  @media ${theme.media.tablet} {
    display: ${({isFooter}) => (isFooter ? 'flex' : 'none')};
  }
`;

const Link = styled.a`
  :hover {
    color: ${theme.colors.accent};
    transform: translateY(-4px);
    cursor: pointer;
  }
`
export const S = {
    SocialsIcons,
    Link
}