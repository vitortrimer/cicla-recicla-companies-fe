import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }

  body {
    font-size: 14px;
    min-height: 100vh !important;
    font-family: 'Montserrat', sans-serif !important;

    background: #F8F8F8 !important;
  }

  h3 {
    font-family: 'Elsie Swash Caps', cursive;
    
    color: #338152;
    font-size: 32px !important;
    font-weight: 900 !important;
  }
`