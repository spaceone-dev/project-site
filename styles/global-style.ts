import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html{
        font-size: 10px;
        font-family: 'Work Sans', sans-serif;
    }
`;
