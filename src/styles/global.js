import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  #root{
    display: flex;
    justify-content:center;
    a{
      text-decoration: none;
    }
  }


  html, body {
    height: 100%;
    font-size: 62.5%;
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }


  h1, h2, h3, h4, h5, h6 {
    font-weight: 600
  }

  body, input, textarea, button, select, option {
    font-family: 'Open Sans', sans-serif;

  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
