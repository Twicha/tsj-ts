import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
    }

    body{
        background-color: ${({ theme }) => theme.colors.background};
        overflow-y: scroll;
        transition: background-color 0.5s;
    }

    button {
        background: transparent;
        border: none;
        outline: none;
    }

    /* html, body, #root, .App {
        height: 100%;
    } */

    .text {
        color: ${({ theme }) => theme.colors.text};
        transition: color 0.5s;
    }

    .pale-text {
        color: grey;
        transition: color 0.5s;
    }
`;
