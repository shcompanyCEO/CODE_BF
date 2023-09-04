import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    font-family: "Inter";
    font-size: 10px;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 10px;
  }
  body {
    overflow-y: scroll;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    padding: 0;
  }

 
`;
export default GlobalStyle;
