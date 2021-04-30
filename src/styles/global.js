import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
      * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
  #root{

    a{
      text-decoration: none;
    }
  }


  html, body {

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

  .Toastify__toast-container {
    font-size:1.2rem;
  }
`;

export default GlobalStyles;
