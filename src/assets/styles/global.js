import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif; 
    font-size: 60%;
    @media (min-width: 700px) {
      font-size: 62.5%;
    }
  }
  body {
    background: #eee;
  }
  button,
  input {
    outline: 0;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;