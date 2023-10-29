import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Poppins', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.primaryFontColor};
  }
   
  a {
    text-decoration: none;
    color: #FFF;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-color: purple;
    border: none;
  }
  
  section:nth-of-type(even) {
  background-color: ${theme.colors.secondaryBg};
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }
`