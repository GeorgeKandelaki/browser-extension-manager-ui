import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        &, &.light-mode{
            --bg-gradient: linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%);
        }

        &.dark-mode {
            --bg-gradient: linear-gradient(180deg, #040918 0%, #091540 100%);
        }

    }

    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        transition: background-color 0.3s, border 0.3s;
    }

    html {
        font-size: 62.5%;

    }

    body { 
        background: var(--bg-gradient);
        
        transition: color 0.3s, background-color 0.3s;
        min-height: 100vh;
        line-height: 1.5;
        font-size: 1.6rem;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    *:disabled {
        cursor: not-allowed;
    }

`;

export default GlobalStyles;
