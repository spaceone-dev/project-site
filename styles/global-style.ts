import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    html{
        font-size: 10px;
        font-family: 'Work Sans', sans-serif;
    }
    body{
        .markdown{
            color: white;
            font-family: Helvetica Neue;
            font-weight: 300;
            line-height: 150%;
            h1{
                font-size: 3.6rem;
            }
            h2{
                font-size: 3rem;
            }
            h3{
                font-size: 2rem;
            }
            li {
                padding-left: 2rem;
                font-size: 1.7rem;
                line-height: 140%;
            }
        }
    }
`;
