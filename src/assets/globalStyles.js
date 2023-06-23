import { createGlobalStyle } from 'styled-components';
import { TYPEFACE_FONT_FACE } from './font-face';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: '${TYPEFACE_FONT_FACE}', sans-serif;
    -webkit-tap-highlight-color: transparent;
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
