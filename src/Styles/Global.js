import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
    }
    html, body, #root, .App {
        height: 100%;
        background-color: #aaa;
        color: black;
        font-family: 'Poppins', sans-serif;
    }
`;
