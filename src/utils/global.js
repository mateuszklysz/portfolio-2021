import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *, *::after, *::before {
      margin: 0;
      padding: 0;
    }
    body,html{
      box-sizing: border-box;
      background-color:${({ theme: { color } }) => color.primary};
      font-family:${({
        theme: {
          font: { family },
        },
      }) => family.openSans}
    }
    input,
    textarea,
    button,
    select,
    AniLink,
    p,
    a {
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      user-select: none;
    }
`;

export default GlobalStyle;
