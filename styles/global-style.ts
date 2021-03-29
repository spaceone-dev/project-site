import {createGlobalStyle} from 'styled-components';
import {reset} from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  :focus {
    outline: none;
    border: none;
  }

  html {
    font-size: 10px;
    font-family: 'Work Sans', sans-serif;
  }

  body {
    .release-note {
      background-color: #1c1e21;
    }

    .markdown {
      font-weight: 400;
      color: white;
      font-family: Helvetica Neue;
      line-height: 150%;

      h1 {
        font-size: 3.6rem;
        padding: 0.5rem;
        border-bottom: 1px solid #5F616D;
        margin-bottom: 1.5rem;
        font-weight: 400;
      }

      h2 {
        font-size: 2.8rem;
        padding: 0.1rem;
        border-bottom: 1px solid #5F616D;
        margin: 1.5rem 0;
      }

      h3 {
        margin-top: 1.5rem;
        font-size: 2rem;
      }

      li {
        padding-left: 2rem;
        font-size: 1.7rem;
        line-height: 200%;
        font-weight: 300;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.7rem;
        line-height: 140%;
        font-weight: 300;
        margin-bottom: 1rem;
      }

      tr {
        font-size: 2rem;
        line-height: 140%;
        border: 1px solid #5F616D;
      }

      td {
        padding: 0.5rem 2rem;
        font-size: 1.7rem;
        line-height: 140%;
        border: 1px solid #5F616D;
        font-weight: 300;
      }

      th {
        padding: 1rem 2rem;
        font-size: 1.7rem;
        line-height: 140%;
        border: 1px solid #5F616D;
      }
    }
  }
`;
