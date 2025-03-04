import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyles = createGlobalStyle<DefaultTheme>`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--mvl-font-family), sans-serif;
    font-weight: var(--mvl-font-weight-regular);
    line-height: var(--mvl-line-height);
    background-color: var(--mvl-color-white);
    color: var(--mvl-color-black);
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    font: inherit;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;
