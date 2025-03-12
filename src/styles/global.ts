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

  button {
    font: inherit;
    border: none;
    cursor: pointer;
  }
  
  @-moz-document url-prefix() {
      scrollbar-color: var(--mvl-color-red) var(--mvl-color-gray-foreground);
      scrollbar-width: thin;
  }
  
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
      ::-webkit-scrollbar {
          width: var(--mvl-space-4);
          height: var(--mvl-space-4);
      }

      ::-webkit-scrollbar-track {
          background: var(--mvl-color-gray-background);
      }

      ::-webkit-scrollbar-thumb {
          background: var(--mvl-color-red);
      }
  }
`;

export default GlobalStyles;
