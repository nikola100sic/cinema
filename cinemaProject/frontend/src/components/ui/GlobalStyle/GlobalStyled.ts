import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body::before {
    content: '';
    position: fixed;
    top: -724px;
    left: 0;
    right: 0;
    bottom: -6px;
    background-image: url(/movie.jpg);
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: -1;
    filter: brightness(60%) blur(7px);

  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    overflow-x: hidden;
  }
`;
