import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        &, &.light-mode{
            --bg-gradient: linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%);

            --color-text-light: #09153eff;
            --color-text-dark: #ffffff;
            --color-text-neutral: #6d7077;


            --color-neutral-0: #fbfdfeff;
            --color-neutral-100: #d6e2f5ff;
            --color-neutral-200: #edededff;
            --color-neutral-300: #c7c7c7ff;       
        }

        &.dark-mode {
            --bg-gradient: linear-gradient(180deg, #040918 0%, #091540 100%);

            --color-text-light: #ffffff;
            --color-text-dark: #09153eff;
            --color-text-neutral: #b0b4c0;

            --color-neutral-0: #212636ff;
            --color-neutral-100: #09153eff;
            --color-neutral-200: #2f364bff;
            --color-neutral-300: #545969ff;     
        }

        --color-red-400: #f25c54ff;
        --color-red-500: #de473fff;
        --color-red-700: #c7221aff;

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

    button:has(svg){
        line-height: 0;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    h1,h2,h3,h4,h5,h6{
        overflow-wrap: wrap;
        hyphens: auto;
    }

    img{
        max-width: 100%;
    }

`;

export default GlobalStyles;
