import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  *::after, *::before {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;
