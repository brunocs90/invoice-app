import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
    *:before,
    *:after {
        box-sizing:border-box
    }
    body {
        background: ${({ theme }) => theme.body.bg};
        font-family: Spartan, sans-serif;
        font-weight:500;
        font-size:0.75rem;
        color:${({ theme }) => theme.body.color};
    }

    address {
        font-style:normal
    }

    .sr-only {
        border: 0px;
        clip: rect(0px, 0px, 0px, 0px);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px;
        white-space: nowrap;
        overflow-wrap: normal;
    }
`;
