import { createGlobalStyle } from "styled-components"

export const GlobalStyleLight = createGlobalStyle`
  :root {
    --color-white: #fff;
  }
  body {
    background-color: #fff;
  }
`

export const GlobalStyleDark = createGlobalStyle`
  body {
    background-color: black;
    color: white;
  }
`
